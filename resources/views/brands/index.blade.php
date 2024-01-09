@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-products brands divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title">{{ Trans::__('brands') }}</h2>
                </div>

                @foreach($brands as $brand)
                    <div class="products-brand">
                        <div class="r1-title-wrapper">
                            <h4 class="r1-subtitle"><span>{{ $brand->name }}</span></h4>
                        </div>
                        <div class="section-brands__brand-description">
                            <h4 class="brand-description__tagline">{{ $brand->tagline }}</h4>
                            <p class="brand-description__description">{{ $brand->description }}</p>
                        </div>

                        @include('partials._products', ['products' => $brand->products()->inRandomOrder()->limit(4)->get(), 'hideFilter' => true])

                        <div class="r1-section-products__load">
                            <a href="{{ route('brands.show', $brand->slug) }}" class="r1-button">{{ Trans::do('Show All') }}</a>
                        </div>
                    </div>
                @endforeach

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
