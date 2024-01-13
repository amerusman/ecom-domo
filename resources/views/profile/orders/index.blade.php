@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        @include('profile.partials.menu')

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-account divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><span>{{ Trans::__('profile.my_orders', 'My orders') }}</span></h2>
                </div>

                @if($orders->count())
                    @foreach($orders as $order)
                        <div class="r1-order-info-review-wrapper">
                            <div class="r1-order-info-wrapper">
                                <div class="order-additional-info order-{{ $order->status }}">
                                    <img src="/img/{{ $order->status }}.png" alt="{{ $order->status }}">
                                    <div class="order-number-date-process">
                                        <div class="order-number-date">
                                            <span> № {{ $order->id }}</span>
                                            <time class="entry-date" datetime="">{{ $order->paid_at->format("M d, Y") }}</time>
                                        </div>
                                        <div class="order-process order-processing">{{ $order->status }}</div>
                                    </div>
                                </div>
                                <div class="order-price">
                                    <p class="order-price-message">{{ Trans::do('order price', 'profile') }}</p>
                                    <div class="order-price-qty">
                            <span href="price-amount">
                                <bdi>
                                    <span class="currency-symbol">{!! $order->currency->sign !!} </span>{{ $order->total }}
                                </bdi>
                            </span>
                                        <p class="order-qty-products">for {{ count($order->items) }} items</p>
                                    </div>
                                </div>
                                <div class="account-btn view">
                        <span>
                            <i>{{ Trans::do('view', 'profile') }}</i>
                            <svg width="15" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.2071 1.03247L6.75209 6.89026L1.29706 1.03247" stroke="#b0907b"/>
							</svg>
                        </span>
                                </div>
                            </div>
                            <div class="order-review" style="display:none;">
                                <table class="review-order-table">
                                    <thead>
                                    <tr>
                                        <th class="product-name">{{ Trans::__('profile.product_name') }}</th>
                                        <th class="product-qty">{{ Trans::__('product.qty') }}</th>
                                        <th class="product-total">{{ Trans::__('profile.total') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($order->items as $item)
                                        <tr class="cart-item">
                                            <td class="product-name">
                                                <span>{{ $item['sku'] }}</span> {{ isset($item['name']) ? $item['name'] : '' }}
                                            </td>
                                            <td class="product-qty">x {{ $item['quantity'] }};</td>
                                            <td class="product-total">
                                                <span class="price-amount">
                                                    <bdi>
                                                        <span class="currency-symbol">{!! $order->currency->sign !!} </span>{{ $item['amount'] }}
                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    <tfoot>
                                    <tr class="cart-subtotal">
                                        <th>{{ Trans::__('checkout.subtotal') }}</th>
                                        <td colspan="2">
                                    <span class="price-amount">
                                        <bdi>
                                            <span class="currency-symbol">{!! $order->currency->sign !!} </span>{{ $order->sub_total }}
                                        </bdi>
                                    </span>
                                        </td>
                                    </tr>
                                    <tr class="shipping">
                                        <th>{{ Trans::__('checkout.delivery') }}</th>
                                        <td colspan="2">
                                        <span class="price-amount">
                                            <bdi>
                                                <span class="currency-symbol">{!! $order->currency->sign !!} </span>{{ $order->shipping_total }}
                                            </bdi>
                                        </span>
{{--                                            <span class="flat-rate">via Flat rate</span>--}}
                                        </td>
                                    </tr>
                                    @if($order->discount_total)
                                    <tr class="shipping">
                                        <th>{{ Trans::__('checkout.discount_coupon') }}</th>
                                        <td colspan="2">
                                            <span class="price-amount">
                                                <bdi>
                                                    &ndash; <span class="currency-symbol">{!! $order->currency->sign !!} </span>{{ $order->discount_total }}
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                    @endif

                                    <tr class="payment-method">
                                        <th>{{ Trans::__('checkout.payment_method', 'payment method') }}</th>
                                        <th colspan="2">
                                            {{ $order->paymentMethod }}
                                        </th>
                                    </tr>
                                    <tr class="order-total">
                                        <th>{{ Trans::__('checkout.total') }}</th>
                                        <td colspan="2">
                                    <span class="price-amount">
                                        <bdi>
                                            <span class="currency-symbol">{!! $order->currency->sign !!} </span>{{ $order->total }}
                                        </bdi>
                                    </span>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                                <div class="order-adress-wrapper">
                                    <div class="billing-adress">
                                        <h3>{{ Trans::do('billing address', 'profile') }}</h3>
                                        @if($order->billing)
                                        <p>{{ $order->billing['address_1'] }} {{ $order->billing['address_2'] }}</p>
                                        <p>{{ $order->billing['city'] }}, {{ $order->billing['state'] }}, {{ $order->billing['zip'] }}</p>
                                        <p>{{ \App\Models\Country::find($order->billing['country_id'])->name }}</p>
                                        <p>{{ $order->billing['phone'] }}</p>
                                        @endif
                                    </div>
                                    <div class="shipping-adress">
                                        <h3>{{ Trans::do('shipping address', 'profile') }}</h3>
                                        <p>{{ $order->shipping['address_1'] }} {{ $order->shipping['address_2'] }}</p>
                                        <p>{{ $order->shipping['city'] }}, {{ $order->shipping['state'] }}, {{ $order->shipping['zip'] }}</p>
                                        <p>{{ $order->country->name }}</p>
                                        <p>{{ $order->shipping['phone'] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <div class="r1-order-empty-wrapper">
                        <div class="order-empty-info">
                            <div class="order-empty-info-message">
                                <img src="/img/info.png" alt="info">
                                {{ Trans::__('profile.no_orders_has_been_made', 'No orders has been made yet.') }}
                            </div>
                            <a class="btn-browse-products" href="{{ route('products.index') }}">{{ Trans::__('browse_products', 'browse products') }}</a>
                        </div>
                    </div>
                @endif

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
