@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.warehouse.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.warehouses.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.id') }}
                        </th>
                        <td>
                            {{ $warehouse->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.name') }}
                        </th>
                        <td>
                            {{ $warehouse->name }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.email') }}
                        </th>
                        <td>
                            {{ $warehouse->email }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.country') }}
                        </th>
                        <td>
                            {{ $warehouse->country->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.language') }}
                        </th>
                        <td>
                            {{ $warehouse->language->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.address') }}
                        </th>
                        <td>
                            {{ $warehouse->address }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.warehouse.fields.user') }}
                        </th>
                        <td>
                            {{ $warehouse->user->name ?? '' }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.warehouses.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-header">
        {{ trans('global.relatedData') }}
    </div>
    <ul class="nav nav-tabs" role="tablist" id="relationship-tabs">
        <li class="nav-item">
            <a class="nav-link" href="#warehouse_products" role="tab" data-toggle="tab">
                {{ trans('cruds.product.title') }}
            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" role="tabpanel" id="warehouse_products">
            @includeIf('admin.warehouses.relationships.warehouseProducts', ['products' => $warehouse->warehouseProducts])
        </div>
    </div>
</div>

@endsection