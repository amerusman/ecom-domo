<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Block;
use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class Index extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $products = Product::active()->with('categories')->orderBy('position')->latest()->where('showcase', 1)->get();
        $mainProduct = Product::active()->where('main', 1)->inRandomOrder()->first();

        if ($mainProduct)
        {
            $text = $mainProduct->name;
            list($mainProductLine1, $mainProductLine2) = $this->splitText($text);
            if (isset($mainProduct->data['main']) && isset($mainProduct->data['main'][app()->getLocale()])) {
                list($mainRightLine1, $mainRightLine2) = $this->splitText($mainProduct->data['main'][app()->getLocale()]);
            }
            else {
                $block = Block::firstOrCreate(
                    ['slug' => 'product-on-home-title'],
                    [
                        'name' => 'product-on-home-title',
                        'body' => 'decisive looks',
                    ]
                );
                list($mainRightLine1, $mainRightLine2) = $this->splitText(strip_tags($block->body));
            }

        }
        else {
            $mainProductLine1 = null;
            $mainProductLine2 = null;
            $mainRightLine1 = null;
            $mainRightLine2 = null;
        }

        $banners = Banner::where('active', 1)->orderBy('position')->get();

        return view('index', compact( 'products', 'mainProduct', 'mainProductLine1', 'mainProductLine2', 'mainRightLine1', 'mainRightLine2', 'banners'));
    }

    private function splitText($text) {
        if (substr_count($text, ' ')) {
            $a = explode(' ', $text);
            $a = array_chunk($a, ceil(count($a)/2));

            $mainProductLine1 = implode(' ', $a[0]);
            $mainProductLine2 = implode(' ', $a[1]);
        }
        else {
            $mainProductLine1 = $text;
            $mainProductLine2 = null;
        }
        return [$mainProductLine1, $mainProductLine2];
    }
}
