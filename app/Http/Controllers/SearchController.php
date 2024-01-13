<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $q = $request->get('q');
        $products = Product::active()
            ->where(function ($query) use ($q) {
                $query->where('name', 'LIKE', "%$q%")
                    ->orWhere('description', 'LIKE', "%$q%");
            })
            ->latest()->paginate();
        return view('search.index', compact('products'));
    }
}
