@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        @include('profile.partials.menu')

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-address divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title">{{ Trans::__('profile.address', 'address') }}</h2>
                    <h4 class="r1-subtitle"><span>{{ Trans::__('profile.additional_address', 'additional address') }}</span></h4>
                </div>
                <form method="POST" action="{{ route('profile.addresses.store') }}">
                    @csrf
                    @include('profile.addresses.partials._form')
                </form>
            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
