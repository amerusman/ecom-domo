<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <?php echo $__env->make('profile.partials.menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-address divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title"><?php echo e(Trans::__('profile.address', 'address')); ?></h2>
                    <h4 class="r1-subtitle"><span><?php echo e(Trans::__('profile.additional_address', 'additional address')); ?></span></h4>
                </div>
                <form method="POST" action="<?php echo e(route('profile.addresses.store')); ?>">
                    <?php echo csrf_field(); ?>
                    <?php echo $__env->make('profile.addresses.partials._form', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </form>
            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/profile/addresses/create.blade.php ENDPATH**/ ?>