<div class="form-group">
    <label class="required" for="name"><?php echo e(trans('cruds.banner.fields.name')); ?></label>
    <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', isset($banner) ? $banner->name : null)); ?>" required>
    <?php if($errors->has('name')): ?>
        <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.banner.fields.name_helper')); ?></span>
</div>

<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.admin.translation-form','data' => ['module' => 'banner','model' => isset($banner) ? $banner : null,'fields' => [
                            ['name' => 'left_line_1', 'type' => 'text', 'required' => false],
                            ['name' => 'left_line_2', 'type' => 'text', 'required' => false],
                            ['name' => 'right_line_1', 'type' => 'text', 'required' => false],
                            ['name' => 'right_line_2', 'type' => 'text', 'required' => false],
]]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('admin.translation-form'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['module' => 'banner','model' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(isset($banner) ? $banner : null),'fields' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute([
                            ['name' => 'left_line_1', 'type' => 'text', 'required' => false],
                            ['name' => 'left_line_2', 'type' => 'text', 'required' => false],
                            ['name' => 'right_line_1', 'type' => 'text', 'required' => false],
                            ['name' => 'right_line_2', 'type' => 'text', 'required' => false],
])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>


<div class="form-group">
    <label class="required" for="image"><?php echo e(trans('cruds.banner.fields.image')); ?></label>
    <div class="needsclick dropzone <?php echo e($errors->has('image') ? 'is-invalid' : ''); ?>" id="image-dropzone">
    </div>
    <?php if($errors->has('image')): ?>
        <span class="text-danger"><?php echo e($errors->first('image')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.banner.fields.image_helper')); ?></span>
</div>

<div class="form-group">
    <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" <?php echo e((isset($banner) && $banner->active) || old('active', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="active"><?php echo e(trans('cruds.banner.fields.active')); ?></label>
    </div>
    <?php if($errors->has('active')): ?>
        <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.banner.fields.active_helper')); ?></span>
</div>

<div class="form-group">
    <label for="position"><?php echo e(trans('cruds.banner.fields.position')); ?></label>
    <input class="form-control <?php echo e($errors->has('position') ? 'is-invalid' : ''); ?>" type="number" name="position" id="position" value="<?php echo e(old('position' , isset($banner) ? $banner->position : 0)); ?>" step="1">
    <?php if($errors->has('position')): ?>
        <span class="text-danger"><?php echo e($errors->first('position')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.banner.fields.position_helper')); ?></span>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>



<?php $__env->startSection('scripts'); ?>
    <script>
        Dropzone.options.imageDropzone = {
            url: '<?php echo e(route('admin.banners.storeMedia')); ?>',
            maxFilesize: 200, // MB
            acceptedFiles: '.jpeg,.jpg,.png,.gif',
            maxFiles: 1,
            addRemoveLinks: true,
            headers: {
                'X-CSRF-TOKEN': "<?php echo e(csrf_token()); ?>"
            },
            params: {
                size: 200,
                width: 4096,
                height: 4096
            },
            success: function (file, response) {
                $('form').find('input[name="image"]').remove()
                $('form').append('<input type="hidden" name="image" value="' + response.name + '">')
            },
            removedfile: function (file) {
                file.previewElement.remove()
                if (file.status !== 'error') {
                    $('form').find('input[name="image"]').remove()
                    this.options.maxFiles = this.options.maxFiles + 1
                }
            },
            init: function () {
                <?php if(isset($banner) && $banner->image): ?>
                var file = <?php echo json_encode($banner->image); ?>

                this.options.addedfile.call(this, file)
                this.options.thumbnail.call(this, file, file.preview ?? file.preview_url)
                file.previewElement.classList.add('dz-complete')
                $('form').append('<input type="hidden" name="image" value="' + file.file_name + '">')
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
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/banners/partials/_form.blade.php ENDPATH**/ ?>