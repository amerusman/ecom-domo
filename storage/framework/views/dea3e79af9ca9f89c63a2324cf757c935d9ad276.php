<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.edit')); ?> <?php echo e(trans('cruds.deliverer.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.deliverers.update", [$deliverer->id])); ?>" enctype="multipart/form-data">
            <?php echo method_field('PUT'); ?>
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="name"><?php echo e(trans('cruds.deliverer.fields.name')); ?></label>
                <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', $deliverer->name)); ?>" required>
                <?php if($errors->has('name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.deliverer.fields.name_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="site"><?php echo e(trans('cruds.deliverer.fields.site')); ?></label>
                <input class="form-control <?php echo e($errors->has('site') ? 'is-invalid' : ''); ?>" type="text" name="site" id="site" value="<?php echo e(old('site', $deliverer->site)); ?>" required>
                <?php if($errors->has('site')): ?>
                    <span class="text-danger"><?php echo e($errors->first('site')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.deliverer.fields.site_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="tracking_url"><?php echo e(trans('cruds.deliverer.fields.tracking_url')); ?></label>
                <input class="form-control <?php echo e($errors->has('tracking_url') ? 'is-invalid' : ''); ?>" type="text" name="tracking_url" id="tracking_url" value="<?php echo e(old('tracking_url', $deliverer->tracking_url)); ?>">
                <?php if($errors->has('tracking_url')): ?>
                    <span class="text-danger"><?php echo e($errors->first('tracking_url')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.deliverer.fields.tracking_url_helper')); ?></span>
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
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/deliverers/edit.blade.php ENDPATH**/ ?>