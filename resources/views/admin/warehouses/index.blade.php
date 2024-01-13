@extends('layouts.admin')
@section('content')
@can('warehouse_create')
    <div style="margin-bottom: 10px;" class="row">
        <div class="col-lg-12">
            <a class="btn btn-success" href="{{ route('admin.warehouses.create') }}">
                {{ trans('global.add') }} {{ trans('cruds.warehouse.title_singular') }}
            </a>
        </div>
    </div>
@endcan
<div class="card">
    <div class="card-header">
        {{ trans('cruds.warehouse.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.warehouse.fields.id') }}
                        </th>
                        <th>
                            {{ trans('cruds.warehouse.fields.name') }}
                        </th>
                        <th>
                            {{ trans('cruds.warehouse.fields.email') }}
                        </th>
                        <th>
                            {{ trans('cruds.warehouse.fields.country') }}
                        </th>
                        <th>
                            {{ trans('cruds.warehouse.fields.language') }}
                        </th>
                        <th>
                            {{ trans('cruds.warehouse.fields.user') }}
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($warehouses as $key => $warehouse)
                        <tr data-entry-id="{{ $warehouse->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $warehouse->id ?? '' }}
                            </td>
                            <td>
                                {{ $warehouse->name ?? '' }}
                            </td>
                            <td>
                                {{ $warehouse->email ?? '' }}
                            </td>
                            <td>
                                {{ $warehouse->country->name ?? '' }}
                            </td>
                            <td>
                                {{ $warehouse->language->name ?? '' }}
                            </td>
                            <td>
                                {{ $warehouse->user->name ?? '' }}
                            </td>
                            <td>
                                @can('warehouse_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.warehouses.show', $warehouse->id) }}">
                                        {{ trans('global.view') }}
                                    </a>
                                @endcan

                                @can('warehouse_edit')
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.warehouses.edit', $warehouse->id) }}">
                                        {{ trans('global.edit') }}
                                    </a>
                                @endcan

                                @can('warehouse_delete')
                                    <form action="{{ route('admin.warehouses.destroy', $warehouse->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="submit" class="btn btn-xs btn-danger" value="{{ trans('global.delete') }}">
                                    </form>
                                @endcan

                            </td>

                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>



@endsection
@section('scripts')
@parent
<script>
    $(function () {
  let dtButtons = $.extend(true, [], $.fn.dataTable.defaults.buttons)
@can('warehouse_delete')
  let deleteButtonTrans = '{{ trans('global.datatables.delete') }}'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "{{ route('admin.warehouses.massDestroy') }}",
    className: 'btn-danger',
    action: function (e, dt, node, config) {
      var ids = $.map(dt.rows({ selected: true }).nodes(), function (entry) {
          return $(entry).data('entry-id')
      });

      if (ids.length === 0) {
        alert('{{ trans('global.datatables.zero_selected') }}')

        return
      }

      if (confirm('{{ trans('global.areYouSure') }}')) {
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
@endcan

  $.extend(true, $.fn.dataTable.defaults, {
    orderCellsTop: true,
    order: [[ 1, 'asc' ]],
    pageLength: 100,
  });
  let table = $('.datatable-Warehouse:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });

})

</script>
@endsection
