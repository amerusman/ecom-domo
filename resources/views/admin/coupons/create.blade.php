@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.coupon.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.coupons.store") }}" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label class="required" for="name">{{ trans('cruds.coupon.fields.name') }}</label>
                <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('name', '') }}" required>
                @if($errors->has('name'))
                    <span class="text-danger">{{ $errors->first('name') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.name_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="code">{{ trans('cruds.coupon.fields.code') }}</label>
                <input class="form-control {{ $errors->has('code') ? 'is-invalid' : '' }}" type="text" name="code" id="code" value="{{ old('code', '') }}" required>
                @if($errors->has('code'))
                    <span class="text-danger">{{ $errors->first('code') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.code_helper') }}</span>
            </div>
            <div class="form-group">
                <div class="form-check {{ $errors->has('active') ? 'is-invalid' : '' }}">
                    <input type="hidden" name="active" value="0">
                    <input class="form-check-input" type="checkbox" name="active" id="active" value="1" {{ old('active', 0) == 1 || old('active') === null ? 'checked' : '' }}>
                    <label class="form-check-label" for="active">{{ trans('cruds.coupon.fields.active') }}</label>
                </div>
                @if($errors->has('active'))
                    <span class="text-danger">{{ $errors->first('active') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.active_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="start_at">{{ trans('cruds.coupon.fields.start_at') }}</label>
                <input class="form-control datetime {{ $errors->has('start_at') ? 'is-invalid' : '' }}" type="text" name="start_at" id="start_at" value="{{ old('start_at') }}">
                @if($errors->has('start_at'))
                    <span class="text-danger">{{ $errors->first('start_at') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.start_at_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="expiry_at">{{ trans('cruds.coupon.fields.expiry_at') }}</label>
                <input class="form-control datetime {{ $errors->has('expiry_at') ? 'is-invalid' : '' }}" type="text" name="expiry_at" id="expiry_at" value="{{ old('expiry_at') }}">
                @if($errors->has('expiry_at'))
                    <span class="text-danger">{{ $errors->first('expiry_at') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.expiry_at_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="discount">{{ trans('cruds.coupon.fields.discount') }}</label>
                <input class="form-control {{ $errors->has('discount') ? 'is-invalid' : '' }}" type="number" name="discount" id="discount" value="{{ old('discount', '') }}" step="1" required>
                @if($errors->has('discount'))
                    <span class="text-danger">{{ $errors->first('discount') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.discount_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="limit">{{ trans('cruds.coupon.fields.limit') }}</label>
                <input class="form-control {{ $errors->has('limit') ? 'is-invalid' : '' }}" type="number" name="limit" id="limit" value="{{ old('limit', '') }}" step="1">
                @if($errors->has('limit'))
                    <span class="text-danger">{{ $errors->first('limit') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.limit_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="limit_user">{{ trans('cruds.coupon.fields.limit_user') }}</label>
                <input class="form-control {{ $errors->has('limit_user') ? 'is-invalid' : '' }}" type="number" name="limit_user" id="limit_user" value="{{ old('limit_user', '') }}" step="1">
                @if($errors->has('limit_user'))
                    <span class="text-danger">{{ $errors->first('limit_user') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.coupon.fields.limit_user_helper') }}</span>
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