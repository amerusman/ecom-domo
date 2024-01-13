<?php if(!Site::countrySelected()): ?>
<div class="r1-popup-wrapper active">
    <div class="r1-popup-overlay"></div>
    <div class="r1-popup form-popup" data-popup="region-selection">
        <span class="r1-popup__close">×</span>
        <div class="r1-title-wrapper">
            <h1 class="r1-title"><?php echo e(Trans::do('Welcome')); ?></h1>
        </div>
        <div>
            <p>
                <?php echo e(Trans::__('please_choose_your_location', 'Please choose your location from the drop-down below for your delivery options:')); ?>

            </p>
        </div>
        <form action="<?php echo e(route('profile.country')); ?>" class="r1-popup__form" method="post">
            <?php echo csrf_field(); ?>
            <div class="form-row">
                <select name="country" class="select2">
                    <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $country): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($id); ?>"><?php echo e($country); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>
            <button type="submit" class="r1-button"><?php echo e(Trans::do('Confirm')); ?></button>
        </form>
    </div>
</div>
<?php endif; ?>
<?php /**PATH /var/www/italyskincare.com/resources/views/partials/_country-selection.blade.php ENDPATH**/ ?>