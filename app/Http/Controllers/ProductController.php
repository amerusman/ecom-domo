<?php

namespace App\Http\Controllers;

use App\Events\AnalyticsEvent;
use App\Events\ViewItemEvent;
use App\Helpers\SiteHelper;
use App\Models\Feature;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {

        $products = Product::with('categories')
            ->processRequest()
            ->paginate(SiteHelper::productsLimit());
//        dump($model->toSql());
        return view('products.index', compact('products'));
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Response
     */
    public function show(Product $product)
    {
        $lastViewed = SiteHelper::lastViewedProducts($product->id);
        unset($lastViewed[$product->id]);
        if ($lastViewed) {
            $lastViewedProducts = Product::whereIn('id', $lastViewed)->limit(4)->get();
        } else {
            $lastViewedProducts = [];
        }

        $features = Feature::all()->keyBy('key');
        $reviews = $product->reviews()->paginate(5);
        event(new AnalyticsEvent($product));
        return view('products.show', compact('product', 'lastViewedProducts', 'features', 'reviews'));
    }
}
