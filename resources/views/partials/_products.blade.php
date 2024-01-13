@if(!isset($hideFilter) || !$hideFilter)
    <form role="products-order">
        <div class="r1-section-products__filter">
            <div class="filter">
                <span>Filter</span>
                <select class="order" name="order-by" id="order-by">
                    <option value="">{{ Trans::__('sort_by_newest', 'By newest') }}</option>
                    <option value="rating" @if(request()->get('order-by') == 'rating') selected @endif>{{ Trans::__('sort_by_rating', 'By rating') }}</option>
                    <option value="price" @if(request()->get('order-by') == 'price') selected @endif>{{ Trans::__('sort_by_price', 'By price') }}</option>
                </select>
            </div>
            <div class="per-page">
                <span>{{ Trans::do('Items per page') }}</span>
                <select class="count" name="limit" id="limit">
                    <option value="16">16</option>
                    <option value="20" @if(request()->get('limit') == 20) selected @endif>20</option>
                    <option value="24" @if(request()->get('limit') == 24) selected @endif>24</option>
                </select>
            </div>

        </div>
    </form>
@endif

<div class="r1-products">
    @foreach($products as $product)
        <div class="r1-product product" data-id="{{ $product->id }}">
            <div class="r1-product__header">
                <i class="add-to-wishlist @if($product->is_favorite)added active @endif" data-action="favorites"></i>
                @if($product->on_sale && $product->discount)
                        <span class="discount">-{{$product->discount}}%</span>
                @endif
            </div>
            <a href="{{ route('products.show', $product) }}" class="r1-product__image">
                @if($product->photos->first())
                    <img src="{{ $product->photos->first()->preview }}" alt="{{ $product->name }}"/>
                @endif
            </a>
            <div class="r1-product__rating rating_{{ $product->rating }}">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            <a href="{{ route('products.show', $product) }}" class="r1-product__content">
                <h5>{{ $product->name }}</h5>
                <h6>{{ $product->categories->implode('name', ', ') }}</h6>
            </a>
            <div class="product__price">
                @if($product->on_sale)
                <del>
                    <x-price>{{ $product->regular_price }}</x-price>
                </del>
                @endif
                <ins>
                    <x-price>{{ $product->price }}</x-price>
                </ins>
            </div>
            @if($product->in_stock)
                <a href="#" class="r1-product__button" data-action="add-to-cart"></a>
            @else 
                <a href="{{ route('products.show', $product) }}" class="r1-product__view-button"></a>
            @endif
        </div>
    @endforeach

</div>

@if(!isset($hideFilter) || !$hideFilter)
{{ $products }}
@endif
