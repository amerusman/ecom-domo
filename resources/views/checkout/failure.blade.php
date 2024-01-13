@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-about divider">
                <div class="section-about__row checkout">
                    <div class="r1-title-wrapper">
                        <h1 class="h2 r1-title">{{ Trans::do('Checkout failed', 'checkout') }}</h1>
                        <h4 class="r1-subtitle"><span>{{ Trans::do('Something went wrong!', 'checkout') }}</span></h4>
                    </div>
                    <div class="checkout-notification">
                        <p>{{ Trans::__('checkout.failure_info', 'Unfortunately there was an error while processing your payment. Please try again.') }}</p>
                        @if(\Session::has('error'))
                            <p>{!! \Session::get('error') !!}</p>
                        @endif
                    </div>
                </div>


            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
