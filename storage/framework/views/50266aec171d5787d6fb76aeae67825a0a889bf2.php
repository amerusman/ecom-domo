<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <?php if(auth()->guard()->check()): ?>
            <?php echo $__env->make('profile.partials.menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <?php endif; ?>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-wishlist divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><?php echo e(Trans::__('profile.wish_list', 'wish list')); ?></h2>
                    <h4 class="r1-subtitle"><span><?php echo e(Trans::__('profile.saved_favorites', 'Saved favorites')); ?></span></h4>
                </div>
                <?php if($products->count()): ?>
                <form class="section-wishlist-items" action="<?php echo e(route('cart.bulk-add')); ?>" method="post" autocomplete="off" data-action="cart.bulk-add">
                    <?php echo csrf_field(); ?>
                    <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <input type="hidden" name="products[]" value="<?php echo e($product->id); ?>">
                    <div class="wishlist-item product">
						<a href="<?php echo e(route('products.show', $product)); ?>" class="product-img">
                            <?php if($product->photos->first()): ?>
                                <img src="<?php echo e($product->photos->first()->preview); ?>" alt="product">
                            <?php endif; ?>
						</a>
						<div class="product-info">
							<div class="product-info__name">
								<a href="<?php echo e(route('products.show', $product)); ?>">
									<h5><?php echo e($product->name); ?></h5>
								</a>
								<h6><?php echo e($product->brand->name); ?></h6>
							</div>

							<div class="product-info__price">
                                <?php if($product->on_sale): ?>
								<del><span><?php echo Site::currency()->sign; ?></span><?php echo e($product->regular_price); ?></del>
                                <?php endif; ?>
								<ins><span><?php echo Site::currency()->sign; ?></span><?php echo e($product->price); ?></ins>
							</div>
						</div>
						<div class="product-control">
							<div class="product-control__stock-status">
                                <?php if($product->in_stock): ?>
								    <p class="stock-status in-stock"><?php echo e(Trans::__('in_stock', 'In stock')); ?></p>
                                <?php else: ?>
                                    <p class="stock-status out-stock"><?php echo e(Trans::__('out_of_stock', 'Out of stock')); ?></p>
                                <?php endif; ?>
							</div>
							<div class="product-control__buttons">
								<button class="button-trash" type="button" value="<?php echo e($product->id); ?>" title="<?php echo e(Trans::__('remove', 'Remove')); ?>" data-action="wishlist-remove"></button>
                                <?php if($product->in_stock): ?>
								<button class="button-cart" type="button" value="<?php echo e($product->id); ?>" title="<?php echo e(Trans::__('profile.add_to_cart', 'add to cart')); ?>" data-action="wishlist-to-cart"></button>
                                <?php endif; ?>
							</div>
						</div>
					</div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
					<button type="submit" class="r1-button" name="favorite-action" value="all" title="<?php echo e(Trans::__('profile.add_all_to_cart', 'add all to cart')); ?>"><?php echo e(Trans::__('profile.add_all_to_cart')); ?></button>
                </form>
                <?php endif; ?>
            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/favorites/index.blade.php ENDPATH**/ ?>