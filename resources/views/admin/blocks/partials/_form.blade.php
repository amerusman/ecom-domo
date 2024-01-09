<div class="form-group">
    <label class="required" for="slug">{{ trans('cruds.block.fields.slug') }}</label>
    <input class="form-control {{ $errors->has('slug') ? 'is-invalid' : '' }}" type="text" name="slug" id="slug" value="{{ old('slug', isset($block) ? $block->slug : null) }}" required @cannot('block_delete') readonly @endcannot>
    @if($errors->has('slug'))
        <span class="text-danger">{{ $errors->first('slug') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.block.fields.slug_helper') }}</span>
</div>
<div class="form-group">
    <label class="required" for="name">{{ trans('cruds.block.fields.name') }}</label>
    <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('slug', isset($block) ? $block->name : null) }}" required>
    @if($errors->has('name'))
        <span class="text-danger">{{ $errors->first('name') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.block.fields.name_helper') }}</span>
</div>

<x-admin.translation-form module="block" :model="isset($block) ? $block : null"
                          :fields="[
                            ['name' => 'body', 'type' => 'textarea', 'required' => true],
]"/>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
