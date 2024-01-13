<div class="m-3">

    <div class="card">
        <div class="card-header">
            {{ trans('cruds.order.title_singular') }} {{ trans('global.list') }}
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class=" table table-bordered table-striped table-hover datatable datatable-userOrders">
                    <thead>
                        <tr>
                            <th width="10">

                            </th>
                            <th>
                                {{ trans('cruds.order.fields.id') }}
                            </th>
                            <th>
                                {{ trans('cruds.order.fields.status') }}
                            </th>
                            <th>
                                {{ trans('cruds.order.fields.user') }}
                            </th>
                            <th>
                                {{ trans('cruds.user.fields.email') }}
                            </th>
                            <th>
                                {{ trans('cruds.order.fields.total') }}
                            </th>
                            <th>
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($orders as $key => $order)
                            <tr data-entry-id="{{ $order->id }}">
                                <td>

                                </td>
                                <td>
                                    {{ $order->id ?? '' }}
                                </td>
                                <td>
                                    {{ App\Models\Order::STATUS_SELECT[$order->status] ?? '' }}
                                </td>
                                <td>
                                    {{ $order->user->name ?? '' }}
                                </td>
                                <td>
                                    {{ $order->user->email ?? '' }}
                                </td>
                                <td>
                                    {{ $order->total ?? '' }}
                                </td>
                                <td>
                                    @can('order_show')
                                        <a class="btn btn-xs btn-primary" href="{{ route('admin.orders.show', $order->id) }}">
                                            {{ trans('global.view') }}
                                        </a>
                                    @endcan

                                    @can('order_edit')
                                        <a class="btn btn-xs btn-info" href="{{ route('admin.orders.edit', $order->id) }}">
                                            {{ trans('global.edit') }}
                                        </a>
                                    @endcan


                                </td>

                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@section('scripts')
@parent
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
@endsection