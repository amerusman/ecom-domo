<div class="card-header p-0 pt-1">
    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
        <?php $__currentLoopData = \App\Models\Language::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <li class="nav-item">
                <?php if($loop->first): ?>
                    <a class="nav-link active" id="tabs-<?php echo e($lang->code); ?>-tab" data-toggle="pill" href="#tabs-<?php echo e($lang->code); ?>" role="tab" aria-controls="tabs-<?php echo e($lang->code); ?>" aria-selected="true"><?php echo e($lang->name); ?></a>
                <?php else: ?>
                    <a class="nav-link" id="tabs-<?php echo e($lang->code); ?>-tab" data-toggle="pill" href="#tabs-<?php echo e($lang->code); ?>" role="tab" aria-controls="tabs-<?php echo e($lang->code); ?>" aria-selected="false"><?php echo e($lang->name); ?></a>
                <?php endif; ?>
            </li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </ul>
</div>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/partials/languages-selector.blade.php ENDPATH**/ ?>