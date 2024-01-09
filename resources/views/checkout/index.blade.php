@extends('layouts.app')
@section('content')

    @if($clientSecret)
        @section('scripts')
            <script src="https://js.stripe.com/v3/"></script>
        @stop
    @endif

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-checkout">
				<div class="r1-title-wrapper">
					<h2 class="r1-title">{{ Trans::do('checkout', 'checkout') }}</h2>
					@guest()
                    <h4 class="r1-subtitle"><span>{{ Trans::__('checkout.sign_in_or_checkout', 'Sign in or checkout as guest') }}</span></h4>
                    @endguest
				</div>
				<div class="section-checkout-wrapper">
					<div class="section-checkout-forms">
						<p>{{ Trans::__('checkout.secure_website', 'Secure website') }}</p>
{{--
                        @if($errors->any())
                            @foreach ($errors->all() as $error)
                                <div class="has-error">{{ $error }}</div>
                            @endforeach
                        @endif
                        --}}
                        @guest()
						<div class="checkout__contact-info-forms">
							<h3>{{ Trans::__('checkout.contact_information', 'Contact information') }}</h3>
							<div class="contact-info__buttons">
                                <button class="r1-button guest active" type="submit">{{ Trans::do('As a guest', 'checkout') }}</button>
								<button class="r1-button sign-in" type="submit">{{ Trans::do('Sign in', 'checkout') }}</button>
								<button class="r1-button register" type="submit">{{ Trans::do('Register', 'checkout') }}</button>
							</div>
							<div class="contact-info--forms">
                                <div class="contact-info-form__guest-wrapper active">
                                    @include('checkout.partials._as-guest')
                                </div>
								<div class="contact-info-form__sign-in-wrapper">
                                    <form action="{{ route('login') }}" method="POST">
										<label for="email">{{ Trans::__('auth.login_email', 'Email') }}</label>
										<input type="email" name="email" id="email" placeholder="johndoe@gmail.com" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email', null) }}" required>
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
										<div>
											<label for="password">{{ Trans::do('Password', 'auth') }}</label>
											<input type="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" id="password" placeholder="Password" required>
											<span class="show-password-input"></span>
										</div>
										<a href="javascript:;" class="lost-password r1-popup-trigger" data-popup="lost-password">{{ Trans::do('Forgot your password?', 'auth') }}</a>
										<button class="r1-button">{{ Trans::do('Sign in', 'auth') }}</button>
                                        @csrf
									</form>
									<div class="social-media-buttons">
										<p>{{ Trans::do('Log in', 'auth') }}</p>
										<a href="{{ route('login.google') }}" class="google" type="button">{{ Trans::do('Login with Google', 'auth') }}</a>
										<a href="{{ route('login.facebook') }}" class="facebook" type="button">{{ Trans::do('Login with Facebook', 'auth') }}</a>
									</div>
								</div>
								<div class="contact-info-form__register-wrapper">
                                    <form method="POST" action="{{ route('register') }}">
                                        @csrf
										<div>
											<div>
												<label for="first">{{ Trans::do('First name', 'auth') }}</label>
												<input type="text" class="{{ $errors->has('firstname') ? 'is-invalid' : '' }}" name="firstname" id="firstname" autocomplete="given-name" value="{{ old('firstname') }}" placeholder="{{ Trans::do('First name', 'auth') }}" required>
                                                @error('firstname')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
											</div>
											<div>
												<label for="last">{{ Trans::do('Last name', 'auth') }}</label>
												<input type="text" id="last" name="lastname" placeholder="{{ Trans::do('Last name', 'auth') }}">
											</div>
										</div>
										<div>
											<label for="email2">{{ Trans::__('auth.login_email', 'Email') }}</label>
											<input type="email" name="email" id="email2" placeholder="johndoe@gmail.com" class="@error('email') is-invalid @enderror" value="{{ old('email') }}" autocomplete="email" required>
                                            @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
										</div>
										<div>
											<div>
												<label for="password2">{{ Trans::do('Password', 'auth') }}</label>
												<input class="show-password @error('password') is-invalid @enderror" type="password" name="password" id="password2" placeholder="{{ Trans::do('Password', 'auth') }}" required>
												<span class="show-password-input"></span>
											</div>
											<div>
												<label for="password3">{{ Trans::do('Confirm Password', 'auth') }}</label>
												<input class="show-password" type="password" name="password_confirmation" id="password3" placeholder="{{ Trans::do('Confirm Password', 'auth') }}" required>
											</div>
										</div>
										<button class="r1-button">{{ Trans::do('Register', 'auth') }}</button>
									</form>
								</div>

							</div>
						</div>
                        @endguest
						<div class="checkout__shipping-address-form">



                            @if($clientSecret)


                                <h3 class="payment-info">{{ Trans::do('Payment information', 'checkout') }}</h3>
                                <br>
                                <!-- <div>
                                    <a href="{{ route('checkout.make.payment') }}" class="r1-button paypal_payment_button">
                                        <span id="button-text">{{ Trans::do('Pay with PayPal', 'checkout') }}</span>
                                    </a>
                                </div> -->



                                <!-- Display a payment form -->
                                <form id="payment-form">
                                    <p class="payment-info">{{ Trans::do('All transactions are secure', 'checkout') }}</p>
                                    {{--                                <div id="link-authentication-element">--}}
                                    {{--                                    <!--Stripe.js injects the Link Authentication Element-->--}}
                                    {{--                                </div>--}}
                                    <div id="payment-element">
                                        <!--Stripe.js injects the Payment Element-->
                                    </div>
                                    <div class="order-button-container">
                                        <ul>
                                            <li>{{ Trans::do('Anonymous delivery', 'checkout') }}</li>
                                            <li>{{ Trans::do('Without store product data', 'checkout') }}</li>
                                            <li>{{ Trans::do('Satisfaction guarantee', 'checkout') }}</li>
                                        </ul>
                                        <button class="r1-button" id="submit">
                                            <div class="spinner hidden" id="spinner"></div>
                                            <span id="button-text">{{ Trans::do('place my order', 'checkout') }}</span>
                                        </button>
                                    </div>

                                    <div id="payment-message" class="hidden"></div>
                                </form>

                                <script>
                                    document.addEventListener('DOMContentLoaded', async () => {
                                        const stripe = Stripe('{{ env('STRIPE_PUBLISHABLE_KEY') }}');

                                        const elements = stripe.elements({
                                            clientSecret: '{{ $clientSecret }}'
                                        });

                                        const paymentElementOptions = {
                                            layout: "accordion",
                                            radios: false
                                        };

                                        const paymentElement = elements.create("payment", paymentElementOptions);
                                        paymentElement.mount("#payment-element");

                                        const paymentForm = document.querySelector('#payment-form');
                                        paymentForm.addEventListener('submit', async (e) => {
                                            // Avoid a full page POST request.
                                            e.preventDefault();
                                            setLoading(true);

                                            // Confirm the card payment that was created server side:
                                            const {error} = await stripe.confirmPayment({
                                                elements,
                                                confirmParams: {
                                                    return_url: '{!! route('checkout.success') !!}'
                                                }
                                            });
                                            // This point will only be reached if there is an immediate error when
                                            // confirming the payment. Otherwise, your customer will be redirected to
                                            // your `return_url`. For some payment methods like iDEAL, your customer will
                                            // be redirected to an intermediate site first to authorize the payment, then
                                            // redirected to the `return_url`.
                                            if (error.type === "card_error" || error.type === "validation_error") {
                                                showMessage(error.message);
                                            } else {
                                                showMessage("An unexpected error occurred.");
                                            }

                                            setLoading(false);
                                        });
                                    });
                                </script>


                            @endif



                            @if(!Cart::orderId())
                                <form action="{{ route('checkout.orders.store') }}" method="POST">
                            @else
                                <form action="{{ route('checkout.orders.update', $order) }}" method="POST">
                                    @method('PUT')
                            @endif

                                @auth()
                                        @csrf
                                        @include('checkout.partials._address')

                                        @if(Cart::orderId())
                                            <button class="r1-button" type="submit">{{ Trans::do('update address', 'checkout') }}</button>
                                        @else
                                            <div class="terms-notification">
                                                <input type="checkbox" id="terms" name="terms" required>
                                                <label for="terms">I have read and agree with <a href="{{ route('pages.show', 'terms-conditions') }}">{{ $pages['terms-conditions'] }}</a> of Sale, which are provided only in English.</label>
                                            </div>
                                            <button class="r1-button" type="submit">{{ Trans::do('proceed to payment', 'checkout') }}</button>

                                        @endif
                                @endauth
                            </form>


						</div>
					</div>

					@include('checkout.partials._order')

				</div>
			</section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

    @guest()
        @include('auth.partials._password-reset')
    @endguest

@endsection
