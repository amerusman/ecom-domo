@extends('layouts.app')
@section('content')
    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-login divider">
                <div class="r1-title-wrapper">
                    <h1 class="h2 r1-title">{{ Trans::do('Log in or create an account', 'auth') }}</h1>
                </div>
                <div class="r1-section-login__col login">
                    <h5><span>{{ __('global.login') }}</span></h5>
                    @if(session()->has('message'))
                        <p class="alert alert-info">
                            {{ session()->get('message') }}
                        </p>
                    @endif
                    <form action="{{ route('login') }}" method="POST">
                        @csrf
                        <div class="form-row">
                            <input id="email1" type="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" required autocomplete="email" autofocus placeholder="{{ __('global.login_email') }}" name="email" value="{{ old('email', null) }}">

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-row">
                            <input id="password1" type="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required placeholder="{{ __('global.login_password') }}">
                            <span class="show-password-input"></span>
                        </div>
                        <div class="form-row checkbox-wrapper">
                            <input type="checkbox" name="remember" id="remember">
                            <label for="remember">{{ __('global.remember_me') }}</label>
                            <button type="submit" class="r1-button" id="login" disabled="disabled">{{ Trans::do('Sign in to your account', 'auth') }}</button>
                            <div class="social-media-buttons">
                                <a href="{{ route('login.google') }}" class="google" type="button">{{ Trans::do('Login with Google', 'auth') }}</a>
                                <a href="{{ route('login.facebook') }}" class="facebook" type="button">{{ Trans::do('Login with Facebook', 'auth') }}</a>
                            </div>
                        </div>
                        <div class="form-row type-checkbox">
                            <a href="javascript:;" class="lost-password r1-popup-trigger" data-popup="lost-password">{{ __('global.forgot_password') }}</a>
                        </div>
                    </form>
                </div>
                <div class="r1-section-login__col registration">
                    <div class="registration-wrapper">
                        <form action="/">
                            <h5><span>{{ Trans::do('Dont have an account yet?', 'auth') }}</span></h5>
                            <button type="submit" class="r1-button create-account">{{ Trans::do('Create an account', 'auth') }}</button>
                        </form>
                    </div>
                    <div class="registration-wrapper">
                        <h5><span>{{ Trans::do('registration', 'auth') }}</span></h5>
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="form-row">
                                <input id="email2" type="email" name="email" placeholder="{{ __('global.login_email') }}" class="@error('email') is-invalid @enderror" value="{{ old('email') }}" required autocomplete="email" />
                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-row">
                                <input placeholder="{{ __('global.first_name') }}" type="text" class="input-text{{ $errors->has('firstname') ? 'is-invalid' : '' }}" name="firstname" id="firstname" autocomplete="given-name" value="{{ old('firstname') }}" required>
                                @error('firstname')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-row">
                                <input placeholder="{{ __('global.last_name') }}" type="text" class="input-text{{ $errors->has('lastname') ? 'is-invalid' : '' }}" name="lastname" id="lastname" autocomplete="family-name" value="{{ old('lastname') }}" required>
                                @error('lastname')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-row">
                                <input id="password2" type="password" placeholder="{{ __('global.login_password') }}" class="@error('password') is-invalid @enderror" name="password" required autocomplete="new-password" />
                                <span class="show-password-input"></span>
                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-row">
                                <input id="password-confirm" type="password" placeholder="{{ __('global.login_password_confirmation') }}"  name="password_confirmation" required autocomplete="new-password" />
                            </div>
                            <button type="submit" class="r1-button">{{ __('global.register') }}</button>
                        </form>
                    </div>
                    {{--
                    <form action="/">
                        <div class="form-row type-adv">
                            <h5><span>Order as a guest</span></h5>
                            <p>Save time and check out without creating an account. Use an email
                                address that is not yet registered to <i>Botanix account.</i></p>
                        </div>
                        <button type="submit" class="r1-button">Guest</button>
                    </form>--}}
                </div>
            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

    @include('auth.partials._password-reset')
@endsection
