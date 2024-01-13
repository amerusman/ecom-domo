<div class="form-group">
    <label for="key">{{ trans('cruds.feature.fields.key') }}</label>
    <input class="form-control {{ $errors->has('key') ? 'is-invalid' : '' }}" type="text" name="key" id="key" value="{{ old('key', isset($feature) ? $feature->key : null) }}">
    @if($errors->has('key'))
        <span class="text-danger">{{ $errors->first('key') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.feature.fields.key_helper') }}</span>
</div>

<div class="form-group">
    <label class="required">{{ trans('cruds.feature.fields.type') }}</label>
    <select class="form-control {{ $errors->has('type') ? 'is-invalid' : '' }}" name="type" id="type" required>
        <option value disabled {{ old('type', null) === null ? 'selected' : '' }}>{{ trans('global.pleaseSelect') }}</option>
        @foreach(App\Models\Feature::TYPE_SELECT as $key => $label)
            <option value="{{ $key }}" {{ old('type', isset($feature) ? $feature->type : null) === (string) $key ? 'selected' : '' }}>{{ $label }}</option>
        @endforeach
    </select>
    @if($errors->has('type'))
        <span class="text-danger">{{ $errors->first('type') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.feature.fields.type_helper') }}</span>
</div>


<x-admin.translation-form module="feature" :model="isset($feature) ? $feature : null"
                          :fields="[
                            ['name' => 'name', 'type' => 'text', 'required' => true],
                            ['name' => 'unit', 'type' => 'text', 'required' => false],
]"/>


<div class="form-group">
    <label for="options">{{ trans('cruds.feature.fields.options') }}</label>
    <textarea class="form-control {{ $errors->has('options') ? 'is-invalid' : '' }}" name="options" id="options">{{ old('options', isset($feature) ? $feature->options : null) }}</textarea>
    @if($errors->has('options'))
        <span class="text-danger">{{ $errors->first('options') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.feature.fields.options_helper') }}</span>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
