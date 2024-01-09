<div class="card card-primary card-tabs">

    @include('admin.partials.languages-selector')

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            @foreach(\App\Models\Language::all() as $lang)
                <div class="tab-pane @if($loop->first) active show @endif" id="tabs-{{ $lang->code }}" role="tabpanel"
                     aria-labelledby="tabs-{{ $lang->code }}-tab">
                    <div class="form-group">
                        <label class="required" for="name_{{ $lang->code }}">{{ trans('cruds.country.fields.name') }}</label>
                        <input class="form-control {{ $errors->has('name.' . $lang->code) ? 'is-invalid' : '' }}" type="text"
                               name="name[{{ $lang->code }}]" id="name_{{ $lang->code }}" value="{{ old('name.' . $lang->code, isset($country) ? $country->getTranslation('name', $lang->code) : null) }}"
                               required>
                        @if($errors->has('name.' . $lang->code))
                            <span class="text-danger">{{ $errors->first('name.' . $lang->code) }}</span>
                        @endif
                        <span class="help-block">{{ trans('cruds.country.fields.name_helper') }}</span>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

</div>

<div class="form-group">
    <label class="required" for="short_code">{{ trans('cruds.country.fields.short_code') }}</label>
    <input class="form-control {{ $errors->has('short_code') ? 'is-invalid' : '' }}" type="text" name="short_code"
           id="short_code" value="{{ old('short_code', isset($country) ? $country->short_code : null) }}" required>
    @if($errors->has('short_code'))
        <span class="text-danger">{{ $errors->first('short_code') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.short_code_helper') }}</span>
</div>
<div class="form-group">
    <div class="form-check {{ $errors->has('active') ? 'is-invalid' : '' }}">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active"
               value="1" {{ (isset($country) && $country->active) || old('active', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="active">{{ trans('cruds.country.fields.active') }}</label>
    </div>
    @if($errors->has('active'))
        <span class="text-danger">{{ $errors->first('active') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.active_helper') }}</span>
</div>
<div class="form-group">
    <label class="required" for="currency_id">{{ trans('cruds.country.fields.currency') }}</label>
    <select class="form-control select2 {{ $errors->has('currency') ? 'is-invalid' : '' }}" name="currency_id"
            id="currency_id" required>
        @foreach($currencies as $id => $entry)
            <option
                value="{{ $id }}" {{ (old('currency_id') ? old('currency_id') : $country->currency->id ?? '') == $id ? 'selected' : '' }}>{{ $entry }}</option>
        @endforeach
    </select>
    @if($errors->has('currency'))
        <span class="text-danger">{{ $errors->first('currency') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.currency_helper') }}</span>
</div>
<div class="form-group">
    <label for="languages">{{ trans('cruds.country.fields.language') }}</label>
    <div style="padding-bottom: 4px">
        <span class="btn btn-info btn-xs select-all" style="border-radius: 0">{{ trans('global.select_all') }}</span>
        <span class="btn btn-info btn-xs deselect-all"
              style="border-radius: 0">{{ trans('global.deselect_all') }}</span>
    </div>
    <select class="form-control select2 {{ $errors->has('languages') ? 'is-invalid' : '' }}" name="languages[]"
            id="languages" multiple>
        @foreach($languages as $id => $language)
            <option
                value="{{ $id }}" {{ (in_array($id, old('languages', [])) || $country->languages->contains($id)) ? 'selected' : '' }}>{{ $language }}</option>
        @endforeach
    </select>
    @if($errors->has('languages'))
        <span class="text-danger">{{ $errors->first('languages') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.language_helper') }}</span>
</div>

<div class="form-group">
    <label for="vat">{{ trans('cruds.country.fields.vat') }}</label>
    <input class="form-control {{ $errors->has('vat') ? 'is-invalid' : '' }}" type="number" name="vat" id="vat"
           value="{{ old('vat', $country->vat) }}" step="0.001" max="99">
    @if($errors->has('vat'))
        <span class="text-danger">{{ $errors->first('vat') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.vat_helper') }}</span>
</div>

<div class="form-group">
    <label for="vat_code">{{ trans('cruds.country.fields.vat_code') }}</label>
    <input class="form-control {{ $errors->has('vat_code') ? 'is-invalid' : '' }}" type="number" name="vat_code" id="vat_code"
           value="{{ old('vat_code', $country->vat_code) }}">
    @if($errors->has('vat_code'))
        <span class="text-danger">{{ $errors->first('vat_code') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.vat_code_helper') }}</span>
</div>

<div class="form-group">
    <label for="tax_account">{{ trans('cruds.country.fields.tax_account') }}</label>
    <input class="form-control {{ $errors->has('tax_account') ? 'is-invalid' : '' }}" type="text" name="tax_account" id="tax_account"
           value="{{ old('tax_account', $country->tax_account) }}">
    @if($errors->has('tax_account'))
        <span class="text-danger">{{ $errors->first('tax_account') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.country.fields.tax_account_helper') }}</span>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>
