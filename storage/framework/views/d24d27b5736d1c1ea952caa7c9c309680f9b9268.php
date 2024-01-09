<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <?php echo $__env->make('profile.partials.menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-account divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><span><?php echo e(Trans::__('profile.personal_info', 'personal info')); ?></span></h2>
                </div>
                <div class="r1-personal-info-wrapper">
                    <form class="edit-account" action="<?php echo e(route('profile.account.update')); ?>" method="post">
                        <?php echo csrf_field(); ?>
                        <div class="r1-title-wrapper personal-info-title">
                            <h5>
                                <span><?php echo e(Trans::__('profile.personal_information', 'personal information')); ?></span>
                            </h5>
                        </div>
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
                        <p class="account-form-row">
                            <input placeholder="<?php echo e(__('global.first_name')); ?>" type="text" class="input-text<?php echo e($errors->has('firstname') ? 'is-invalid' : ''); ?>" name="firstname" id="account_first_name" autocomplete="given-name" value="<?php echo e(auth()->user()->firstname); ?>">
                        </p>

                        <?php $__errorArgs = ['lastname'];
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
                        <p class="account-form-row">
                            <input placeholder="<?php echo e(__('global.last_name')); ?>" type="text" class="input-text" name="lastname" id="account_last_name" autocomplete="family-name" value="<?php echo e(auth()->user()->lastname); ?>">
                        </p>
                        <p class="account-form-row">
                            <input value="<?php echo e(auth()->user()->email); ?>" type="email" class="input text" name="account-email" id="account_email" autocomplete="email" readonly>
                        </p>
                        <div class="account-buttons">
                            <button class="account-btn confirm" type="submit" name="confirm_account_details" value="confirm">
                                <?php echo e(Trans::__('confirm', 'Confirm')); ?></button>
                            <a href="<?php echo e(route('profile.home')); ?>" class="account-btn cancel" type="submit" name="cancel_account_details" value="cancel"><?php echo e(Trans::__('cancel', 'cancel')); ?></a>
                        </div>
                    </form>
                    <form class="edit-account" action="<?php echo e(route('profile.account.update')); ?>" method="post">
                        <?php echo csrf_field(); ?>
                        <div class="r1-title-wrapper personal-info-title">
                            <h5>
                                <span><?php echo e(Trans::__('profile.password_change', 'password change')); ?></span>
                            </h5>
                        </div>
                        <?php $__errorArgs = ['password_current'];
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
                        <p class="account-form-row">
                            <input placeholder="Current password" type="password" class="input-text" name="password_current" id="account_password_current" autocomplete="off" required>
                        </p>
                        <?php $__errorArgs = ['password'];
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
                        <p class="account-form-row">
                            <input placeholder="New password" type="password" class="input-text" name="password" id="account_password_new" autocomplete="off" required>
                            <span class="show-password-input"></span>
                        </p>
                        <?php $__errorArgs = ['password_confirmation'];
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
                        <p class="account-form-row">
                            <input placeholder="Confirm new password" type="password" class="input-text" name="password_confirmation" id="account_password_new2" autocomplete="off" required>
                        </p>
                        <div class="account-buttons">
                            <button class="account-btn confirm" type="submit" name="password_change" value="confirm">
                                <?php echo e(Trans::__('confirm', 'Confirm')); ?></button>
                            <a href="<?php echo e(route('profile.home')); ?>" class="account-btn cancel" type="submit" name="cancel_account_details" value="cancel"><?php echo e(Trans::__('cancel', 'cancel')); ?></a>
                        </div>
                    </form>
                </div>
            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/profile/account/edit.blade.php ENDPATH**/ ?>