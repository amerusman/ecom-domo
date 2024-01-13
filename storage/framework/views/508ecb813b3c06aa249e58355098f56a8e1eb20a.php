<div class="form-group">
    <div class="form-check <?php echo e($errors->has('is_kit') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="is_kit" value="0">
        <input class="form-check-input" type="checkbox" name="is_kit" id="is_kit" value="1" <?php echo e((isset($product) && $product->is_kit) || old('is_kit', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="is_kit"><?php echo e(trans('cruds.product.fields.is_kit')); ?></label>
    </div>
    <?php if($errors->has('is_kit')): ?>
    <span class="text-danger"><?php echo e($errors->first('is_kit')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.is_kit_helper')); ?></span>

    <div class="col-md-5" id="kit-product"  <?php echo (isset($product) && $product->is_kit) || old('is_kit', 0) === 1 ? '' : 'style="display: none;"'; ?>>
        <div class="card card-secondary">

            <div class="card-header">
                <h3 class="card-title">Set of products</h3>
            </div>

            <div class="card-body">

                <div class="form-group row">

                    <div class="col-sm-8">
                        Product
                    </div>

                    <div class="col-sm-2">
                        Qty
                    </div>
                </div>


                <div class="form-group row">
                    <div class="col-sm-8">
                        <select name="kit[0][product_id]">
                            <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $name): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($id); ?>" <?php echo e((old('kit.0.product_id') ? old('kit.0.product_id') : $product->kit[0]['product_id'] ?? '') == $id ? 'selected' : ''); ?>><?php echo e($name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control <?php echo e($errors->has('kit.0.qty') ? 'is-invalid' : ''); ?>" type="number" name="kit[0][qty]" id="kit_0_qty" value="<?php echo e(old('kit.0.qty', (isset($product) && isset($product->kit[0]['qty'])) ? $product->kit[0]['qty'] : null)); ?>">

                        <?php if($errors->has('kit.0.qty')): ?>
                            <span class="text-danger"><?php echo e($errors->first('kit.0.qty')); ?></span>
                        <?php endif; ?>
                    </div>
                </div>



            </div>
        </div>
    </div>

</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/products/partials/_kit-product.blade.php ENDPATH**/ ?>