<?php $__env->startSection('content'); ?>
    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-login reset-password divider">
                <div class="r1-title-wrapper">
                    <h1 class="h2 r1-title"><?php echo e(Trans::__('reset_password_page')); ?></h1>
                </div>

            <form method="POST" action="<?php echo e(route('password.request')); ?>">
                <?php echo csrf_field(); ?>

                <div class="r1-title-wrapper">
                    <h5><span><?php echo e(Trans::__('create_new_password')); ?></span></h5>
                </div>

                <input name="token" value="<?php echo e($token); ?>" type="hidden">

                <div>
                    <div class="form-group">
                        <label for="email"><?php echo e(trans('global.login_email')); ?> :</label>
                        <input id="email" type="email" class="form-control<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" name="email" value="<?php echo e($email ?? old('email')); ?>" required autocomplete="email" autofocus>

                        <?php if($errors->has('email')): ?>
                            <span class="text-danger">
                                <?php echo e($errors->first('email')); ?>

                            </span>
                        <?php endif; ?>
                    </div>
                    <div class="form-group">
                        <label for="password"><?php echo e(Trans::__('new_password')); ?> :</label>
                        <input id="password" type="password" class="form-control<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password" required>
                        <span class="show-password-input"></span>

                        <?php if($errors->has('password')): ?>
                            <span class="text-danger">
                                <?php echo e($errors->first('password')); ?>

                            </span>
                        <?php endif; ?>
                    </div>
                    <div class="form-group">
                        <label for="password-confirm"><?php echo e(trans('global.login_password_confirmation')); ?> :</label>
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    </div>
                </div>
                <button type="submit" class="r1-button"><?php echo e(Trans::__('continue')); ?></button>

            </form>

            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/auth/passwords/reset.blade.php ENDPATH**/ ?>