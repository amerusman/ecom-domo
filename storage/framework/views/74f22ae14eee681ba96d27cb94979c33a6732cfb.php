<h3><?php echo e(Trans::do('Billing address', 'checkout')); ?></h3>
    <div>
        <label for="billing_country_id"><?php echo e(Trans::__('Country')); ?></label>
        <select class="<?php echo e($errors->has('billing.country_id') ? 'is-invalid' : ''); ?> select2" name="billing[country_id]" id="billing_country_id" required>
            <option value=""><?php echo e(Trans::__('profile.select_country')); ?></option>
            <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($id); ?>" <?php echo e((isset($address) && $address->country_id == $id) || old('billing.country_id') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </select>
        <?php if($errors->has('billing.country_id')): ?>
            <span class="text-danger"><?php echo e($errors->first('billing.country_id')); ?></span>
        <?php endif; ?>
    </div>
    <div>
        <label for="billing_state"><?php echo e(Trans::__('profile.state', 'State/region')); ?></label>
        <input type="text" id="billing_state" name="billing[state]" placeholder="<?php echo e(Trans::__('profile.state', 'State/region')); ?>" value="<?php echo e(old('billing.state', $address->state)); ?>" class="<?php echo e($errors->has('billing.state') ? 'is-invalid' : ''); ?>" required>
        <?php if($errors->has('billing.state')): ?>
            <span class="text-danger"><?php echo e($errors->first('billing.state')); ?></span>
        <?php endif; ?>
    </div>
    <div>
        <div>
            <label for="billing_firstname"><?php echo e(Trans::do('First name', 'profile')); ?></label>
            <input type="text" id="billing_firstname" name="billing[first_name]" placeholder="<?php echo e(Trans::do('First name', 'profile')); ?>" value="<?php echo e(old('billing.first_name', $address->first_name) ?: (auth()->check() ? auth()->user()->firstname : null)); ?>" required>
            <?php if($errors->has('billing.first_name')): ?>
                <span class="text-danger"><?php echo e($errors->first('billing.first_name')); ?></span>
            <?php endif; ?>
        </div>
        <div>
            <label for="billing_lastname"><?php echo e(Trans::do('Last name', 'profile')); ?></label>
            <input type="text" id="billing_lastname" name="billing[last_name]" placeholder="<?php echo e(Trans::do('Last name', 'profile')); ?>" value="<?php echo e(old('billing.last_name', $address->last_name) ?: (auth()->check() ? auth()->user()->lastname : null)); ?>" required>
            <?php if($errors->has('billing.last_name')): ?>
                <span class="text-danger"><?php echo e($errors->first('billing.last_name')); ?></span>
            <?php endif; ?>
        </div>
    </div>
    <div>
        <label for="billing_address"><?php echo e(Trans::do('Address', 'profile')); ?></label>
        <input type="text" id="billing_address" name="billing[address_1]" placeholder="<?php echo e(Trans::__('profile.address')); ?>" value="<?php echo e(old('billing.address_1', $address->address_1)); ?>" class="form-control <?php echo e($errors->has('billing.address_1') ? 'is-invalid' : ''); ?>" required>
        <?php if($errors->has('billing.address_1')): ?>
            <span class="text-danger"><?php echo e($errors->first('billing.city')); ?></span>
        <?php endif; ?>
    </div>
    <div>
        <label for="billing_apartment"><?php echo e(Trans::do('Apartment, suite, etc. (optional)', 'profile')); ?></label>
        <input type="text" id="billing_apartment" name="billing[address_2]" placeholder="<?php echo e(Trans::do('Apartment, suite, etc. (optional)', 'profile')); ?>" value="<?php echo e(old('billing.address_2', $address->address_2)); ?>">
        <?php if($errors->has('billing.address_2')): ?>
            <span class="text-danger"><?php echo e($errors->first('billing.city')); ?></span>
        <?php endif; ?>
    </div>
    <div>
    <div>
            <label for="billing_city"><?php echo e(Trans::do('City', 'profile')); ?></label>
            <input type="text" id="billing_city" name="billing[city]" placeholder="<?php echo e(Trans::do('City', 'profile')); ?>"
                   value="<?php echo e(old('billing.city',$address->city)); ?>" required>
            <?php if($errors->has('billing.city')): ?>
                <span class="text-danger"><?php echo e($errors->first('billing.city')); ?></span>
            <?php endif; ?>
        </div>
        <div>
            <label for="billing_code"><?php echo e(Trans::do('Postal code', 'profile')); ?></label>
            <input type="text" id="billing_code" name="billing[zip]" placeholder="<?php echo e(Trans::do('Postal code', 'profile')); ?>" value="<?php echo e(old('billing.zip',$address->zip)); ?>" required>
            <?php if($errors->has('billing.zip')): ?>
                <span class="text-danger"><?php echo e($errors->first('billing.zip')); ?></span>
            <?php endif; ?>
        </div>
    </div>
    <div>
        <label for="billing_phone"><?php echo e(Trans::do('Phone', 'profile')); ?></label>
        <input type="text" id="billing_phone" name="billing[phone]" placeholder="<?php echo e(Trans::do('Phone', 'profile')); ?>" class="<?php echo e($errors->has('billing.phone') ? 'is-invalid' : ''); ?>" value="<?php echo e(old('billing.phone', $address->phone)); ?>">
        <?php if($errors->has('billing.phone')): ?>
            <span class="text-danger"><?php echo e($errors->first('billing.phone')); ?></span>
        <?php endif; ?>
    </div>
    <div class="address-select-container">
        <div class="form-container">
            <input class="radio" type="radio" id="same_address" name="select_shipping_address" value="0" <?php echo e($shipping ? '' : 'checked'); ?>>
            <label for="same_address"><?php echo e(Trans::__('checkout.shippind_address', 'Shipping address is the same as my Billing address')); ?></label>
        </div>
        <div class="form-container">
            <input class="radio" type="radio" id="other_address" name="select_shipping_address" value="1" <?php echo e($shipping ? 'checked' : ''); ?>>
            <label for="other_address"><?php echo e(Trans::__('checkout.shippind_another_address', 'Shipping to another address')); ?></label>
        </div>
    </div>



    <div class="additional-address-container" style="display: none;">
        <h3><?php echo e(Trans::do('Shipping address', 'checkout')); ?></h3>
        <div>
            <label for="shipping_country_id"><?php echo e(Trans::__('Country')); ?></label>
            <select class="<?php echo e($errors->has('shipping.country_id') ? 'is-invalid' : ''); ?>" name="shipping[country_id]" id="shipping_country_id">
                <option value=""><?php echo e(Trans::__('profile.select_country')); ?></option>
                <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $entry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <option value="<?php echo e($id); ?>" <?php echo e((!empty($shipping) && $shipping->country_id == $id) || old('shipping.country_id') == $id ? 'selected' : ''); ?>><?php echo e($entry); ?></option>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
            <?php if($errors->has('shipping.country_id')): ?>
                <span class="text-danger"><?php echo e($errors->first('shipping.country_id')); ?></span>
            <?php endif; ?>
        </div>
        <div>
            <label for="shipping_state"><?php echo e(Trans::__('profile.state', 'State/region')); ?></label>
            <input type="text" id="shipping_state" name="shipping[state]" placeholder="<?php echo e(Trans::__('profile.state', 'State/region')); ?>"
                   value="<?php echo e(old('shipping.state', $shipping ? $shipping->state : null)); ?>"
                   class="<?php echo e($errors->has('shipping.state') ? 'is-invalid' : ''); ?>">
            <?php if($errors->has('shipping.state')): ?>
                <span class="text-danger"><?php echo e($errors->first('shipping.state')); ?></span>
            <?php endif; ?>
        </div>
        <div>
            <div>
                <label for="shipping_firstname"><?php echo e(Trans::do('First name', 'profile')); ?></label>
                <input type="text" id="shipping_firstname" name="shipping[first_name]" placeholder="<?php echo e(Trans::do('First name', 'profile')); ?>"
                       value="<?php echo e(old('shipping.first_name', $shipping ? $shipping->first_name : $address->first_name) ?: (auth()->check() ? auth()->user()->firstname : null)); ?>">
                <?php if($errors->has('shipping.first_name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('shipping.first_name')); ?></span>
                <?php endif; ?>
            </div>
            <div>
                <label for="shipping_lastname"><?php echo e(Trans::do('Last name', 'profile')); ?></label>
                <input type="text" id="shipping_lastname" name="shipping[last_name]" placeholder="<?php echo e(Trans::do('Last name', 'profile')); ?>"
                       value="<?php echo e(old('shipping.last_name', $shipping ? $shipping->last_name : $address->last_name) ?: (auth()->check() ? auth()->user()->lastname : null)); ?>">
                <?php if($errors->has('shipping.last_name')): ?>
                    <span class="text-danger"><?php echo e($errors->first('shipping.last_name')); ?></span>
                <?php endif; ?>
            </div>
        </div>

        <div>
            <label for="shipping_address"><?php echo e(Trans::do('Address', 'profile')); ?></label>
            <input type="text" id="shipping_address" name="shipping[address_1]" placeholder="<?php echo e(Trans::__('profile.address')); ?>"
                   value="<?php echo e(old('shipping.address_1', $shipping ? $shipping->address_1 : null)); ?>"
                   class="form-control <?php echo e($errors->has('shipping.address_1') ? 'is-invalid' : ''); ?>">

            <?php if($errors->has('shipping.address_1')): ?>
                <span class="text-danger"><?php echo e($errors->first('shipping.address_1')); ?></span>
            <?php endif; ?>
        </div>

        <div>
            <label for="shipping_apartment"><?php echo e(Trans::do('Apartment, suite, etc. (optional)', 'profile')); ?></label>
            <input type="text" id="shipping_apartment" name="shipping[address_2]" placeholder="<?php echo e(Trans::do('Apartment, suite, etc. (optional)', 'profile')); ?>" value="<?php echo e(old('shipping.address_2', $shipping ? $shipping->address_2 : null)); ?>">

            <?php if($errors->has('shipping.address_2')): ?>
                <span class="text-danger"><?php echo e($errors->first('shipping.address_2')); ?></span>
            <?php endif; ?>
        </div>

        <div>
            <div>
                <label for="shipping_city"><?php echo e(Trans::do('City', 'profile')); ?></label>
                <input type="text" id="shipping_city" name="shipping[city]" placeholder="<?php echo e(Trans::do('City', 'profile')); ?>"
                       value="<?php echo e(old('shipping.city', $shipping ? $shipping->city : null)); ?>">
                <?php if($errors->has('shipping.city')): ?>
                    <span class="text-danger"><?php echo e($errors->first('shipping.city')); ?></span>
                <?php endif; ?>
            </div>

            <div>
                <label for="shipping_code"><?php echo e(Trans::do('Postal code', 'profile')); ?></label>
                <input type="text" id="shipping_code" name="shipping[zip]" placeholder="<?php echo e(Trans::do('Postal code', 'profile')); ?>"
                       value="<?php echo e(old('shipping.zip', $shipping ? $shipping->zip : null)); ?>">
                <?php if($errors->has('shipping.zip')): ?>
                    <span class="text-danger"><?php echo e($errors->first('shipping.zip')); ?></span>
                <?php endif; ?>
            </div>
        </div>

        <div>
            <label for="shipping_phone"><?php echo e(Trans::do('Phone', 'profile')); ?></label>
            <input type="text" id="shipping_phone" name="shipping[phone]" placeholder="<?php echo e(Trans::do('Phone', 'profile')); ?>" class="<?php echo e($errors->has('shipping.phone') ? 'is-invalid' : ''); ?>"
                   value="<?php echo e(old('shipping.phone', $shipping ? $shipping->phone : null)); ?>">
            <?php if($errors->has('shipping.phone')): ?>
                <span class="text-danger"><?php echo e($errors->first('shipping.phone')); ?></span>
            <?php endif; ?>
        </div>
    </div>

<?php /**PATH /var/www/italyskincare.com/resources/views/checkout/partials/_address.blade.php ENDPATH**/ ?>