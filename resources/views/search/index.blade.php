@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-products divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title">{{ Trans::__('catalog', 'Catalog') }}</h2>
                    <h4 class="r1-subtitle"><span>{{ Trans::__('search') }}</span></h4>
                </div>

                @if($products->count())

                    @include('partials._products', ['hideFilter' => true])

                @else
                <div class="failded-search">
                    <h3>{{ Trans::__('search_failed') }}</h3>

                    <p>{{ Trans::__('search_try_more') }}</p>
                </div>

                @endif

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
