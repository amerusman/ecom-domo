<div class="form-group">
    <label class="required" for="firstname"><?php echo e(trans('cruds.user.fields.firstname')); ?></label>
    <input class="form-control <?php echo e($errors->has('firstname') ? 'is-invalid' : ''); ?>" type="text" name="firstname" id="firstname" value="<?php echo e(old('firstname', isset($user) ? $user->firstname : null)); ?>" required>
    <?php if($errors->has('firstname')): ?>
        <span class="text-danger"><?php echo e($errors->first('firstname')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.user.fields.firstname_helper')); ?></span>
</div>
<div class="form-group">
    <label class="" for="lastname"><?php echo e(trans('cruds.user.fields.lastname')); ?></label>
    <input class="form-control <?php echo e($errors->has('lastname') ? 'is-invalid' : ''); ?>" type="text" name="lastname" id="lastname" value="<?php echo e(old('lastname', isset($user) ? $user->lastname : null)); ?>">
    <?php if($errors->has('lastname')): ?>
        <span class="text-danger"><?php echo e($errors->first('lastname')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.user.fields.lastname_helper')); ?></span>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/users/partials/_form.blade.php ENDPATH**/ ?>