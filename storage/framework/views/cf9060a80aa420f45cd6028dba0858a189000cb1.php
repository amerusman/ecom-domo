<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.create')); ?> <?php echo e(trans('cruds.coupon.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.coupons.store")); ?>" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="name"><?php echo e(trans('cruds.coupon.fields.name')); ?></label>
                <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', '')); ?>" required>
                <?php if($errors->has('name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.name_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="code"><?php echo e(trans('cruds.coupon.fields.code')); ?></label>
                <input class="form-control <?php echo e($errors->has('code') ? 'is-invalid' : ''); ?>" type="text" name="code" id="code" value="<?php echo e(old('code', '')); ?>" required>
                <?php if($errors->has('code')): ?>
                    <span class="text-danger"><?php echo e($errors->first('code')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.code_helper')); ?></span>
            </div>
            <div class="form-group">
                <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
                    <input type="hidden" name="active" value="0">
                    <input class="form-check-input" type="checkbox" name="active" id="active" value="1" <?php echo e(old('active', 0) == 1 || old('active') === null ? 'checked' : ''); ?>>
                    <label class="form-check-label" for="active"><?php echo e(trans('cruds.coupon.fields.active')); ?></label>
                </div>
                <?php if($errors->has('active')): ?>
                    <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.active_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="start_at"><?php echo e(trans('cruds.coupon.fields.start_at')); ?></label>
                <input class="form-control datetime <?php echo e($errors->has('start_at') ? 'is-invalid' : ''); ?>" type="text" name="start_at" id="start_at" value="<?php echo e(old('start_at')); ?>">
                <?php if($errors->has('start_at')): ?>
                    <span class="text-danger"><?php echo e($errors->first('start_at')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.start_at_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="expiry_at"><?php echo e(trans('cruds.coupon.fields.expiry_at')); ?></label>
                <input class="form-control datetime <?php echo e($errors->has('expiry_at') ? 'is-invalid' : ''); ?>" type="text" name="expiry_at" id="expiry_at" value="<?php echo e(old('expiry_at')); ?>">
                <?php if($errors->has('expiry_at')): ?>
                    <span class="text-danger"><?php echo e($errors->first('expiry_at')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.expiry_at_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="discount"><?php echo e(trans('cruds.coupon.fields.discount')); ?></label>
                <input class="form-control <?php echo e($errors->has('discount') ? 'is-invalid' : ''); ?>" type="number" name="discount" id="discount" value="<?php echo e(old('discount', '')); ?>" step="1" required>
                <?php if($errors->has('discount')): ?>
                    <span class="text-danger"><?php echo e($errors->first('discount')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.discount_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="limit"><?php echo e(trans('cruds.coupon.fields.limit')); ?></label>
                <input class="form-control <?php echo e($errors->has('limit') ? 'is-invalid' : ''); ?>" type="number" name="limit" id="limit" value="<?php echo e(old('limit', '')); ?>" step="1">
                <?php if($errors->has('limit')): ?>
                    <span class="text-danger"><?php echo e($errors->first('limit')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.limit_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="limit_user"><?php echo e(trans('cruds.coupon.fields.limit_user')); ?></label>
                <input class="form-control <?php echo e($errors->has('limit_user') ? 'is-invalid' : ''); ?>" type="number" name="limit_user" id="limit_user" value="<?php echo e(old('limit_user', '')); ?>" step="1">
                <?php if($errors->has('limit_user')): ?>
                    <span class="text-danger"><?php echo e($errors->first('limit_user')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.coupon.fields.limit_user_helper')); ?></span>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="submit">
                    <?php echo e(trans('global.save')); ?>

                </button>
            </div>
        </form>
    </div>
</div>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/coupons/create.blade.php ENDPATH**/ ?>