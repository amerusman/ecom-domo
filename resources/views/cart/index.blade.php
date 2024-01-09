@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-shopping-cart">
                @if($products->count())
                <div class="r1-title-wrapper">
                    <h2 class="r1-title">{{ Trans::__('cart') }}</h2>
                    <h4 class="r1-subtitle"><span>{{ Trans::__('checkout.cart_delivert_info', 'Free Delivery for orders over 80&euro;') }}</span></h4>
                </div>
                <div class="section-shopping-cart-wrapper">
                    <div class="section-shopping-cart-items">
                    @foreach($products as $product)
                        <form class="cart-item product" data-id="{{ $product->id }}">
                            <div class="product-img">
                                @if($product->photos->first())
                                    <img src="{{ $product->photos->first()->preview }}" alt="{{ $product->name }}"/>
                                @endif
                            </div>
                            <div class="product-info">
                                <h5>{{ $product->name }}</h5>
                                <h6>{{ $product->brand->name }}</h6>
                                <div class="product-price">
                                    @if($product->on_sale)
                                    <del><x-price>{{ $product->regular_price }}</x-price></del>
                                    @endif
                                    <ins><x-price>{{ $product->price }}</x-price></ins>
                                </div>
                                <div class="attributes">
{{--                                    <div class="size">--}}
{{--                                        <label for="size">Size</label>--}}
{{--                                        <select name="size" id="size">--}}
{{--                                            <option value="15">15 ml</option>--}}
{{--                                            <option value="50">50 ml</option>--}}
{{--                                            <option value="100">100 ml</option>--}}
{{--                                        </select>--}}
{{--                                    </div>--}}
                                    <div class="quantity">
                                        <label for="cart_products_qty">{{ Trans::do('Qty', 'checkout') }}</label>
                                        <button type="button" class="minus" data-id="{{ $product->id }}">-</button>
                                        <input  type="number" value="{{ $product->quantity }}" min="1" readonly />
                                        <button type="button" class="plus" data-id="{{ $product->id }}">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-control">
                                <div class="product-control__total-price">
                                    <ins><x-price>{{ $product->amount }}</x-price></ins>
                                </div>
                                <div class="product-control__buttons">
                                    <button class="wish" type="button" data-action="favorites"></button>
                                    <button class="trash" type="button" data-action="cart-remove"></button>
                                </div>
                            </div>
                        </form>
                    @endforeach
                    </div>
                    <div class="section-shopping-cart-summary">
                        <div class="section-shopping-cart-summary__wrapper">
                            <h3>{{ Trans::do('Cart Summary', 'checkout') }}</h3>
                            <table class="order-summary">
                                <tbody>
                                    <tr class="subtotal">
                                        <th>{{ Trans::do('Subtotal', 'checkout') }}</th>
                                        <td>
                                            <span class="price-amount" role="subtotal">
                                                <bdi>
                                                    <x-price class="currency-symbol">{{ Cart::untaxedSubtotal() }}</x-price>
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                    @if(Cart::discount())
                                    <tr class="sale">
                                        <th>{{ Trans::do('Sale', 'checkout') }}</th>
                                        <td>
                                            <span class="sale-amount" role="discount">
                                                <bdi>
                                                    &ndash; <x-price class="currency-symbol">{{ Cart::discount() }}</x-price>
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                    @endif

                                    <tr class="delivery">
                                        <th>{{ Trans::do('Delivery', 'checkout') }}</th>
                                        <td>
                                            <span class="price-amount" role="delivery">
                                                <bdi>
                                                    <x-price class="currency-symbol">{{ Cart::deliveryCost() }}</x-price>
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>

                                    <tr class="vat">
                                        <th>{{ Trans::do('vat', 'checkout') }}</th>
                                        <td>
                                            <span class="price-amount" role="vat">
                                                <bdi>
                                                    <x-price class="currency-symbol">{{ Cart::vat() }}</x-price>
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>

                                    @if(Cart::discountCoupon())
                                        <tr class="sale-coupon">
                                            <th>{{ Trans::do('Discount coupon', 'checkout') }}</th>
                                            <td>
                                            <span class="sale-coupon">
                                                <bdi>
                                                    &ndash; <x-price class="currency-symbol">{{ Cart::discountCoupon() }}</x-price>
                                                </bdi>
                                            </span>
                                            </td>
                                        </tr>
                                    @endif
                                </tbody>
                                <tfoot>
                                    <tr class="total">
                                        <th>{{ Trans::do('Total price (incl. tax)', 'checkout') }}</th>
                                        <td>
                                            <span class="price-amount" role="total">
                                                <bdi>
                                                    <x-price class="currency-symbol">{{ Cart::total() }}</x-price>
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <form action="{{ route('checkout.coupon.add') }}" method="POST">
                                @csrf
                                <input type="text" name="code" placeholder="{{ Trans::do('Discount code', 'checkout') }}" required>
                                <button class="r1-button apply" type="submit">{{ Trans::do('Apply', 'checkout') }}</button>
                            </form>
                            @include('partials._errors')
                            <div class="shopping-cart-summary-buttons">
                                <a href="{{ route('checkout.index') }}" class="r1-button" >{{ Trans::do('checkout', 'checkout') }}</a>
                                <a href="{{ route('products.index') }}">{{ Trans::do('Continue shopping', 'checkout') }}</a>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="r1-title-wrapper">
                        <h2 class="r1-title">{{ Trans::__('cart') }}</h2>
                        <h4 class="r1-subtitle"><span>{{ Trans::do('Cart is empty', 'checkout') }}</span></h4>
                    </div>
                @endif
                </div>
            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
