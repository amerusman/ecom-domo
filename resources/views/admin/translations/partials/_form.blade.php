<div class="form-group">
    <label>{{ trans('cruds.translation.fields.section') }}</label>
    <select class="form-control {{ $errors->has('section') ? 'is-invalid' : '' }}" name="section" id="section">
        <option value disabled {{ old('section', null) === null ? 'selected' : '' }}>{{ trans('global.pleaseSelect') }}</option>
        @foreach(App\Models\Translation::select('section')->distinct()->get()->pluck('section', 'section') as $key => $label)
            <option value="{{ $key }}" {{ old('section', isset($translation) ? $translation->section : null) === (string) $key ? 'selected' : '' }}>{{ $label }}</option>
        @endforeach
    </select>
    @if($errors->has('section'))
        <span class="text-danger">{{ $errors->first('section') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.translation.fields.section_helper') }}</span>
</div>

<div class="form-group">
    <label class="required" for="key">{{ trans('cruds.translation.fields.key') }}</label>
    <input class="form-control {{ $errors->has('key') ? 'is-invalid' : '' }}" type="text" name="key" id="key" value="{{ old('key', isset($translation) ? $translation->key : null) }}" required @cannot('translation_delete') readonly @endcan>
    @if($errors->has('key'))
        <span class="text-danger">{{ $errors->first('key') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.translation.fields.key_helper') }}</span>
</div>

<x-admin.translation-input module="translation" name="value" :model="isset($translation) ? $translation : null"/>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
