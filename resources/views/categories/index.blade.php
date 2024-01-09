@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-products categories divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title">{{ Trans::__('categories') }}</h2>
                </div>

                @foreach($categories as $category)
                    <div class="products-category">
                        <div class="r1-title-wrapper">
                            <h4 class="r1-subtitle"><span>{{ $category->name }}</span></h4>
                        </div>

                        @include('partials._products', ['products' => $category->products()->inRandomOrder()->limit(4)->get(), 'hideFilter' => true])

                        <div class="r1-section-products__load">
                            <a href="{{ route('category', $category->slug) }}" class="r1-button">{{ Trans::do('Show All') }}</a>
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
