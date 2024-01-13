<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.edit')); ?> <?php echo e(trans('cruds.campaign.title_singular')); ?>

    </div>

    <div class="card-body">
        <form method="POST" action="<?php echo e(route("admin.campaigns.update", [$campaign->id])); ?>" enctype="multipart/form-data">
            <?php echo method_field('PUT'); ?>
            <?php echo csrf_field(); ?>
            <div class="form-group">
                <label class="required" for="name"><?php echo e(trans('cruds.campaign.fields.name')); ?></label>
                <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', $campaign->name)); ?>" required>
                <?php if($errors->has('name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.campaign.fields.name_helper')); ?></span>
            </div>
            <div class="form-group">
                <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
                    <input type="hidden" name="active" value="0">
                    <input class="form-check-input" type="checkbox" name="active" id="active" value="1" <?php echo e($campaign->active || old('active', 0) === 1 ? 'checked' : ''); ?>>
                    <label class="form-check-label" for="active"><?php echo e(trans('cruds.campaign.fields.active')); ?></label>
                </div>
                <?php if($errors->has('active')): ?>
                    <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.campaign.fields.active_helper')); ?></span>
            </div>
            <div class="form-group">
                <label class="required" for="slug"><?php echo e(trans('cruds.campaign.fields.slug')); ?></label>
                <input class="form-control <?php echo e($errors->has('slug') ? 'is-invalid' : ''); ?>" type="text" name="slug" id="slug" value="<?php echo e(old('slug', $campaign->slug)); ?>" required>
                <?php if($errors->has('slug')): ?>
                    <span class="text-danger"><?php echo e($errors->first('slug')); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.campaign.fields.slug_helper')); ?></span>
            </div>

            <div class="form-group">
                ?campaign=<?php echo e($campaign->slug); ?>

            </div>



            <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="form-group">
                    <label><?php echo e($product->name); ?></label>
                    <input class="form-control" type="text" name="rprice[<?php echo e($product->id); ?>]" value="<?php echo e(isset($prices[$product->id]) ? $prices[$product->id]->pivot->rprice : null); ?>">
                    <input class="form-control" type="text" name="price[<?php echo e($product->id); ?>]" value="<?php echo e(isset($prices[$product->id]) ? $prices[$product->id]->pivot->   price : null); ?>">
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>




            <div class="form-group">
                <button class="btn btn-danger" type="submit">
                    <?php echo e(trans('global.save')); ?>

                </button>
            </div>
        </form>
    </div>
</div>



<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/campaigns/edit.blade.php ENDPATH**/ ?>