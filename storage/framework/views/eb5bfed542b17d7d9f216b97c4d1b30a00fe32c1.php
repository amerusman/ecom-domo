<div class="form-group">
    <label class="required" for="slug"><?php echo e(trans('cruds.block.fields.slug')); ?></label>
    <input class="form-control <?php echo e($errors->has('slug') ? 'is-invalid' : ''); ?>" type="text" name="slug" id="slug" value="<?php echo e(old('slug', isset($block) ? $block->slug : null)); ?>" required <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->denies('block_delete')): ?> readonly <?php endif; ?>>
    <?php if($errors->has('slug')): ?>
        <span class="text-danger"><?php echo e($errors->first('slug')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.block.fields.slug_helper')); ?></span>
</div>
<div class="form-group">
    <label class="required" for="name"><?php echo e(trans('cruds.block.fields.name')); ?></label>
    <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('slug', isset($block) ? $block->name : null)); ?>" required>
    <?php if($errors->has('name')): ?>
        <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.block.fields.name_helper')); ?></span>
</div>

<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.admin.translation-form','data' => ['module' => 'block','model' => isset($block) ? $block : null,'fields' => [
                            ['name' => 'body', 'type' => 'textarea', 'required' => true],
]]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('admin.translation-form'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['module' => 'block','model' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(isset($block) ? $block : null),'fields' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute([
                            ['name' => 'body', 'type' => 'textarea', 'required' => true],
])]); ?>
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
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/blocks/partials/_form.blade.php ENDPATH**/ ?>