@extends('layouts.app')
@section('content')
    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-login reset-password divider">
                <div class="r1-title-wrapper">
                    <h1 class="h2 r1-title">{{ Trans::__('reset_password_page') }}</h1>
                </div>

            <form method="POST" action="{{ route('password.request') }}">
                @csrf

                <div class="r1-title-wrapper">
                    <h5><span>{{ Trans::__('create_new_password') }}</span></h5>
                </div>

                <input name="token" value="{{ $token }}" type="hidden">

                <div>
                    <div class="form-group">
                        <label for="email">{{ trans('global.login_email') }} :</label>
                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                        @if($errors->has('email'))
                            <span class="text-danger">
                                {{ $errors->first('email') }}
                            </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="password">{{ Trans::__('new_password') }} :</label>
                        <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                        <span class="show-password-input"></span>

                        @if($errors->has('password'))
                            <span class="text-danger">
                                {{ $errors->first('password') }}
                            </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="password-confirm">{{ trans('global.login_password_confirmation') }} :</label>
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    </div>
                </div>
                <button type="submit" class="r1-button">{{ Trans::__('continue') }}</button>

            </form>

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
