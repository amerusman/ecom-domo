@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        @auth()
            @include('profile.partials.menu')
        @endauth
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-wishlist divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title">{{ Trans::__('profile.wish_list', 'wish list') }}</h2>
                    <h4 class="r1-subtitle"><span>{{ Trans::__('profile.saved_favorites', 'Saved favorites') }}</span></h4>
                </div>
                @if($products->count())
                <form class="section-wishlist-items" action="{{ route('cart.bulk-add') }}" method="post" autocomplete="off" data-action="cart.bulk-add">
                    @csrf
                    @foreach($products as $product)
                        <input type="hidden" name="products[]" value="{{ $product->id }}">
                    <div class="wishlist-item product">
						<a href="{{ route('products.show', $product) }}" class="product-img">
                            @if($product->photos->first())
                                <img src="{{ $product->photos->first()->preview }}" alt="product">
                            @endif
						</a>
						<div class="product-info">
							<div class="product-info__name">
								<a href="{{ route('products.show', $product) }}">
									<h5>{{ $product->name }}</h5>
								</a>
								<h6>{{ $product->brand->name }}</h6>
							</div>

							<div class="product-info__price">
                                @if($product->on_sale)
								<del><span>{!! Site::currency()->sign !!}</span>{{ $product->regular_price }}</del>
                                @endif
								<ins><span>{!! Site::currency()->sign !!}</span>{{ $product->price }}</ins>
							</div>
						</div>
						<div class="product-control">
							<div class="product-control__stock-status">
                                @if($product->in_stock)
								    <p class="stock-status in-stock">{{ Trans::__('in_stock', 'In stock') }}</p>
                                @else
                                    <p class="stock-status out-stock">{{ Trans::__('out_of_stock', 'Out of stock') }}</p>
                                @endif
							</div>
							<div class="product-control__buttons">
								<button class="button-trash" type="button" value="{{ $product->id }}" title="{{ Trans::__('remove', 'Remove') }}" data-action="wishlist-remove"></button>
                                @if($product->in_stock)
								<button class="button-cart" type="button" value="{{ $product->id }}" title="{{ Trans::__('profile.add_to_cart', 'add to cart') }}" data-action="wishlist-to-cart"></button>
                                @endif
							</div>
						</div>
					</div>
                    @endforeach
					<button type="submit" class="r1-button" name="favorite-action" value="all" title="{{ Trans::__('profile.add_all_to_cart', 'add all to cart') }}">{{ Trans::__('profile.add_all_to_cart') }}</button>
                </form>
                @endif
            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
