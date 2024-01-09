@if(!Site::countrySelected())
<div class="r1-popup-wrapper active">
    <div class="r1-popup-overlay"></div>
    <div class="r1-popup form-popup" data-popup="region-selection">
        <span class="r1-popup__close">×</span>
        <div class="r1-title-wrapper">
            <h1 class="r1-title">{{ Trans::do('Welcome') }}</h1>
        </div>
        <div>
            <p>
                {{ Trans::__('please_choose_your_location', 'Please choose your location from the drop-down below for your delivery options:') }}
            </p>
        </div>
        <form action="{{ route('profile.country') }}" class="r1-popup__form" method="post">
            @csrf
            <div class="form-row">
                <select name="country" class="select2">
                    @foreach($countries as $id => $country)
                        <option value="{{ $id }}">{{ $country }}</option>
                    @endforeach
                </select>
            </div>
            <button type="submit" class="r1-button">{{ Trans::do('Confirm') }}</button>
        </form>
    </div>
</div>
@endif
