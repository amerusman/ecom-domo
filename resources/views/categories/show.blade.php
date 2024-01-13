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
                    <h4 class="r1-subtitle"><span>{{ $category->name }}</span></h4>
                </div>

                @include('partials._products')

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
