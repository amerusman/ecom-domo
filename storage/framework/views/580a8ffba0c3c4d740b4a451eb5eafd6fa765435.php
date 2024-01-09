<?php if(!isset($hideFilter) || !$hideFilter): ?>
    <form role="products-order">
        <div class="r1-section-products__filter">
            <div class="filter">
                <span>Filter</span>
                <select class="order" name="order-by" id="order-by">
                    <option value=""><?php echo e(Trans::__('sort_by_newest', 'By newest')); ?></option>
                    <option value="rating" <?php if(request()->get('order-by') == 'rating'): ?> selected <?php endif; ?>><?php echo e(Trans::__('sort_by_rating', 'By rating')); ?></option>
                    <option value="price" <?php if(request()->get('order-by') == 'price'): ?> selected <?php endif; ?>><?php echo e(Trans::__('sort_by_price', 'By price')); ?></option>
                </select>
            </div>
            <div class="per-page">
                <span><?php echo e(Trans::do('Items per page')); ?></span>
                <select class="count" name="limit" id="limit">
                    <option value="16">16</option>
                    <option value="20" <?php if(request()->get('limit') == 20): ?> selected <?php endif; ?>>20</option>
                    <option value="24" <?php if(request()->get('limit') == 24): ?> selected <?php endif; ?>>24</option>
                </select>
            </div>

        </div>
    </form>
<?php endif; ?>

<div class="r1-products">
    <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="r1-product product" data-id="<?php echo e($product->id); ?>">
            <div class="r1-product__header">
                <i class="add-to-wishlist <?php if($product->is_favorite): ?>added active <?php endif; ?>" data-action="favorites"></i>
                <?php if($product->on_sale && $product->discount): ?>
                        <span class="discount">-<?php echo e($product->discount); ?>%</span>
                <?php endif; ?>
            </div>
            <a href="<?php echo e(route('products.show', $product)); ?>" class="r1-product__image">
                <?php if($product->photos->first()): ?>
                    <img src="<?php echo e($product->photos->first()->preview); ?>" alt="<?php echo e($product->name); ?>"/>
                <?php endif; ?>
            </a>
            <div class="r1-product__rating rating_<?php echo e($product->rating); ?>">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            <a href="<?php echo e(route('products.show', $product)); ?>" class="r1-product__content">
                <h5><?php echo e($product->name); ?></h5>
                <h6><?php echo e($product->categories->implode('name', ', ')); ?></h6>
            </a>
            <div class="product__price">
                <?php if($product->on_sale): ?>
                <del>
                    <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?><?php echo e($product->regular_price); ?> <?php echo $__env->renderComponent(); ?>
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
<?php $component->withAttributes([]); ?><?php echo e($product->price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
                </ins>
            </div>
            <?php if($product->in_stock): ?>
                <a href="#" class="r1-product__button" data-action="add-to-cart"></a>
            <?php else: ?> 
                <a href="<?php echo e(route('products.show', $product)); ?>" class="r1-product__view-button"></a>
            <?php endif; ?>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div>

<?php if(!isset($hideFilter) || !$hideFilter): ?>
<?php echo e($products); ?>

<?php endif; ?>
<?php /**PATH /var/www/italyskincare.com/resources/views/partials/_products.blade.php ENDPATH**/ ?>