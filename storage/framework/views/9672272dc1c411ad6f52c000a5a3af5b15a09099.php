<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.show')); ?> <?php echo e(trans('cruds.letter.title')); ?>

    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.letters.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.letter.fields.id')); ?>

                        </th>
                        <td>
                            <?php echo e($letter->id); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.letter.fields.name')); ?>

                        </th>
                        <td>
                            <?php echo e($letter->name); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.letter.fields.slug')); ?>

                        </th>
                        <td>
                            <?php echo e($letter->slug); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.letter.fields.subject')); ?>

                        </th>
                        <td>
                            <?php echo e($letter->subject); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            Send email
                        </th>
                        <td>
                            <a href="<?php echo e(route('admin.letters.send', ['letter' => $letter, 'event' => 'unfinished-order'])); ?>">To users with pending orders</a>
                            <br>
                            <a href="<?php echo e(route('admin.letters.send', ['letter' => $letter, 'event' => 'subscription'])); ?>">To subscribers</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.letters.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
        </div>
    </div>
</div>



<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/letters/show.blade.php ENDPATH**/ ?>