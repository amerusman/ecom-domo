<form action="<?php echo e(route('order-as-guest')); ?>" method="POST">
    <?php echo csrf_field(); ?>
    <div>
        <label for="email3"><?php echo e(Trans::__('auth.login_email', 'Email')); ?></label>
        <input type="email" name="email" id="email3" placeholder="johndoe@gmail.com" class="<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" value="<?php echo e(old('email', null)); ?>"  required>
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

    <div class="checkout__shipping-address-form">
        <?php echo $__env->make('checkout.partials._address', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>

    <button class="r1-button" type="submit"><?php echo e(Trans::do('proceed to payment', 'checkout')); ?></button>

</form>
<?php /**PATH /var/www/italyskincare.com/resources/views/checkout/partials/_as-guest.blade.php ENDPATH**/ ?>