

<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.admin.translation-input','data' => ['module' => 'category','name' => 'name','model' => isset($category) ? $category : null]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('admin.translation-input'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['module' => 'category','name' => 'name','model' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(isset($category) ? $category : null)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>

<div class="form-group">
    <label class="required" for="slug"><?php echo e(trans('cruds.category.fields.slug')); ?></label>
    <input class="form-control <?php echo e($errors->has('slug') ? 'is-invalid' : ''); ?>" type="text" name="slug" id="slug" value="<?php echo e(old('slug', isset($category) ? $category->slug : null)); ?>" required>
    <?php if($errors->has('slug')): ?>
        <span class="text-danger"><?php echo e($errors->first('slug')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.category.fields.slug_helper')); ?></span>
</div>
<div class="form-group">
    <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" <?php echo e((isset($category) && $category->active) || old('active', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="active"><?php echo e(trans('cruds.category.fields.active')); ?></label>
    </div>
    <?php if($errors->has('active')): ?>
        <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.category.fields.active_helper')); ?></span>
</div>
<div class="form-group">
    <label for="photo"><?php echo e(trans('cruds.category.fields.photo')); ?></label>
    <div class="needsclick dropzone <?php echo e($errors->has('photo') ? 'is-invalid' : ''); ?>" id="photo-dropzone">
    </div>
    <?php if($errors->has('photo')): ?>
        <span class="text-danger"><?php echo e($errors->first('photo')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.category.fields.photo_helper')); ?></span>
</div>
<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/categories/partials/_form.blade.php ENDPATH**/ ?>