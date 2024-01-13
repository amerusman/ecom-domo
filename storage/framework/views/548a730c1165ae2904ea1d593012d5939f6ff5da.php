<div class="form-group">
    <label class="required" for="name"><?php echo e(trans('cruds.brand.fields.name')); ?></label>
    <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', isset($brand) ? $brand->name : null)); ?>" required>
    <?php if($errors->has('name')): ?>
        <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.brand.fields.name_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" <?php echo e((isset($brand) && $brand->active) || old('active', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="active"><?php echo e(trans('cruds.brand.fields.active')); ?></label>
    </div>
    <?php if($errors->has('active')): ?>
        <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.brand.fields.active_helper')); ?></span>
</div>

<div class="form-group">
    <label class="required" for="slug"><?php echo e(trans('cruds.brand.fields.slug')); ?></label>
    <input class="form-control <?php echo e($errors->has('slug') ? 'is-invalid' : ''); ?>" type="text" name="slug" id="slug" value="<?php echo e(old('slug', isset($brand) ? $brand->slug : null)); ?>" required>
    <?php if($errors->has('slug')): ?>
        <span class="text-danger"><?php echo e($errors->first('slug')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.brand.fields.slug_helper')); ?></span>
</div>

<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.admin.translation-form','data' => ['module' => 'brand','model' => isset($brand) ? $brand : null,'fields' => [
                            ['name' => 'tagline', 'type' => 'text', 'required' => false],
                            ['name' => 'description', 'type' => 'textarea', 'required' => false],
]]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('admin.translation-form'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['module' => 'brand','model' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(isset($brand) ? $brand : null),'fields' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute([
                            ['name' => 'tagline', 'type' => 'text', 'required' => false],
                            ['name' => 'description', 'type' => 'textarea', 'required' => false],
])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>

<div class="form-group">
    <label for="photo"><?php echo e(trans('cruds.brand.fields.photo')); ?></label>
    <div class="needsclick dropzone <?php echo e($errors->has('photo') ? 'is-invalid' : ''); ?>" id="photo-dropzone">
    </div>
    <?php if($errors->has('photo')): ?>
        <span class="text-danger"><?php echo e($errors->first('photo')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.brand.fields.photo_helper')); ?></span>
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
                                        xhr.open('POST', '<?php echo e(route('admin.brands.storeCKEditorImages')); ?>', true);
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
                                        data.append('crud_id', '<?php echo e($brand->id ?? 0); ?>');
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
        });
    </script>

    <script>
        Dropzone.options.photoDropzone = {
            url: '<?php echo e(route('admin.brands.storeMedia')); ?>',
            maxFilesize: 20, // MB
            acceptedFiles: '.jpeg,.jpg,.png,.gif',
            maxFiles: 1,
            addRemoveLinks: true,
            headers: {
                'X-CSRF-TOKEN': "<?php echo e(csrf_token()); ?>"
            },
            params: {
                size: 20,
                width: 4096,
                height: 4096
            },
            success: function (file, response) {
                $('form').find('input[name="photo"]').remove()
                $('form').append('<input type="hidden" name="photo" value="' + response.name + '">')
            },
            removedfile: function (file) {
                file.previewElement.remove()
                if (file.status !== 'error') {
                    $('form').find('input[name="photo"]').remove()
                    this.options.maxFiles = this.options.maxFiles + 1
                }
            },
            init: function () {
                <?php if(isset($brand) && $brand->photo): ?>
                var file = <?php echo json_encode($brand->photo); ?>

                this.options.addedfile.call(this, file)
                this.options.thumbnail.call(this, file, file.preview ?? file.preview_url)
                file.previewElement.classList.add('dz-complete')
                $('form').append('<input type="hidden" name="photo" value="' + file.file_name + '">')
                this.options.maxFiles = this.options.maxFiles - 1
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
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/brands/partials/_form.blade.php ENDPATH**/ ?>