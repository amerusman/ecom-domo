@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.deliverer.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.deliverers.update", [$deliverer->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group">
                <label class="required" for="name">{{ trans('cruds.deliverer.fields.name') }}</label>
                <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('name', $deliverer->name) }}" required>
                @if($errors->has('name'))
                    <span class="text-danger">{{ $errors->first('name') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.deliverer.fields.name_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="site">{{ trans('cruds.deliverer.fields.site') }}</label>
                <input class="form-control {{ $errors->has('site') ? 'is-invalid' : '' }}" type="text" name="site" id="site" value="{{ old('site', $deliverer->site) }}" required>
                @if($errors->has('site'))
                    <span class="text-danger">{{ $errors->first('site') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.deliverer.fields.site_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="tracking_url">{{ trans('cruds.deliverer.fields.tracking_url') }}</label>
                <input class="form-control {{ $errors->has('tracking_url') ? 'is-invalid' : '' }}" type="text" name="tracking_url" id="tracking_url" value="{{ old('tracking_url', $deliverer->tracking_url) }}">
                @if($errors->has('tracking_url'))
                    <span class="text-danger">{{ $errors->first('tracking_url') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.deliverer.fields.tracking_url_helper') }}</span>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="submit">
                    {{ trans('global.save') }}
                </button>
            </div>
        </form>
    </div>
</div>



@endsection