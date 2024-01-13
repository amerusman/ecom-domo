@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('cruds.message.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-Message">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.message.fields.id') }}
                        </th>
                        <th>
                            {{ trans('cruds.message.fields.firstname') }}
                        </th>
                        <th>
                            {{ trans('cruds.message.fields.lastname') }}
                        </th>
                        <th>
                            {{ trans('cruds.message.fields.email') }}
                        </th>
                        <th>
                            {{ trans('cruds.message.fields.viewed') }}
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="{{ trans('global.search') }}">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="{{ trans('global.search') }}">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="{{ trans('global.search') }}">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="{{ trans('global.search') }}">
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    @foreach($messages as $key => $message)
                        <tr data-entry-id="{{ $message->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $message->id ?? '' }}
                            </td>
                            <td>
                                {{ $message->firstname ?? '' }}
                            </td>
                            <td>
                                {{ $message->lastname ?? '' }}
                            </td>
                            <td>
                                {{ $message->email ?? '' }}
                            </td>
                            <td>
                                <span style="display:none">{{ $message->viewed ?? '' }}</span>
                                <input type="checkbox" disabled="disabled" {{ $message->viewed ? 'checked' : '' }}>
                            </td>
                            <td>
                                @can('message_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.messages.show', $message->id) }}">
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
@endsection
