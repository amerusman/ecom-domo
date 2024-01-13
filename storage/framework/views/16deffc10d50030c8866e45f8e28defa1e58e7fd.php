<!-- .r1-header -->
<header class="r1-header">
    <div class="r1-header__mobile-overlay"></div>

    <nav class="r1-header__menu">
        <ul>
        

            <li class="menu-item">
                <a href="<?php echo e(route('pages.show', 'about-brand')); ?>"><?php echo e($pages['about-brand']); ?></a>
            </li>
            <li class="menu-item hidden">
                <a href="<?php echo e(route('products.index')); ?>"><?php echo e(Trans::__('catalog', 'Catalog')); ?></a>
            </li>

            <?php if(auth()->guard()->check()): ?>
            <ul class="personal-menu">
                <li class="personal-menu-button">
                    Personal
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2071 1.03247L6.75209 6.89026L1.29706 1.03247" stroke="#000000"/>
                    </svg>
                </li>
                <li class="personal-menu-items" style="display:none;">
                    <ul>
                        <li class="menu-item menu-item--account-details">
                            <a href="<?php echo e(route('profile.home')); ?>"><?php echo e(Trans::__('profile.account_details', 'account details')); ?></a>
                        </li>
                        <li class="menu-item menu-item--order">
                            <a href="<?php echo e(route('profile.orders.index')); ?>"><?php echo e(Trans::__('profile.orders', 'orders')); ?></a>
                        </li>
                        <li class="menu-item menu-item--wish-list">
                            <a href="<?php echo e(route('favorites.index')); ?>"><?php echo e(Trans::__('profile.wish_list', 'wish list')); ?></a>
                        </li>
                        <li class="menu-item menu-item--viewed-products">
                            <a href="<?php echo e(route('profile.viewed.index')); ?>"><?php echo e(Trans::__('profile.viewed_products', 'viewed products')); ?></a>
                        </li>
                        <li class="menu-item menu-item--address">
                            <a href="<?php echo e(route('profile.addresses.index')); ?>"><?php echo e(Trans::__('profile.address', 'address')); ?></a>
                        </li>
                        <li class="menu-item menu-item--logout">
                            <a href="#" onclick="event.preventDefault(); document.getElementById('logoutform').submit();"><?php echo e(__('global.logout')); ?></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <?php endif; ?>

            <li class="menu-item hidden">
                <a href="<?php echo e(route('get-in-touch')); ?>"><?php echo e(__('web.get_in_touch')); ?></a>
            </li>
        </ul>
        <ul class="mobile-links">

        </ul>
    </nav>


    <a href="/<?php echo e(app()->getLocale()); ?>" class="r1-header__logotype">
        <img src="/img/logotype.svg" alt="logotype" />
    </a>

    <ul class="r1-header__links">
        <li class="link-item search-trigger">
            <a href="#">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8318 20.72C6.88876 20.72 2.81903 16.6281 2.81903 11.5025C2.81903 6.37696 6.88876 2.28503 11.8318 2.28503C16.7749 2.28503 20.8446 6.37696 20.8446 11.5025C20.8446 14.0969 19.7996 16.4319 18.1213 18.1045C18.0596 18.1659 17.9971 18.2265 17.9338 18.2861C17.8903 18.3179 17.8488 18.3536 17.8098 18.3933C17.7954 18.408 17.7815 18.423 17.7682 18.4383C16.1777 19.8637 14.1017 20.72 11.8318 20.72ZM18.4753 20.4498C16.6286 21.8747 14.3271 22.72 11.8318 22.72C5.74963 22.72 0.819031 17.6978 0.819031 11.5025C0.819031 5.30727 5.74963 0.285034 11.8318 0.285034C17.914 0.285034 22.8446 5.30727 22.8446 11.5025C22.8446 14.4281 21.7451 17.0921 19.944 19.0891L26.5309 25.5644C26.9248 25.9516 26.9302 26.5847 26.543 26.9786C26.1558 27.3724 25.5227 27.3778 25.1288 26.9906L18.4753 20.4498Z" fill="#000"/>
                </svg>
            </a>
            <form action="<?php echo e(route('search')); ?>" method="GET">
                <input type="text" name="q" placeholder="Search..." />
                <button type="submit">
                    <svg width="25" height="26" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8318 20.72C6.88876 20.72 2.81903 16.6281 2.81903 11.5025C2.81903 6.37696 6.88876 2.28503 11.8318 2.28503C16.7749 2.28503 20.8446 6.37696 20.8446 11.5025C20.8446 14.0969 19.7996 16.4319 18.1213 18.1045C18.0596 18.1659 17.9971 18.2265 17.9338 18.2861C17.8903 18.3179 17.8488 18.3536 17.8098 18.3933C17.7954 18.408 17.7815 18.423 17.7682 18.4383C16.1777 19.8637 14.1017 20.72 11.8318 20.72ZM18.4753 20.4498C16.6286 21.8747 14.3271 22.72 11.8318 22.72C5.74963 22.72 0.819031 17.6978 0.819031 11.5025C0.819031 5.30727 5.74963 0.285034 11.8318 0.285034C17.914 0.285034 22.8446 5.30727 22.8446 11.5025C22.8446 14.4281 21.7451 17.0921 19.944 19.0891L26.5309 25.5644C26.9248 25.9516 26.9302 26.5847 26.543 26.9786C26.1558 27.3724 25.5227 27.3778 25.1288 26.9906L18.4753 20.4498Z" fill="#3D4738"/>
                    </svg>
                </button>
            </form>
        </li>
        <li class="link-item">
            <a href="<?php if(auth()->guard()->guest()): ?><?php echo e(route('register')); ?><?php else: ?><?php echo e(route('profile.home')); ?><?php endif; ?>">
                <svg width="27" height="28" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2422 9.51098C19.2422 13.3206 16.2092 16.356 12.5325 16.356C8.85575 16.356 5.82275 13.3206 5.82275 9.51098C5.82275 5.70139 8.85575 2.66595 12.5325 2.66595C16.2092 2.66595 19.2422 5.70139 19.2422 9.51098ZM16.8345 17.2035C19.4669 15.6819 21.2422 12.807 21.2422 9.51098C21.2422 4.62601 17.3427 0.665955 12.5325 0.665955C7.72222 0.665955 3.82275 4.62601 3.82275 9.51098C3.82275 12.807 5.59798 15.6819 8.23041 17.2035C4.71224 18.3885 1.89891 20.9885 0.600246 24.3032C0.398777 24.8174 0.652317 25.3976 1.16654 25.5991C1.68077 25.8005 2.26095 25.547 2.46242 25.0328C3.94221 21.2558 7.86623 18.5038 12.5324 18.5038C17.1986 18.5038 21.1226 21.2558 22.6024 25.0328C22.8039 25.547 23.3841 25.8005 23.8983 25.5991C24.4125 25.3976 24.6661 24.8174 24.4646 24.3032C23.1659 20.9885 20.3526 18.3886 16.8345 17.2035Z" fill="#000"/>
                </svg>
            </a>
        </li>
        <li class="link-item wished">
            <a href="<?php echo e(route('favorites.index')); ?>">
                <svg width="27" height="28" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.8192 2.98657C23.4054 1.47559 21.5336 0.649746 19.536 0.649746C17.5383 0.649746 15.6608 1.4817 14.247 2.99269L13.5086 3.78182L12.7588 2.98045C11.345 1.46947 9.46177 0.631393 7.46411 0.631393C5.47217 0.631393 3.59471 1.46335 2.18662 2.96822C0.772797 4.4792 -0.0056621 6.48569 6.18604e-05 8.62064C6.18604e-05 10.7556 0.784245 12.756 2.19806 14.2669L12.9477 25.7553C13.0965 25.9144 13.2968 26 13.4914 26C13.6861 26 13.8864 25.9205 14.0352 25.7614L24.8077 14.2914C26.2215 12.7804 27 10.7739 27 8.63899C27.0057 6.50404 26.233 4.49755 24.8192 2.98657ZM23.7202 13.123L13.4914 24.0119L3.28562 13.1046C2.16372 11.9057 1.54553 10.3151 1.54553 8.62064C1.54553 6.92614 2.158 5.33563 3.27989 4.14275C4.39607 2.94987 5.8843 2.28919 7.46411 2.28919C9.04965 2.28919 10.5436 2.94987 11.6655 4.14886L12.9591 5.53138C13.2625 5.8556 13.749 5.8556 14.0524 5.53138L15.3346 4.1611C16.4565 2.9621 17.9504 2.30143 19.5302 2.30143C21.11 2.30143 22.5983 2.9621 23.7202 4.15498C24.8421 5.35398 25.4545 6.94449 25.4545 8.63899C25.4603 10.3335 24.8421 11.924 23.7202 13.123Z" fill="#000"/>
                </svg>
            </a>
        </li>
        <li class="link-item mini-cart">
            <a href="javascript:;" class="r1-cart-popup-trigger" data-popup="shopping-cart">
                <svg width="27" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7716 2.00348C13.0056 2.00348 14.9496 3.74042 15.2546 6.10575H6.28853C6.59353 3.74042 8.53758 2.00348 10.7716 2.00348ZM17.2718 6.16861H17.9364C18.9795 6.16861 19.8475 6.97031 19.9301 8.01015L21.2681 24.845C21.3606 26.0084 20.4414 27.0035 19.2744 27.0035H2.26869C1.09886 27.0035 0.178764 26.0038 0.275548 24.838L1.67314 8.00314C1.75922 6.96629 2.62587 6.16861 3.66629 6.16861H4.2714C4.55936 2.71427 7.35963 0.003479 10.7716 0.003479C14.1836 0.003479 16.9838 2.71427 17.2718 6.16861ZM3.66629 8.16861H17.9364L19.2744 25.0035H2.26869L3.66629 8.16861Z" fill="#000"/>
                </svg>
                <span class="counter" id="cart-count"><?php echo e(Cart::quantity()); ?></span>
            </a>
            <!-- .r1-popup-wrapper -->
            <div class="r1-popup-wrapper shopping-cart">
                <div class="r1-popup-overlay"></div>
                <div class="r1-popup form-popup" data-popup="shopping-cart" role="cart-popup">
                    <?php echo $__env->make('partials._cart', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
            </div>
            <!-- \.r1-popup-wrapper -->
        </li>
        <li class="link-item languages">
            <span class="languages__curent"><?php echo e(Str::upper(app()->getLocale())); ?></span>
            <ul>
                <?php $__currentLoopData = $languages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if($lang->locale != app()->getLocale()): ?>
                        <li>
                            <a href="<?php echo e(\App\Helpers\Utils::changeLocale($lang->locale)); ?>"><?php echo e(Str::upper($lang->code)); ?></a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </li>
        <li class="link-item mobile-menu-trigger">
            <span></span>
            <span></span>
            <span></span>
        </li>
    </ul>
</header>
<!-- \.r1-header -->
<?php /**PATH /var/www/italyskincare.com/resources/views/partials/header.blade.php ENDPATH**/ ?>