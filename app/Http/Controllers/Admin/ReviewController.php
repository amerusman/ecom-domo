<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MassDestroyReviewRequest;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Models\Product;
use App\Models\Review;
use App\Models\User;
use Gate;
use Symfony\Component\HttpFoundation\Response;

class ReviewController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('review_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $reviews = Review::with(['product', 'user', 'language'])->get();

        return view('admin.reviews.index', compact('reviews'));
    }

    public function create()
    {
        abort_if(Gate::denies('review_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $products = Product::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $users = User::pluck('email', 'id')->prepend(trans('global.pleaseSelect'), '');

        return view('admin.reviews.create', compact('products', 'users'));
    }

    public function store(StoreReviewRequest $request)
    {
        $review = Review::create($request->all());

        return redirect()->route('admin.reviews.index');
    }

    public function edit(Review $review)
    {
        abort_if(Gate::denies('review_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $products = Product::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $users = User::pluck('email', 'id')->prepend(trans('global.pleaseSelect'), '');

        $review->load('product', 'user', 'language');

        return view('admin.reviews.edit', compact('products', 'review', 'users'));
    }

    public function update(UpdateReviewRequest $request, Review $review)
    {
        $review->update($request->all());

        $product = $review->product;
        $product->rating = $product->reviews()->avg('rating');
        $product->save();

        return redirect()->route('admin.reviews.index');
    }

    public function show(Review $review)
    {
        abort_if(Gate::denies('review_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $review->load('product', 'user', 'language');

        return view('admin.reviews.show', compact('review'));
    }

    public function destroy(Review $review)
    {
        abort_if(Gate::denies('review_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $review->delete();

        return back();
    }

    public function massDestroy(MassDestroyReviewRequest $request)
    {
        Review::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
