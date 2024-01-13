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
                </div>
                <?php $__currentLoopData = $addresses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="r1-title-wrapper">
                    <h4 class="r1-subtitle">
                        <span>
                            <?php if($address->default): ?>
                                <?php echo e(Trans::__('profile.default_address', 'default address')); ?>

                            <?php else: ?>
                                <?php echo e(Trans::__('profile.additional_address', 'additional address')); ?>

                            <?php endif; ?>
                        </span>
                    </h4>
                </div>
                <form action="<?php echo e(route('profile.addresses.destroy', $address)); ?>" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="hidden" name="_token" value="<?php echo e(csrf_token()); ?>">
                    <div class="col-wrapper section-address__information">
                        <div class="first-col">
                            <div class="form-row">
                                <label for="phone"><?php echo e(Trans::__('phone')); ?></label>
                                <input type="tel" placeholder="<?php echo e($address->phone); ?>" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="address"><?php echo e(Trans::__('address')); ?></label>
                                <input type="text" placeholder="<?php echo e($address->address_1); ?>" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="country"><?php echo e(Trans::__('country')); ?></label>
                                <input type="text" placeholder="<?php echo e($address->country->name); ?>" readonly/>
                            </div>
                        </div>
                        <div class="second-col">
                            <div class="form-row">
                                <label for="state"><?php echo e(Trans::__('state')); ?></label>
                                <input type="text" placeholder="<?php echo e($address->state); ?>" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="city"><?php echo e(Trans::__('city')); ?></label>
                                <input type="text" placeholder="<?php echo e($address->city); ?>" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="zip"><?php echo e(Trans::__('zip')); ?></label>
                                <input type="text" placeholder="<?php echo e($address->zip); ?>" readonly/>
                            </div>
                        </div>
                    </div>
                    <div class="address-btns">
                        <a href="<?php echo e(route('profile.addresses.edit', $address)); ?>" class="r1-button"><?php echo e(Trans::__('edit', 'Edit')); ?></a>
                        <button type="submit" class="r1-button"><?php echo e(Trans::__('delete', 'Delete')); ?></button>
                    </div>
                </form>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <a href="<?php echo e(route('profile.addresses.create')); ?>" class="account-btn add-new"><?php echo e(Trans::__('profile.add_new_address', 'add new address')); ?></a>

            </section>

            <?php echo $__env->make('partials.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/profile/addresses/index.blade.php ENDPATH**/ ?>