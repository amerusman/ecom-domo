<section class="r1-secion-notices divider">
    <div class="r1-section-notices__payments">
        <img src="/img/visa.svg" alt="visa" />
        <img src="/img/mastercard.svg" alt="mastercard" />
        <img src="/img/paypal.svg" alt="paypal" />
        <img src="/img/google-pay.svg" alt="google-pay" />
        <img src="/img/apple-pay.svg" alt="apple-pay" />
    </div>
</section>

<section class="r1-section-newsletter">
    <div class="r1-section-newsletter__content">
        <div class="success" role="success-subscriptions.store" style="display: none;">
            <h3><span>{{ Trans::__('subscribing_response', 'Thank you so much for subscribing to our newsletter!') }}</span></h3>
        </div>
        <h3><x-block id="bottom-subscribe"/></h3>
        <form action="{{ route('subscriptions.store') }}" method="POST" data-action="subscriptions.store">
            @csrf
            {!! RecaptchaV3::initJs() !!}
            {!! RecaptchaV3::field('store') !!}

            <div class="alert alert-danger" style="display: none;"  role="alert"></div>
            <input type="email" name="email" placeholder="{{ Trans::__('your_email', 'Your email') }}"  />
            <button type="submit">
                <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7076 5.29465L24.156 0.737482L23.4484 1.44416L27 5H0V7H26.9929L23.4871 10.4866L24.1922 11.1957L29.4131 6.00336L28.9014 5.48882L28.9015 5.48874L28.862 5.44927L28.7079 5.29432L28.7076 5.29465Z" fill="#a5816b"/>
                </svg>
            </button>
        </form>
    </div>
</section>
