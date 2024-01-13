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
                <h2 class="r1-title"><span>{{ __('web.personal_info') }}</span></h2>
            </div>
            <div class="r1-personal-info-wrapper">
                <form class="edit-account" action method="post">
                    <div class="r1-title-wrapper personal-info-title">
                        <h5>
                            <span>{{ __('web.personal_information') }}</span>
                        </h5>
                    </div>
                    <div class="form-edit-wrapper first">
                        <p class="account-form-row">
                            <label for="account-first-name">
                                {{ __('global.first_name') }}
                            </label>
                            <input value="{{ auth()->user()->firstname }}" type="text" class="input text" name="firstname" id="account_first_name" autocomplete="given-name" readonly>
                        </p>
                        <p class="account-form-row">
                            <label for="account-last-name">
                                {{ __('global.last_name') }}
                            </label>
                            <input value="{{ auth()->user()->lastname }}" type="text" class="input text" name="account-last-name" id="account_last_name" autocomplete="family-name" readonly>
                        </p>
                        <p class="account-form-row">
                            <label for="account-email">
                                {{ __('global.login_email') }}
                            </label>
                            <input value="{{ auth()->user()->email }}" type="email" class="input text" name="account-email" id="account_email" autocomplete="email" readonly>
                        </p>
                        <div class="account-buttons">
                            <a href="{{ route('profile.account.edit') }}" class="account-btn edit" type="submit" name="edit_account_details" value="edit">{{ Trans::__('edit', 'Edit') }}</a>
                        </div>
                    </div>
                </form>
                <form class="edit-account" action method="post">
                    <div class="r1-title-wrapper personal-info-title">
                        <h5>
                            <span>{{ __('web.password_change') }}</span>
                        </h5>
                    </div>
                    <div class="form-edit-wrapper second">
                        <p class="account-form-row">
                            <label for="account-password-current">
                                {{ __('web.current_password') }}
                            </label>
                            <input value="**************" type="password" class="input text" name="account-password-current" id="account_password_current" autocomplete="off" readonly>
                        </p>
                        <p class="account-form-row">
                            <label for="account-password-new">
                                {{ __('web.new_password') }}
                            </label>
                            <input value="**************" type="password" class="input text" name="account-password-new" id="account_password_new" autocomplete="off" readonly>
                        </p>
                        <p class="account-form-row">
                            <label for="account-password-new2">
                                {{ __('web.repeat_new_password') }}
                            </label>
                            <input value="**************" type="password" class="input text" name="account-password-new2" id="account_password_new2" autocomplete="off" readonly>
                        </p>
                        <div class="account-buttons">
                            <a href="{{ route('profile.account.edit') }}" class="account-btn edit" type="submit" name="edit_account_details" value="edit">{{ Trans::__('edit', 'Edit') }}</a>
                        </div>
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
