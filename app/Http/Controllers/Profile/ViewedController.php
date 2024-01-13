<?php

namespace App\Http\Controllers\Profile;

use App\Helpers\SiteHelper;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ViewedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lastViewed = SiteHelper::lastViewedProducts();
        if ($lastViewed) {
            $products = Product::whereIn('id', $lastViewed)->limit(24)->get();
        }
        else {
            $products = [];
        }
        return view('profile.viewed.index', compact('products'));
    }
}
