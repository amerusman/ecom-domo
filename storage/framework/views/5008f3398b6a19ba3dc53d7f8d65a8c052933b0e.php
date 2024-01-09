<div class="form-group">
    <label><?php echo e(trans('cruds.translation.fields.section')); ?></label>
    <select class="form-control <?php echo e($errors->has('section') ? 'is-invalid' : ''); ?>" name="section" id="section">
        <option value disabled <?php echo e(old('section', null) === null ? 'selected' : ''); ?>><?php echo e(trans('global.pleaseSelect')); ?></option>
        <?php $__currentLoopData = App\Models\Translation::select('section')->distinct()->get()->pluck('section', 'section'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $label): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option value="<?php echo e($key); ?>" <?php echo e(old('section', isset($translation) ? $translation->section : null) === (string) $key ? 'selected' : ''); ?>><?php echo e($label); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
    <?php if($errors->has('section')): ?>
        <span class="text-danger"><?php echo e($errors->first('section')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.translation.fields.section_helper')); ?></span>
</div>

<div class="form-group">
    <label class="required" for="key"><?php echo e(trans('cruds.translation.fields.key')); ?></label>
    <input class="form-control <?php echo e($errors->has('key') ? 'is-invalid' : ''); ?>" type="text" name="key" id="key" value="<?php echo e(old('key', isset($translation) ? $translation->key : null)); ?>" required <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->denies('translation_delete')): ?> readonly <?php endif; ?>>
    <?php if($errors->has('key')): ?>
        <span class="text-danger"><?php echo e($errors->first('key')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.translation.fields.key_helper')); ?></span>
</div>

<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.admin.translation-input','data' => ['module' => 'translation','name' => 'value','model' => isset($translation) ? $translation : null]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('admin.translation-input'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['module' => 'translation','name' => 'value','model' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(isset($translation) ? $translation : null)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/translations/partials/_form.blade.php ENDPATH**/ ?>