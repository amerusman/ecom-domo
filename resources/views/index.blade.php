@extends('layouts.app')
@section('content')

<!-- .page-wrapper -->
<div class="page-wrapper r1-container">

    @include('partials.header')
    <!-- <div class="r1-account-decorative-line"></div> -->
    <!-- .r1-main -->
    <main class="r1-main">
        <section class="r1-section-main">
            <div class="r1-section-main__header">
                @if($mainProduct)
                    <h1 class="h2 rotating-title-h1" data="main-title">
                        <span>{{ $mainProductLine1 }}</span>
                        <span>{{ $mainProductLine2 }}</span>
                    </h1>
                @endif
                @if($banners)
                    @foreach($banners as $banner)
                        <h1 class="h2 rotating-title-h1" data="main-title" style="display: none;">
                            <span>{{ $banner->left_line_1 }}</span>
                            <span>{{ $banner->left_line_2 }}</span>
                        </h1>
                    @endforeach
                @endif
                <div class="image">
                    @if($mainProduct)
                        <img src="{{ $mainProduct->photos->first()->main }}" alt="{{ $mainProduct->name }}" class="rotating-banner" />
                    @endif
                    @if($banners)
                        @foreach($banners as $banner)
                            <img src="{{ $banner->image->show }}" alt="{{ $banner->text }}" class="rotating-banner" />
                        @endforeach
                    @endif
                </div>
                @if($mainProduct)
                    <h2 class="rotating-title-h2" data="main-title">
                        <span>{{ $mainRightLine1 }}</span>
                        <span> {{ $mainRightLine2 }}</span>
                    </h2>
                @endif
                @if($banners)
                    @foreach($banners as $banner)
                        <h2 class="rotating-title-h2" data="main-title" style="display: none;">
                            <span>{{ $banner->right_line_1 }}</span>
                            <span>{{ $banner->right_line_2 }}</span>
                        </h2>
                    @endforeach
                @endif
            </div>

            @if($mainProduct)
                <div class="r1-section-main__header-button">
                    <a href="javascript:;" class="r1-popup-trigger" data-popup="info">{{ Trans::__('read_more') }}</a>
                </div>
            @endif
        </section>


        <section class="r1-section-products divider">
            <div class="r1-title-wrapper">
                <h2 class="r1-title">{{ Trans::__('catalog', 'Catalog') }}</h2>
                <h4 class="r1-subtitle"><span>{{ Trans::__('all_products', 'All products') }}</span></h4>
            </div>

            @include('partials._products', ['hideFilter' => true])

            <div class="r1-section-products__load">
                <a href="{{ route('products.index') }}" class="r1-button more">
                    {{ Trans::__('show_all') }}</a>
            </div>
        </section>

        @include('partials.bottom')

    </main>
    <!-- \.r1-main -->
</div>
<!-- \.page-wrapper -->

<!-- .r1-popup-wrapper -->
@if($mainProduct)
<div class="r1-popup-wrapper" data-popup="info">
    <div class="r1-popup-overlay"></div>
    <div class="r1-popup product-popup" data-popup="info">
        <span class="r1-popup__close">×</span>
        <div class="r1-popup__content product" data-id="{{ $mainProduct->id }}">
            <div class="popup__image">
                <img src="{{ $mainProduct->photos->first()->main }}" alt="{{ $mainProduct->name }}" />
            </div>
            <h2 class="product-brand"><span>{{ $mainProduct->brand->name }}</span></h2>
            <h1 class="product-name">{{ $mainProduct->name }}</h1>
            <div class="product-info">
                {!! $mainProduct->description  !!}
            </div>
            <div class="product-control">
				<div class="product-control__price">
                    @if($mainProduct->on_sale)
                    <del>
                        <x-price>{{ $mainProduct->regular_price }}</x-price>
                    </del>
                    @endif
					<ins>
                        <x-price>{{ $mainProduct->price }}</x-price>
                    </ins>
				</div>
                @if($mainProduct->in_stock)
				    <a href="#" class="r1-product__button" data-action="add-to-cart"></a>
                @endif
				<a href="{{ route('products.show', $mainProduct) }}" class="r1-product__view-button"></a>
			</div>
        </div>
    </div>
</div>
@endif
<!-- \.r1-popup-wrapper -->

@endsection
