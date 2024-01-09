@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('cruds.vatReport.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.vatReport.fields.id') }}
                        </th>
                        <th>
                            {{ trans('cruds.vatReport.fields.name') }}
                        </th>
                        <th>
                            {{ trans('cruds.vatReport.fields.sent_at') }}
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($vatReports as $key => $vatReport)
                        <tr data-entry-id="{{ $vatReport->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $vatReport->id ?? '' }}
                            </td>
                            <td>
                                {{ $vatReport->name ?? '' }}
                            </td>
                            <td>
                                {{ $vatReport->sent_at ?? '' }}
                            </td>
                            <td>
                                @can('vat_report_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.vat-reports.show', $vatReport->id) }}">
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
  let table = $('.datatable-VatReport:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });

})

</script>
@endsection
