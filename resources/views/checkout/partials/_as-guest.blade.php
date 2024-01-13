<form action="{{ route('order-as-guest') }}" method="POST">
    @csrf
    <div>
        <label for="email3">{{ Trans::__('auth.login_email', 'Email') }}</label>
        <input type="email" name="email" id="email3" placeholder="johndoe@gmail.com" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email', null) }}"  required>
        @error('email')
        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
        @enderror


    </div>

    <div class="checkout__shipping-address-form">
        @include('checkout.partials._address')
    </div>

    <button class="r1-button" type="submit">{{ Trans::do('proceed to payment', 'checkout') }}</button>

</form>
