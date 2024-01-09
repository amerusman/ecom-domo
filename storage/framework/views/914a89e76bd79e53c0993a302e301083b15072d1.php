<div class="col-wrapper section-address__form">
    <div class="first-col">
        <div class="form-row">
            <label class="required"  for="phone"><?php echo e(Trans::__('phone')); ?></label>
            <input class="form-control <?php echo e($errors->has('phone') ? 'is-invalid' : ''); ?>" type="text" name="phone" id="phone" value="<?php echo e(old('phone', isset($address) ? $address->phone : '')); ?>" required>
            <?php if($errors->has('phone')): ?>
                <span class="text-danger"><?php echo e($errors->first('phone')); ?></span>
            <?php endif; ?>
        </div>
        <div class="form-row">
            <label class="required" for="address_1"><?php echo e(Trans::__('address')); ?></label>
            <input class="form-control <?php echo e($errors->has('address_1') ? 'is-invalid' : ''); ?>" type="text" name="address_1" id="address_1" value="<?php echo e(old('address_1', isset($address) ? $address->address_1 : '')); ?>" required>
            <?php if($errors->has('address_1')): ?>
                <span class="text-danger"><?php echo e($errors->first('address_1')); ?></span>
            <?php endif; ?>
        </div>
        <div class="form-row">
            <label class="required" for="country_id"><?php echo e(Trans::__('country')); ?></label>
            <select class="form-control select2 <?php echo e($errors->has('country') ? 'is-invalid' : ''); ?>" name="country_id" id="country_id" required>
                <option value=""><?php echo e(Trans::__('profile.select_country')); ?></option>
                <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <option value="<?php echo e($id); ?>" <?php echo e((isset($address) && $address->country_id == $id) || old('country_id') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
            <?php if($errors->has('country')): ?>
                <span class="text-danger"><?php echo e($errors->first('country')); ?></span>
            <?php endif; ?>
        </div>
    </div>
    <div class="second-col">
        <div class="form-row">
            <label class="required" for="state"><?php echo e(Trans::__('state')); ?></label>
            <input class="form-control <?php echo e($errors->has('state') ? 'is-invalid' : ''); ?>" type="text" name="state" id="state" value="<?php echo e(old('state', isset($address) ? $address->state : '')); ?>" required>
            <?php if($errors->has('state')): ?>
                <span class="text-danger"><?php echo e($errors->first('state')); ?></span>
            <?php endif; ?>
        </div>
        <div class="form-row">
            <label class="required" for="city"><?php echo e(Trans::__('city')); ?></label>
            <input class="form-control <?php echo e($errors->has('city') ? 'is-invalid' : ''); ?>" type="text" name="city" id="city" value="<?php echo e(old('city', isset($address) ? $address->city : '')); ?>" required>
            <?php if($errors->has('city')): ?>
                <span class="text-danger"><?php echo e($errors->first('city')); ?></span>
            <?php endif; ?>
        </div>
        <div class="form-row">
            <label class="required"  for="zip"><?php echo e(Trans::__('zip')); ?></label>
            <input class="form-control <?php echo e($errors->has('zip') ? 'is-invalid' : ''); ?>" type="text" name="zip" id="zip" value="<?php echo e(old('zip', isset($address) ? $address->zip : '')); ?>" required>
            <?php if($errors->has('zip')): ?>
                <span class="text-danger"><?php echo e($errors->first('zip')); ?></span>
            <?php endif; ?>
        </div>
    </div>
</div>
<div class="checkbox-wrapper">
    <input type="hidden" name="default" value="0">
    <input type="checkbox" name="default" id="default" value="1" <?php echo e((isset($address) && $address->default) || old('default', 0) == 1 ? 'checked' : ''); ?>>
    <label for="default"><?php echo e(Trans::__('profile.set_as_default_shipping', 'Set as default shipping address')); ?></label>
</div>
<div class="address-btns">
    <button type="submit" class="r1-button"><?php echo e(Trans::__('confirm', 'Confirm')); ?></button>
    <a href="<?php echo e(route('profile.addresses.index')); ?>" class="r1-button"><?php echo e(Trans::__('cancel', 'cancel')); ?></a>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/profile/addresses/partials/_form.blade.php ENDPATH**/ ?>