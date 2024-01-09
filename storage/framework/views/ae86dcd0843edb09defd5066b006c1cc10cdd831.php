<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.create')); ?> <?php echo e(trans('cruds.review.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.reviews.store")); ?>" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="product_id"><?php echo e(trans('cruds.review.fields.product')); ?></label>
                <select class="form-control select2 <?php echo e($errors->has('product') ? 'is-invalid' : ''); ?>" name="product_id" id="product_id" required>
                    <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($id); ?>" <?php echo e(old('product_id') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php if($errors->has('product')): ?>
                    <span class="text-danger"><?php echo e($errors->first('product')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.product_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="user_id"><?php echo e(trans('cruds.review.fields.user')); ?></label>
                <select class="form-control select2 <?php echo e($errors->has('user') ? 'is-invalid' : ''); ?>" name="user_id" id="user_id" required>
                    <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($id); ?>" <?php echo e(old('user_id') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php if($errors->has('user')): ?>
                    <span class="text-danger"><?php echo e($errors->first('user')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.user_helper')); ?></span>
            </div>
            <div class="form-group">
                <label><?php echo e(trans('cruds.review.fields.status')); ?></label>
                <select class="form-control <?php echo e($errors->has('status') ? 'is-invalid' : ''); ?>" name="status" id="status">
                    <option value disabled <?php echo e(old('status', null) === null ? 'selected' : ''); ?>><?php echo e(trans('global.pleaseSelect')); ?></option>
                    <?php $__currentLoopData = App\Models\Review::STATUS_SELECT; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $label): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($key); ?>" <?php echo e(old('status', 'new') === (string) $key ? 'selected' : ''); ?>><?php echo e($label); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php if($errors->has('status')): ?>
                    <span class="text-danger"><?php echo e($errors->first('status')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.status_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="rating"><?php echo e(trans('cruds.review.fields.rating')); ?></label>
                <input class="form-control <?php echo e($errors->has('rating') ? 'is-invalid' : ''); ?>" type="number" name="rating" id="rating" value="<?php echo e(old('rating', '')); ?>" step="1" required>
                <?php if($errors->has('rating')): ?>
                    <span class="text-danger"><?php echo e($errors->first('rating')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.rating_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="name"><?php echo e(trans('cruds.review.fields.name')); ?></label>
                <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', '')); ?>" required>
                <?php if($errors->has('name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.name_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="advantages"><?php echo e(trans('cruds.review.fields.advantages')); ?></label>
                <input class="form-control <?php echo e($errors->has('advantages') ? 'is-invalid' : ''); ?>" type="text" name="advantages" id="advantages" value="<?php echo e(old('advantages', '')); ?>">
                <?php if($errors->has('advantages')): ?>
                    <span class="text-danger"><?php echo e($errors->first('advantages')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.advantages_helper')); ?></span>
            </div>
            <div class="form-group">
                <label for="disadvantages"><?php echo e(trans('cruds.review.fields.disadvantages')); ?></label>
                <input class="form-control <?php echo e($errors->has('disadvantages') ? 'is-invalid' : ''); ?>" type="text" name="disadvantages" id="disadvantages" value="<?php echo e(old('disadvantages', '')); ?>">
                <?php if($errors->has('disadvantages')): ?>
                    <span class="text-danger"><?php echo e($errors->first('disadvantages')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.disadvantages_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="body"><?php echo e(trans('cruds.review.fields.body')); ?></label>
                <textarea class="form-control <?php echo e($errors->has('body') ? 'is-invalid' : ''); ?>" name="body" id="body" required><?php echo e(old('body')); ?></textarea>
                <?php if($errors->has('body')): ?>
                    <span class="text-danger"><?php echo e($errors->first('body')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.review.fields.body_helper')); ?></span>
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
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/reviews/create.blade.php ENDPATH**/ ?>