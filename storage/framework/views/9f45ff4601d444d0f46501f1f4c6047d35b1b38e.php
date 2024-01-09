<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('cruds.message.title_singular')); ?> <?php echo e(trans('global.list')); ?>

    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-Message">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            <?php echo e(trans('cruds.message.fields.id')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.message.fields.firstname')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.message.fields.lastname')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.message.fields.email')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.message.fields.viewed')); ?>

                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="<?php echo e(trans('global.search')); ?>">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="<?php echo e(trans('global.search')); ?>">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="<?php echo e(trans('global.search')); ?>">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="<?php echo e(trans('global.search')); ?>">
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $messages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($message->id); ?>">
                            <td>

                            </td>
                            <td>
                                <?php echo e($message->id ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($message->firstname ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($message->lastname ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($message->email ?? ''); ?>

                            </td>
                            <td>
                                <span style="display:none"><?php echo e($message->viewed ?? ''); ?></span>
                                <input type="checkbox" disabled="disabled" <?php echo e($message->viewed ? 'checked' : ''); ?>>
                            </td>
                            <td>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('message_show')): ?>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.messages.show', $message->id)); ?>">
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
  let table = $('.datatable-Message:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });

let visibleColumnsIndexes = null;
$('.datatable thead').on('input', '.search', function () {
      let strict = $(this).attr('strict') || false
      let value = strict && this.value ? "^" + this.value + "$" : this.value

      let index = $(this).parent().index()
      if (visibleColumnsIndexes !== null) {
        index = visibleColumnsIndexes[index]
      }

      table
        .column(index)
        .search(value, strict)
        .draw()
  });
table.on('column-visibility.dt', function(e, settings, column, state) {
      visibleColumnsIndexes = []
      table.columns(":visible").every(function(colIdx) {
          visibleColumnsIndexes.push(colIdx);
      });
  })
})

</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/messages/index.blade.php ENDPATH**/ ?>