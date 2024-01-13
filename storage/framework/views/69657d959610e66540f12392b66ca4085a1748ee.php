<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-get-in-touch divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><?php echo e(Trans::__('get_in_touch', 'Get in touch')); ?></h2>
                    <?php if(Session::has('success')): ?>
                        <div class="success" data-role="success-massage">
                            <h4 class="r1-subtitle"><span><?php echo e(Trans::__('thank_you_for_message', 'Thank you for message')); ?></span></h4>
                        </div>
                    <?php else: ?>
                        <h4 class="r1-subtitle"><span><?php echo e(Trans::__('for_info_request', 'For any information or request fill out the form')); ?></span></h4>
                        <?php if($errors->any()): ?>
                            <div class="alert alert-danger">
                                <ul>
                                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li><?php echo e($error); ?></li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                        <?php endif; ?>
                </div>
                <form action="<?php echo e(route('message.store')); ?>" method="post">
                    <?php echo csrf_field(); ?>
                    <div class="col-wrapper">
                        <div class="first-col">
                            <div class="form-row">
                                <label for="firstname"></label>
                                <input type="text" placeholder="<?php echo e(__('global.first_name')); ?>" class="input-text<?php echo e($errors->has('firstname') ? 'is-invalid' : ''); ?>" name="firstname" id="firstname" autocomplete="given-name" value="<?php echo e(old('firstname')); ?>" required>
                            </div>
                            <div class="form-row">
                                <label for="lastname"></label>
                                <input placeholder="<?php echo e(__('global.last_name')); ?>" type="text" class="input-text" name="lastname" id="lastname" autocomplete="family-name" value="<?php echo e(old('lastname')); ?>" required>
                            </div>
                        </div>
                        <div class="second-col">
                            <div class="form-row">
                                <label for="email"></label>
                                <input type="email" name="email" placeholder="<?php echo e(Trans::__('email')); ?>" required/>
                            </div>
                            <div class="form-row">
                                <label for="phone"></label>
                                <input type="tel" name="phone" placeholder="<?php echo e(Trans::__('phone')); ?>"/>
                            </div>
                        </div>
                    </div>

                    <div class="textarea-block">
                        <div class="form-row">
                            <label for="text"></label>
                            <textarea name="message" placeholder="<?php echo e(Trans::__('write_your_message', 'Write your message here...')); ?>" rows="4" required><?php echo e(old('message')); ?></textarea>
                        </div>
                        <div class="form-row">
                            <input type="checkbox" id="authorize" name="authorize" required checked="checked"
                                    aria-invalid="true"/>
                            <label for="authorize"><?php echo e(Trans::__('personal_data_processing', 'I authorize the processing of my personal data. (NB if
                                consent is not provided, the request cannot be sent) The owner and manager of
                                the data collected is Domo Cosmetics Shop')); ?></label>
                        </div>
                        <div class="form-row">
                            <?php echo RecaptchaV3::initJs(); ?>


                            <?php echo RecaptchaV3::field('store'); ?>

                        </div>
                    </div>
                    <button type="submit" class="r1-button"><?php echo e(Trans::__('contact_us', 'Contact us')); ?></button>
                </form>
                    <?php endif; ?>

            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/messages/create.blade.php ENDPATH**/ ?>