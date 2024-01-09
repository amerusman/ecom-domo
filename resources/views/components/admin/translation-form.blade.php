<div class="card card-primary card-tabs">

    @include('admin.partials.languages-selector')

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            @foreach(\App\Models\Language::all() as $lang)
                <div class="tab-pane @if($loop->first) active show @endif" id="tabs-{{ $lang->code }}" role="tabpanel"
                     aria-labelledby="tabs-{{ $lang->code }}-tab">
                    @foreach($fields as $field)
                        @php
                        $name = $field['name'];
                        @endphp
                        <div class="form-group">
                            <label @if($field['required'] && $loop->parent->first)class="required" @endif for="{{ $name }}_{{ $lang->code }}">{{ trans('cruds.' . $module . '.fields.' . $name) }}</label>
                            @if('text' == $field['type'])
                            <input class="form-control {{ $errors->has($name . '.' . $lang->code) ? 'is-invalid' : '' }}" type="text"
                                   name="{{ $name }}[{{ $lang->code }}]" id="{{ $name }}_{{ $lang->code }}" value="{{ old($name . '.' . $lang->code, (isset($model) && $model) ? $model->getTranslation($name, $lang->code, false) : null) }}"
                                   @if($field['required'] && $loop->parent->first) required @endif>
                            @elseif('textarea' == $field['type'])
                                <textarea class="form-control {{ $errors->has($name . '.' . $lang->code) ? 'is-invalid' : '' }}" type="text"
                                       name="{{ $name }}[{{ $lang->code }}]" id="{{ $name }}_{{ $lang->code }}"
                                          @if($field['required'] && $loop->parent->first) required @endif>{{ old($name . '.' . $lang->code, (isset($model) && $model) ? $model->getTranslation($name, $lang->code, false) : null) }}</textarea>
                            @endif

                            @error($name . '.' . $lang->code)
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                            <span class="help-block">{{ trans('cruds.' . $module . '.fields.' . $name . '_helper') }}</span>
                        </div>
                    @endforeach

                </div>
            @endforeach
        </div>
    </div>

</div>
