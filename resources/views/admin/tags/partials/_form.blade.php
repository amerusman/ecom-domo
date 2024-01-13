<div class="form-group">
    <label class="required" for="slug">{{ trans('cruds.tag.fields.slug') }}</label>
    <input class="form-control {{ $errors->has('slug') ? 'is-invalid' : '' }}" type="text" name="slug" id="slug" value="{{ old('slug', isset($tag) ? $tag->slug : null) }}" required @cannot('tag_delete') readonly @endcan>
    @if($errors->has('slug'))
        <span class="text-danger">{{ $errors->first('slug') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.tag.fields.slug_helper') }}</span>
</div>

<x-admin.translation-input module="tag" name="name" :model="isset($tag) ? $tag : null"/>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
