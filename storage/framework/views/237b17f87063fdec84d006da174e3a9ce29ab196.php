<?php $__env->startSection('content'); ?>

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <?php echo $__env->make('profile.partials.menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="r1-section-account divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title"><span><?php echo e(Trans::__('profile.my_orders', 'My orders')); ?></span></h2>
                </div>

                <?php if($orders->count()): ?>
                    <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="r1-order-info-review-wrapper">
                            <div class="r1-order-info-wrapper">
                                <div class="order-additional-info order-<?php echo e($order->status); ?>">
                                    <img src="/img/<?php echo e($order->status); ?>.png" alt="<?php echo e($order->status); ?>">
                                    <div class="order-number-date-process">
                                        <div class="order-number-date">
                                            <span> № <?php echo e($order->id); ?></span>
                                            <time class="entry-date" datetime=""><?php echo e($order->paid_at->format("M d, Y")); ?></time>
                                        </div>
                                        <div class="order-process order-processing"><?php echo e($order->status); ?></div>
                                    </div>
                                </div>
                                <div class="order-price">
                                    <p class="order-price-message"><?php echo e(Trans::do('order price', 'profile')); ?></p>
                                    <div class="order-price-qty">
                            <span href="price-amount">
                                <bdi>
                                    <span class="currency-symbol"><?php echo $order->currency->sign; ?> </span><?php echo e($order->total); ?>

                                </bdi>
                            </span>
                                        <p class="order-qty-products">for <?php echo e(count($order->items)); ?> items</p>
                                    </div>
                                </div>
                                <div class="account-btn view">
                        <span>
                            <i><?php echo e(Trans::do('view', 'profile')); ?></i>
                            <svg width="15" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.2071 1.03247L6.75209 6.89026L1.29706 1.03247" stroke="#b0907b"/>
							</svg>
                        </span>
                                </div>
                            </div>
                            <div class="order-review" style="display:none;">
                                <table class="review-order-table">
                                    <thead>
                                    <tr>
                                        <th class="product-name"><?php echo e(Trans::__('profile.product_name')); ?></th>
                                        <th class="product-qty"><?php echo e(Trans::__('product.qty')); ?></th>
                                        <th class="product-total"><?php echo e(Trans::__('profile.total')); ?></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php $__currentLoopData = $order->items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr class="cart-item">
                                            <td class="product-name">
                                                <span><?php echo e($item['sku']); ?></span> <?php echo e(isset($item['name']) ? $item['name'] : ''); ?>

                                            </td>
                                            <td class="product-qty">x <?php echo e($item['quantity']); ?>;</td>
                                            <td class="product-total">
                                                <span class="price-amount">
                                                    <bdi>
                                                        <span class="currency-symbol"><?php echo $order->currency->sign; ?> </span><?php echo e($item['amount']); ?>

                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </tbody>
                                    <tfoot>
                                    <tr class="cart-subtotal">
                                        <th><?php echo e(Trans::__('checkout.subtotal')); ?></th>
                                        <td colspan="2">
                                    <span class="price-amount">
                                        <bdi>
                                            <span class="currency-symbol"><?php echo $order->currency->sign; ?> </span><?php echo e($order->sub_total); ?>

                                        </bdi>
                                    </span>
                                        </td>
                                    </tr>
                                    <tr class="shipping">
                                        <th><?php echo e(Trans::__('checkout.delivery')); ?></th>
                                        <td colspan="2">
                                        <span class="price-amount">
                                            <bdi>
                                                <span class="currency-symbol"><?php echo $order->currency->sign; ?> </span><?php echo e($order->shipping_total); ?>

                                            </bdi>
                                        </span>

                                        </td>
                                    </tr>
                                    <?php if($order->discount_total): ?>
                                    <tr class="shipping">
                                        <th><?php echo e(Trans::__('checkout.discount_coupon')); ?></th>
                                        <td colspan="2">
                                            <span class="price-amount">
                                                <bdi>
                                                    &ndash; <span class="currency-symbol"><?php echo $order->currency->sign; ?> </span><?php echo e($order->discount_total); ?>

                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                    <?php endif; ?>

                                    <tr class="payment-method">
                                        <th><?php echo e(Trans::__('checkout.payment_method', 'payment method')); ?></th>
                                        <th colspan="2">
                                            <?php echo e($order->paymentMethod); ?>

                                        </th>
                                    </tr>
                                    <tr class="order-total">
                                        <th><?php echo e(Trans::__('checkout.total')); ?></th>
                                        <td colspan="2">
                                    <span class="price-amount">
                                        <bdi>
                                            <span class="currency-symbol"><?php echo $order->currency->sign; ?> </span><?php echo e($order->total); ?>

                                        </bdi>
                                    </span>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                                <div class="order-adress-wrapper">
                                    <div class="billing-adress">
                                        <h3><?php echo e(Trans::do('billing address', 'profile')); ?></h3>
                                        <?php if($order->billing): ?>
                                        <p><?php echo e($order->billing['address_1']); ?> <?php echo e($order->billing['address_2']); ?></p>
                                        <p><?php echo e($order->billing['city']); ?>, <?php echo e($order->billing['state']); ?>, <?php echo e($order->billing['zip']); ?></p>
                                        <p><?php echo e(\App\Models\Country::find($order->billing['country_id'])->name); ?></p>
                                        <p><?php echo e($order->billing['phone']); ?></p>
                                        <?php endif; ?>
                                    </div>
                                    <div class="shipping-adress">
                                        <h3><?php echo e(Trans::do('shipping address', 'profile')); ?></h3>
                                        <p><?php echo e($order->shipping['address_1']); ?> <?php echo e($order->shipping['address_2']); ?></p>
                                        <p><?php echo e($order->shipping['city']); ?>, <?php echo e($order->shipping['state']); ?>, <?php echo e($order->shipping['zip']); ?></p>
                                        <p><?php echo e($order->country->name); ?></p>
                                        <p><?php echo e($order->shipping['phone']); ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php else: ?>
                    <div class="r1-order-empty-wrapper">
                        <div class="order-empty-info">
                            <div class="order-empty-info-message">
                                <img src="/img/info.png" alt="info">
                                <?php echo e(Trans::__('profile.no_orders_has_been_made', 'No orders has been made yet.')); ?>

                            </div>
                            <a class="btn-browse-products" href="<?php echo e(route('products.index')); ?>"><?php echo e(Trans::__('browse_products', 'browse products')); ?></a>
                        </div>
                    </div>
                <?php endif; ?>

            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/profile/orders/index.blade.php ENDPATH**/ ?>