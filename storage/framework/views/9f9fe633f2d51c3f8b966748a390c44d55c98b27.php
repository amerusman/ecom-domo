<div class="card card-primary card-tabs">

    <?php echo $__env->make('admin.partials.languages-selector', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            <?php $__currentLoopData = \App\Models\Language::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="tab-pane <?php if($loop->first): ?> active show <?php endif; ?>" id="tabs-<?php echo e($lang->code); ?>" role="tabpanel"
                     aria-labelledby="tabs-<?php echo e($lang->code); ?>-tab">
                    <?php $__currentLoopData = $fields; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $field): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php
                        $name = $field['name'];
                        ?>
                        <div class="form-group">
                            <label <?php if($field['required'] && $loop->parent->first): ?>class="required" <?php endif; ?> for="<?php echo e($name); ?>_<?php echo e($lang->code); ?>"><?php echo e(trans('cruds.' . $module . '.fields.' . $name)); ?></label>
                            <?php if('text' == $field['type']): ?>
                            <input class="form-control <?php echo e($errors->has($name . '.' . $lang->code) ? 'is-invalid' : ''); ?>" type="text"
                                   name="<?php echo e($name); ?>[<?php echo e($lang->code); ?>]" id="<?php echo e($name); ?>_<?php echo e($lang->code); ?>" value="<?php echo e(old($name . '.' . $lang->code, (isset($model) && $model) ? $model->getTranslation($name, $lang->code, false) : null)); ?>"
                                   <?php if($field['required'] && $loop->parent->first): ?> required <?php endif; ?>>
                            <?php elseif('textarea' == $field['type']): ?>
                                <textarea class="form-control <?php echo e($errors->has($name . '.' . $lang->code) ? 'is-invalid' : ''); ?>" type="text"
                                       name="<?php echo e($name); ?>[<?php echo e($lang->code); ?>]" id="<?php echo e($name); ?>_<?php echo e($lang->code); ?>"
                                          <?php if($field['required'] && $loop->parent->first): ?> required <?php endif; ?>><?php echo e(old($name . '.' . $lang->code, (isset($model) && $model) ? $model->getTranslation($name, $lang->code, false) : null)); ?></textarea>
                            <?php endif; ?>

                            <?php $__errorArgs = [$name . '.' . $lang->code];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <span class="text-danger"><?php echo e($message); ?></span>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            <span class="help-block"><?php echo e(trans('cruds.' . $module . '.fields.' . $name . '_helper')); ?></span>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/components/admin/translation-form.blade.php ENDPATH**/ ?>