<div class="card card-primary card-tabs">

    @include('admin.partials.languages-selector')

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            @foreach(\App\Models\Language::all() as $lang)
                <div class="tab-pane @if($loop->first) active show @endif" id="tabs-{{ $lang->code }}" role="tabpanel"
                     aria-labelledby="tabs-{{ $lang->code }}-tab">
                    <div class="form-group">
                        <label @if($loop->first)class="required" @endif for="{{ $name }}_{{ $lang->code }}">{{ trans('cruds.' . $module . '.fields.' . $name) }}</label>
                        <input class="form-control {{ $errors->has($name . '.' . $lang->code) ? 'is-invalid' : '' }}" type="text"
                               name="{{ $name }}[{{ $lang->code }}]" id="{{ $name }}_{{ $lang->code }}" value="{{ old($name . '.' . $lang->code, (isset($model) && $model) ? $model->getTranslation($name, $lang->code, false) : null) }}"
                               @if($loop->first) required @endif>
                        @error($name . '.' . $lang->code)
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                        <span class="help-block">{{ trans('cruds.' . $module . '.fields.' . $name . '_helper') }}</span>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

</div>
