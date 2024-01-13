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
                        <h1 class="h2 r1-title">{{ Trans::do('Checkout success', 'checkout') }}</h1>
                        {{--                    <h4 class="r1-subtitle"><span>Organization</span></h4>--}}
                        <h4 class="r1-subtitle"><span>{{ Trans::do('Thank you for your purchase!', 'checkout') }}</span></h4>
                    </div>
                    <div class="checkout-notification">
                        <h3>Your order is {{ $orderId }}</h3>
                        <p>{{ Trans::__('checkout.success_info', 'You will receive an order confirmation email with details of your order and tracking info.') }}</p>
                    </div>
                </div>


            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
