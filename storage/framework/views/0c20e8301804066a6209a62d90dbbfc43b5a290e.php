<div class="card card-primary card-tabs">

    <?php echo $__env->make('admin.partials.languages-selector', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
            <?php $__currentLoopData = \App\Models\Language::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="tab-pane <?php if($loop->first): ?> active show <?php endif; ?>" id="tabs-<?php echo e($lang->code); ?>" role="tabpanel"
                     aria-labelledby="tabs-<?php echo e($lang->code); ?>-tab">
                    <div class="form-group">
                        <label class="required" for="name_<?php echo e($lang->code); ?>"><?php echo e(trans('cruds.country.fields.name')); ?></label>
                        <input class="form-control <?php echo e($errors->has('name.' . $lang->code) ? 'is-invalid' : ''); ?>" type="text"
                               name="name[<?php echo e($lang->code); ?>]" id="name_<?php echo e($lang->code); ?>" value="<?php echo e(old('name.' . $lang->code, isset($country) ? $country->getTranslation('name', $lang->code) : null)); ?>"
                               required>
                        <?php if($errors->has('name.' . $lang->code)): ?>
                            <span class="text-danger"><?php echo e($errors->first('name.' . $lang->code)); ?></span>
                        <?php endif; ?>
                        <span class="help-block"><?php echo e(trans('cruds.country.fields.name_helper')); ?></span>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

</div>

<div class="form-group">
    <label class="required" for="short_code"><?php echo e(trans('cruds.country.fields.short_code')); ?></label>
    <input class="form-control <?php echo e($errors->has('short_code') ? 'is-invalid' : ''); ?>" type="text" name="short_code"
           id="short_code" value="<?php echo e(old('short_code', isset($country) ? $country->short_code : null)); ?>" required>
    <?php if($errors->has('short_code')): ?>
        <span class="text-danger"><?php echo e($errors->first('short_code')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.short_code_helper')); ?></span>
</div>
<div class="form-group">
    <div class="form-check <?php echo e($errors->has('active') ? 'is-invalid' : ''); ?>">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active"
               value="1" <?php echo e((isset($country) && $country->active) || old('active', 0) === 1 ? 'checked' : ''); ?>>
        <label class="form-check-label" for="active"><?php echo e(trans('cruds.country.fields.active')); ?></label>
    </div>
    <?php if($errors->has('active')): ?>
        <span class="text-danger"><?php echo e($errors->first('active')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.active_helper')); ?></span>
</div>
<div class="form-group">
    <label class="required" for="currency_id"><?php echo e(trans('cruds.country.fields.currency')); ?></label>
    <select class="form-control select2 <?php echo e($errors->has('currency') ? 'is-invalid' : ''); ?>" name="currency_id"
            id="currency_id" required>
        <?php $__currentLoopData = $currencies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option
                value="<?php echo e($id); ?>" <?php echo e((old('currency_id') ? old('currency_id') : $country->currency->id ?? '') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
    <?php if($errors->has('currency')): ?>
        <span class="text-danger"><?php echo e($errors->first('currency')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.currency_helper')); ?></span>
</div>
<div class="form-group">
    <label for="languages"><?php echo e(trans('cruds.country.fields.language')); ?></label>
    <div style="padding-bottom: 4px">
        <span class="btn btn-info btn-xs select-all" style="border-radius: 0"><?php echo e(trans('global.select_all')); ?></span>
        <span class="btn btn-info btn-xs deselect-all"
              style="border-radius: 0"><?php echo e(trans('global.deselect_all')); ?></span>
    </div>
    <select class="form-control select2 <?php echo e($errors->has('languages') ? 'is-invalid' : ''); ?>" name="languages[]"
            id="languages" multiple>
        <?php $__currentLoopData = $languages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option
                value="<?php echo e($id); ?>" <?php echo e((in_array($id, old('languages', [])) || $country->languages->contains($id)) ? 'selected' : ''); ?>><?php echo e($language); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
    <?php if($errors->has('languages')): ?>
        <span class="text-danger"><?php echo e($errors->first('languages')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.language_helper')); ?></span>
</div>

<div class="form-group">
    <label for="vat"><?php echo e(trans('cruds.country.fields.vat')); ?></label>
    <input class="form-control <?php echo e($errors->has('vat') ? 'is-invalid' : ''); ?>" type="number" name="vat" id="vat"
           value="<?php echo e(old('vat', $country->vat)); ?>" step="0.001" max="99">
    <?php if($errors->has('vat')): ?>
        <span class="text-danger"><?php echo e($errors->first('vat')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.vat_helper')); ?></span>
</div>

<div class="form-group">
    <label for="vat_code"><?php echo e(trans('cruds.country.fields.vat_code')); ?></label>
    <input class="form-control <?php echo e($errors->has('vat_code') ? 'is-invalid' : ''); ?>" type="number" name="vat_code" id="vat_code"
           value="<?php echo e(old('vat_code', $country->vat_code)); ?>">
    <?php if($errors->has('vat_code')): ?>
        <span class="text-danger"><?php echo e($errors->first('vat_code')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.vat_code_helper')); ?></span>
</div>

<div class="form-group">
    <label for="tax_account"><?php echo e(trans('cruds.country.fields.tax_account')); ?></label>
    <input class="form-control <?php echo e($errors->has('tax_account') ? 'is-invalid' : ''); ?>" type="text" name="tax_account" id="tax_account"
           value="<?php echo e(old('tax_account', $country->tax_account)); ?>">
    <?php if($errors->has('tax_account')): ?>
        <span class="text-danger"><?php echo e($errors->first('tax_account')); ?></span>
    <?php endif; ?>
    <span class="help-block"><?php echo e(trans('cruds.country.fields.tax_account_helper')); ?></span>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        <?php echo e(trans('global.save')); ?>

    </button>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/countries/partials/_form.blade.php ENDPATH**/ ?>