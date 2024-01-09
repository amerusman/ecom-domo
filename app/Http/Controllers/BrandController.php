<?php

namespace App\Http\Controllers;

use App\Helpers\SiteHelper;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $brands = Brand::where('active', 1)->get();
        return view('brands.index', compact('brands'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand)
    {
        $products = $brand->products()
            ->with('categories')
            ->processRequest()
            ->paginate(SiteHelper::productsLimit());
        return view('brands.show', compact('brand', 'products'));
    }
}
