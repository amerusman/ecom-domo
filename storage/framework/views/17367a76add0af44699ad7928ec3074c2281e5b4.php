<?php $__env->startSection('content'); ?>

<!-- .page-wrapper -->
<div class="page-wrapper r1-container">

    <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- <div class="r1-account-decorative-line"></div> -->
    <!-- .r1-main -->
    <main class="r1-main">
        <section class="r1-section-main">
            <div class="r1-section-main__header">
                <?php if($mainProduct): ?>
                    <h1 class="h2 rotating-title-h1" data="main-title">
                        <span><?php echo e($mainProductLine1); ?></span>
                        <span><?php echo e($mainProductLine2); ?></span>
                    </h1>
                <?php endif; ?>
                <?php if($banners): ?>
                    <?php $__currentLoopData = $banners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $banner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <h1 class="h2 rotating-title-h1" data="main-title" style="display: none;">
                            <span><?php echo e($banner->left_line_1); ?></span>
                            <span><?php echo e($banner->left_line_2); ?></span>
                        </h1>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
                <div class="image">
                    <?php if($mainProduct): ?>
                        <img src="<?php echo e($mainProduct->photos->first()->main); ?>" alt="<?php echo e($mainProduct->name); ?>" class="rotating-banner" />
                    <?php endif; ?>
                    <?php if($banners): ?>
                        <?php $__currentLoopData = $banners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $banner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <img src="<?php echo e($banner->image->show); ?>" alt="<?php echo e($banner->text); ?>" class="rotating-banner" />
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php endif; ?>
                </div>
                <?php if($mainProduct): ?>
                    <h2 class="rotating-title-h2" data="main-title">
                        <span><?php echo e($mainRightLine1); ?></span>
                        <span> <?php echo e($mainRightLine2); ?></span>
                    </h2>
                <?php endif; ?>
                <?php if($banners): ?>
                    <?php $__currentLoopData = $banners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $banner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <h2 class="rotating-title-h2" data="main-title" style="display: none;">
                            <span><?php echo e($banner->right_line_1); ?></span>
                            <span><?php echo e($banner->right_line_2); ?></span>
                        </h2>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
            </div>

            <?php if($mainProduct): ?>
                <div class="r1-section-main__header-button">
                    <a href="javascript:;" class="r1-popup-trigger" data-popup="info"><?php echo e(Trans::__('read_more')); ?></a>
                </div>
            <?php endif; ?>
        </section>


        <section class="r1-section-products divider">
            <div class="r1-title-wrapper">
                <h2 class="r1-title"><?php echo e(Trans::__('catalog', 'Catalog')); ?></h2>
                <h4 class="r1-subtitle"><span><?php echo e(Trans::__('all_products', 'All products')); ?></span></h4>
            </div>

            <?php echo $__env->make('partials._products', ['hideFilter' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

            <div class="r1-section-products__load">
                <a href="<?php echo e(route('products.index')); ?>" class="r1-button more">
                    <?php echo e(Trans::__('show_all')); ?></a>
            </div>
        </section>

        <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    </main>
    <!-- \.r1-main -->
</div>
<!-- \.page-wrapper -->

<!-- .r1-popup-wrapper -->
<?php if($mainProduct): ?>
<div class="r1-popup-wrapper" data-popup="info">
    <div class="r1-popup-overlay"></div>
    <div class="r1-popup product-popup" data-popup="info">
        <span class="r1-popup__close">×</span>
        <div class="r1-popup__content product" data-id="<?php echo e($mainProduct->id); ?>">
            <div class="popup__image">
                <img src="<?php echo e($mainProduct->photos->first()->main); ?>" alt="<?php echo e($mainProduct->name); ?>" />
            </div>
            <h2 class="product-brand"><span><?php echo e($mainProduct->brand->name); ?></span></h2>
            <h1 class="product-name"><?php echo e($mainProduct->name); ?></h1>
            <div class="product-info">
                <?php echo $mainProduct->description; ?>

            </div>
            <div class="product-control">
				<div class="product-control__price">
                    <?php if($mainProduct->on_sale): ?>
                    <del>
                        <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?><?php echo e($mainProduct->regular_price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
                    </del>
                    <?php endif; ?>
					<ins>
                        <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?><?php echo e($mainProduct->price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
                    </ins>
				</div>
                <?php if($mainProduct->in_stock): ?>
				    <a href="#" class="r1-product__button" data-action="add-to-cart"></a>
                <?php endif; ?>
				<a href="<?php echo e(route('products.show', $mainProduct)); ?>" class="r1-product__view-button"></a>
			</div>
        </div>
    </div>
</div>
<?php endif; ?>
<!-- \.r1-popup-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/index.blade.php ENDPATH**/ ?>