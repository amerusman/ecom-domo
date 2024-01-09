@extends('layouts.admin')
@section('content')

    <div class="card">
        <div class="card-header">
            Статистика по кампаниям
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class=" table table-bordered table-striped table-hover datatable datatable-Order">
                    <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            utm_campaign
                        </th>
                        <th>
                            регистрации / создано заказов
                        </th>
                        <th>
                            продажи / оформлено заказов
                        </th>
                        <th>
                            сумма (оформленных заказов)
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($statistics as $key => $order)
                        <tr data-entry-id="{{ $key }}">
                            <td>

                            </td>
                            <td>
                                {{ $key ?? '' }}
                            </td>

                            <td>
                                {{ $order['created'] ?? '' }}
                            </td>
                            <td>
                                {{ $order['paid'] ?? '' }}
                            </td>
                            <td>
                                {{ $order['total'] ?? '' }}
                            </td>
                            <td>
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
                order: [[ 3, 'desc' ]],
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
