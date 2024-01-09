<div class="form-group row">

    <div class="col-4">
        <label class="required" for="sku">{{ trans('cruds.product.fields.sku') }}</label>
        <input class="form-control {{ $errors->has('sku') ? 'is-invalid' : '' }}" type="text" name="sku" id="sku" value="{{ old('sku', isset($product) ? $product->sku : null) }}" required>
        @if($errors->has('sku'))
            <span class="text-danger">{{ $errors->first('sku') }}</span>
        @endif
        <span class="help-block">{{ trans('cruds.product.fields.sku_helper') }}</span>
    </div>

    <div class="col-8">
        <label for="slug">{{ trans('cruds.product.fields.slug') }}</label>
        <input class="form-control {{ $errors->has('slug') ? 'is-invalid' : '' }}" type="text" name="slug" id="slug" value="{{ old('slug', isset($product) ? $product->slug : null) }}">
        @if($errors->has('slug'))
            <span class="text-danger">{{ $errors->first('slug') }}</span>
        @endif
        <span class="help-block">{{ trans('cruds.product.fields.slug_helper') }}</span>
    </div>

</div>


<div class="card card-primary card-tabs">

    @include('admin.partials.languages-selector')

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            @foreach(\App\Models\Language::all() as $lang)
                <div class="tab-pane @if($loop->first) active show @endif" id="tabs-{{ $lang->code }}" role="tabpanel" aria-labelledby="tabs-{{ $lang->code }}-tab">

                    <div class="form-group">
                        <label @if($loop->first)class="required"@endif for="name_{{ $lang->code }}">{{ trans('cruds.product.fields.name') }}</label>
                        <input class="form-control {{ $errors->has('name.' . $lang->code) ? 'is-invalid' : '' }}" type="text" name="name[{{ $lang->code }}]" id="name_{{ $lang->code }}" value="{{ old('name.' . $lang->code, isset($product) ? $product->getTranslation('name', $lang->code) : null) }}" @if($loop->first)required @endif>
                        @if($errors->has('name.' . $lang->code))
                            <span class="text-danger">{{ $errors->first('name.' . $lang->code) }}</span>
                        @endif
                        <span class="help-block">{{ trans('cruds.product.fields.name_helper') }}</span>
                    </div>

                    <div class="form-group">
                        <label for="brief">{{ trans('cruds.product.fields.brief') }}</label>
                        <textarea class="form-control {{ $errors->has('brief.' . $lang->code) ? 'is-invalid' : '' }}" name="brief[{{ $lang->code }}]" id="brief_{{ $lang->code }}">{!! old('brief.' . $lang->code, isset($product) ? $product->getTranslation('brief', $lang->code) : null) !!}</textarea>
                        @if($errors->has('brief.' . $lang->code))
                            <span class="text-danger">{{ $errors->first('brief.' . $lang->code) }}</span>
                        @endif
                        <span class="help-block">{{ trans('cruds.product.fields.brief_helper') }}</span>
                    </div>

                    <div class="form-group">
                        <label for="description">{{ trans('cruds.product.fields.description') }}</label>
                        <textarea class="form-control ckeditor {{ $errors->has('description.' . $lang->code) ? 'is-invalid' : '' }}" name="description[{{ $lang->code }}]" id="description_{{ $lang->code }}">{!! old('description.' . $lang->code, isset($product) ? $product->getTranslation('description', $lang->code) : null) !!}</textarea>
                        @if($errors->has('description.' . $lang->code))
                            <span class="text-danger">{{ $errors->first('description.' . $lang->code) }}</span>
                        @endif
                        <span class="help-block">{{ trans('cruds.product.fields.description_helper') }}</span>
                    </div>

                </div>
            @endforeach
        </div>
    </div>

</div>


<div class="form-group">
    <label class="required" for="categories">{{ trans('cruds.product.fields.category') }}</label>
    <div style="padding-bottom: 4px">
        <span class="btn btn-info btn-xs select-all" style="border-radius: 0">{{ trans('global.select_all') }}</span>
        <span class="btn btn-info btn-xs deselect-all" style="border-radius: 0">{{ trans('global.deselect_all') }}</span>
    </div>
    <select class="form-control select2 {{ $errors->has('categories') ? 'is-invalid' : '' }}" name="categories[]" id="categories" multiple required>
        @foreach($categories as $id => $category)
            <option value="{{ $id }}" {{ (in_array($id, old('categories', [])) || (isset($product) && $product->categories->contains($id))) ? 'selected' : '' }}>{{ $category }}</option>
        @endforeach
    </select>
    @if($errors->has('categories'))
        <span class="text-danger">{{ $errors->first('categories') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.category_helper') }}</span>
</div>

<div class="form-group">
    <label for="tags">{{ trans('cruds.product.fields.tag') }}</label>
    <div style="padding-bottom: 4px">
        <span class="btn btn-info btn-xs select-all" style="border-radius: 0">{{ trans('global.select_all') }}</span>
        <span class="btn btn-info btn-xs deselect-all" style="border-radius: 0">{{ trans('global.deselect_all') }}</span>
    </div>
    <select class="form-control select2 {{ $errors->has('tags') ? 'is-invalid' : '' }}" name="tags[]" id="tags" multiple>
        @foreach($tags as $id => $tag)
            <option value="{{ $id }}" {{ (in_array($id, old('tags', [])) || (isset($product) && $product->tags->contains($id))) ? 'selected' : '' }}>{{ $tag }}</option>
        @endforeach
    </select>
    @if($errors->has('tags'))
        <span class="text-danger">{{ $errors->first('tags') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.tag_helper') }}</span>
</div>

<div class="form-group">
    <div class="form-check {{ $errors->has('active') ? 'is-invalid' : '' }}">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" {{ (isset($product) && $product->active) || old('active', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="active">{{ trans('cruds.product.fields.active') }}</label>
    </div>
    @if($errors->has('active'))
        <span class="text-danger">{{ $errors->first('active') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.active_helper') }}</span>
</div>

<div class="form-group">
    <div class="form-check {{ $errors->has('in_stock') ? 'is-invalid' : '' }}">
        <input type="hidden" name="in_stock" value="0">
        <input class="form-check-input" type="checkbox" name="in_stock" id="in_stock" value="1" {{ (isset($product) && $product->in_stock) || old('in_stock', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="in_stock">{{ trans('cruds.product.fields.in_stock') }}</label>
    </div>
    @if($errors->has('in_stock'))
        <span class="text-danger">{{ $errors->first('in_stock') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.in_stock_helper') }}</span>
</div>

<div class="form-group row">
    <div class="col-sm-1">
        <div class="form-check {{ $errors->has('on_sale') ? 'is-invalid' : '' }}">
            <input type="hidden" name="on_sale" value="0">
            <input class="form-check-input" type="checkbox" name="on_sale" id="on_sale" value="1" {{ (isset($product) && $product->on_sale) || old('on_sale', 0) === 1 ? 'checked' : '' }}>
            <label class="form-check-label" for="on_sale">{{ trans('cruds.product.fields.on_sale') }}</label>
        </div>
        @if($errors->has('on_sale'))
            <span class="text-danger">{{ $errors->first('on_sale') }}</span>
        @endif
        <span class="help-block">{{ trans('cruds.product.fields.on_sale_helper') }}</span>
    </div>
    <div class="col-sm-5 row">
        <div class="col-sm-2 row">
            <label class="control-label font-weight-normal" for="discount">{{ trans('cruds.product.fields.discount') }}</label>
        </div>
        <div class="col-sm-5 row">
            <input class="form-control {{ $errors->has('discount') ? 'is-invalid' : '' }}" type="number" name="discount" id="discount" value="{{ old('discount', isset($product) ? $product->discount : null) }}" step="0.01" max="100">
            @if($errors->has('discount'))
                <span class="text-danger">{{ $errors->first('discount') }}</span>
            @endif
            <span class="help-block">{{ trans('cruds.product.fields.discount_helper') }}</span>
        </div>
    </div>
</div>


<div class="col-md-7">
<div class="card card-success">

    <div class="card-header">
        <h3 class="card-title">{{ trans('cruds.product.fields.prices') }}</h3>
    </div>

    <div class="card-body">

        <div class="form-group row">
            <label for="prices" class="col-sm-2 col-form-label"></label>

            <div class="col-sm-5">
                Regular Price
            </div>

            <div class="col-sm-5">
                On Sale Price
            </div>
        </div>

        @foreach($countries as $country)
        <div class="form-group row">
            <label for="prices_{{ $country->short_code }}" class="col-sm-2 col-form-label">{{ $country->name }}({{ $country->currency->code }})</label>

            <div class="col-sm-5">
                <input class="form-control {{ $errors->has('prices.' . $country->short_code) ? 'is-invalid' : '' }}" type="number" name="prices[{{ $country->short_code }}]" id="prices_{{ $country->short_code }}" value="{{ old('prices.' . $country->short_code, (isset($product) && isset($product->prices[$country->short_code])) ? $product->prices[$country->short_code] : null) }}" step="0.01">

                @if($errors->has('prices.' . $country->short_code))
                    <span class="text-danger">{{ $errors->first('prices.' . $country->short_code) }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.product.fields.price_helper') }}</span>
            </div>

            <div class="col-sm-5">
                <input class="form-control {{ $errors->has('sale_prices.' . $country->short_code) ? 'is-invalid' : '' }}" type="number" name="sale_prices[{{ $country->short_code }}]" id="sale_prices_{{ $country->short_code }}" value="{{ old('sale_prices.' . $country->short_code, (isset($product) && isset($product->sale_prices[$country->short_code])) ? $product->sale_prices[$country->short_code] : null) }}" step="0.01">

                @if($errors->has('sale_prices.' . $country->short_code))
                    <span class="text-danger">{{ $errors->first('sale_prices.' . $country->short_code) }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.product.fields.sale_prices_helper') }}</span>
            </div>
        </div>
        @endforeach

    </div>
</div>
</div>



<div class="form-group">
    <label for="photos">{{ trans('cruds.product.fields.photos') }}</label>
    <div class="needsclick dropzone {{ $errors->has('photos') ? 'is-invalid' : '' }}" id="photos-dropzone">
    </div>
    @if($errors->has('photos'))
        <span class="text-danger">{{ $errors->first('photos') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.photos_helper') }}</span>
</div>

<div class="form-group">
    <div class="form-check {{ $errors->has('trending') ? 'is-invalid' : '' }}">
        <input type="hidden" name="trending" value="0">
        <input class="form-check-input" type="checkbox" name="trending" id="trending" value="1" {{ (isset($product) && $product->trending) || old('trending', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="trending">{{ trans('cruds.product.fields.trending') }}</label>
    </div>
    @if($errors->has('trending'))
        <span class="text-danger">{{ $errors->first('trending') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.trending_helper') }}</span>
</div>

<div class="form-group">
    <div class="form-check {{ $errors->has('showcase') ? 'is-invalid' : '' }}">
        <input type="hidden" name="showcase" value="0">
        <input class="form-check-input" type="checkbox" name="showcase" id="showcase" value="1" {{ (isset($product) && $product->showcase) || old('showcase', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="showcase">{{ trans('cruds.product.fields.showcase') }}</label>
    </div>
    @if($errors->has('showcase'))
        <span class="text-danger">{{ $errors->first('showcase') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.product.fields.showcase_helper') }}</span>
</div>

<div class="form-group">
    <div class="form-check {{ $errors->has('position') ? 'is-invalid' : '' }}">
        <label class="form-check-label" for="position">{{ trans('cruds.product.fields.position') }}</label>
        <input class="form-control" type="number" name="position" id="position" value="{{ old('position', isset($product) ? $product->position : null) }}" step="1" min="0">

    </div>
    @if($errors->has('position'))
        <span class="text-danger">{{ $errors->first('position') }}</span>
    @endif
</div>


@include('admin.products.partials._main-title')

<div class="form-group">
    <div class="col-md-7">
        <div class="card card-info">

            <div class="card-header">
                <h3 class="card-title">Specifications</h3>
            </div>

            <div class="card-body">

                @foreach($features as $feature)
                    <div class="form-group row">
                        <label for="data_{{ $feature->key }}" class="col-sm-2 col-form-label">{{ $feature->name }}</label>
                        <div class="col-sm-10">
                            <input class="form-control {{ $errors->has('data.' . $feature->key) ? 'is-invalid' : '' }}" type="{{ $feature->type }}" name="data[{{ $feature->key }}]" id="data_{{ $feature->key }}" value="{{ old('data.' . $feature->key, (isset($product) && isset($product->data[$feature->key])) ? $product->data[$feature->key] : null) }}">

                            @if($errors->has('data.' . $feature->key))
                                <span class="text-danger">{{ $errors->first('data.' . $feature->key) }}</span>
                            @endif
    {{--                        <span class="help-block">{{ trans('cruds.product.fields.data') }}</span>--}}
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>
</div>

@include('admin.products.partials._kit-product')

<div class="form-group row">
    <div class="col-4">
        <label class="required" for="brand_id">{{ trans('cruds.product.fields.brand') }}</label>
        <select class="form-control select2 {{ $errors->has('brand') ? 'is-invalid' : '' }}" name="brand_id" id="brand_id" required>
            @foreach($brands as $id => $entry)
                <option value="{{ $id }}" {{ (old('brand_id') ? old('brand_id') : $product->brand->id ?? '') == $id ? 'selected' : '' }}>{{ $entry }}</option>
            @endforeach
        </select>
        @if($errors->has('brand'))
            <span class="text-danger">{{ $errors->first('brand') }}</span>
        @endif
        <span class="help-block">{{ trans('cruds.product.fields.brand_helper') }}</span>
    </div>

    <div class="col-4">
        <label class="required" for="warehouse_id">{{ trans('cruds.product.fields.warehouse') }}</label>
        <select class="form-control select2 {{ $errors->has('warehouse') ? 'is-invalid' : '' }}" name="warehouse_id" id="warehouse_id" required>
            @foreach($warehouses as $id => $entry)
                <option value="{{ $id }}" {{ (old('warehouse_id') ? old('warehouse_id') : $product->warehouse->id ?? '') == $id ? 'selected' : '' }}>{{ $entry }}</option>
            @endforeach
        </select>
        @if($errors->has('warehouse'))
            <span class="text-danger">{{ $errors->first('warehouse') }}</span>
        @endif
        <span class="help-block">{{ trans('cruds.product.fields.warehouse_helper') }}</span>
    </div>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>


@section('scripts')
    <script>
        $(document).ready(function () {
            function SimpleUploadAdapter(editor) {
                editor.plugins.get('FileRepository').createUploadAdapter = function(loader) {
                    return {
                        upload: function() {
                            return loader.file
                                .then(function (file) {
                                    return new Promise(function(resolve, reject) {
                                        // Init request
                                        var xhr = new XMLHttpRequest();
                                        xhr.open('POST', '{{ route('admin.products.storeCKEditorImages') }}', true);
                                        xhr.setRequestHeader('x-csrf-token', window._token);
                                        xhr.setRequestHeader('Accept', 'application/json');
                                        xhr.responseType = 'json';

                                        // Init listeners
                                        var genericErrorText = `Couldn't upload file: ${ file.name }.`;
                                        xhr.addEventListener('error', function() { reject(genericErrorText) });
                                        xhr.addEventListener('abort', function() { reject() });
                                        xhr.addEventListener('load', function() {
                                            var response = xhr.response;

                                            if (!response || xhr.status !== 201) {
                                                return reject(response && response.message ? `${genericErrorText}\n${xhr.status} ${response.message}` : `${genericErrorText}\n ${xhr.status} ${xhr.statusText}`);
                                            }

                                            $('form').append('<input type="hidden" name="ck-media[]" value="' + response.id + '">');

                                            resolve({ default: response.url });
                                        });

                                        if (xhr.upload) {
                                            xhr.upload.addEventListener('progress', function(e) {
                                                if (e.lengthComputable) {
                                                    loader.uploadTotal = e.total;
                                                    loader.uploaded = e.loaded;
                                                }
                                            });
                                        }

                                        // Send request
                                        var data = new FormData();
                                        data.append('upload', file);
                                        data.append('crud_id', '{{ $product->id ?? 0 }}');
                                        xhr.send(data);
                                    });
                                })
                        }
                    };
                }
            }

            var allEditors = document.querySelectorAll('.ckeditor');
            for (var i = 0; i < allEditors.length; ++i) {
                ClassicEditor.create(
                    allEditors[i], {
                        extraPlugins: [SimpleUploadAdapter]
                    }
                );
            }

            $('input#main').on('change', function () {
                let mainTitle = $('#main-product-title');
                if ($(this).is(':checked')) {
                    mainTitle.slideDown('fast');
                }
                else {
                    mainTitle.slideUp('fast');
                }
            });

            $('input#is_kit').on('change', function () {
                let kitProductSettings = $('#kit-product');
                if ($(this).is(':checked')) {
                    kitProductSettings.slideDown('fast');
                }
                else {
                    kitProductSettings.slideUp('fast');
                }
            });
        });
    </script>

    <script>
        var uploadedPhotosMap = {}
        Dropzone.options.photosDropzone = {
            url: '{{ route('admin.products.storeMedia') }}',
            maxFilesize: 20, // MB
            acceptedFiles: '.jpeg,.jpg,.png,.gif',
            addRemoveLinks: true,
            headers: {
                'X-CSRF-TOKEN': "{{ csrf_token() }}"
            },
            params: {
                size: 20,
                width: 20000,
                height: 20000
            },
            success: function (file, response) {
                $('form').append('<input type="hidden" name="photos[]" value="' + response.name + '">')
                uploadedPhotosMap[file.name] = response.name
            },
            removedfile: function (file) {
                console.log(file)
                file.previewElement.remove()
                var name = ''
                if (typeof file.file_name !== 'undefined') {
                    name = file.file_name
                } else {
                    name = uploadedPhotosMap[file.name]
                }
                $('form').find('input[name="photos[]"][value="' + name + '"]').remove()
            },
            init: function () {
                @if(isset($product) && $product->photos)
                var files = {!! json_encode($product->photos) !!}
                for (var i in files) {
                    var file = files[i]
                    this.options.addedfile.call(this, file)
                    this.options.thumbnail.call(this, file, file.preview ?? file.preview_url)
                    file.previewElement.classList.add('dz-complete')
                    $('form').append('<input type="hidden" name="photos[]" value="' + file.file_name + '">')
                }
                @endif
            },
            error: function (file, response) {
                if ($.type(response) === 'string') {
                    var message = response //dropzone sends it's own error messages in string
                } else {
                    var message = response.errors.file
                }
                file.previewElement.classList.add('dz-error')
                _ref = file.previewElement.querySelectorAll('[data-dz-errormessage]')
                _results = []
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    node = _ref[_i]
                    _results.push(node.textContent = message)
                }

                return _results
            }
        }

    </script>
@endsection
