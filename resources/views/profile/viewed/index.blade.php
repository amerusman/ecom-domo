@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        @include('profile.partials.menu')

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-account divider r1-section-products">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><span>{{ Trans::__('profile.viewed_products', 'viewed products') }}</span></h2>
                </div>

                @include('partials._products', ['hideFilter' => true])


            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
