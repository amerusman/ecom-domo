<aside class="main-sidebar sidebar-dark-primary elevation-4" style="min-height: 917px;">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
        <span class="brand-text font-weight-light"><?php echo e(trans('panel.site_title')); ?></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info">
                <a href="#" class="d-block"><?php echo e(auth()->user()->name); ?></a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a class="nav-link <?php echo e(request()->routeIs("admin.home") ? "active" : ""); ?>" href="<?php echo e(route("admin.home")); ?>">
                        <i class="fas fa-fw fa-tachometer-alt nav-icon">
                        </i>
                        <p>
                            <?php echo e(trans('global.dashboard')); ?>

                        </p>
                    </a>
                </li>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('product_management_access')): ?>
                    <li class="nav-item has-treeview <?php echo e(request()->is("admin/brands*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/tags*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/categories*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/products*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/features*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/reviews*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/campaigns*") ? "menu-open" : ""); ?>">
                        <a class="nav-link nav-dropdown-toggle <?php echo e(request()->is("admin/brands*") ? "active" : ""); ?> <?php echo e(request()->is("admin/tags*") ? "active" : ""); ?> <?php echo e(request()->is("admin/categories*") ? "active" : ""); ?> <?php echo e(request()->is("admin/products*") ? "active" : ""); ?> <?php echo e(request()->is("admin/features*") ? "active" : ""); ?> <?php echo e(request()->is("admin/reviews*") ? "active" : ""); ?> <?php echo e(request()->is("admin/campaigns*") ? "active" : ""); ?>" href="#">
                            <i class="fa-fw nav-icon fas fa-shopping-basket">

                            </i>
                            <p>
                                <?php echo e(trans('cruds.productManagement.title')); ?>

                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('brand_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.brands.index")); ?>" class="nav-link <?php echo e(request()->is("admin/brands") || request()->is("admin/brands/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon far fa-copyright">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.brand.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('tag_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.tags.index")); ?>" class="nav-link <?php echo e(request()->is("admin/tags") || request()->is("admin/tags/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-tags">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.tag.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('category_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.categories.index")); ?>" class="nav-link <?php echo e(request()->is("admin/categories") || request()->is("admin/categories/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-tshirt">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.category.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('product_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.products.index")); ?>" class="nav-link <?php echo e(request()->is("admin/products") || request()->is("admin/products/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-cart-arrow-down">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.product.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('feature_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.features.index")); ?>" class="nav-link <?php echo e(request()->is("admin/features") || request()->is("admin/features/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-ruler-combined">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.feature.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('review_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.reviews.index")); ?>" class="nav-link <?php echo e(request()->is("admin/reviews") || request()->is("admin/reviews/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-thumbs-up">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.review.title')); ?>

                                            <?php if($newReviewsCount): ?>
                                                <span class="badge badge-warning right"><?php echo e($newReviewsCount); ?></span>
                                            <?php endif; ?>
                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('campaign_access')): ?>
                                    <li class="nav-item">
                                        <a href="<?php echo e(route("admin.campaigns.index")); ?>" class="nav-link <?php echo e(request()->is("admin/campaigns") || request()->is("admin/campaigns/*") ? "active" : ""); ?>">
                                            <i class="fa-fw nav-icon fas fa-bong">

                                            </i>
                                            <p>
                                                <?php echo e(trans('cruds.campaign.title')); ?>

                                            </p>
                                        </a>
                                    </li>
                                <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('order_access')): ?>
                    <li class="nav-item">
                        <a href="<?php echo e(route("admin.orders.index")); ?>" class="nav-link <?php echo e(request()->is("admin/orders") || request()->is("admin/orders/*") ? "active" : ""); ?>">
                            <i class="fa-fw nav-icon fas fa-shopping-cart">

                            </i>
                            <p>
                                <?php echo e(trans('cruds.order.title')); ?>

                            </p>
                        </a>
                    </li>
                <?php endif; ?>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user_management_access')): ?>
                    <li class="nav-item has-treeview <?php echo e(request()->is("admin/permissions*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/roles*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/users*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/addresses*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/subscriptions*") ? "menu-open" : ""); ?>">
                        <a class="nav-link nav-dropdown-toggle <?php echo e(request()->is("admin/permissions*") ? "active" : ""); ?> <?php echo e(request()->is("admin/roles*") ? "active" : ""); ?> <?php echo e(request()->is("admin/users*") ? "active" : ""); ?> <?php echo e(request()->is("admin/addresses*") ? "active" : ""); ?> <?php echo e(request()->is("admin/subscriptions*") ? "active" : ""); ?>" href="#">
                            <i class="fa-fw nav-icon fas fa-users">

                            </i>
                            <p>
                                <?php echo e(trans('cruds.userManagement.title')); ?>

                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('permission_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.permissions.index")); ?>" class="nav-link <?php echo e(request()->is("admin/permissions") || request()->is("admin/permissions/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-unlock-alt">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.permission.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('role_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.roles.index")); ?>" class="nav-link <?php echo e(request()->is("admin/roles") || request()->is("admin/roles/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-briefcase">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.role.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.users.index")); ?>" class="nav-link <?php echo e(request()->is("admin/users") || request()->is("admin/users/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-user">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.user.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('address_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.addresses.index")); ?>" class="nav-link <?php echo e(request()->is("admin/addresses") || request()->is("admin/addresses/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-address-card">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.address.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('subscription_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.subscriptions.index")); ?>" class="nav-link <?php echo e(request()->is("admin/subscriptions") || request()->is("admin/subscriptions/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-envelope-square">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.subscription.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('setting_access')): ?>
                    <li class="nav-item has-treeview <?php echo e(request()->is("admin/countries*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/languages*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/currencies*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/properties*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/warehouses*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/deliverers*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/vat-reports*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/vat-report-items*") ? "menu-open" : ""); ?>">
                        <a class="nav-link nav-dropdown-toggle <?php echo e(request()->is("admin/countries*") ? "active" : ""); ?> <?php echo e(request()->is("admin/languages*") ? "active" : ""); ?> <?php echo e(request()->is("admin/currencies*") ? "active" : ""); ?> <?php echo e(request()->is("admin/properties*") ? "active" : ""); ?> <?php echo e(request()->is("admin/warehouses*") ? "active" : ""); ?> <?php echo e(request()->is("admin/deliverers*") ? "active" : ""); ?> <?php echo e(request()->is("admin/vat-reports*") ? "active" : ""); ?> <?php echo e(request()->is("admin/vat-report-items*") ? "active" : ""); ?>" href="#">
                            <i class="fa-fw nav-icon fas fa-cogs">

                            </i>
                            <p>
                                <?php echo e(trans('cruds.setting.title')); ?>

                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('country_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.countries.index")); ?>" class="nav-link <?php echo e(request()->is("admin/countries") || request()->is("admin/countries/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-flag">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.country.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('language_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.languages.index")); ?>" class="nav-link <?php echo e(request()->is("admin/languages") || request()->is("admin/languages/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-globe">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.language.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('currency_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.currencies.index")); ?>" class="nav-link <?php echo e(request()->is("admin/currencies") || request()->is("admin/currencies/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-dollar-sign">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.currency.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('property_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.properties.index")); ?>" class="nav-link <?php echo e(request()->is("admin/properties") || request()->is("admin/properties/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-cogs">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.property.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('warehouse_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.warehouses.index")); ?>" class="nav-link <?php echo e(request()->is("admin/warehouses") || request()->is("admin/warehouses/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fab fa-fort-awesome">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.warehouse.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('deliverer_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.deliverers.index")); ?>" class="nav-link <?php echo e(request()->is("admin/deliverers") || request()->is("admin/deliverers/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-people-carry">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.deliverer.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('vat_report_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.vat-reports.index")); ?>" class="nav-link <?php echo e(request()->is("admin/vat-reports") || request()->is("admin/vat-reports/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fab fa-wpforms">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.vatReport.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('vat_report_item_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.vat-report-items.index")); ?>" class="nav-link <?php echo e(request()->is("admin/vat-report-items") || request()->is("admin/vat-report-items/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-cogs">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.vatReportItem.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('content_management_access')): ?>
                    <li class="nav-item has-treeview <?php echo e(request()->is("admin/pages*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/letters*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/blocks*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/coupons*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/translations*") ? "menu-open" : ""); ?> <?php echo e(request()->is("admin/banners*") ? "menu-open" : ""); ?>">
                        <a class="nav-link nav-dropdown-toggle <?php echo e(request()->is("admin/pages*") ? "active" : ""); ?> <?php echo e(request()->is("admin/letters*") ? "active" : ""); ?> <?php echo e(request()->is("admin/blocks*") ? "active" : ""); ?> <?php echo e(request()->is("admin/coupons*") ? "active" : ""); ?> <?php echo e(request()->is("admin/translations*") ? "active" : ""); ?> <?php echo e(request()->is("admin/banners*") ? "active" : ""); ?>" href="#">
                            <i class="fa-fw nav-icon fas fa-folder">

                            </i>
                            <p>
                                <?php echo e(trans('cruds.contentManagement.title')); ?>

                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('page_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.pages.index")); ?>" class="nav-link <?php echo e(request()->is("admin/pages") || request()->is("admin/pages/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon far fa-file-alt">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.page.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('letter_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.letters.index")); ?>" class="nav-link <?php echo e(request()->is("admin/letters") || request()->is("admin/letters/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon far fa-envelope-open">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.letter.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('block_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.blocks.index")); ?>" class="nav-link <?php echo e(request()->is("admin/blocks") || request()->is("admin/blocks/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-puzzle-piece">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.block.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('coupon_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.coupons.index")); ?>" class="nav-link <?php echo e(request()->is("admin/coupons") || request()->is("admin/coupons/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-percentage">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.coupon.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('translation_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.translations.index")); ?>" class="nav-link <?php echo e(request()->is("admin/translations") || request()->is("admin/translations/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon fas fa-language">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.translation.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('banner_access')): ?>
                                <li class="nav-item">
                                    <a href="<?php echo e(route("admin.banners.index")); ?>" class="nav-link <?php echo e(request()->is("admin/banners") || request()->is("admin/banners/*") ? "active" : ""); ?>">
                                        <i class="fa-fw nav-icon far fa-images">

                                        </i>
                                        <p>
                                            <?php echo e(trans('cruds.banner.title')); ?>

                                        </p>
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('message_access')): ?>
                    <li class="nav-item">
                        <a href="<?php echo e(route("admin.messages.index")); ?>" class="nav-link <?php echo e(request()->is("admin/messages") || request()->is("admin/messages/*") ? "active" : ""); ?>">
                            <i class="fa-fw nav-icon fas fa-envelope">

                            </i>
                            <p>
                                <?php echo e(trans('cruds.message.title')); ?>

                            </p>
                        </a>
                    </li>
                <?php endif; ?>
                <?php if(file_exists(app_path('Http/Controllers/Auth/ChangePasswordController.php'))): ?>
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('profile_password_edit')): ?>
                        <li class="nav-item">
                            <a class="nav-link <?php echo e(request()->is('profile/password') || request()->is('profile/password/*') ? 'active' : ''); ?>" href="<?php echo e(route('profile.password.edit')); ?>">
                                <i class="fa-fw fas fa-key nav-icon">
                                </i>
                                <p>
                                    <?php echo e(trans('global.change_password')); ?>

                                </p>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endif; ?>
                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="event.preventDefault(); document.getElementById('logoutform').submit();">
                        <p>
                            <i class="fas fa-fw fa-sign-out-alt nav-icon">

                            </i>
                            <p><?php echo e(trans('global.logout')); ?></p>
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
<?php /**PATH /var/www/italyskincare.com/resources/views/admin/partials/menu.blade.php ENDPATH**/ ?>