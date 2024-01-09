<div class="form-group">
    <div class="form-check {{ $errors->has('main') ? 'is-invalid' : '' }}">
        <input type="hidden" name="main" value="0">
        <input class="form-check-input" type="checkbox" name="main" id="main" value="1" {{ (isset($product) && $product->main) || old('main', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="main">{{ trans('cruds.product.fields.main') }}</label>
    </div>
    @if($errors->has('main'))
        <span class="text-danger">{{ $errors->first('main') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.main_helper') }}</span>

    <div class="col-md-4" id="main-product-title"  {!! (isset($product) && $product->main) || old('main', 0) === 1 ? '' : 'style="display: none;"'  !!}>
        <div class="card card-secondary">

            <div class="card-header">
                <h3 class="card-title">Main product title</h3>
            </div>

            <div class="card-body">
                <p class="card-text">the text is displayed to the right of the picture</p>

                @foreach(\App\Models\Language::all() as $lang)
                    <div class="form-group row">
                        <label for="data_main_{{ $lang->code }}" class="col-sm-2 col-form-label">{{ $lang->name }}</label>
                        <div class="col-sm-10">
                            <input class="form-control {{ $errors->has('data.main.' . $lang->code) ? 'is-invalid' : '' }}" type="text" name="data[main][{{ $lang->code }}]" id="data_main_{{ $lang->code }}" value="{{ old('data.main.' . $lang->code, (isset($product) && isset($product->data['main'][$lang->code])) ? $product->data['main'][$lang->code] : null) }}">

                            @if($errors->has('data.main.' . $lang->code))
                                <span class="text-danger">{{ $errors->first('data.main.' . $lang->code) }}</span>
                            @endif
                        </div>
                    </div>
                @endforeach


            </div>
        </div>
    </div>

</div>
