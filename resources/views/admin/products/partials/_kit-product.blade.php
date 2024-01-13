<div class="form-group">
    <div class="form-check {{ $errors->has('is_kit') ? 'is-invalid' : '' }}">
        <input type="hidden" name="is_kit" value="0">
        <input class="form-check-input" type="checkbox" name="is_kit" id="is_kit" value="1" {{ (isset($product) && $product->is_kit) || old('is_kit', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="is_kit">{{ trans('cruds.product.fields.is_kit') }}</label>
    </div>
    @if($errors->has('is_kit'))
    <span class="text-danger">{{ $errors->first('is_kit') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.is_kit_helper') }}</span>

    <div class="col-md-5" id="kit-product"  {!! (isset($product) && $product->is_kit) || old('is_kit', 0) === 1 ? '' : 'style="display: none;"'  !!}>
        <div class="card card-secondary">

            <div class="card-header">
                <h3 class="card-title">Set of products</h3>
            </div>

            <div class="card-body">

                <div class="form-group row">

                    <div class="col-sm-8">
                        Product
                    </div>

                    <div class="col-sm-2">
                        Qty
                    </div>
                </div>


                <div class="form-group row">
                    <div class="col-sm-8">
                        <select name="kit[0][product_id]">
                            @foreach($products as $id => $name)
                                <option value="{{ $id }}" {{ (old('kit.0.product_id') ? old('kit.0.product_id') : $product->kit[0]['product_id'] ?? '') == $id ? 'selected' : '' }}>{{ $name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control {{ $errors->has('kit.0.qty') ? 'is-invalid' : '' }}" type="number" name="kit[0][qty]" id="kit_0_qty" value="{{ old('kit.0.qty', (isset($product) && isset($product->kit[0]['qty'])) ? $product->kit[0]['qty'] : null) }}">

                        @if($errors->has('kit.0.qty'))
                            <span class="text-danger">{{ $errors->first('kit.0.qty') }}</span>
                        @endif
                    </div>
                </div>



            </div>
        </div>
    </div>

</div>
