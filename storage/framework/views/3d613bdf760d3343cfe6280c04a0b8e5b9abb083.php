<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-about divider">
                <div class="section-about__row checkout">
                    <div class="r1-title-wrapper">
                        <h1 class="h2 r1-title"><?php echo e(Trans::do('Checkout success', 'checkout')); ?></h1>
                        
                        <h4 class="r1-subtitle"><span><?php echo e(Trans::do('Thank you for your purchase!', 'checkout')); ?></span></h4>
                    </div>
                    <div class="checkout-notification">
                        <h3>Your order is <?php echo e($orderId); ?></h3>
                        <p><?php echo e(Trans::__('checkout.success_info', 'You will receive an order confirmation email with details of your order and tracking info.')); ?></p>
                    </div>
                </div>


            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/checkout/success.blade.php ENDPATH**/ ?>