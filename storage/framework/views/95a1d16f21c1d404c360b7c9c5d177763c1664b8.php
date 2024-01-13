<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-header">
            Статистика по кампаниям
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class=" table table-bordered table-striped table-hover datatable datatable-Order">
                    <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            utm_campaign
                        </th>
                        <th>
                            регистрации / создано заказов
                        </th>
                        <th>
                            продажи / оформлено заказов
                        </th>
                        <th>
                            сумма (оформленных заказов)
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $__currentLoopData = $statistics; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($key); ?>">
                            <td>

                            </td>
                            <td>
                                <?php echo e($key ?? ''); ?>

                            </td>

                            <td>
                                <?php echo e($order['created'] ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($order['paid'] ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($order['total'] ?? ''); ?>

                            </td>
                            <td>
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
                order: [[ 3, 'desc' ]],
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

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/orders/statistics.blade.php ENDPATH**/ ?>