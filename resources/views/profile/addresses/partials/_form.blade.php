<div class="col-wrapper section-address__form">
    <div class="first-col">
        <div class="form-row">
            <label class="required"  for="phone">{{ Trans::__('phone') }}</label>
            <input class="form-control {{ $errors->has('phone') ? 'is-invalid' : '' }}" type="text" name="phone" id="phone" value="{{ old('phone', isset($address) ? $address->phone : '') }}" required>
            @if($errors->has('phone'))
                <span class="text-danger">{{ $errors->first('phone') }}</span>
            @endif
        </div>
        <div class="form-row">
            <label class="required" for="address_1">{{ Trans::__('address') }}</label>
            <input class="form-control {{ $errors->has('address_1') ? 'is-invalid' : '' }}" type="text" name="address_1" id="address_1" value="{{ old('address_1', isset($address) ? $address->address_1 : '') }}" required>
            @if($errors->has('address_1'))
                <span class="text-danger">{{ $errors->first('address_1') }}</span>
            @endif
        </div>
        <div class="form-row">
            <label class="required" for="country_id">{{ Trans::__('country') }}</label>
            <select class="form-control select2 {{ $errors->has('country') ? 'is-invalid' : '' }}" name="country_id" id="country_id" required>
                <option value="">{{ Trans::__('profile.select_country') }}</option>
                @foreach($countries as $id => $entry)
                    <option value="{{ $id }}" {{ (isset($address) && $address->country_id == $id) || old('country_id') == $id ? 'selected' : '' }}>{{ $entry }}</option>
                @endforeach
            </select>
            @if($errors->has('country'))
                <span class="text-danger">{{ $errors->first('country') }}</span>
            @endif
        </div>
    </div>
    <div class="second-col">
        <div class="form-row">
            <label class="required" for="state">{{ Trans::__('state') }}</label>
            <input class="form-control {{ $errors->has('state') ? 'is-invalid' : '' }}" type="text" name="state" id="state" value="{{ old('state', isset($address) ? $address->state : '') }}" required>
            @if($errors->has('state'))
                <span class="text-danger">{{ $errors->first('state') }}</span>
            @endif
        </div>
        <div class="form-row">
            <label class="required" for="city">{{ Trans::__('city') }}</label>
            <input class="form-control {{ $errors->has('city') ? 'is-invalid' : '' }}" type="text" name="city" id="city" value="{{ old('city', isset($address) ? $address->city : '') }}" required>
            @if($errors->has('city'))
                <span class="text-danger">{{ $errors->first('city') }}</span>
            @endif
        </div>
        <div class="form-row">
            <label class="required"  for="zip">{{ Trans::__('zip') }}</label>
            <input class="form-control {{ $errors->has('zip') ? 'is-invalid' : '' }}" type="text" name="zip" id="zip" value="{{ old('zip', isset($address) ? $address->zip : '') }}" required>
            @if($errors->has('zip'))
                <span class="text-danger">{{ $errors->first('zip') }}</span>
            @endif
        </div>
    </div>
</div>
<div class="checkbox-wrapper">
    <input type="hidden" name="default" value="0">
    <input type="checkbox" name="default" id="default" value="1" {{ (isset($address) && $address->default) || old('default', 0) == 1 ? 'checked' : '' }}>
    <label for="default">{{ Trans::__('profile.set_as_default_shipping', 'Set as default shipping address') }}</label>
</div>
<div class="address-btns">
    <button type="submit" class="r1-button">{{ Trans::__('confirm', 'Confirm') }}</button>
    <a href="{{ route('profile.addresses.index') }}" class="r1-button">{{ Trans::__('cancel', 'cancel') }}</a>
</div>
