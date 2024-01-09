<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('cruds.order.title_singular')); ?> <?php echo e(trans('global.list')); ?>

    </div>

    <div class="card-body">
        <div class="form-group">
        <a class="btn btn-default" href="<?php echo e(route('admin.orders.statistics')); ?>">
            Traffic statistics
        </a>
        </div>
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-Order">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            <?php echo e(trans('cruds.order.fields.id')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.order.fields.status')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.order.fields.user')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.user.fields.email')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.order.fields.total')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.order.fields.country')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.order.fields.paid_at')); ?>

                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($order->id); ?>">
                            <td>

                            </td>
                            <td>
                                <?php echo e($order->id ?? ''); ?>

                            </td>
                            <td>
                                <?php if(in_array($order->status, [\App\Enums\OrderStatus::Completed, \App\Enums\OrderStatus::Shipped, \App\Enums\OrderStatus::Returned, \App\Enums\OrderStatus::Processing])): ?>
                                    <span class="badge
                                    <?php if(\App\Enums\OrderStatus::Processing == $order->status): ?> badge-warning
                                    <?php elseif(\App\Enums\OrderStatus::Shipped == $order->status): ?> badge-info
                                    <?php elseif(\App\Enums\OrderStatus::Completed == $order->status): ?> badge-success
                                    <?php elseif(\App\Enums\OrderStatus::Returned == $order->status): ?> badge-danger
                                    <?php endif; ?>
                                    "><?php echo e($order->status->name); ?></span>
                                <?php else: ?>
                                    <?php echo e($order->status->name ?? ''); ?>

                                <?php endif; ?>
                            </td>
                            <td>
                                <?php echo e($order->user->name ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($order->user->email ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($order->total ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($order->country->name ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($order->paid_at ?? ''); ?>

                            </td>
                            <td>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('order_show')): ?>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.orders.show', $order->id)); ?>">
                                        <?php echo e(trans('global.view')); ?>

                                    </a>
                                <?php endif; ?>

                            </td>

                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tbody>
            </table>
        </div>
    </div>
</div>



<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
<?php echo \Illuminate\View\Factory::parentPlaceholder('scripts'); ?>
<script>
    $(function () {
  let dtButtons = $.extend(true, [], $.fn.dataTable.defaults.buttons)

  $.extend(true, $.fn.dataTable.defaults, {
    orderCellsTop: true,
    order: [[ 1, 'desc' ]],
    pageLength: 100,
  });
  let table = $('.datatable-Order:not(.ajaxTable)').DataTable({ buttons: dtButtons });
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });

})

</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/orders/index.blade.php ENDPATH**/ ?>