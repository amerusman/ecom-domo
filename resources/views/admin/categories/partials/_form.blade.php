

<x-admin.translation-input module="category" name="name" :model="isset($category) ? $category : null"/>

<div class="form-group">
    <label class="required" for="slug">{{ trans('cruds.category.fields.slug') }}</label>
    <input class="form-control {{ $errors->has('slug') ? 'is-invalid' : '' }}" type="text" name="slug" id="slug" value="{{ old('slug', isset($category) ? $category->slug : null) }}" required>
    @if($errors->has('slug'))
        <span class="text-danger">{{ $errors->first('slug') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.category.fields.slug_helper') }}</span>
</div>
<div class="form-group">
    <div class="form-check {{ $errors->has('active') ? 'is-invalid' : '' }}">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" {{ (isset($category) && $category->active) || old('active', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="active">{{ trans('cruds.category.fields.active') }}</label>
    </div>
    @if($errors->has('active'))
        <span class="text-danger">{{ $errors->first('active') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.category.fields.active_helper') }}</span>
</div>
<div class="form-group">
    <label for="photo">{{ trans('cruds.category.fields.photo') }}</label>
    <div class="needsclick dropzone {{ $errors->has('photo') ? 'is-invalid' : '' }}" id="photo-dropzone">
    </div>
    @if($errors->has('photo'))
        <span class="text-danger">{{ $errors->first('photo') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.category.fields.photo_helper') }}</span>
</div>
<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
