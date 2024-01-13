<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('cruds.vatReport.title_singular')); ?> <?php echo e(trans('global.list')); ?>

    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            <?php echo e(trans('cruds.vatReport.fields.id')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.vatReport.fields.name')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.vatReport.fields.sent_at')); ?>

                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $vatReports; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $vatReport): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($vatReport->id); ?>">
                            <td>

                            </td>
                            <td>
                                <?php echo e($vatReport->id ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($vatReport->name ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($vatReport->sent_at ?? ''); ?>

                            </td>
                            <td>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('vat_report_show')): ?>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.vat-reports.show', $vatReport->id)); ?>">
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
  let table = $('.datatable-VatReport:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });

})

</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/vatReports/index.blade.php ENDPATH**/ ?>