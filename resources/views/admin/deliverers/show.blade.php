@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.deliverer.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.deliverers.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.deliverer.fields.id') }}
                        </th>
                        <td>
                            {{ $deliverer->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.deliverer.fields.name') }}
                        </th>
                        <td>
                            {{ $deliverer->name }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.deliverer.fields.site') }}
                        </th>
                        <td>
                            {{ $deliverer->site }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.deliverer.fields.tracking_url') }}
                        </th>
                        <td>
                            {{ $deliverer->tracking_url }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.deliverers.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection