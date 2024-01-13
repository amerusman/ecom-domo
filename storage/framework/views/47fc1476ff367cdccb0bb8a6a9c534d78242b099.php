
<div class="r1-popup-wrapper" data-popup="lost-password">
    <div class="r1-popup-overlay"></div>
    <div class="r1-popup form-popup" data-popup="lost-password">
        <span class="r1-popup__close">×</span>
        <div class="r1-title-wrapper">
            <h4 class="r1-subtitle"><span><?php echo e(Trans::__('auth.reset_password', 'Reset Password')); ?></span></h4>
        </div>
        <div role="success-password.email"></div>
        <form method="POST" action="<?php echo e(route('password.email')); ?>" class="r1-popup__form" data-action="password.email">
            <?php echo csrf_field(); ?>
            <div class="form-row">
                <label for="email3"><?php echo e(Trans::__('auth.reset_password_notification', 'Please enter your email below. A link to reset your password will be sent to your email address')); ?></label>
                <input id="email3" type="email" class="<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" name="email" value="<?php echo e($email ?? old('email')); ?>" required autocomplete="email" placeholder="<?php echo e(Trans::__('auth.login_email', 'Email')); ?>">
            </div>
            <div role="alert"></div>
            <button type="submit" class="r1-button"><?php echo e(Trans::__('auth.reset_password', 'Reset Password')); ?></button>
        </form>
    </div>
</div>

<?php /**PATH /var/www/italyskincare.com/resources/views/auth/partials/_password-reset.blade.php ENDPATH**/ ?>