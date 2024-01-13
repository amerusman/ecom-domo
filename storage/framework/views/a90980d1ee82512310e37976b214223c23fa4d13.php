<?php $__env->startSection('content'); ?>

<!-- .page-wrapper -->
<div class="page-wrapper r1-container">

    <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="r1-account-decorative-line"></div>
    <!-- .r1-main -->
    <main class="r1-main">
        <section class="section-about divider">
            <div class="section-about__row">
                <div class="r1-title-wrapper">
                    <h1 class="h2 r1-title"><?php echo e($page->title); ?></h1>

                </div>
                <div class="text">
                    <?php echo $page->body; ?>

                </div>
            </div>


        </section>

        <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    </main>
    <!-- \.r1-main -->

</div>
<!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/pages/show.blade.php ENDPATH**/ ?>