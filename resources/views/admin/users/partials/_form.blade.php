<div class="form-group">
    <label class="required" for="firstname">{{ trans('cruds.user.fields.firstname') }}</label>
    <input class="form-control {{ $errors->has('firstname') ? 'is-invalid' : '' }}" type="text" name="firstname" id="firstname" value="{{ old('firstname', isset($user) ? $user->firstname : null) }}" required>
    @if($errors->has('firstname'))
        <span class="text-danger">{{ $errors->first('firstname') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.user.fields.firstname_helper') }}</span>
</div>
<div class="form-group">
    <label class="" for="lastname">{{ trans('cruds.user.fields.lastname') }}</label>
    <input class="form-control {{ $errors->has('lastname') ? 'is-invalid' : '' }}" type="text" name="lastname" id="lastname" value="{{ old('lastname', isset($user) ? $user->lastname : null) }}">
    @if($errors->has('lastname'))
        <span class="text-danger">{{ $errors->first('lastname') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.user.fields.lastname_helper') }}</span>
</div>
