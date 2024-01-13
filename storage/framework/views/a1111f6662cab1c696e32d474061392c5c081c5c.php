<div class="form-group">
    <div class="form-check <?php echo e($errors->has('main') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="main" value="0">
        <input class="form-check-input" type="checkbox" name="main" id="main" value="1" <?php echo e((isset($product) && $product->main) || old('main', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="main"><?php echo e(trans('cruds.product.fields.main')); ?></label>
    </div>
    <?php if($errors->has('main')): ?>
        <span class="text-danger"><?php echo e($errors->first('main')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.main_helper')); ?></span>

    <div class="col-md-4" id="main-product-title"  <?php echo (isset($product) && $product->main) || old('main', 0) === 1 ? '' : 'style="display: none;"'; ?>>
        <div class="card card-secondary">

            <div class="card-header">
                <h3 class="card-title">Main product title</h3>
            </div>

            <div class="card-body">
                <p class="card-text">the text is displayed to the right of the picture</p>

                <?php $__currentLoopData = \App\Models\Language::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="form-group row">
                        <label for="data_main_<?php echo e($lang->code); ?>" class="col-sm-2 col-form-label"><?php echo e($lang->name); ?></label>
                        <div class="col-sm-10">
                            <input class="form-control <?php echo e($errors->has('data.main.' . $lang->code) ? 'is-invalid' : ''); ?>" type="text" name="data[main][<?php echo e($lang->code); ?>]" id="data_main_<?php echo e($lang->code); ?>" value="<?php echo e(old('data.main.' . $lang->code, (isset($product) && isset($product->data['main'][$lang->code])) ? $product->data['main'][$lang->code] : null)); ?>">

                            <?php if($errors->has('data.main.' . $lang->code)): ?>
                                <span class="text-danger"><?php echo e($errors->first('data.main.' . $lang->code)); ?></span>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>


            </div>
        </div>
    </div>

</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/products/partials/_main-title.blade.php ENDPATH**/ ?>