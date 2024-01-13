<div class="form-group">
    <label class="required" for="name">{{ trans('cruds.page.fields.name') }}</label>
    <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('name', isset($page) ? $page->name : null) }}" required>
    @if($errors->has('name'))
        <span class="text-danger">{{ $errors->first('name') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.page.fields.name_helper') }}</span>
</div>
<div class="form-group">
    <label class="required" for="slug">{{ trans('cruds.page.fields.slug') }}</label>
    <input class="form-control {{ $errors->has('slug') ? 'is-invalid' : '' }}" type="text" name="slug" id="slug" value="{{ old('slug', isset($page) ? $page->slug : null) }}" required>
    @if($errors->has('slug'))
        <span class="text-danger">{{ $errors->first('slug') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.page.fields.slug_helper') }}</span>
</div>


<div class="card card-primary card-tabs">

    @include('admin.partials.languages-selector')

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            @foreach(\App\Models\Language::all() as $lang)
                <div class="tab-pane @if($loop->first) active show @endif" id="tabs-{{ $lang->code }}" role="tabpanel" aria-labelledby="tabs-{{ $lang->code }}-tab">

                    <div class="form-group">
                        <label for="title">{{ trans('cruds.page.fields.title') }}</label>
                        <input class="form-control {{ $errors->has('title.' . $lang->code) ? 'is-invalid' : '' }}" type="text" name="title[{{ $lang->code }}]" id="title_{{ $lang->code }}" value="{{ old('title.' . $lang->code, isset($page) ? $page->getTranslation('title', $lang->code) : null) }}">
                        @if($errors->has('title.' . $lang->code))
                            <span class="text-danger">{{ $errors->first('title.' . $lang->code) }}</span>
                        @endif
                        <span class="help-block">{{ trans('cruds.page.fields.title_helper') }}</span>
                    </div>

                    <div class="form-group">
                        <label for="body">{{ trans('cruds.page.fields.body') }}</label>
                        <textarea class="form-control ckeditor {{ $errors->has('body.' . $lang->code) ? 'is-invalid' : '' }}" name="body[{{ $lang->code }}]" id="body_{{ $lang->code }}">{!! old('body.' . $lang->code, isset($page) ? $page->getTranslation('body', $lang->code) : null) !!}</textarea>
                        @if($errors->has('body.' . $lang->code))
                            <span class="text-danger">{{ $errors->first('body.' . $lang->code) }}</span>
                        @endif
                        <span class="help-block">{{ trans('cruds.page.fields.body_helper') }}</span>
                    </div>

                </div>
            @endforeach
        </div>
    </div>

</div>


<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
