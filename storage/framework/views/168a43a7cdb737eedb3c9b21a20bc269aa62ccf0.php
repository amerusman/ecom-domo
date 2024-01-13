<div class="form-group">
    <label class="required" for="name"><?php echo e(trans('cruds.page.fields.name')); ?></label>
    <input class="form-control <?php echo e($errors->has('name') ? 'is-invalid' : ''); ?>" type="text" name="name" id="name" value="<?php echo e(old('name', isset($page) ? $page->name : null)); ?>" required>
    <?php if($errors->has('name')): ?>
        <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.page.fields.name_helper')); ?></span>
</div>
<div class="form-group">
    <label class="required" for="slug"><?php echo e(trans('cruds.page.fields.slug')); ?></label>
    <input class="form-control <?php echo e($errors->has('slug') ? 'is-invalid' : ''); ?>" type="text" name="slug" id="slug" value="<?php echo e(old('slug', isset($page) ? $page->slug : null)); ?>" required>
    <?php if($errors->has('slug')): ?>
        <span class="text-danger"><?php echo e($errors->first('slug')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.page.fields.slug_helper')); ?></span>
</div>


<div class="card card-primary card-tabs">

    <?php echo $__env->make('admin.partials.languages-selector', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            <?php $__currentLoopData = \App\Models\Language::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="tab-pane <?php if($loop->first): ?> active show <?php endif; ?>" id="tabs-<?php echo e($lang->code); ?>" role="tabpanel" aria-labelledby="tabs-<?php echo e($lang->code); ?>-tab">

                    <div class="form-group">
                        <label for="title"><?php echo e(trans('cruds.page.fields.title')); ?></label>
                        <input class="form-control <?php echo e($errors->has('title.' . $lang->code) ? 'is-invalid' : ''); ?>" type="text" name="title[<?php echo e($lang->code); ?>]" id="title_<?php echo e($lang->code); ?>" value="<?php echo e(old('title.' . $lang->code, isset($page) ? $page->getTranslation('title', $lang->code) : null)); ?>">
                        <?php if($errors->has('title.' . $lang->code)): ?>
                            <span class="text-danger"><?php echo e($errors->first('title.' . $lang->code)); ?></span>
                        <?php endif; ?>
                        <span class="help-block"><?php echo e(trans('cruds.page.fields.title_helper')); ?></span>
                    </div>

                    <div class="form-group">
                        <label for="body"><?php echo e(trans('cruds.page.fields.body')); ?></label>
                        <textarea class="form-control ckeditor <?php echo e($errors->has('body.' . $lang->code) ? 'is-invalid' : ''); ?>" name="body[<?php echo e($lang->code); ?>]" id="body_<?php echo e($lang->code); ?>"><?php echo old('body.' . $lang->code, isset($page) ? $page->getTranslation('body', $lang->code) : null); ?></textarea>
                        <?php if($errors->has('body.' . $lang->code)): ?>
                            <span class="text-danger"><?php echo e($errors->first('body.' . $lang->code)); ?></span>
                        <?php endif; ?>
                        <span class="help-block"><?php echo e(trans('cruds.page.fields.body_helper')); ?></span>
                    </div>

                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

</div>


<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/pages/partials/_form.blade.php ENDPATH**/ ?>