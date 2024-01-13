<?php

namespace App\Http\Controllers;

use App\Helpers\SiteHelper;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::where('active', 1)->has('products')->get();
        return view('categories.index', compact('categories'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $products = $category->products()
            ->with('categories')
            ->processRequest()
            ->paginate(SiteHelper::productsLimit());
        return view('categories.show', compact('category', 'products'));
    }
}
