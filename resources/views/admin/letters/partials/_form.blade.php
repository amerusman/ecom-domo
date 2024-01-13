<div class="form-group">
    <label class="required" for="name">{{ trans('cruds.letter.fields.name') }}</label>
    <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('name', isset($letter) ? $letter->name : null) }}" required>
    @if($errors->has('name'))
        <span class="text-danger">{{ $errors->first('name') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.letter.fields.name_helper') }}</span>
</div>
<div class="form-group">
    <label class="required" for="slug">{{ trans('cruds.letter.fields.slug') }}</label>
    <input class="form-control {{ $errors->has('slug') ? 'is-invalid' : '' }}" type="text" name="slug" id="slug" value="{{ old('slug', isset($letter) ? $letter->slug : null) }}" required @cannot('letter_delete') readonly @endcannot>
    @if($errors->has('slug'))
        <span class="text-danger">{{ $errors->first('slug') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.letter.fields.slug_helper') }}</span>
</div>


<x-admin.translation-form module="letter" :model="isset($letter) ? $letter : null"
                          :fields="[
                            ['name' => 'subject', 'type' => 'text', 'required' => false],
                            ['name' => 'body', 'type' => 'textarea', 'required' => false],
]"/>


<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
