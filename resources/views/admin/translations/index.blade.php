@extends('layouts.admin')
@section('content')
@can('translation_create')
    <div style="margin-bottom: 10px;" class="form-group row">
        <div class="col-lg-12">
            <form action="{{ route('admin.translations.import') }}" method="POST" enctype="multipart/form-data" class="form-group row">
                @csrf
                <div class="col-3">
                    <a class="btn btn-success" href="{{ route('admin.translations.create') }}">
                        {{ trans('global.add') }} {{ trans('cruds.translation.title_singular') }}
                    </a>
                    <a class="btn btn-info" href="{{ route('admin.translations.export') }}">
                        {{ trans('global.export') }} {{ trans('cruds.translation.title') }}
                    </a>
                </div>
                <div class="col-3">
                    <div class="custom-file text-left">
                        <input type="file" name="file" class="custom-file-input" id="customFile" required>
                        <label class="custom-file-label" for="customFile">Choose translations csv file</label>
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary">{{ trans('global.import') }} {{ trans('cruds.translation.title') }}</button>
                </div>

            </form>
        </div>
    </div>
@endcan
<div class="card">
    <div class="card-header">
        {{ trans('cruds.translation.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-Translation">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.translation.fields.section') }}
                        </th>
                        <th>
                            {{ trans('cruds.translation.fields.key') }}
                        </th>
                        <th>
                            {{ trans('cruds.translation.fields.value') }}
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
                                <option value>{{ trans('global.all') }}</option>
                                @foreach(App\Models\Translation::sectionSelect() as $key => $item)
                                    <option value="{{ $item }}">{{ $item }}</option>
                                @endforeach
                            </select>
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="{{ trans('global.search') }}">
                        </td>
                        <td>
                            <input class="search" type="text" placeholder="{{ trans('global.search') }}">
                        </td>
                        <td>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    @foreach($translations as $key => $translation)
                        <tr data-entry-id="{{ $translation->id }}">
                            <td>

                            </td>
                            <td>
                                {{ App\Models\Translation::sectionSelect()[$translation->section] ?? '' }}
                            </td>
                            <td>
                                {{ $translation->key ?? '' }}
                            </td>
                            <td>
                                {{ $translation->value ?? '' }}
                            </td>
                            <td>
                                @can('translation_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.translations.show', $translation->id) }}">
                                        {{ trans('global.view') }}
                                    </a>
                                @endcan

                                @can('translation_edit')
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.translations.edit', $translation->id) }}">
                                        {{ trans('global.edit') }}
                                    </a>
                                @endcan

                                @can('translation_delete')
                                    <form action="{{ route('admin.translations.destroy', $translation->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
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
  let dtButtons = []
@can('translation_delete')
  let deleteButtonTrans = '{{ trans('global.datatables.delete') }}'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "{{ route('admin.translations.massDestroy') }}",
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
@endsection
