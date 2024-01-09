<div class="cookie-popup-wrapper">
    <div class="r1-popup form-popup">
        <span class="r1-popup__close" data-cancel>×</span>
        <div class="content-wrapper">
            <div>
                <div class="r1-title-wrapper">
                    <h1 class="r1-title">{{ Trans::__('cookie_information') }}</h1>
                </div>
                <div>
                    <p>
                        {{ Trans::__('cookie_information_text', 'We use Cookies and other technologies to provide the functions of our websites, to integrate social media, to personalize content and ads and to analyze access to our websites.
                        Click "Agree" to give your consent or click "PRIVACY POLICY" for more information.') }}

                    </p>
                </div>
            </div>
            <div>
                <button type="submit" class="r1-button" data-confirm>{{ Trans::do('agree') }}</button>
                <a href="{{ route('pages.show', 'privacy-policy') }}">{{ $pages['privacy-policy'] }}</a>
            </div>
        </div>
    </div>
</div>
