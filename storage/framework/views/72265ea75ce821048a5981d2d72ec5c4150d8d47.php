<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <?php echo e(trans('global.show')); ?> <?php echo e(trans('cruds.order.title')); ?>

    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.orders.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>

                <a class="btn btn-default" href="<?php echo e(route('admin.orders.newInvoice', ['order_id' => $order->id])); ?>">
                    create new Invoice
                </a>

                <a class="btn btn-default" href="<?php echo e(route('admin.orders.invoice', ['order_id' => $order->id])); ?>">
                    download Invoice
                </a>

                <a class="btn btn-default" href="<?php echo e(route('admin.orders.delivery', ['order_id' => $order->id])); ?>">
                    download Delivery Doc
                </a>
                <a class="btn btn-default" href="<?php echo e(route('admin.orders.fullDoc', ['order_id' => $order->id])); ?>">
                    download accountant doc
                </a>
                <?php if(empty($order->meta['delivery'])): ?>
                    <a class="btn btn-default" href="<?php echo e(route('admin.orders.createDelivery', ['order_id' => $order->id])); ?>">
                        create Delivery
                    </a>
                <?php endif; ?>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.id')); ?>

                        </th>
                        <td>
                            <?php echo e($order->id); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.status')); ?>

                        </th>
                        <td>
                            <?php echo e($order->status->label()); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.user')); ?>

                        </th>
                        <td>
                            <?php echo e($order->user->name ?? ''); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.billing')); ?>

                        </th>
                        <td>
                            <?php if(empty(!$order->billing)): ?>
                            <?php $__empty_1 = true; $__currentLoopData = $order->billing; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <?php echo e($k); ?>: <?php echo e($v); ?>

                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <?php endif; ?>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.shipping')); ?>

                        </th>
                        <td>
                            <?php $__currentLoopData = $order->shipping; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php echo e($k); ?>: <?php echo e($v); ?>

                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.payment')); ?>

                        </th>
                        <td>
                            <?php dump($order->payment); ?>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.total')); ?>

                        </th>
                        <td>
                            <?php echo e($order->total); ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.currency')); ?>

                        </th>
                        <td>
                            <?php echo $order->currency->sign ?? ''; ?>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.items')); ?>

                        </th>
                        <td>
                            <table>
                                <tr>
                                    <?php $__currentLoopData = $order->items [0]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <td><?php echo e($k); ?></td>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </tr>
                            <?php $__currentLoopData = $order->items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                <?php $__currentLoopData = $item; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <td><?php echo e($v); ?></td>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <?php echo e(trans('cruds.order.fields.paid_at')); ?>

                        </th>
                        <td>
                            <?php echo e($order->paid_at); ?>

                        </td>
                    </tr>
                    <?php if($order->metric): ?>
                        <tr>
                            <th>traffic metric</th>
                            <td>
                                click Id: <?php echo e($order->metric['click_id']); ?> <br>
                                utm_medium: <?php echo e($order->metric['utm_medium']); ?> <br>
                                utm_campaign: <?php echo e($order->metric['utm_campaign']); ?> <br>
                            </td>
                        </tr>
                    <?php endif; ?>
                    <tr>
                        <th>

                        </th>
                        <td>
                            <?php dump($order->meta); ?>
                        </td>
                    </tr>


























                </tbody>
            </table>

            <?php $__currentLoopData = $order->payments()->latest()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $payment): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <table class="table table-bordered table-striped">
                <tbody>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        <?php echo e($payment->id); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        status
                    </td>
                    <td>
                        <?php echo e($payment->status); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        notification_type
                    </td>
                    <td>
                        <?php echo e($payment->notification_type); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        country
                    </td>
                    <td>
                        <?php echo e($payment->country->name); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        ip
                    </td>
                    <td>
                        <?php echo e($payment->ip); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        name
                    </td>
                    <td>
                        <?php echo e($payment->name); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        token
                    </td>
                    <td>
                        <?php echo e($payment->token); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        amount
                    </td>
                    <td>
                        <?php echo e($payment->amount); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        currency_id
                    </td>
                    <td>
                        <?php echo e($payment->currency->name); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        created_at
                    </td>
                    <td>
                        <?php echo e($payment->created_at); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        updated_at
                    </td>
                    <td>
                        <?php echo e($payment->updated_at); ?>

                    </td>
                </tr>
                <tr>
                    <td>
                        data
                    </td>
                    <td>
                        <?php dump($payment->data); ?>
                    </td>
                </tr>
                </tbody>
            </table>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <div class="form-group">
                <a class="btn btn-default" href="<?php echo e(route('admin.orders.index')); ?>">
                    <?php echo e(trans('global.back_to_list')); ?>

                </a>
            </div>
        </div>
    </div>
</div>



<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/italyskincare.com/resources/views/admin/orders/show.blade.php ENDPATH**/ ?>