<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.show')); ?> <?php echo e(trans('cruds.message.title')); ?>

    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.messages.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.id')); ?>

                        </th>
                        <td>
                            <?php echo e($message->id); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.firstname')); ?>

                        </th>
                        <td>
                            <?php echo e($message->firstname); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.lastname')); ?>

                        </th>
                        <td>
                            <?php echo e($message->lastname); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.email')); ?>

                        </th>
                        <td>
                            <?php echo e($message->email); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.phone')); ?>

                        </th>
                        <td>
                            <?php echo e($message->phone); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.country')); ?>

                        </th>
                        <td>
                            <?php echo e($message->country->name ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.language')); ?>

                        </th>
                        <td>
                            <?php echo e($message->language->name ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.user')); ?>

                        </th>
                        <td>
                            <?php echo e($message->user->name ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.message')); ?>

                        </th>
                        <td>
                            <?php echo e($message->message); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.message.fields.viewed')); ?>

                        </th>
                        <td>
                            <input type="checkbox" disabled="disabled" <?php echo e($message->viewed ? 'checked' : ''); ?>>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.messages.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
        </div>
    </div>
</div>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/messages/show.blade.php ENDPATH**/ ?>