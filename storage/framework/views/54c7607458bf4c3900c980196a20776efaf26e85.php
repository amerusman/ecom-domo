<?php if(session('message')): ?>
    <div class="row mb-2">
        <div class="col-lg-12">
            <div class="alert alert-success" role="alert"><?php echo e(session('message')); ?></div>
        </div>
    </div>
<?php endif; ?>
<?php if($errors->count() > 0): ?>
    <div class="alert alert-danger">
        <ul class="list-unstyled">
            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li><?php echo e($error); ?></li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
<?php endif; ?>
<?php /**PATH /var/www/italyskincare.com/resources/views/partials/_errors.blade.php ENDPATH**/ ?>