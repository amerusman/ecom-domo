@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        @include('profile.partials.menu')

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-account divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><span>{{ Trans::__('profile.personal_info', 'personal info') }}</span></h2>
                </div>
                <div class="r1-personal-info-wrapper">
                    <form class="edit-account" action="{{ route('profile.account.update') }}" method="post">
                        @csrf
                        <div class="r1-title-wrapper personal-info-title">
                            <h5>
                                <span>{{ Trans::__('profile.personal_information', 'personal information') }}</span>
                            </h5>
                        </div>
                        @error('firstname')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <p class="account-form-row">
                            <input placeholder="{{ __('global.first_name') }}" type="text" class="input-text{{ $errors->has('firstname') ? 'is-invalid' : '' }}" name="firstname" id="account_first_name" autocomplete="given-name" value="{{ auth()->user()->firstname }}">
                        </p>

                        @error('lastname')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <p class="account-form-row">
                            <input placeholder="{{ __('global.last_name') }}" type="text" class="input-text" name="lastname" id="account_last_name" autocomplete="family-name" value="{{ auth()->user()->lastname }}">
                        </p>
                        <p class="account-form-row">
                            <input value="{{ auth()->user()->email }}" type="email" class="input text" name="account-email" id="account_email" autocomplete="email" readonly>
                        </p>
                        <div class="account-buttons">
                            <button class="account-btn confirm" type="submit" name="confirm_account_details" value="confirm">
                                {{ Trans::__('confirm', 'Confirm') }}</button>
                            <a href="{{ route('profile.home') }}" class="account-btn cancel" type="submit" name="cancel_account_details" value="cancel">{{ Trans::__('cancel', 'cancel') }}</a>
                        </div>
                    </form>
                    <form class="edit-account" action="{{ route('profile.account.update') }}" method="post">
                        @csrf
                        <div class="r1-title-wrapper personal-info-title">
                            <h5>
                                <span>{{ Trans::__('profile.password_change', 'password change') }}</span>
                            </h5>
                        </div>
                        @error('password_current')
                        <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <p class="account-form-row">
                            <input placeholder="Current password" type="password" class="input-text" name="password_current" id="account_password_current" autocomplete="off" required>
                        </p>
                        @error('password')
                        <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <p class="account-form-row">
                            <input placeholder="New password" type="password" class="input-text" name="password" id="account_password_new" autocomplete="off" required>
                            <span class="show-password-input"></span>
                        </p>
                        @error('password_confirmation')
                        <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <p class="account-form-row">
                            <input placeholder="Confirm new password" type="password" class="input-text" name="password_confirmation" id="account_password_new2" autocomplete="off" required>
                        </p>
                        <div class="account-buttons">
                            <button class="account-btn confirm" type="submit" name="password_change" value="confirm">
                                {{ Trans::__('confirm', 'Confirm') }}</button>
                            <a href="{{ route('profile.home') }}" class="account-btn cancel" type="submit" name="cancel_account_details" value="cancel">{{ Trans::__('cancel', 'cancel') }}</a>
                        </div>
                    </form>
                </div>
            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
