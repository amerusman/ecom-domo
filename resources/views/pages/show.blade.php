@extends('layouts.app')
@section('content')

<!-- .page-wrapper -->
<div class="page-wrapper r1-container">

    @include('partials.header')

    <div class="r1-account-decorative-line"></div>
    <!-- .r1-main -->
    <main class="r1-main">
        <section class="section-about divider">
            <div class="section-about__row">
                <div class="r1-title-wrapper">
                    <h1 class="h2 r1-title">{{ $page->title }}</h1>
{{--                    <h4 class="r1-subtitle"><span>Organization</span></h4>--}}
                </div>
                <div class="text">
                    {!! $page->body !!}
                </div>
            </div>


        </section>

        @include('partials.bottom')

    </main>
    <!-- \.r1-main -->

</div>
<!-- \.page-wrapper -->

@endsection
