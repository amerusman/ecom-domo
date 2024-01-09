<span class="r1-popup__close">×
            <span>{{ Trans::do('close', 'checkout') }}</span>
        </span>

@if(Cart::quantity())
    <div class="r1-title-wrapper">
        <h3 class="r1-title">{{ Trans::do('My shopping cart', 'checkout') }}</h3>
        <!-- <p class="product-qty">{{ Cart::quantity() }} product</p> -->
    </div>

    <div class="r1-shopping-cart-details">
        @foreach(Cart::products() as $product)
            <div class="cart-item product" data-id="{{ $product->id }}">
                <div class="product-img">
                    @if($product->photos->first())
                        <img src="{{ $product->photos->first()->preview }}" alt="{{ $product->name }}">
                    @endif
                </div>
                <div class="product-info">
                    <h5>{{ $product->name }}</h5>
                    <h6>{{ $product->brand->name }}</h6>
                    <div class="product-price">
                        @if($product->on_sale)
                            <del>
                                <x-price>{{ $product->regular_price }}</x-price>
                            </del>
                        @endif
                        <ins>
                            <x-price>{{ $product->price }}</x-price>
                        </ins>
                    </div>
                    {{--                        <p class="format">Format: <span>100 ml 3.38 fl.oz</span></p>--}}
                    <p class="qty">QTY: <span>{{ $product->quantity }}</span></p>
                </div>
                <div class="product-control">
                    <i class="trash" type="button" data-action="cart-remove"></i>
                    <i class="wish" type="button" data-action="cart-favorites"></i>
                </div>
            </div>
        @endforeach
        <div class="total">
            <p>{{ Trans::do('Total price (incl. tax)', 'checkout') }}</p>
            <span class="price-amount">
                    <bdi>
                        <x-price class="currency-symbol">{{ Cart::total() }}</x-price>
                    </bdi>
                </span>
        </div>
    </div>
    <div class="shopping-cart-summary-buttons">
        <a href="{{ route('cart.index') }}"
           class="r1-button">{{ Trans::do('View my shopping cart', 'checkout') }}</a>
        <a href="{{ route('checkout.index') }}"
           class="r1-button">{{ Trans::do('Continue Checkout', 'checkout') }}</a>
    </div>
@else
    <div class="r1-title-wrapper">
        <h3 class="r1-title">{{ Trans::do('Cart is empty', 'checkout') }}</h3>
    </div>
@endif

