@extends('layouts.app')
@section('title')
    {{ $product->brand->name }} {{ $product->name }}
@stop
@section('description')
    {{ $product->brief }}
@stop
@section('content')

<!-- .page-wrapper -->
<div class="page-wrapper r1-container">

    @include('partials.header')

    <!-- \.r1-breadcrumbs -->
<!--     <nav class="r1-breadcrumbs">
        <ul>
            <li><a href="/{{ app()->getLocale() }}">Home</a></li>
            <li><a href="{{ route('brands.show', $product->brand) }}">{{ $product->brand->name }}</a></li>
            @foreach($product->categories as $category)
                <li><a href="{{ route('category', $category) }}">{{ $category->name }}</a></li>
            @endforeach
            <li><a href="#">{{ $product->brand->name }} {{ $product->name }}</a></li>
        </ul>
    </nav> -->
    <!-- \.r1-breadcrumbs -->

    <!-- .r1-main -->
    <main class="r1-main">
        <section class="r1-section-single-product divider">
            <h2 class="product-code">{{ $product->sku }}</h2>
            <h1 class="product-title">{{ $product->brand->name }} {{ $product->name }}</h1>
            <div class="product-main-content product" data-id="{{ $product->id }}">
                <div class="product-main-content__image">
                    <i class="add-to-wishlist @if($product->is_favorite)added active @endif" data-action="favorites"></i>
                    @if($product->on_sale && $product->discount)
                        <span class="discount">-{{$product->discount}}%</span>
                    @endif
                    <div class="image-carousel">
                        @foreach($product->photos as $photo)
                        <div class="image-carousel__slide">
                            <img src="{{ $photo->show }}" alt="{{ $product->name }}" />
                        </div>
                        @endforeach
                    </div>
                    <div class="custom-pagination">
                        <span class="current">1</span>
                        <span>{{ Trans::__('product.of', 'of') }}</span>
                        <span class="all"></span>
                    </div>
                </div>
                <div class="product-main-content__description">
                    @if($product->in_stock)
                        <div class="stock in-stock">{{ Trans::__('product.in_stock', 'in stock') }}</div>
                    @else
                        <div class="stock out-stock">{{ Trans::__('product.out_of_stock', 'out of stock') }}</div>
                    @endif
                    <div class="rating">
                        <div class="stars stars-{{ $product->rating }}">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                        </div>
                        <div class="reviews">{{ $product->reviews()->count() }} {{ __('web.reviews') }}</div>
                    </div>
                    <div class="product-brief">
                        <h5>{{ $product->brief }}</h5>
                    </div>
                    @if($product->in_stock)
                        <form class="cart" action="javascript:void(null)">
                            <div class="attributes">
                                <div class="quantity">
                                    <label for="qty">{{ Trans::__('product.qty', 'Qty') }}</label>
                                    <button type="button" class="minus">-</button>
                                    <input id="qty" type="number" value="1" min="1" />
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="size">
                                    {{--
                                    <label for="size">Size</label>
                                    <select name="size" id="size">
                                        <option value="15">15 ml</option>
                                        <option value="50">50 ml</option>
                                        <option value="100">100 ml</option>
                                    </select>--}}
                                </div>
                            </div>

                            <div class="price">
                                @if($product->on_sale)
                                    <del><x-price class="currency">{{ $product->regular_price }}</x-price></del>
                                @endif
                                <ins><x-price class="currency">{{ $product->price }}</x-price></ins>
                            </div>

                            <div class="buttons">
                                <button class="buy-now" type="button" data-id="{{ $product->id }}" data-action="buy-now" data-location="{{ route('cart.index') }}">{{ Trans::__('product.buy', 'buy') }}</button>
                                <button class="add-to-cart" type="submit" data-id="{{ $product->id }}" data-action="add-to-cart">{{ Trans::__('product.add_to_cart', 'Add to cart') }}</button>
                            </div>
                        </form>
                    @else
                        <div class="outstock-product-container">
							<div class="notification">
								<p>{{ Trans::__('product.notify_me_stock', 'Notify me when the product is back in stock') }}</p>
							</div>
							<form class="mail-notification" action="">
								<input type="email" name="useremail" placeholder="Email">
								<button class="inform" type="submit">{{ Trans::__('product.inform_me', 'inform me') }}</button>
							</form>
							<div class="price">
                                @if($product->on_sale)
                                    <del><x-price class="currency">{{ $product->regular_price }}</x-price></del>
                                @endif
                                <ins><x-price class="currency">{{ $product->price }}</x-price></ins>
							</div>
						</div>
                    @endif
                </div>
            </div>
            <div class="product-tabs">
                <ul class="product-tabs__list">
                    <li class="active" data-tab="about">
                        <a href="javascript:;">{{ Trans::__('product.about_product', 'About product') }}</a>
                    </li>
                    <li data-tab="specifications">
                        <a href="javascript:;">{{ Trans::__('product.specifications', 'Specifications') }}</a>
                    </li>
                    <li data-tab="reviews">
                        <a href="javascript:;">{{ Trans::__('product.reviews', 'Reviews') }} {{ $product->reviews()->count() }}</a>
                    </li>
                </ul>
                <div class="product-tabs__content active" data-tab="about" style="display: block;">
                    {!! $product->description !!}
                </div>
                <div class="product-tabs__content" data-tab="specifications" style="display: none;">
                    <ul>
                        <li>
                            <p>{{ Trans::__('Brand') }}</p>
                            <p>{{ $product->brand->name }}</p>
                        </li>
                        @foreach($product->specifications as $key => $specification)
                            <li>
                                <p>{{ $specification['name'] }}</p>
                                <p>
                                    {{ $specification['value'] }}
                                    {{ $specification['unit'] }}
                                </p>
                            </li>
                        @endforeach
                    </ul>
                </div>
                <div class="product-tabs__content" data-tab="reviews" style="display: none;">
                    <div class="product-reviews">
                        @foreach($reviews as $review)
                        <div class="product-reviews__item">
                            <div class="product-reviews__item__meta">
                                <div class="author">{{ $review->name }}</div>
                                <div class="date">{{ $review->created_at->format("j M Y") }}</div>
                            </div>
                            <div class="product-reviews__item__main">
                                <img src="/img/default-user.svg" alt="reviewr" />
                                <div class="stars stars-{{ $review->rating }}">
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                </div>
                                <div class="text">
                                    <p>
                                        {{ $review->body }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    {{ $reviews }}
                    @auth()
                        @if(0 == auth()->user()->reviews()->where('product_id', $product->id)->count())
                        <div class="success" role="success-massage" style="display: none;">
                            <h5><span>{{ Trans::__('product.thank_you_for_review', 'Thank you for review. Review will appear after moderation.') }}</span></h5>
                        </div>
                    <form action="{{ route('profile.reviews.store') }}" method="POST" class="review-form divider" data-action="reviews.create">
                        @csrf
                        <input type="hidden" name="product_id" value="{{ $product->id }}">
                        <div class="alert alert-danger" style="display: none;"  role="alert">

                        </div>
                        <div class="stars">
                            <p>{{ __('web.general_impression') }}:</p>
                            <div class="stars-rating">
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                            </div>
                            <input id='review-rating' type="hidden" name="rating" />
                        </div>
                        <div class="form-row">
                            <textarea name="body" cols="30" rows="4" placeholder="{{ Trans::__('Description') }}" required></textarea>
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="{{ Trans::__('Your Name') }}" value="{{ auth()->user()->name }}" name="name" required />
                        </div>
                        <button type="submit" class="r1-button">{{ Trans::__('product.add_feedback', 'add feedback') }}</button>
                    </form>
                        @endif
                    @endauth
                </div>
            </div>
        </section>


        <section class="r1-section-products divider">
            <div class="r1-title-wrapper">
                <h4 class="r1-subtitle"><span>{{ Trans::__('product.last_viewed', 'Last viewed') }}</span></h4>
            </div>

            @includeWhen($lastViewedProducts, 'partials._products', ['products' => $lastViewedProducts, 'hideFilter' => true])


        </section>


        @include('partials.bottom')

    </main>
    <!-- \.r1-main -->

</div>
<!-- \.page-wrapper -->


@endsection
