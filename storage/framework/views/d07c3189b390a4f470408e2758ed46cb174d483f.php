<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.edit')); ?> <?php echo e(trans('cruds.warehouse.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.warehouses.update", [$warehouse->id])); ?>" enctype="multipart/form-data">
            <?php echo method_field('PUT'); ?>
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="name"><?php echo e(trans('cruds.warehouse.fields.name')); ?></label>
                <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', $warehouse->name)); ?>" required>
                <?php if($errors->has('name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.warehouse.fields.name_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="email"><?php echo e(trans('cruds.warehouse.fields.email')); ?></label>
                <input class="form-control <?php echo e($errors->has('email') ? 'is-invalid' : ''); ?>" type="email" name="email" id="email" value="<?php echo e(old('email', $warehouse->email)); ?>">
                <?php if($errors->has('email')): ?>
                    <span class="text-danger"><?php echo e($errors->first('email')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.warehouse.fields.email_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="country_id"><?php echo e(trans('cruds.warehouse.fields.country')); ?></label>
                <select class="form-control select2 <?php echo e($errors->has('country') ? 'is-invalid' : ''); ?>" name="country_id" id="country_id">
                    <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($id); ?>" <?php echo e((old('country_id') ? old('country_id') : $warehouse->country->id ?? '') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php if($errors->has('country')): ?>
                    <span class="text-danger"><?php echo e($errors->first('country')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.warehouse.fields.country_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="language_id"><?php echo e(trans('cruds.warehouse.fields.language')); ?></label>
                <select class="form-control select2 <?php echo e($errors->has('language') ? 'is-invalid' : ''); ?>" name="language_id" id="language_id">
                    <?php $__currentLoopData = $languages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($id); ?>" <?php echo e((old('language_id') ? old('language_id') : $warehouse->language->id ?? '') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php if($errors->has('language')): ?>
                    <span class="text-danger"><?php echo e($errors->first('language')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.warehouse.fields.language_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="address"><?php echo e(trans('cruds.warehouse.fields.address')); ?></label>
                <textarea class="form-control <?php echo e($errors->has('address') ? 'is-invalid' : ''); ?>" name="address" id="address"><?php echo e(old('address', $warehouse->address)); ?></textarea>
                <?php if($errors->has('address')): ?>
                    <span class="text-danger"><?php echo e($errors->first('address')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.warehouse.fields.address_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="user_id"><?php echo e(trans('cruds.warehouse.fields.user')); ?></label>
                <select class="form-control select2 <?php echo e($errors->has('user') ? 'is-invalid' : ''); ?>" name="user_id" id="user_id">
                    <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($id); ?>" <?php echo e((old('user_id') ? old('user_id') : $warehouse->user->id ?? '') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php if($errors->has('user')): ?>
                    <span class="text-danger"><?php echo e($errors->first('user')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.warehouse.fields.user_helper')); ?></span>
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
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/warehouses/edit.blade.php ENDPATH**/ ?>