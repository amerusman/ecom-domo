@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('cruds.order.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="form-group">
        <a class="btn btn-default" href="{{ route('admin.orders.statistics') }}">
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
                            {{ trans('cruds.order.fields.country') }}
                        </th>
                        <th>
                            {{ trans('cruds.order.fields.paid_at') }}
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
                                @if(in_array($order->status, [\App\Enums\OrderStatus::Completed, \App\Enums\OrderStatus::Shipped, \App\Enums\OrderStatus::Returned, \App\Enums\OrderStatus::Processing]))
                                    <span class="badge
                                    @if(\App\Enums\OrderStatus::Processing == $order->status) badge-warning
                                    @elseif(\App\Enums\OrderStatus::Shipped == $order->status) badge-info
                                    @elseif(\App\Enums\OrderStatus::Completed == $order->status) badge-success
                                    @elseif(\App\Enums\OrderStatus::Returned == $order->status) badge-danger
                                    @endif
                                    ">{{ $order->status->name }}</span>
                                @else
                                    {{ $order->status->name ?? '' }}
                                @endif
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
                                {{ $order->country->name ?? '' }}
                            </td>
                            <td>
                                {{ $order->paid_at ?? '' }}
                            </td>
                            <td>
                                @can('order_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.orders.show', $order->id) }}">
                                        {{ trans('global.view') }}
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



@endsection
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
  let table = $('.datatable-Order:not(.ajaxTable)').DataTable({ buttons: dtButtons });
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });

})

</script>
@endsection
