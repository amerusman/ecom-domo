<h3>{{ Trans::do('Billing address', 'checkout') }}</h3>
    <div>
        <label for="billing_country_id">{{ Trans::__('Country') }}</label>
        <select class="{{ $errors->has('billing.country_id') ? 'is-invalid' : '' }} select2" name="billing[country_id]" id="billing_country_id" required>
            <option value="">{{ Trans::__('profile.select_country') }}</option>
            @foreach($countries as $id => $entry)
                <option value="{{ $id }}" {{ (isset($address) && $address->country_id == $id) || old('billing.country_id') == $id ? 'selected' : '' }}>{{ $entry }}</option>
            @endforeach
        </select>
        @if($errors->has('billing.country_id'))
            <span class="text-danger">{{ $errors->first('billing.country_id') }}</span>
        @endif
    </div>
    <div>
        <label for="billing_state">{{ Trans::__('profile.state', 'State/region') }}</label>
        <input type="text" id="billing_state" name="billing[state]" placeholder="{{ Trans::__('profile.state', 'State/region') }}" value="{{ old('billing.state', $address->state) }}" class="{{ $errors->has('billing.state') ? 'is-invalid' : '' }}" required>
        @if($errors->has('billing.state'))
            <span class="text-danger">{{ $errors->first('billing.state') }}</span>
        @endif
    </div>
    <div>
        <div>
            <label for="billing_firstname">{{ Trans::do('First name', 'profile') }}</label>
            <input type="text" id="billing_firstname" name="billing[first_name]" placeholder="{{ Trans::do('First name', 'profile') }}" value="{{ old('billing.first_name', $address->first_name) ?: (auth()->check() ? auth()->user()->firstname : null) }}" required>
            @if($errors->has('billing.first_name'))
                <span class="text-danger">{{ $errors->first('billing.first_name') }}</span>
            @endif
        </div>
        <div>
            <label for="billing_lastname">{{ Trans::do('Last name', 'profile') }}</label>
            <input type="text" id="billing_lastname" name="billing[last_name]" placeholder="{{ Trans::do('Last name', 'profile') }}" value="{{ old('billing.last_name', $address->last_name) ?: (auth()->check() ? auth()->user()->lastname : null) }}" required>
            @if($errors->has('billing.last_name'))
                <span class="text-danger">{{ $errors->first('billing.last_name') }}</span>
            @endif
        </div>
    </div>
    <div>
        <label for="billing_address">{{ Trans::do('Address', 'profile') }}</label>
        <input type="text" id="billing_address" name="billing[address_1]" placeholder="{{ Trans::__('profile.address') }}" value="{{ old('billing.address_1', $address->address_1) }}" class="form-control {{ $errors->has('billing.address_1') ? 'is-invalid' : '' }}" required>
        @if($errors->has('billing.address_1'))
            <span class="text-danger">{{ $errors->first('billing.city') }}</span>
        @endif
    </div>
    <div>
        <label for="billing_apartment">{{ Trans::do('Apartment, suite, etc. (optional)', 'profile') }}</label>
        <input type="text" id="billing_apartment" name="billing[address_2]" placeholder="{{ Trans::do('Apartment, suite, etc. (optional)', 'profile') }}" value="{{ old('billing.address_2', $address->address_2) }}">
        @if($errors->has('billing.address_2'))
            <span class="text-danger">{{ $errors->first('billing.city') }}</span>
        @endif
    </div>
    <div>
    <div>
            <label for="billing_city">{{ Trans::do('City', 'profile') }}</label>
            <input type="text" id="billing_city" name="billing[city]" placeholder="{{ Trans::do('City', 'profile') }}"
                   value="{{ old('billing.city',$address->city) }}" required>
            @if($errors->has('billing.city'))
                <span class="text-danger">{{ $errors->first('billing.city') }}</span>
            @endif
        </div>
        <div>
            <label for="billing_code">{{ Trans::do('Postal code', 'profile') }}</label>
            <input type="text" id="billing_code" name="billing[zip]" placeholder="{{ Trans::do('Postal code', 'profile') }}" value="{{ old('billing.zip',$address->zip) }}" required>
            @if($errors->has('billing.zip'))
                <span class="text-danger">{{ $errors->first('billing.zip') }}</span>
            @endif
        </div>
    </div>
    <div>
        <label for="billing_phone">{{ Trans::do('Phone', 'profile') }}</label>
        <input type="text" id="billing_phone" name="billing[phone]" placeholder="{{ Trans::do('Phone', 'profile') }}" class="{{ $errors->has('billing.phone') ? 'is-invalid' : '' }}" value="{{ old('billing.phone', $address->phone) }}">
        @if($errors->has('billing.phone'))
            <span class="text-danger">{{ $errors->first('billing.phone') }}</span>
        @endif
    </div>
    <div class="address-select-container">
        <div class="form-container">
            <input class="radio" type="radio" id="same_address" name="select_shipping_address" value="0" {{ $shipping ? '' : 'checked' }}>
            <label for="same_address">{{ Trans::__('checkout.shippind_address', 'Shipping address is the same as my Billing address') }}</label>
        </div>
        <div class="form-container">
            <input class="radio" type="radio" id="other_address" name="select_shipping_address" value="1" {{ $shipping ? 'checked' : '' }}>
            <label for="other_address">{{ Trans::__('checkout.shippind_another_address', 'Shipping to another address') }}</label>
        </div>
    </div>

{{--shipping address--}}

    <div class="additional-address-container" style="display: none;">
        <h3>{{ Trans::do('Shipping address', 'checkout') }}</h3>
        <div>
            <label for="shipping_country_id">{{ Trans::__('Country') }}</label>
            <select class="{{ $errors->has('shipping.country_id') ? 'is-invalid' : '' }}" name="shipping[country_id]" id="shipping_country_id">
                <option value="">{{ Trans::__('profile.select_country') }}</option>
                @foreach($countries as $id => $entry)
                    <option value="{{ $id }}" {{ (!empty($shipping) && $shipping->country_id == $id) || old('shipping.country_id') == $id ? 'selected' : '' }}>{{ $entry }}</option>
                @endforeach
            </select>
            @if($errors->has('shipping.country_id'))
                <span class="text-danger">{{ $errors->first('shipping.country_id') }}</span>
            @endif
        </div>
        <div>
            <label for="shipping_state">{{ Trans::__('profile.state', 'State/region') }}</label>
            <input type="text" id="shipping_state" name="shipping[state]" placeholder="{{ Trans::__('profile.state', 'State/region') }}"
                   value="{{ old('shipping.state', $shipping ? $shipping->state : null) }}"
                   class="{{ $errors->has('shipping.state') ? 'is-invalid' : '' }}">
            @if($errors->has('shipping.state'))
                <span class="text-danger">{{ $errors->first('shipping.state') }}</span>
            @endif
        </div>
        <div>
            <div>
                <label for="shipping_firstname">{{ Trans::do('First name', 'profile') }}</label>
                <input type="text" id="shipping_firstname" name="shipping[first_name]" placeholder="{{ Trans::do('First name', 'profile') }}"
                       value="{{ old('shipping.first_name', $shipping ? $shipping->first_name : $address->first_name) ?: (auth()->check() ? auth()->user()->firstname : null) }}">
                @if($errors->has('shipping.first_name'))
                    <span class="text-danger">{{ $errors->first('shipping.first_name') }}</span>
                @endif
            </div>
            <div>
                <label for="shipping_lastname">{{ Trans::do('Last name', 'profile') }}</label>
                <input type="text" id="shipping_lastname" name="shipping[last_name]" placeholder="{{ Trans::do('Last name', 'profile') }}"
                       value="{{ old('shipping.last_name', $shipping ? $shipping->last_name : $address->last_name) ?: (auth()->check() ? auth()->user()->lastname : null) }}">
                @if($errors->has('shipping.last_name'))
                    <span class="text-danger">{{ $errors->first('shipping.last_name') }}</span>
                @endif
            </div>
        </div>

        <div>
            <label for="shipping_address">{{ Trans::do('Address', 'profile') }}</label>
            <input type="text" id="shipping_address" name="shipping[address_1]" placeholder="{{ Trans::__('profile.address') }}"
                   value="{{ old('shipping.address_1', $shipping ? $shipping->address_1 : null) }}"
                   class="form-control {{ $errors->has('shipping.address_1') ? 'is-invalid' : '' }}">

            @if($errors->has('shipping.address_1'))
                <span class="text-danger">{{ $errors->first('shipping.address_1') }}</span>
            @endif
        </div>

        <div>
            <label for="shipping_apartment">{{ Trans::do('Apartment, suite, etc. (optional)', 'profile') }}</label>
            <input type="text" id="shipping_apartment" name="shipping[address_2]" placeholder="{{ Trans::do('Apartment, suite, etc. (optional)', 'profile') }}" value="{{ old('shipping.address_2', $shipping ? $shipping->address_2 : null) }}">

            @if($errors->has('shipping.address_2'))
                <span class="text-danger">{{ $errors->first('shipping.address_2') }}</span>
            @endif
        </div>

        <div>
            <div>
                <label for="shipping_city">{{ Trans::do('City', 'profile') }}</label>
                <input type="text" id="shipping_city" name="shipping[city]" placeholder="{{ Trans::do('City', 'profile') }}"
                       value="{{ old('shipping.city', $shipping ? $shipping->city : null) }}">
                @if($errors->has('shipping.city'))
                    <span class="text-danger">{{ $errors->first('shipping.city') }}</span>
                @endif
            </div>

            <div>
                <label for="shipping_code">{{ Trans::do('Postal code', 'profile') }}</label>
                <input type="text" id="shipping_code" name="shipping[zip]" placeholder="{{ Trans::do('Postal code', 'profile') }}"
                       value="{{ old('shipping.zip', $shipping ? $shipping->zip : null) }}">
                @if($errors->has('shipping.zip'))
                    <span class="text-danger">{{ $errors->first('shipping.zip') }}</span>
                @endif
            </div>
        </div>

        <div>
            <label for="shipping_phone">{{ Trans::do('Phone', 'profile') }}</label>
            <input type="text" id="shipping_phone" name="shipping[phone]" placeholder="{{ Trans::do('Phone', 'profile') }}" class="{{ $errors->has('shipping.phone') ? 'is-invalid' : '' }}"
                   value="{{ old('shipping.phone', $shipping ? $shipping->phone : null) }}">
            @if($errors->has('shipping.phone'))
                <span class="text-danger">{{ $errors->first('shipping.phone') }}</span>
            @endif
        </div>
    </div>

