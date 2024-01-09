<div class="r1-account-decorative-line"></div>
<!-- .r1-account-menu -->
<nav class="r1-account__menu">
    <ul class="account__menu-items">
        <li class="menu-item menu-item--account-details <?php if(in_array(Route::currentRouteName(), ['profile.home', 'profile.account.edit'])): ?> current-page--parent <?php endif; ?>">
            <a href="<?php echo e(route('profile.home')); ?>"><?php echo e(Trans::__('profile.account_details', 'account details')); ?></a>
        </li>
        <li class="menu-item menu-item--order <?php if('profile.orders.index' == Route::currentRouteName()): ?> current-page--parent <?php endif; ?>">
            <a href="<?php echo e(route('profile.orders.index')); ?>"><?php echo e(Trans::__('profile.orders', 'orders')); ?></a>
        </li>
        <li class="menu-item menu-item--wish-list <?php if('favorites.index' == Route::currentRouteName()): ?> current-page--parent <?php endif; ?>">
            <a href="<?php echo e(route('favorites.index')); ?>"><?php echo e(Trans::__('profile.wish_list', 'wish list')); ?></a>
        </li>
        <li class="menu-item menu-item--viewed-products <?php if('profile.viewed.index' == Route::currentRouteName()): ?> current-page--parent <?php endif; ?>">
            <a href="<?php echo e(route('profile.viewed.index')); ?>"><?php echo e(Trans::__('profile.viewed_products', 'viewed products')); ?></a>
        </li>
        <li class="menu-item menu-item--address <?php if(in_array(Route::currentRouteName(), ['profile.addresses.index', 'profile.addresses.edit', 'profile.addresses.create'])): ?> current-page--parent <?php endif; ?>">
            <a href="<?php echo e(route('profile.addresses.index')); ?>"><?php echo e(Trans::__('profile.address', 'address')); ?></a>
        </li>
        <li class="menu-item menu-item--logout">
            <a href="#" onclick="event.preventDefault(); document.getElementById('logoutform').submit();"><?php echo e(__('global.logout')); ?></a>
        </li>
    </ul>
</nav>
<!-- \.r1-account-menu -->
<?php /**PATH /var/www/italyskincare.com/resources/views/profile/partials/menu.blade.php ENDPATH**/ ?>