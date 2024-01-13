<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-products divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title"><?php echo e(Trans::__('catalog', 'Catalog')); ?></h2>
                    <h4 class="r1-subtitle"><span><?php echo e(Trans::__('search')); ?></span></h4>
                </div>

                <?php if($products->count()): ?>

                    <?php echo $__env->make('partials._products', ['hideFilter' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

                <?php else: ?>
                <div class="failded-search">
                    <h3><?php echo e(Trans::__('search_failed')); ?></h3>

                    <p><?php echo e(Trans::__('search_try_more')); ?></p>
                </div>

                <?php endif; ?>

            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/search/index.blade.php ENDPATH**/ ?>