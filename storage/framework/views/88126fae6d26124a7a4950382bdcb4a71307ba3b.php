<div class="m-3">
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('address_create')): ?>
        <div style="margin-bottom: 10px;" class="row">
            <div class="col-lg-12">
                <a class="btn btn-success" href="<?php echo e(route('admin.addresses.create')); ?>">
                    <?php echo e(trans('global.add')); ?> <?php echo e(trans('cruds.address.title_singular')); ?>

                </a>
            </div>
        </div>
    <?php endif; ?>
    <div class="card">
        <div class="card-header">
            <?php echo e(trans('cruds.address.title_singular')); ?> <?php echo e(trans('global.list')); ?>

        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class=" table table-bordered table-striped table-hover datatable datatable-userAddresses">
                    <thead>
                        <tr>
                            <th width="10">

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.id')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.user')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.default')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.type')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.country')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.state')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.city')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.first_name')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.last_name')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.company')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.address_1')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.zip')); ?>

                            </th>
                            <th>
                                <?php echo e(trans('cruds.address.fields.phone')); ?>

                            </th>
                            <th>
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $addresses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr data-entry-id="<?php echo e($address->id); ?>">
                                <td>

                                </td>
                                <td>
                                    <?php echo e($address->id ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->user->name ?? ''); ?>

                                </td>
                                <td>
                                    <span style="display:none"><?php echo e($address->default ?? ''); ?></span>
                                    <input type="checkbox" disabled="disabled" <?php echo e($address->default ? 'checked' : ''); ?>>
                                </td>
                                <td>
                                    <?php echo e(App\Models\Address::TYPE_SELECT[$address->type] ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->country->name ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->state ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->city ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->first_name ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->last_name ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->company ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->address_1 ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->zip ?? ''); ?>

                                </td>
                                <td>
                                    <?php echo e($address->phone ?? ''); ?>

                                </td>
                                <td>

                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('address_edit')): ?>
                                        <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.addresses.edit', $address->id)); ?>">
                                            <?php echo e(trans('global.edit')); ?>

                                        </a>
                                    <?php endif; ?>

                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('address_delete')): ?>
                                        <form action="<?php echo e(route('admin.addresses.destroy', $address->id)); ?>" method="POST" onsubmit="return confirm('<?php echo e(trans('global.areYouSure')); ?>');" style="display: inline-block;">
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
</div>
<?php $__env->startSection('scripts'); ?>
<?php echo \Illuminate\View\Factory::parentPlaceholder('scripts'); ?>
<script>
    $(function () {
  let dtButtons = $.extend(true, [], $.fn.dataTable.defaults.buttons)
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('address_delete')): ?>
  let deleteButtonTrans = '<?php echo e(trans('global.datatables.delete')); ?>'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "<?php echo e(route('admin.addresses.massDestroy')); ?>",
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
    order: [[ 1, 'desc' ]],
    pageLength: 100,
  });
  let table = $('.datatable-userAddresses:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });
  
})

</script>
<?php $__env->stopSection(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/users/relationships/userAddresses.blade.php ENDPATH**/ ?>