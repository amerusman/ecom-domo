<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\MediaUploadingTrait;
use App\Http\Requests\Admin\MassDestroyProductRequest;
use App\Http\Requests\Admin\StoreProductRequest;
use App\Http\Requests\Admin\UpdateProductRequest;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Country;
use App\Models\Feature;
use App\Models\Product;
use App\Models\Tag;
use App\Models\Warehouse;
use Gate;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    use MediaUploadingTrait;

    public function index()
    {
        abort_if(Gate::denies('product_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $products = Product::with(['categories', 'tags', 'brand', 'media'])->get();

        return view('admin.products.index', compact('products'));
    }

    public function create()
    {
        abort_if(Gate::denies('product_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $features = Feature::all();

        $categories = Category::pluck('name', 'id');

        $tags = Tag::pluck('name', 'id');

        $brands = Brand::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');
        $countries = Country::where('active', 1)->with('currency')->get();
        $warehouses = Warehouse::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');
        $products = Product::where('is_kit', 0)->pluck('name', 'id');

        return view('admin.products.create', compact('brands', 'categories', 'tags', 'countries', 'features', 'warehouses', 'products'));
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->all());
        $product->categories()->sync($request->input('categories', []));
        $product->tags()->sync($request->input('tags', []));
        foreach ($request->input('photos', []) as $file) {
            $product->addMedia(storage_path('tmp/uploads/' . basename($file)))->toMediaCollection('photos');
        }

        if ($media = $request->input('ck-media', false)) {
            Media::whereIn('id', $media)->update(['model_id' => $product->id]);
        }

        return redirect()->route('admin.products.index');
    }

    public function edit(Product $product)
    {
        abort_if(Gate::denies('product_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $features = Feature::all();

        $categories = Category::pluck('name', 'id');

        $tags = Tag::pluck('name', 'id');

        $brands = Brand::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $product->load('categories', 'tags', 'brand');

        $countries = Country::where('active', 1)->with('currency')->get();
        $warehouses = Warehouse::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $products = Product::where('is_kit', 0)->where('id', '!=', $product->id)->pluck('name', 'id');

        return view('admin.products.edit', compact('brands', 'categories', 'product', 'tags', 'countries', 'features', 'warehouses', 'products'));
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->all());
        $product->categories()->sync($request->input('categories', []));
        $product->tags()->sync($request->input('tags', []));
        if (count($product->photos) > 0) {
            foreach ($product->photos as $media) {
                if (!in_array($media->file_name, $request->input('photos', []))) {
                    $media->delete();
                }
            }
        }
        $media = $product->photos->pluck('file_name')->toArray();
        foreach ($request->input('photos', []) as $file) {
            if (count($media) === 0 || !in_array($file, $media)) {
                $product->addMedia(storage_path('tmp/uploads/' . basename($file)))->toMediaCollection('photos');
            }
        }

        return redirect()->route('admin.products.index');
    }

    public function show(Product $product)
    {
        abort_if(Gate::denies('product_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product->load('categories', 'tags', 'brand', 'productReviews');

        return view('admin.products.show', compact('product'));
    }

    public function destroy(Product $product)
    {
        abort_if(Gate::denies('product_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product->delete();

        return back();
    }

    public function massDestroy(MassDestroyProductRequest $request)
    {
        Product::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeCKEditorImages(Request $request)
    {
        abort_if(Gate::denies('product_create') && Gate::denies('product_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $model         = new Product();
        $model->id     = $request->input('crud_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('upload')->toMediaCollection('ck-media');

        return response()->json(['id' => $media->id, 'url' => $media->getUrl()], Response::HTTP_CREATED);
    }
}
