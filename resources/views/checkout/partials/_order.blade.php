<div class="section-checkout-order">
    <div class="section-checkout-order__wrapper">
        <h3>{{ Trans::do('Order Summary', 'checkout') }}</h3>
        <div class="r1-products">
            @foreach($products as $product)
                <div class="r1-product">
                    <div class="product__image">
                        @if($product->photos->first())
                            <img src="{{ $product->photos->first()->preview }}" alt="{{ $product->name }}"/>
                        @endif
                    </div>
                    <div class="product__content">
                        <h5>{{ $product->name }}</h5>
                        <h6>{{ $product->brand->name }}</h6>
                        <div class="product-price">
                            <ins><span>{!! Site::currency()->sign !!}</span>{{ $product->amount }}</ins>
                        </div>
                    </div>
                    <div class="product__qty">
                        <span>x {{ $product->quantity }}</span>
                    </div>
                </div>
            @endforeach
        </div>
        <form action="{{ route('checkout.coupon.add') }}" method="POST">
            @csrf
            <input type="text" name="code" placeholder="{{ Trans::do('Discount code', 'checkout') }}" required>
            <button class="r1-button apply" type="submit">{{ Trans::do('Apply', 'checkout') }}</button>
        </form>
        @include('partials._errors')
        <table class="order-summary">
            <tbody>
            <tr class="subtotal">
                <th>{{ Trans::do('Subtotal', 'checkout') }}</th>
                <td>
                    <span class="price-amount">
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
                    <span class="sale-amount">
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
                    <span class="price-amount">
                        <bdi>
                            <x-price class="currency-symbol">{{ Cart::deliveryCost() }}</x-price>
                        </bdi>
                    </span>
                </td>
            </tr>
            <tr class="vat">
                <th>{{ Trans::do('vat', 'checkout') }}</th>
                <td>
                    <span class="price-amount">
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
                    <span class="price-amount">
                        <bdi>
                            <x-price class="currency-symbol">{{ Cart::total() }}</x-price>
                        </bdi>
                    </span>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</div>
