<div class="form-group row">

    <div class="col-4">
        <label class="required" for="sku"><?php echo e(trans('cruds.product.fields.sku')); ?></label>
        <input class="form-control <?php echo e($errors->has('sku') ? 'is-invalid' : ''); ?>" type="text" name="sku" id="sku" value="<?php echo e(old('sku', isset($product) ? $product->sku : null)); ?>" required>
        <?php if($errors->has('sku')): ?>
            <span class="text-danger"><?php echo e($errors->first('sku')); ?></span>
        <?php endif; ?>
        <span class="help-block"><?php echo e(trans('cruds.product.fields.sku_helper')); ?></span>
    </div>

    <div class="col-8">
        <label for="slug"><?php echo e(trans('cruds.product.fields.slug')); ?></label>
        <input class="form-control <?php echo e($errors->has('slug') ? 'is-invalid' : ''); ?>" type="text" name="slug" id="slug" value="<?php echo e(old('slug', isset($product) ? $product->slug : null)); ?>">
        <?php if($errors->has('slug')): ?>
            <span class="text-danger"><?php echo e($errors->first('slug')); ?></span>
        <?php endif; ?>
        <span class="help-block"><?php echo e(trans('cruds.product.fields.slug_helper')); ?></span>
    </div>

</div>


<div class="card card-primary card-tabs">

    <?php echo $__env->make('admin.partials.languages-selector', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            <?php $__currentLoopData = \App\Models\Language::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="tab-pane <?php if($loop->first): ?> active show <?php endif; ?>" id="tabs-<?php echo e($lang->code); ?>" role="tabpanel" aria-labelledby="tabs-<?php echo e($lang->code); ?>-tab">

                    <div class="form-group">
                        <label <?php if($loop->first): ?>class="required"<?php endif; ?> for="name_<?php echo e($lang->code); ?>"><?php echo e(trans('cruds.product.fields.name')); ?></label>
                        <input class="form-control <?php echo e($errors->has('name.' . $lang->code) ? 'is-invalid' : ''); ?>" type="text" name="name[<?php echo e($lang->code); ?>]" id="name_<?php echo e($lang->code); ?>" value="<?php echo e(old('name.' . $lang->code, isset($product) ? $product->getTranslation('name', $lang->code) : null)); ?>" <?php if($loop->first): ?>required <?php endif; ?>>
                        <?php if($errors->has('name.' . $lang->code)): ?>
                            <span class="text-danger"><?php echo e($errors->first('name.' . $lang->code)); ?></span>
                        <?php endif; ?>
                        <span class="help-block"><?php echo e(trans('cruds.product.fields.name_helper')); ?></span>
                    </div>

                    <div class="form-group">
                        <label for="brief"><?php echo e(trans('cruds.product.fields.brief')); ?></label>
                        <textarea class="form-control <?php echo e($errors->has('brief.' . $lang->code) ? 'is-invalid' : ''); ?>" name="brief[<?php echo e($lang->code); ?>]" id="brief_<?php echo e($lang->code); ?>"><?php echo old('brief.' . $lang->code, isset($product) ? $product->getTranslation('brief', $lang->code) : null); ?></textarea>
                        <?php if($errors->has('brief.' . $lang->code)): ?>
                            <span class="text-danger"><?php echo e($errors->first('brief.' . $lang->code)); ?></span>
                        <?php endif; ?>
                        <span class="help-block"><?php echo e(trans('cruds.product.fields.brief_helper')); ?></span>
                    </div>

                    <div class="form-group">
                        <label for="description"><?php echo e(trans('cruds.product.fields.description')); ?></label>
                        <textarea class="form-control ckeditor <?php echo e($errors->has('description.' . $lang->code) ? 'is-invalid' : ''); ?>" name="description[<?php echo e($lang->code); ?>]" id="description_<?php echo e($lang->code); ?>"><?php echo old('description.' . $lang->code, isset($product) ? $product->getTranslation('description', $lang->code) : null); ?></textarea>
                        <?php if($errors->has('description.' . $lang->code)): ?>
                            <span class="text-danger"><?php echo e($errors->first('description.' . $lang->code)); ?></span>
                        <?php endif; ?>
                        <span class="help-block"><?php echo e(trans('cruds.product.fields.description_helper')); ?></span>
                    </div>

                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

</div>


<div class="form-group">
    <label class="required" for="categories"><?php echo e(trans('cruds.product.fields.category')); ?></label>
    <div style="padding-bottom: 4px">
        <span class="btn btn-info btn-xs select-all" style="border-radius: 0"><?php echo e(trans('global.select_all')); ?></span>
        <span class="btn btn-info btn-xs deselect-all" style="border-radius: 0"><?php echo e(trans('global.deselect_all')); ?></span>
    </div>
    <select class="form-control select2 <?php echo e($errors->has('categories') ? 'is-invalid' : ''); ?>" name="categories[]" id="categories" multiple required>
        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option value="<?php echo e($id); ?>" <?php echo e((in_array($id, old('categories', [])) || (isset($product) && $product->categories->contains($id))) ? 'selected' : ''); ?>><?php echo e($category); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
    <?php if($errors->has('categories')): ?>
        <span class="text-danger"><?php echo e($errors->first('categories')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.category_helper')); ?></span>
</div>

<div class="form-group">
    <label for="tags"><?php echo e(trans('cruds.product.fields.tag')); ?></label>
    <div style="padding-bottom: 4px">
        <span class="btn btn-info btn-xs select-all" style="border-radius: 0"><?php echo e(trans('global.select_all')); ?></span>
        <span class="btn btn-info btn-xs deselect-all" style="border-radius: 0"><?php echo e(trans('global.deselect_all')); ?></span>
    </div>
    <select class="form-control select2 <?php echo e($errors->has('tags') ? 'is-invalid' : ''); ?>" name="tags[]" id="tags" multiple>
        <?php $__currentLoopData = $tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option value="<?php echo e($id); ?>" <?php echo e((in_array($id, old('tags', [])) || (isset($product) && $product->tags->contains($id))) ? 'selected' : ''); ?>><?php echo e($tag); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
    <?php if($errors->has('tags')): ?>
        <span class="text-danger"><?php echo e($errors->first('tags')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.tag_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" <?php echo e((isset($product) && $product->active) || old('active', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="active"><?php echo e(trans('cruds.product.fields.active')); ?></label>
    </div>
    <?php if($errors->has('active')): ?>
        <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.active_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('in_stock') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="in_stock" value="0">
        <input class="form-check-input" type="checkbox" name="in_stock" id="in_stock" value="1" <?php echo e((isset($product) && $product->in_stock) || old('in_stock', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="in_stock"><?php echo e(trans('cruds.product.fields.in_stock')); ?></label>
    </div>
    <?php if($errors->has('in_stock')): ?>
        <span class="text-danger"><?php echo e($errors->first('in_stock')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.in_stock_helper')); ?></span>
</div>

<div class="form-group row">
    <div class="col-sm-1">
        <div class="form-check <?php echo e($errors->has('on_sale') ? 'is-invalid' : ''); ?>">
            <input type="hidden" name="on_sale" value="0">
            <input class="form-check-input" type="checkbox" name="on_sale" id="on_sale" value="1" <?php echo e((isset($product) && $product->on_sale) || old('on_sale', 0) === 1 ? 'checked' : ''); ?>>
            <label class="form-check-label" for="on_sale"><?php echo e(trans('cruds.product.fields.on_sale')); ?></label>
        </div>
        <?php if($errors->has('on_sale')): ?>
            <span class="text-danger"><?php echo e($errors->first('on_sale')); ?></span>
        <?php endif; ?>
        <span class="help-block"><?php echo e(trans('cruds.product.fields.on_sale_helper')); ?></span>
    </div>
    <div class="col-sm-5 row">
        <div class="col-sm-2 row">
            <label class="control-label font-weight-normal" for="discount"><?php echo e(trans('cruds.product.fields.discount')); ?></label>
        </div>
        <div class="col-sm-5 row">
            <input class="form-control <?php echo e($errors->has('discount') ? 'is-invalid' : ''); ?>" type="number" name="discount" id="discount" value="<?php echo e(old('discount', isset($product) ? $product->discount : null)); ?>" step="0.01" max="100">
            <?php if($errors->has('discount')): ?>
                <span class="text-danger"><?php echo e($errors->first('discount')); ?></span>
            <?php endif; ?>
            <span class="help-block"><?php echo e(trans('cruds.product.fields.discount_helper')); ?></span>
        </div>
    </div>
</div>


<div class="col-md-7">
<div class="card card-success">

    <div class="card-header">
        <h3 class="card-title"><?php echo e(trans('cruds.product.fields.prices')); ?></h3>
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

        <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $country): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="form-group row">
            <label for="prices_<?php echo e($country->short_code); ?>" class="col-sm-2 col-form-label"><?php echo e($country->name); ?>(<?php echo e($country->currency->code); ?>)</label>

            <div class="col-sm-5">
                <input class="form-control <?php echo e($errors->has('prices.' . $country->short_code) ? 'is-invalid' : ''); ?>" type="number" name="prices[<?php echo e($country->short_code); ?>]" id="prices_<?php echo e($country->short_code); ?>" value="<?php echo e(old('prices.' . $country->short_code, (isset($product) && isset($product->prices[$country->short_code])) ? $product->prices[$country->short_code] : null)); ?>" step="0.01">

                <?php if($errors->has('prices.' . $country->short_code)): ?>
                    <span class="text-danger"><?php echo e($errors->first('prices.' . $country->short_code)); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.product.fields.price_helper')); ?></span>
            </div>

            <div class="col-sm-5">
                <input class="form-control <?php echo e($errors->has('sale_prices.' . $country->short_code) ? 'is-invalid' : ''); ?>" type="number" name="sale_prices[<?php echo e($country->short_code); ?>]" id="sale_prices_<?php echo e($country->short_code); ?>" value="<?php echo e(old('sale_prices.' . $country->short_code, (isset($product) && isset($product->sale_prices[$country->short_code])) ? $product->sale_prices[$country->short_code] : null)); ?>" step="0.01">

                <?php if($errors->has('sale_prices.' . $country->short_code)): ?>
                    <span class="text-danger"><?php echo e($errors->first('sale_prices.' . $country->short_code)); ?></span>
                <?php endif; ?>
                <span class="help-block"><?php echo e(trans('cruds.product.fields.sale_prices_helper')); ?></span>
            </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </div>
</div>
</div>



<div class="form-group">
    <label for="photos"><?php echo e(trans('cruds.product.fields.photos')); ?></label>
    <div class="needsclick dropzone <?php echo e($errors->has('photos') ? 'is-invalid' : ''); ?>" id="photos-dropzone">
    </div>
    <?php if($errors->has('photos')): ?>
        <span class="text-danger"><?php echo e($errors->first('photos')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.photos_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('trending') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="trending" value="0">
        <input class="form-check-input" type="checkbox" name="trending" id="trending" value="1" <?php echo e((isset($product) && $product->trending) || old('trending', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="trending"><?php echo e(trans('cruds.product.fields.trending')); ?></label>
    </div>
    <?php if($errors->has('trending')): ?>
        <span class="text-danger"><?php echo e($errors->first('trending')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.trending_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('showcase') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="showcase" value="0">
        <input class="form-check-input" type="checkbox" name="showcase" id="showcase" value="1" <?php echo e((isset($product) && $product->showcase) || old('showcase', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="showcase"><?php echo e(trans('cruds.product.fields.showcase')); ?></label>
    </div>
    <?php if($errors->has('showcase')): ?>
        <span class="text-danger"><?php echo e($errors->first('showcase')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.product.fields.showcase_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('position') ? 'is-invalid' : ''); ?>">
        <label class="form-check-label" for="position"><?php echo e(trans('cruds.product.fields.position')); ?></label>
        <input class="form-control" type="number" name="position" id="position" value="<?php echo e(old('position', isset($product) ? $product->position : null)); ?>" step="1" min="0">

    </div>
    <?php if($errors->has('position')): ?>
        <span class="text-danger"><?php echo e($errors->first('position')); ?></span>
    <?php endif; ?>
</div>


<?php echo $__env->make('admin.products.partials._main-title', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<div class="form-group">
    <div class="col-md-7">
        <div class="card card-info">

            <div class="card-header">
                <h3 class="card-title">Specifications</h3>
            </div>

            <div class="card-body">

                <?php $__currentLoopData = $features; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $feature): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="form-group row">
                        <label for="data_<?php echo e($feature->key); ?>" class="col-sm-2 col-form-label"><?php echo e($feature->name); ?></label>
                        <div class="col-sm-10">
                            <input class="form-control <?php echo e($errors->has('data.' . $feature->key) ? 'is-invalid' : ''); ?>" type="<?php echo e($feature->type); ?>" name="data[<?php echo e($feature->key); ?>]" id="data_<?php echo e($feature->key); ?>" value="<?php echo e(old('data.' . $feature->key, (isset($product) && isset($product->data[$feature->key])) ? $product->data[$feature->key] : null)); ?>">

                            <?php if($errors->has('data.' . $feature->key)): ?>
                                <span class="text-danger"><?php echo e($errors->first('data.' . $feature->key)); ?></span>
                            <?php endif; ?>
    
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            </div>
        </div>
    </div>
</div>

<?php echo $__env->make('admin.products.partials._kit-product', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<div class="form-group row">
    <div class="col-4">
        <label class="required" for="brand_id"><?php echo e(trans('cruds.product.fields.brand')); ?></label>
        <select class="form-control select2 <?php echo e($errors->has('brand') ? 'is-invalid' : ''); ?>" name="brand_id" id="brand_id" required>
            <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($id); ?>" <?php echo e((old('brand_id') ? old('brand_id') : $product->brand->id ?? '') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </select>
        <?php if($errors->has('brand')): ?>
            <span class="text-danger"><?php echo e($errors->first('brand')); ?></span>
        <?php endif; ?>
        <span class="help-block"><?php echo e(trans('cruds.product.fields.brand_helper')); ?></span>
    </div>

    <div class="col-4">
        <label class="required" for="warehouse_id"><?php echo e(trans('cruds.product.fields.warehouse')); ?></label>
        <select class="form-control select2 <?php echo e($errors->has('warehouse') ? 'is-invalid' : ''); ?>" name="warehouse_id" id="warehouse_id" required>
            <?php $__currentLoopData = $warehouses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($id); ?>" <?php echo e((old('warehouse_id') ? old('warehouse_id') : $product->warehouse->id ?? '') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </select>
        <?php if($errors->has('warehouse')): ?>
            <span class="text-danger"><?php echo e($errors->first('warehouse')); ?></span>
        <?php endif; ?>
        <span class="help-block"><?php echo e(trans('cruds.product.fields.warehouse_helper')); ?></span>
    </div>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>


<?php $__env->startSection('scripts'); ?>
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
                                        xhr.open('POST', '<?php echo e(route('admin.products.storeCKEditorImages')); ?>', true);
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
                                        data.append('crud_id', '<?php echo e($product->id ?? 0); ?>');
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
            url: '<?php echo e(route('admin.products.storeMedia')); ?>',
            maxFilesize: 20, // MB
            acceptedFiles: '.jpeg,.jpg,.png,.gif',
            addRemoveLinks: true,
            headers: {
                'X-CSRF-TOKEN': "<?php echo e(csrf_token()); ?>"
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
                <?php if(isset($product) && $product->photos): ?>
                var files = <?php echo json_encode($product->photos); ?>

                for (var i in files) {
                    var file = files[i]
                    this.options.addedfile.call(this, file)
                    this.options.thumbnail.call(this, file, file.preview ?? file.preview_url)
                    file.previewElement.classList.add('dz-complete')
                    $('form').append('<input type="hidden" name="photos[]" value="' + file.file_name + '">')
                }
                <?php endif; ?>
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
<?php $__env->stopSection(); ?>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/products/partials/_form.blade.php ENDPATH**/ ?>