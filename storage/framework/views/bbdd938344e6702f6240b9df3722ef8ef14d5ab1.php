<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.show')); ?> <?php echo e(trans('cruds.review.title')); ?>

    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.reviews.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.id')); ?>

                        </th>
                        <td>
                            <?php echo e($review->id); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.product')); ?>

                        </th>
                        <td>
                            <?php echo e($review->product->name ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.user')); ?>

                        </th>
                        <td>
                            <?php echo e($review->user->email ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.language')); ?>

                        </th>
                        <td>
                            <?php echo e($review->language->name ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.status')); ?>

                        </th>
                        <td>
                            <?php echo e(App\Models\Review::STATUS_SELECT[$review->status] ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.rating')); ?>

                        </th>
                        <td>
                            <?php echo e($review->rating); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.name')); ?>

                        </th>
                        <td>
                            <?php echo e($review->name); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.advantages')); ?>

                        </th>
                        <td>
                            <?php echo e($review->advantages); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.disadvantages')); ?>

                        </th>
                        <td>
                            <?php echo e($review->disadvantages); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.review.fields.body')); ?>

                        </th>
                        <td>
                            <?php echo e($review->body); ?>

                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.reviews.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
        </div>
    </div>
</div>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/reviews/show.blade.php ENDPATH**/ ?>