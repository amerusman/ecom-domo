@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.subscription.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.subscriptions.store") }}" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label class="required" for="email">{{ trans('cruds.subscription.fields.email') }}</label>
                <input class="form-control {{ $errors->has('email') ? 'is-invalid' : '' }}" type="email" name="email" id="email" value="{{ old('email') }}" required>
                @if($errors->has('email'))
                    <span class="text-danger">{{ $errors->first('email') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.subscription.fields.email_helper') }}</span>
            </div>
            <div class="form-group">
                <div class="form-check {{ $errors->has('unsubscribed') ? 'is-invalid' : '' }}">
                    <input type="hidden" name="unsubscribed" value="0">
                    <input class="form-check-input" type="checkbox" name="unsubscribed" id="unsubscribed" value="1" {{ old('unsubscribed', 0) == 1 ? 'checked' : '' }}>
                    <label class="form-check-label" for="unsubscribed">{{ trans('cruds.subscription.fields.unsubscribed') }}</label>
                </div>
                @if($errors->has('unsubscribed'))
                    <span class="text-danger">{{ $errors->first('unsubscribed') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.subscription.fields.unsubscribed_helper') }}</span>
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