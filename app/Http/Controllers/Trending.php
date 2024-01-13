<?php

namespace App\Http\Controllers;

use App\Helpers\SiteHelper;
use App\Models\Product;
use Illuminate\Http\Request;

class Trending extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $products = Product::trending()
            ->with('categories')
            ->processRequest()
            ->paginate(SiteHelper::productsLimit());
        return view('trending', compact('products'));
    }
}
