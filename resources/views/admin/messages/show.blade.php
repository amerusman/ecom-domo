@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.message.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.messages.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.id') }}
                        </th>
                        <td>
                            {{ $message->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.firstname') }}
                        </th>
                        <td>
                            {{ $message->firstname }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.lastname') }}
                        </th>
                        <td>
                            {{ $message->lastname }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.email') }}
                        </th>
                        <td>
                            {{ $message->email }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.phone') }}
                        </th>
                        <td>
                            {{ $message->phone }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.country') }}
                        </th>
                        <td>
                            {{ $message->country->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.language') }}
                        </th>
                        <td>
                            {{ $message->language->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.user') }}
                        </th>
                        <td>
                            {{ $message->user->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.message') }}
                        </th>
                        <td>
                            {{ $message->message }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.message.fields.viewed') }}
                        </th>
                        <td>
                            <input type="checkbox" disabled="disabled" {{ $message->viewed ? 'checked' : '' }}>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.messages.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection