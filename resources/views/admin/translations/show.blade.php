@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.translation.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.translations.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.translation.fields.id') }}
                        </th>
                        <td>
                            {{ $translation->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.translation.fields.section') }}
                        </th>
                        <td>
                            {{ App\Models\Translation::SECTION_SELECT[$translation->section] ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.translation.fields.key') }}
                        </th>
                        <td>
                            {{ $translation->key }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.translation.fields.default') }}
                        </th>
                        <td>
                            {{ $translation->default }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.translation.fields.value') }}
                        </th>
                        <td>
                            {{ $translation->value }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.translations.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection