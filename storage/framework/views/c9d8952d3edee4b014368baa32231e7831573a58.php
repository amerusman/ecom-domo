<span class="r1-popup__close">×
            <span><?php echo e(Trans::do('close', 'checkout')); ?></span>
        </span>

<?php if(Cart::quantity()): ?>
    <div class="r1-title-wrapper">
        <h3 class="r1-title"><?php echo e(Trans::do('My shopping cart', 'checkout')); ?></h3>
        <!-- <p class="product-qty"><?php echo e(Cart::quantity()); ?> product</p> -->
    </div>

    <div class="r1-shopping-cart-details">
        <?php $__currentLoopData = Cart::products(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="cart-item product" data-id="<?php echo e($product->id); ?>">
                <div class="product-img">
                    <?php if($product->photos->first()): ?>
                        <img src="<?php echo e($product->photos->first()->preview); ?>" alt="<?php echo e($product->name); ?>">
                    <?php endif; ?>
                </div>
                <div class="product-info">
                    <h5><?php echo e($product->name); ?></h5>
                    <h6><?php echo e($product->brand->name); ?></h6>
                    <div class="product-price">
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
                    
                    <p class="qty">QTY: <span><?php echo e($product->quantity); ?></span></p>
                </div>
                <div class="product-control">
                    <i class="trash" type="button" data-action="cart-remove"></i>
                    <i class="wish" type="button" data-action="cart-favorites"></i>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <div class="total">
            <p><?php echo e(Trans::do('Total price (incl. tax)', 'checkout')); ?></p>
            <span class="price-amount">
                    <bdi>
                        <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => ['class' => 'currency-symbol']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'currency-symbol']); ?><?php echo e(Cart::total()); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
                    </bdi>
                </span>
        </div>
    </div>
    <div class="shopping-cart-summary-buttons">
        <a href="<?php echo e(route('cart.index')); ?>"
           class="r1-button"><?php echo e(Trans::do('View my shopping cart', 'checkout')); ?></a>
        <a href="<?php echo e(route('checkout.index')); ?>"
           class="r1-button"><?php echo e(Trans::do('Continue Checkout', 'checkout')); ?></a>
    </div>
<?php else: ?>
    <div class="r1-title-wrapper">
        <h3 class="r1-title"><?php echo e(Trans::do('Cart is empty', 'checkout')); ?></h3>
    </div>
<?php endif; ?>

<?php /**PATH /var/www/italyskincare.com/resources/views/partials/_cart.blade.php ENDPATH**/ ?>