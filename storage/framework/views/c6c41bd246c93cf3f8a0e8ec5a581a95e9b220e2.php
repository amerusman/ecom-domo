<div class="form-group">
    <label for="key"><?php echo e(trans('cruds.feature.fields.key')); ?></label>
    <input class="form-control <?php echo e($errors->has('key') ? 'is-invalid' : ''); ?>" type="text" name="key" id="key" value="<?php echo e(old('key', isset($feature) ? $feature->key : null)); ?>">
    <?php if($errors->has('key')): ?>
        <span class="text-danger"><?php echo e($errors->first('key')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.feature.fields.key_helper')); ?></span>
</div>

<div class="form-group">
    <label class="required"><?php echo e(trans('cruds.feature.fields.type')); ?></label>
    <select class="form-control <?php echo e($errors->has('type') ? 'is-invalid' : ''); ?>" name="type" id="type" required>
        <option value disabled <?php echo e(old('type', null) === null ? 'selected' : ''); ?>><?php echo e(trans('global.pleaseSelect')); ?></option>
        <?php $__currentLoopData = App\Models\Feature::TYPE_SELECT; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $label): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option value="<?php echo e($key); ?>" <?php echo e(old('type', isset($feature) ? $feature->type : null) === (string) $key ? 'selected' : ''); ?>><?php echo e($label); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
    <?php if($errors->has('type')): ?>
        <span class="text-danger"><?php echo e($errors->first('type')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.feature.fields.type_helper')); ?></span>
</div>


<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.admin.translation-form','data' => ['module' => 'feature','model' => isset($feature) ? $feature : null,'fields' => [
                            ['name' => 'name', 'type' => 'text', 'required' => true],
                            ['name' => 'unit', 'type' => 'text', 'required' => false],
]]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('admin.translation-form'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['module' => 'feature','model' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(isset($feature) ? $feature : null),'fields' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute([
                            ['name' => 'name', 'type' => 'text', 'required' => true],
                            ['name' => 'unit', 'type' => 'text', 'required' => false],
])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>


<div class="form-group">
    <label for="options"><?php echo e(trans('cruds.feature.fields.options')); ?></label>
    <textarea class="form-control <?php echo e($errors->has('options') ? 'is-invalid' : ''); ?>" name="options" id="options"><?php echo e(old('options', isset($feature) ? $feature->options : null)); ?></textarea>
    <?php if($errors->has('options')): ?>
        <span class="text-danger"><?php echo e($errors->first('options')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.feature.fields.options_helper')); ?></span>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/features/partials/_form.blade.php ENDPATH**/ ?>