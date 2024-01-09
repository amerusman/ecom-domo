<?php $__env->startSection('content'); ?>
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('translation_create')): ?>
    <div style="margin-bottom: 10px;" class="form-group row">
        <div class="col-lg-12">
            <form action="<?php echo e(route('admin.translations.import')); ?>" method="POST" enctype="multipart/form-data" class="form-group row">
                <?php echo csrf_field(); ?>
                <div class="col-3">
                    <a class="btn btn-success" href="<?php echo e(route('admin.translations.create')); ?>">
                        <?php echo e(trans('global.add')); ?> <?php echo e(trans('cruds.translation.title_singular')); ?>

                    </a>
                    <a class="btn btn-info" href="<?php echo e(route('admin.translations.export')); ?>">
                        <?php echo e(trans('global.export')); ?> <?php echo e(trans('cruds.translation.title')); ?>

                    </a>
                </div>
                <div class="col-3">
                    <div class="custom-file text-left">
                        <input type="file" name="file" class="custom-file-input" id="customFile" required>
                        <label class="custom-file-label" for="customFile">Choose translations csv file</label>
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary"><?php echo e(trans('global.import')); ?> <?php echo e(trans('cruds.translation.title')); ?></button>
                </div>

            </form>
        </div>
    </div>
<?php endif; ?>
<div class="card">
    <div class="card-header">
        <?php echo e(trans('cruds.translation.title_singular')); ?> <?php echo e(trans('global.list')); ?>

    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-Translation">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            <?php echo e(trans('cruds.translation.fields.section')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.translation.fields.key')); ?>

                        </th>
                        <th>
                            <?php echo e(trans('cruds.translation.fields.value')); ?>

                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <select class="search" strict="true">
                                <option value><?php echo e(trans('global.all')); ?></option>
                                <?php $__currentLoopData = App\Models\Translation::sectionSelect(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($item); ?>"><?php echo e($item); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="<?php echo e(trans('global.search')); ?>">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="<?php echo e(trans('global.search')); ?>">
                        </td>
                        <td>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $translations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $translation): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($translation->id); ?>">
                            <td>

                            </td>
                            <td>
                                <?php echo e(App\Models\Translation::sectionSelect()[$translation->section] ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($translation->key ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($translation->value ?? ''); ?>

                            </td>
                            <td>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('translation_show')): ?>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.translations.show', $translation->id)); ?>">
                                        <?php echo e(trans('global.view')); ?>

                                    </a>
                                <?php endif; ?>

                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('translation_edit')): ?>
                                    <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.translations.edit', $translation->id)); ?>">
                                        <?php echo e(trans('global.edit')); ?>

                                    </a>
                                <?php endif; ?>

                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('translation_delete')): ?>
                                    <form action="<?php echo e(route('admin.translations.destroy', $translation->id)); ?>" method="POST" onsubmit="return confirm('<?php echo e(trans('global.areYouSure')); ?>');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="<?php echo e(csrf_token()); ?>">
                                        <input type="submit" class="btn btn-xs btn-danger" value="<?php echo e(trans('global.delete')); ?>">
                                    </form>
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
  let dtButtons = []
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('translation_delete')): ?>
  let deleteButtonTrans = '<?php echo e(trans('global.datatables.delete')); ?>'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "<?php echo e(route('admin.translations.massDestroy')); ?>",
    className: 'btn-danger',
    action: function (e, dt, node, config) {
      var ids = $.map(dt.rows({ selected: true }).nodes(), function (entry) {
          return $(entry).data('entry-id')
      });

      if (ids.length === 0) {
        alert('<?php echo e(trans('global.datatables.zero_selected')); ?>')

        return
      }

      if (confirm('<?php echo e(trans('global.areYouSure')); ?>')) {
        $.ajax({
          headers: {'x-csrf-token': _token},
          method: 'POST',
          url: config.url,
          data: { ids: ids, _method: 'DELETE' }})
          .done(function () { location.reload() })
      }
    }
  }
  dtButtons.push(deleteButton)
<?php endif; ?>

  $.extend(true, $.fn.dataTable.defaults, {
    orderCellsTop: true,
    order: [[ 2, 'asc' ]],
    pageLength: 50,
  });
  let table = $('.datatable-Translation:not(.ajaxTable)').DataTable({ buttons: dtButtons })
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

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/translations/index.blade.php ENDPATH**/ ?>