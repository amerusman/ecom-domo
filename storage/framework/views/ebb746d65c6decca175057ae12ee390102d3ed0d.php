<?php $__env->startSection('content'); ?>
    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-login divider">
                <div class="r1-title-wrapper">
                    <h1 class="h2 r1-title"><?php echo e(Trans::do('Log in or create an account', 'auth')); ?></h1>
                </div>
                <div class="r1-section-login__col login">
                    <h5><span><?php echo e(__('global.login')); ?></span></h5>
                    <?php if(session()->has('message')): ?>
                        <p class="alert alert-info">
                            <?php echo e(session()->get('message')); ?>

                        </p>
                    <?php endif; ?>
                    <form action="<?php echo e(route('login')); ?>" method="POST">
                        <?php echo csrf_field(); ?>
                        <div class="form-row">
                            <input id="email1" type="email" class="<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" required autocomplete="email" autofocus placeholder="<?php echo e(__('global.login_email')); ?>" name="email" value="<?php echo e(old('email', null)); ?>">

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
                        <div class="form-row">
                            <input id="password1" type="password" class="<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password" required placeholder="<?php echo e(__('global.login_password')); ?>">
                            <span class="show-password-input"></span>
                        </div>
                        <div class="form-row checkbox-wrapper">
                            <input type="checkbox" name="remember" id="remember">
                            <label for="remember"><?php echo e(__('global.remember_me')); ?></label>
                            <button type="submit" class="r1-button" id="login" disabled="disabled"><?php echo e(Trans::do('Sign in to your account', 'auth')); ?></button>
                            <div class="social-media-buttons">
                                <a href="<?php echo e(route('login.google')); ?>" class="google" type="button"><?php echo e(Trans::do('Login with Google', 'auth')); ?></a>
                                <a href="<?php echo e(route('login.facebook')); ?>" class="facebook" type="button"><?php echo e(Trans::do('Login with Facebook', 'auth')); ?></a>
                            </div>
                        </div>
                        <div class="form-row type-checkbox">
                            <a href="javascript:;" class="lost-password r1-popup-trigger" data-popup="lost-password"><?php echo e(__('global.forgot_password')); ?></a>
                        </div>
                    </form>
                </div>
                <div class="r1-section-login__col registration">
                    <div class="registration-wrapper">
                        <form action="/">
                            <h5><span><?php echo e(Trans::do('Dont have an account yet?', 'auth')); ?></span></h5>
                            <button type="submit" class="r1-button create-account"><?php echo e(Trans::do('Create an account', 'auth')); ?></button>
                        </form>
                    </div>
                    <div class="registration-wrapper">
                        <h5><span><?php echo e(Trans::do('registration', 'auth')); ?></span></h5>
                        <form method="POST" action="<?php echo e(route('register')); ?>">
                            <?php echo csrf_field(); ?>
                            <div class="form-row">
                                <input id="email2" type="email" name="email" placeholder="<?php echo e(__('global.login_email')); ?>" class="<?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" value="<?php echo e(old('email')); ?>" required autocomplete="email" />
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
                            <div class="form-row">
                                <input placeholder="<?php echo e(__('global.first_name')); ?>" type="text" class="input-text<?php echo e($errors->has('firstname') ? 'is-invalid' : ''); ?>" name="firstname" id="firstname" autocomplete="given-name" value="<?php echo e(old('firstname')); ?>" required>
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
                            <div class="form-row">
                                <input placeholder="<?php echo e(__('global.last_name')); ?>" type="text" class="input-text<?php echo e($errors->has('lastname') ? 'is-invalid' : ''); ?>" name="lastname" id="lastname" autocomplete="family-name" value="<?php echo e(old('lastname')); ?>" required>
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
                            </div>
                            <div class="form-row">
                                <input id="password2" type="password" placeholder="<?php echo e(__('global.login_password')); ?>" class="<?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="password" required autocomplete="new-password" />
                                <span class="show-password-input"></span>
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
                            </div>
                            <div class="form-row">
                                <input id="password-confirm" type="password" placeholder="<?php echo e(__('global.login_password_confirmation')); ?>"  name="password_confirmation" required autocomplete="new-password" />
                            </div>
                            <button type="submit" class="r1-button"><?php echo e(__('global.register')); ?></button>
                        </form>
                    </div>
                    
                </div>
            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

    <?php echo $__env->make('auth.partials._password-reset', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/auth/register.blade.php ENDPATH**/ ?>