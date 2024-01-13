<?php $__env->startSection('title'); ?>
    <?php echo e($product->brand->name); ?> <?php echo e($product->name); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('description'); ?>
    <?php echo e($product->brief); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>

<!-- .page-wrapper -->
<div class="page-wrapper r1-container">

    <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <!-- \.r1-breadcrumbs -->
<!--     <nav class="r1-breadcrumbs">
        <ul>
            <li><a href="/<?php echo e(app()->getLocale()); ?>">Home</a></li>
            <li><a href="<?php echo e(route('brands.show', $product->brand)); ?>"><?php echo e($product->brand->name); ?></a></li>
            <?php $__currentLoopData = $product->categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li><a href="<?php echo e(route('category', $category)); ?>"><?php echo e($category->name); ?></a></li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <li><a href="#"><?php echo e($product->brand->name); ?> <?php echo e($product->name); ?></a></li>
        </ul>
    </nav> -->
    <!-- \.r1-breadcrumbs -->

    <!-- .r1-main -->
    <main class="r1-main">
        <section class="r1-section-single-product divider">
            <h2 class="product-code"><?php echo e($product->sku); ?></h2>
            <h1 class="product-title"><?php echo e($product->brand->name); ?> <?php echo e($product->name); ?></h1>
            <div class="product-main-content product" data-id="<?php echo e($product->id); ?>">
                <div class="product-main-content__image">
                    <i class="add-to-wishlist <?php if($product->is_favorite): ?>added active <?php endif; ?>" data-action="favorites"></i>
                    <?php if($product->on_sale && $product->discount): ?>
                        <span class="discount">-<?php echo e($product->discount); ?>%</span>
                    <?php endif; ?>
                    <div class="image-carousel">
                        <?php $__currentLoopData = $product->photos; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $photo): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="image-carousel__slide">
                            <img src="<?php echo e($photo->show); ?>" alt="<?php echo e($product->name); ?>" />
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                    <div class="custom-pagination">
                        <span class="current">1</span>
                        <span><?php echo e(Trans::__('product.of', 'of')); ?></span>
                        <span class="all"></span>
                    </div>
                </div>
                <div class="product-main-content__description">
                    <?php if($product->in_stock): ?>
                        <div class="stock in-stock"><?php echo e(Trans::__('product.in_stock', 'in stock')); ?></div>
                    <?php else: ?>
                        <div class="stock out-stock"><?php echo e(Trans::__('product.out_of_stock', 'out of stock')); ?></div>
                    <?php endif; ?>
                    <div class="rating">
                        <div class="stars stars-<?php echo e($product->rating); ?>">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                            </svg>
                        </div>
                        <div class="reviews"><?php echo e($product->reviews()->count()); ?> <?php echo e(__('web.reviews')); ?></div>
                    </div>
                    <div class="product-brief">
                        <h5><?php echo e($product->brief); ?></h5>
                    </div>
                    <?php if($product->in_stock): ?>
                        <form class="cart" action="javascript:void(null)">
                            <div class="attributes">
                                <div class="quantity">
                                    <label for="qty"><?php echo e(Trans::__('product.qty', 'Qty')); ?></label>
                                    <button type="button" class="minus">-</button>
                                    <input id="qty" type="number" value="1" min="1" />
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="size">
                                    
                                </div>
                            </div>

                            <div class="price">
                                <?php if($product->on_sale): ?>
                                    <del><?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => ['class' => 'currency']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'currency']); ?><?php echo e($product->regular_price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?></del>
                                <?php endif; ?>
                                <ins><?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => ['class' => 'currency']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'currency']); ?><?php echo e($product->price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?></ins>
                            </div>

                            <div class="buttons">
                                <button class="buy-now" type="button" data-id="<?php echo e($product->id); ?>" data-action="buy-now" data-location="<?php echo e(route('cart.index')); ?>"><?php echo e(Trans::__('product.buy', 'buy')); ?></button>
                                <button class="add-to-cart" type="submit" data-id="<?php echo e($product->id); ?>" data-action="add-to-cart"><?php echo e(Trans::__('product.add_to_cart', 'Add to cart')); ?></button>
                            </div>
                        </form>
                    <?php else: ?>
                        <div class="outstock-product-container">
							<div class="notification">
								<p><?php echo e(Trans::__('product.notify_me_stock', 'Notify me when the product is back in stock')); ?></p>
							</div>
							<form class="mail-notification" action="">
								<input type="email" name="useremail" placeholder="Email">
								<button class="inform" type="submit"><?php echo e(Trans::__('product.inform_me', 'inform me')); ?></button>
							</form>
							<div class="price">
                                <?php if($product->on_sale): ?>
                                    <del><?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => ['class' => 'currency']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'currency']); ?><?php echo e($product->regular_price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?></del>
                                <?php endif; ?>
                                <ins><?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.price','data' => ['class' => 'currency']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('price'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'currency']); ?><?php echo e($product->price); ?> <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?></ins>
							</div>
						</div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="product-tabs">
                <ul class="product-tabs__list">
                    <li class="active" data-tab="about">
                        <a href="javascript:;"><?php echo e(Trans::__('product.about_product', 'About product')); ?></a>
                    </li>
                    <li data-tab="specifications">
                        <a href="javascript:;"><?php echo e(Trans::__('product.specifications', 'Specifications')); ?></a>
                    </li>
                    <li data-tab="reviews">
                        <a href="javascript:;"><?php echo e(Trans::__('product.reviews', 'Reviews')); ?> <?php echo e($product->reviews()->count()); ?></a>
                    </li>
                </ul>
                <div class="product-tabs__content active" data-tab="about" style="display: block;">
                    <?php echo $product->description; ?>

                </div>
                <div class="product-tabs__content" data-tab="specifications" style="display: none;">
                    <ul>
                        <li>
                            <p><?php echo e(Trans::__('Brand')); ?></p>
                            <p><?php echo e($product->brand->name); ?></p>
                        </li>
                        <?php $__currentLoopData = $product->specifications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $specification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <li>
                                <p><?php echo e($specification['name']); ?></p>
                                <p>
                                    <?php echo e($specification['value']); ?>

                                    <?php echo e($specification['unit']); ?>

                                </p>
                            </li>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </ul>
                </div>
                <div class="product-tabs__content" data-tab="reviews" style="display: none;">
                    <div class="product-reviews">
                        <?php $__currentLoopData = $reviews; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $review): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="product-reviews__item">
                            <div class="product-reviews__item__meta">
                                <div class="author"><?php echo e($review->name); ?></div>
                                <div class="date"><?php echo e($review->created_at->format("j M Y")); ?></div>
                            </div>
                            <div class="product-reviews__item__main">
                                <img src="/img/default-user.svg" alt="reviewr" />
                                <div class="stars stars-<?php echo e($review->rating); ?>">
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                    </svg>
                                </div>
                                <div class="text">
                                    <p>
                                        <?php echo e($review->body); ?>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                    <?php echo e($reviews); ?>

                    <?php if(auth()->guard()->check()): ?>
                        <?php if(0 == auth()->user()->reviews()->where('product_id', $product->id)->count()): ?>
                        <div class="success" role="success-massage" style="display: none;">
                            <h5><span><?php echo e(Trans::__('product.thank_you_for_review', 'Thank you for review. Review will appear after moderation.')); ?></span></h5>
                        </div>
                    <form action="<?php echo e(route('profile.reviews.store')); ?>" method="POST" class="review-form divider" data-action="reviews.create">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="product_id" value="<?php echo e($product->id); ?>">
                        <div class="alert alert-danger" style="display: none;"  role="alert">

                        </div>
                        <div class="stars">
                            <p><?php echo e(__('web.general_impression')); ?>:</p>
                            <div class="stars-rating">
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2615 0.277527L13.1623 6.47515L20.2476 7.18736L14.955 11.7299L16.4333 18.3677L10.2615 14.9775L4.08979 18.3677L5.56807 11.7299L0.275442 7.18736L7.36082 6.47515L10.2615 0.277527Z" fill="#e9e3e3"/>
                                </svg>
                            </div>
                            <input id='review-rating' type="hidden" name="rating" />
                        </div>
                        <div class="form-row">
                            <textarea name="body" cols="30" rows="4" placeholder="<?php echo e(Trans::__('Description')); ?>" required></textarea>
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="<?php echo e(Trans::__('Your Name')); ?>" value="<?php echo e(auth()->user()->name); ?>" name="name" required />
                        </div>
                        <button type="submit" class="r1-button"><?php echo e(Trans::__('product.add_feedback', 'add feedback')); ?></button>
                    </form>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
            </div>
        </section>


        <section class="r1-section-products divider">
            <div class="r1-title-wrapper">
                <h4 class="r1-subtitle"><span><?php echo e(Trans::__('product.last_viewed', 'Last viewed')); ?></span></h4>
            </div>

            <?php echo $__env->renderWhen($lastViewedProducts, 'partials._products', ['products' => $lastViewedProducts, 'hideFilter' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path'])); ?>


        </section>


        <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    </main>
    <!-- \.r1-main -->

</div>
<!-- \.page-wrapper -->


<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/products/show.blade.php ENDPATH**/ ?>