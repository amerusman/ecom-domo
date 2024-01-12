<?php

namespace App\Http\Controllers;

use App\Events\searchEvent;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return Response
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
        event(new searchEvent($q));
        return view('search.index', compact('products'));
    }
}
