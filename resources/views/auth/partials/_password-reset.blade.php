
<div class="r1-popup-wrapper" data-popup="lost-password">
    <div class="r1-popup-overlay"></div>
    <div class="r1-popup form-popup" data-popup="lost-password">
        <span class="r1-popup__close">×</span>
        <div class="r1-title-wrapper">
            <h4 class="r1-subtitle"><span>{{ Trans::__('auth.reset_password', 'Reset Password') }}</span></h4>
        </div>
        <div role="success-password.email"></div>
        <form method="POST" action="{{ route('password.email') }}" class="r1-popup__form" data-action="password.email">
            @csrf
            <div class="form-row">
                <label for="email3">{{ Trans::__('auth.reset_password_notification', 'Please enter your email below. A link to reset your password will be sent to your email address') }}</label>
                <input id="email3" type="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" placeholder="{{ Trans::__('auth.login_email', 'Email') }}">
            </div>
            <div role="alert"></div>
            <button type="submit" class="r1-button">{{ Trans::__('auth.reset_password', 'Reset Password') }}</button>
        </form>
    </div>
</div>

