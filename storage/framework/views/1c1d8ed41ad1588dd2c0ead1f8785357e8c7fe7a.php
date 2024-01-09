<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.show')); ?> <?php echo e(trans('cruds.brand.title')); ?>

    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.brands.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.brand.fields.id')); ?>

                        </th>
                        <td>
                            <?php echo e($brand->id); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.brand.fields.name')); ?>

                        </th>
                        <td>
                            <?php echo e($brand->name); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.brand.fields.active')); ?>

                        </th>
                        <td>
                            <input type="checkbox" disabled="disabled" <?php echo e($brand->active ? 'checked' : ''); ?>>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.brand.fields.slug')); ?>

                        </th>
                        <td>
                            <?php echo e($brand->slug); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.brand.fields.description')); ?>

                        </th>
                        <td>
                            <?php echo $brand->description; ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.brand.fields.photo')); ?>

                        </th>
                        <td>
                            <?php if($brand->photo): ?>
                                <a href="<?php echo e($brand->photo->getUrl()); ?>" target="_blank" style="display: inline-block">
                                    <img src="<?php echo e($brand->photo->getUrl('thumb')); ?>">
                                </a>
                            <?php endif; ?>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.brands.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.relatedData')); ?>

    </div>
    <ul class="nav nav-tabs" role="tablist" id="relationship-tabs">
        <li class="nav-item">
            <a class="nav-link" href="#brand_products" role="tab" data-toggle="tab">
                <?php echo e(trans('cruds.product.title')); ?>

            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" role="tabpanel" id="brand_products">
            <?php if ($__env->exists('admin.brands.relationships.brandProducts', ['products' => $brand->brandProducts])) echo $__env->make('admin.brands.relationships.brandProducts', ['products' => $brand->brandProducts], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    </div>
</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/brands/show.blade.php ENDPATH**/ ?>