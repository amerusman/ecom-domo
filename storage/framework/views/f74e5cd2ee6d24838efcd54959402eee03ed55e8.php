<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.edit')); ?> <?php echo e(trans('cruds.subscription.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.subscriptions.update", [$subscription->id])); ?>" enctype="multipart/form-data">
            <?php echo method_field('PUT'); ?>
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="email"><?php echo e(trans('cruds.subscription.fields.email')); ?></label>
                <input class="form-control <?php echo e($errors->has('email') ? 'is-invalid' : ''); ?>" type="email" name="email" id="email" value="<?php echo e(old('email', $subscription->email)); ?>" required>
                <?php if($errors->has('email')): ?>
                    <span class="text-danger"><?php echo e($errors->first('email')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.subscription.fields.email_helper')); ?></span>
            </div>
            <div class="form-group">
                <div class="form-check <?php echo e($errors->has('unsubscribed') ? 'is-invalid' : ''); ?>">
                    <input type="hidden" name="unsubscribed" value="0">
                    <input class="form-check-input" type="checkbox" name="unsubscribed" id="unsubscribed" value="1" <?php echo e($subscription->unsubscribed || old('unsubscribed', 0) === 1 ? 'checked' : ''); ?>>
                    <label class="form-check-label" for="unsubscribed"><?php echo e(trans('cruds.subscription.fields.unsubscribed')); ?></label>
                </div>
                <?php if($errors->has('unsubscribed')): ?>
                    <span class="text-danger"><?php echo e($errors->first('unsubscribed')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.subscription.fields.unsubscribed_helper')); ?></span>
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
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/subscriptions/edit.blade.php ENDPATH**/ ?>