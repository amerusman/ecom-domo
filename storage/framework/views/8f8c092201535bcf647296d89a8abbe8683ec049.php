<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.edit')); ?> <?php echo e(trans('cruds.language.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.languages.update", [$language->id])); ?>" enctype="multipart/form-data">
            <?php echo method_field('PUT'); ?>
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="name"><?php echo e(trans('cruds.language.fields.name')); ?></label>
                <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', $language->name)); ?>" required>
                <?php if($errors->has('name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.language.fields.name_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="code"><?php echo e(trans('cruds.language.fields.code')); ?></label>
                <input class="form-control <?php echo e($errors->has('code') ? 'is-invalid' : ''); ?>" type="text" name="code" id="code" value="<?php echo e(old('code', $language->code)); ?>" required>
                <?php if($errors->has('code')): ?>
                    <span class="text-danger"><?php echo e($errors->first('code')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.language.fields.code_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="locale"><?php echo e(trans('cruds.language.fields.locale')); ?></label>
                <input class="form-control <?php echo e($errors->has('locale') ? 'is-invalid' : ''); ?>" type="text" name="locale" id="locale" value="<?php echo e(old('locale', $language->locale)); ?>" required>
                <?php if($errors->has('locale')): ?>
                    <span class="text-danger"><?php echo e($errors->first('locale')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.language.fields.locale_helper')); ?></span>
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
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/languages/edit.blade.php ENDPATH**/ ?>