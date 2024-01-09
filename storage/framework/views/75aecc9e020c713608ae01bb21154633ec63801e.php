<?php $__env->startSection('content'); ?>

    <?php if($clientSecret): ?>
        <?php $__env->startSection('scripts'); ?>
            <script src="https://js.stripe.com/v3/"></script>
        <?php $__env->stopSection(); ?>
    <?php endif; ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-checkout">
				<div class="r1-title-wrapper">
					<h2 class="r1-title"><?php echo e(Trans::do('checkout', 'checkout')); ?></h2>
					<?php if(auth()->guard()->guest()): ?>
                    <h4 class="r1-subtitle"><span><?php echo e(Trans::__('checkout.sign_in_or_checkout', 'Sign in or checkout as guest')); ?></span></h4>
                    <?php endif; ?>
				</div>
				<div class="section-checkout-wrapper">
					<div class="section-checkout-forms">
						<p><?php echo e(Trans::__('checkout.secure_website', 'Secure website')); ?></p>

                        <?php if(auth()->guard()->guest()): ?>
						<div class="checkout__contact-info-forms">
							<h3><?php echo e(Trans::__('checkout.contact_information', 'Contact information')); ?></h3>
							<div class="contact-info__buttons">
                                <button class="r1-button guest active" type="submit"><?php echo e(Trans::do('As a guest', 'checkout')); ?></button>
								<button class="r1-button sign-in" type="submit"><?php echo e(Trans::do('Sign in', 'checkout')); ?></button>
								<button class="r1-button register" type="submit"><?php echo e(Trans::do('Register', 'checkout')); ?></button>
							</div>
							<div class="contact-info--forms">
                                <div class="contact-info-form__guest-wrapper active">
                                    <?php echo $__env->make('checkout.partials._as-guest', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                </div>
								<div class="contact-info-form__sign-in-wrapper">
                                    <form action="<?php echo e(route('login')); ?>" method="POST">
										<label for="email"><?php echo e(Trans::__('auth.login_email', 'Email')); ?></label>
										<input type="email" name="email" id="email" placeholder="johndoe@gmail.com" class="<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" value="<?php echo e(old('email', null)); ?>" required>
                                        <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                            <span class="invalid-feedback" role="alert">
                                                <strong><?php echo e($message); ?></strong>
                                            </span>
                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
										<div>
											<label for="password"><?php echo e(Trans::do('Password', 'auth')); ?></label>
											<input type="password" class="<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password" id="password" placeholder="Password" required>
											<span class="show-password-input"></span>
										</div>
										<a href="javascript:;" class="lost-password r1-popup-trigger" data-popup="lost-password"><?php echo e(Trans::do('Forgot your password?', 'auth')); ?></a>
										<button class="r1-button"><?php echo e(Trans::do('Sign in', 'auth')); ?></button>
                                        <?php echo csrf_field(); ?>
									</form>
									<div class="social-media-buttons">
										<p><?php echo e(Trans::do('Log in', 'auth')); ?></p>
										<a href="<?php echo e(route('login.google')); ?>" class="google" type="button"><?php echo e(Trans::do('Login with Google', 'auth')); ?></a>
										<a href="<?php echo e(route('login.facebook')); ?>" class="facebook" type="button"><?php echo e(Trans::do('Login with Facebook', 'auth')); ?></a>
									</div>
								</div>
								<div class="contact-info-form__register-wrapper">
                                    <form method="POST" action="<?php echo e(route('register')); ?>">
                                        <?php echo csrf_field(); ?>
										<div>
											<div>
												<label for="first"><?php echo e(Trans::do('First name', 'auth')); ?></label>
												<input type="text" class="<?php echo e($errors->has('firstname') ? 'is-invalid' : ''); ?>" name="firstname" id="firstname" autocomplete="given-name" value="<?php echo e(old('firstname')); ?>" placeholder="<?php echo e(Trans::do('First name', 'auth')); ?>" required>
                                                <?php $__errorArgs = ['firstname'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong><?php echo e($message); ?></strong>
                                                    </span>
                                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
											</div>
											<div>
												<label for="last"><?php echo e(Trans::do('Last name', 'auth')); ?></label>
												<input type="text" id="last" name="lastname" placeholder="<?php echo e(Trans::do('Last name', 'auth')); ?>">
											</div>
										</div>
										<div>
											<label for="email2"><?php echo e(Trans::__('auth.login_email', 'Email')); ?></label>
											<input type="email" name="email" id="email2" placeholder="johndoe@gmail.com" class="<?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" value="<?php echo e(old('email')); ?>" autocomplete="email" required>
                                            <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                <span class="invalid-feedback" role="alert">
                                                    <strong><?php echo e($message); ?></strong>
                                                </span>
                                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
										</div>
										<div>
											<div>
												<label for="password2"><?php echo e(Trans::do('Password', 'auth')); ?></label>
												<input class="show-password <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" type="password" name="password" id="password2" placeholder="<?php echo e(Trans::do('Password', 'auth')); ?>" required>
												<span class="show-password-input"></span>
											</div>
											<div>
												<label for="password3"><?php echo e(Trans::do('Confirm Password', 'auth')); ?></label>
												<input class="show-password" type="password" name="password_confirmation" id="password3" placeholder="<?php echo e(Trans::do('Confirm Password', 'auth')); ?>" required>
											</div>
										</div>
										<button class="r1-button"><?php echo e(Trans::do('Register', 'auth')); ?></button>
									</form>
								</div>

							</div>
						</div>
                        <?php endif; ?>
						<div class="checkout__shipping-address-form">



                            <?php if($clientSecret): ?>


                                <h3 class="payment-info"><?php echo e(Trans::do('Payment information', 'checkout')); ?></h3>
                                <br>
                                <!-- <div>
                                    <a href="<?php echo e(route('checkout.make.payment')); ?>" class="r1-button paypal_payment_button">
                                        <span id="button-text"><?php echo e(Trans::do('Pay with PayPal', 'checkout')); ?></span>
                                    </a>
                                </div> -->



                                <!-- Display a payment form -->
                                <form id="payment-form">
                                    <p class="payment-info"><?php echo e(Trans::do('All transactions are secure', 'checkout')); ?></p>
                                    
                                    
                                    
                                    <div id="payment-element">
                                        <!--Stripe.js injects the Payment Element-->
                                    </div>
                                    <div class="order-button-container">
                                        <ul>
                                            <li><?php echo e(Trans::do('Anonymous delivery', 'checkout')); ?></li>
                                            <li><?php echo e(Trans::do('Without store product data', 'checkout')); ?></li>
                                            <li><?php echo e(Trans::do('Satisfaction guarantee', 'checkout')); ?></li>
                                        </ul>
                                        <button class="r1-button" id="submit">
                                            <div class="spinner hidden" id="spinner"></div>
                                            <span id="button-text"><?php echo e(Trans::do('place my order', 'checkout')); ?></span>
                                        </button>
                                    </div>

                                    <div id="payment-message" class="hidden"></div>
                                </form>

                                <script>
                                    document.addEventListener('DOMContentLoaded', async () => {
                                        const stripe = Stripe('<?php echo e(env('STRIPE_PUBLISHABLE_KEY')); ?>');

                                        const elements = stripe.elements({
                                            clientSecret: '<?php echo e($clientSecret); ?>'
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
                                                    return_url: '<?php echo route('checkout.success'); ?>'
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


                            <?php endif; ?>



                            <?php if(!Cart::orderId()): ?>
                                <form action="<?php echo e(route('checkout.orders.store')); ?>" method="POST">
                            <?php else: ?>
                                <form action="<?php echo e(route('checkout.orders.update', $order)); ?>" method="POST">
                                    <?php echo method_field('PUT'); ?>
                            <?php endif; ?>

                                <?php if(auth()->guard()->check()): ?>
                                        <?php echo csrf_field(); ?>
                                        <?php echo $__env->make('checkout.partials._address', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

                                        <?php if(Cart::orderId()): ?>
                                            <button class="r1-button" type="submit"><?php echo e(Trans::do('update address', 'checkout')); ?></button>
                                        <?php else: ?>
                                            <div class="terms-notification">
                                                <input type="checkbox" id="terms" name="terms" required>
                                                <label for="terms">I have read and agree with <a href="<?php echo e(route('pages.show', 'terms-conditions')); ?>"><?php echo e($pages['terms-conditions']); ?></a> of Sale, which are provided only in English.</label>
                                            </div>
                                            <button class="r1-button" type="submit"><?php echo e(Trans::do('proceed to payment', 'checkout')); ?></button>

                                        <?php endif; ?>
                                <?php endif; ?>
                            </form>


						</div>
					</div>

					<?php echo $__env->make('checkout.partials._order', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

				</div>
			</section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

    <?php if(auth()->guard()->guest()): ?>
        <?php echo $__env->make('auth.partials._password-reset', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endif; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/checkout/index.blade.php ENDPATH**/ ?>