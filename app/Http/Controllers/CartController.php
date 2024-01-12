<?php

namespace App\Http\Controllers;

use App\Events\checkOutEvent;
use Cart;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $products = Cart::products();
        event(new checkOutEvent($products,'view_cart'));
        return view('cart.index', compact('products'));
    }

    public function bulkAdd(Request $request)
    {
        $productIds = $request->input('products');

        Cart::add($productIds);

        return $this->response();
    }

    public function add(Request $request)
    {
        $productId = intval($request->input('id'));
        $qty = intval($request->input('qty', 1));

        Cart::add($productId, $qty);

        return $this->response();
    }

    protected function response(): JsonResponse
    {
        return response()->json(
            [
                'status' => 1,
                'count' => Cart::quantity(),
                'subtotal' => Cart::untaxedSubtotal(),
                'discount' => round(Cart::discount(), 2),
                'vat' => Cart::vat(),
                'total' => Cart::total(),
                'delivery' => Cart::deliveryCost(),
                'content' => view('partials._cart')->render(),
            ]
        );
    }

    public function remove(Request $request)
    {
        $productId = intval($request->input('id'));

        Cart::remove($productId);

        $result = [
            'status' => 1,
            'count' => Cart::quantity(),
            'total' => Cart::total(),
            'subtotal' => Cart::untaxedSubtotal(),
        ];

        if (0 == Cart::quantity()) {
            $result['content'] = view('partials._cart')->render();
        }

        return response()->json($result);
    }

}
