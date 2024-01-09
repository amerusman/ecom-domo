<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="user-scalable=1.0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">

    <title><?php echo $__env->yieldContent('title', 'D’Omo Cosmetics'); ?></title>
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="/img/favicon/site.webmanifest">
    <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <!-- SEO Meta -->
    <meta property="og:url" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo $__env->yieldContent('title', 'D’Omo Cosmetics'); ?>" />
    <meta property="og:description" content="<?php echo $__env->yieldContent('description'); ?>" />
    <meta property="og:image" content="" />

    <!-- Styles -->
    <link rel="stylesheet" href="/css/select2.min.css" />
    <link rel="stylesheet" href="/css/main.css" />
    <link rel="stylesheet" href="/css/slick.css" />
</head>
<body>
    <div class="r1-preloader"></div>

    <?php echo $__env->yieldContent('content'); ?>

    <!-- .footer -->
    <footer class="r1-footer">
        <div class="r1-container">
            <div class="r1-footer__inner">
                <div class="footer-fieldset">
                    <fieldset>
                        <legend><?php echo e(Trans::__('help', 'Help')); ?></legend>
                        <div class="fieldset-help-wrapper">
                            <ul>
                                <li>
                                    <a href="<?php echo e(route('pages.show', 'delivery')); ?>"><?php echo e($pages['delivery']); ?></a>
                                </li>
                                <li>
                                    <a href="<?php echo e(route('pages.show', 'payment')); ?>"><?php echo e($pages['payment']); ?></a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="<?php echo e(route('pages.show', 'exchange-and-return')); ?>"><?php echo e($pages['exchange-and-return']); ?></a>
                                </li>
                                <li>
                                    <a href="<?php echo e(route('pages.show', 'terms-conditions')); ?>"><?php echo e($pages['terms-conditions']); ?></a>
                                </li>
                            </ul>
                        </div>
                    </fieldset>
                    <!-- <fieldset>
                        <legend>Contact us</legend>
                        <ul>
                            <li>
                                <a href="mailto:info@demolink.org">info@demolink.org</a>
                            </li>
                            <li>
                                <a href="tel:+184412345678">+1 (844) 123 456 78</a>
                            </li>
                            <li>
                                <p>operation hours are 7am - 2 am EST, 7 days a week, excluding holidays</p>
                            </li>
                        </ul>
                    </fieldset> -->
                </div>
            </div>
            <div class="footer-get-in-touch">
                <a class="r1-button" href="<?php echo e(route('get-in-touch')); ?>"><?php echo e(Trans::__('get_in_touch')); ?></a>
            </div>

        

        </div>
        <div class="r1-footer__copyrights">
            <p class="copyrights"><?php echo e(now()->year); ?> <?php if (isset($component)) { $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e = $component; } ?>
<?php $component = App\View\Components\Block::resolve(['id' => 'copyright'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('block'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Block::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e)): ?>
<?php $component = $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e; ?>
<?php unset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e); ?>
<?php endif; ?></p>
            <p class="links"><a href="<?php echo e(route('pages.show', 'terms-conditions')); ?>"><?php echo e($pages['terms-conditions']); ?></a>&nbsp;and&nbsp;<a href="<?php echo e(route('pages.show', 'privacy-policy')); ?>"><?php echo e($pages['privacy-policy']); ?></a></p>
            <div class="company">
                <span><?php if (isset($component)) { $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e = $component; } ?>
<?php $component = App\View\Components\Block::resolve(['id' => 'company_name'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('block'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Block::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e)): ?>
<?php $component = $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e; ?>
<?php unset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e); ?>
<?php endif; ?></span>
                <span><?php if (isset($component)) { $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e = $component; } ?>
<?php $component = App\View\Components\Block::resolve(['id' => 'company_address_1'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('block'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Block::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e)): ?>
<?php $component = $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e; ?>
<?php unset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e); ?>
<?php endif; ?></span>
                <span><?php if (isset($component)) { $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e = $component; } ?>
<?php $component = App\View\Components\Block::resolve(['id' => 'company_address_2'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('block'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Block::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e)): ?>
<?php $component = $__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e; ?>
<?php unset($__componentOriginal89fc955f3d50d3bc2cb9b26064662c364cc77a3e); ?>
<?php endif; ?></span>
            </div>
        </div>
    </footer>
    <!-- \.footer -->

    <?php echo $__env->make('partials._country-selection', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->make('partials._cookies-consent', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <form id="logoutform" action="<?php echo e(route('logout')); ?>" method="POST" style="display: none;">
        <?php echo e(csrf_field()); ?>

    </form>

    <?php echo $__env->yieldContent('scripts'); ?>
    <!-- Scripts -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/slick.min.js"></script>
    <script src="/js/jquery.waypoints.min.js"></script>
    <script src="/js/select2.full.min.js"></script>

    <script src="/js/common.js"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N21GE669VJ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-N21GE669VJ');
    </script>

</body>
</html>
<?php /**PATH /var/www/italyskincare.com/resources/views/layouts/app.blade.php ENDPATH**/ ?>