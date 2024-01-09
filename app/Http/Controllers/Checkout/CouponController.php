<?php

namespace App\Http\Controllers\Checkout;

use App\Http\Controllers\Controller;
use App\Http\Requests\Checkout\AddCouponRequest;
use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function add(AddCouponRequest $request)
    {
        $code = $request->input('code');

        $coupon = Coupon::where('active', 1)->where('code', $code)->first();
        if($coupon) {
            \Cart::addCoupon($coupon);
            return back();
        }
        else {
            return back()->withErrors(['msg' => \Trans::__('checkout.coupon_invalid', 'coupon code invalid')]);
        }

    }
}
