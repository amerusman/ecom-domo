<div class="m-3">

    <div class="card">
        <div class="card-header">
            <?php echo e(trans('cruds.order.title_singular')); ?> <?php echo e(trans('global.list')); ?>

        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class=" table table-bordered table-striped table-hover datatable datatable-userOrders">
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
                                    <?php echo e(App\Models\Order::STATUS_SELECT[$order->status] ?? ''); ?>

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
                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('order_show')): ?>
                                        <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.orders.show', $order->id)); ?>">
                                            <?php echo e(trans('global.view')); ?>

                                        </a>
                                    <?php endif; ?>

                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('order_edit')): ?>
                                        <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.orders.edit', $order->id)); ?>">
                                            <?php echo e(trans('global.edit')); ?>

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
</div>
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
  let table = $('.datatable-userOrders:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });
  
})

</script>
<?php $__env->stopSection(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/users/relationships/userOrders.blade.php ENDPATH**/ ?>