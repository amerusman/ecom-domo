<aside class="main-sidebar sidebar-dark-primary elevation-4" style="min-height: 917px;">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
        <span class="brand-text font-weight-light">{{ trans('panel.site_title') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info">
                <a href="#" class="d-block">{{ auth()->user()->name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs("admin.home") ? "active" : "" }}" href="{{ route("admin.home") }}">
                        <i class="fas fa-fw fa-tachometer-alt nav-icon">
                        </i>
                        <p>
                            {{ trans('global.dashboard') }}
                        </p>
                    </a>
                </li>
                @can('product_management_access')
                    <li class="nav-item has-treeview {{ request()->is("admin/brands*") ? "menu-open" : "" }} {{ request()->is("admin/tags*") ? "menu-open" : "" }} {{ request()->is("admin/categories*") ? "menu-open" : "" }} {{ request()->is("admin/products*") ? "menu-open" : "" }} {{ request()->is("admin/features*") ? "menu-open" : "" }} {{ request()->is("admin/reviews*") ? "menu-open" : "" }} {{ request()->is("admin/campaigns*") ? "menu-open" : "" }}">
                        <a class="nav-link nav-dropdown-toggle {{ request()->is("admin/brands*") ? "active" : "" }} {{ request()->is("admin/tags*") ? "active" : "" }} {{ request()->is("admin/categories*") ? "active" : "" }} {{ request()->is("admin/products*") ? "active" : "" }} {{ request()->is("admin/features*") ? "active" : "" }} {{ request()->is("admin/reviews*") ? "active" : "" }} {{ request()->is("admin/campaigns*") ? "active" : "" }}" href="#">
                            <i class="fa-fw nav-icon fas fa-shopping-basket">

                            </i>
                            <p>
                                {{ trans('cruds.productManagement.title') }}
                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            @can('brand_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.brands.index") }}" class="nav-link {{ request()->is("admin/brands") || request()->is("admin/brands/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon far fa-copyright">

                                        </i>
                                        <p>
                                            {{ trans('cruds.brand.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('tag_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.tags.index") }}" class="nav-link {{ request()->is("admin/tags") || request()->is("admin/tags/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-tags">

                                        </i>
                                        <p>
                                            {{ trans('cruds.tag.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('category_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.categories.index") }}" class="nav-link {{ request()->is("admin/categories") || request()->is("admin/categories/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-tshirt">

                                        </i>
                                        <p>
                                            {{ trans('cruds.category.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('product_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.products.index") }}" class="nav-link {{ request()->is("admin/products") || request()->is("admin/products/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-cart-arrow-down">

                                        </i>
                                        <p>
                                            {{ trans('cruds.product.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('feature_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.features.index") }}" class="nav-link {{ request()->is("admin/features") || request()->is("admin/features/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-ruler-combined">

                                        </i>
                                        <p>
                                            {{ trans('cruds.feature.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('review_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.reviews.index") }}" class="nav-link {{ request()->is("admin/reviews") || request()->is("admin/reviews/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-thumbs-up">

                                        </i>
                                        <p>
                                            {{ trans('cruds.review.title') }}
                                            @if($newReviewsCount)
                                                <span class="badge badge-warning right">{{ $newReviewsCount }}</span>
                                            @endif
                                        </p>
                                    </a>
                                </li>
                            @endcan
                                @can('campaign_access')
                                    <li class="nav-item">
                                        <a href="{{ route("admin.campaigns.index") }}" class="nav-link {{ request()->is("admin/campaigns") || request()->is("admin/campaigns/*") ? "active" : "" }}">
                                            <i class="fa-fw nav-icon fas fa-bong">

                                            </i>
                                            <p>
                                                {{ trans('cruds.campaign.title') }}
                                            </p>
                                        </a>
                                    </li>
                                @endcan
                        </ul>
                    </li>
                @endcan
                @can('order_access')
                    <li class="nav-item">
                        <a href="{{ route("admin.orders.index") }}" class="nav-link {{ request()->is("admin/orders") || request()->is("admin/orders/*") ? "active" : "" }}">
                            <i class="fa-fw nav-icon fas fa-shopping-cart">

                            </i>
                            <p>
                                {{ trans('cruds.order.title') }}
                            </p>
                        </a>
                    </li>
                @endcan
                @can('user_management_access')
                    <li class="nav-item has-treeview {{ request()->is("admin/permissions*") ? "menu-open" : "" }} {{ request()->is("admin/roles*") ? "menu-open" : "" }} {{ request()->is("admin/users*") ? "menu-open" : "" }} {{ request()->is("admin/addresses*") ? "menu-open" : "" }} {{ request()->is("admin/subscriptions*") ? "menu-open" : "" }}">
                        <a class="nav-link nav-dropdown-toggle {{ request()->is("admin/permissions*") ? "active" : "" }} {{ request()->is("admin/roles*") ? "active" : "" }} {{ request()->is("admin/users*") ? "active" : "" }} {{ request()->is("admin/addresses*") ? "active" : "" }} {{ request()->is("admin/subscriptions*") ? "active" : "" }}" href="#">
                            <i class="fa-fw nav-icon fas fa-users">

                            </i>
                            <p>
                                {{ trans('cruds.userManagement.title') }}
                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            @can('permission_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.permissions.index") }}" class="nav-link {{ request()->is("admin/permissions") || request()->is("admin/permissions/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-unlock-alt">

                                        </i>
                                        <p>
                                            {{ trans('cruds.permission.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('role_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.roles.index") }}" class="nav-link {{ request()->is("admin/roles") || request()->is("admin/roles/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-briefcase">

                                        </i>
                                        <p>
                                            {{ trans('cruds.role.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('user_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.users.index") }}" class="nav-link {{ request()->is("admin/users") || request()->is("admin/users/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-user">

                                        </i>
                                        <p>
                                            {{ trans('cruds.user.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('address_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.addresses.index") }}" class="nav-link {{ request()->is("admin/addresses") || request()->is("admin/addresses/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-address-card">

                                        </i>
                                        <p>
                                            {{ trans('cruds.address.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('subscription_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.subscriptions.index") }}" class="nav-link {{ request()->is("admin/subscriptions") || request()->is("admin/subscriptions/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-envelope-square">

                                        </i>
                                        <p>
                                            {{ trans('cruds.subscription.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcan
                @can('setting_access')
                    <li class="nav-item has-treeview {{ request()->is("admin/countries*") ? "menu-open" : "" }} {{ request()->is("admin/languages*") ? "menu-open" : "" }} {{ request()->is("admin/currencies*") ? "menu-open" : "" }} {{ request()->is("admin/properties*") ? "menu-open" : "" }} {{ request()->is("admin/warehouses*") ? "menu-open" : "" }} {{ request()->is("admin/deliverers*") ? "menu-open" : "" }} {{ request()->is("admin/vat-reports*") ? "menu-open" : "" }} {{ request()->is("admin/vat-report-items*") ? "menu-open" : "" }}">
                        <a class="nav-link nav-dropdown-toggle {{ request()->is("admin/countries*") ? "active" : "" }} {{ request()->is("admin/languages*") ? "active" : "" }} {{ request()->is("admin/currencies*") ? "active" : "" }} {{ request()->is("admin/properties*") ? "active" : "" }} {{ request()->is("admin/warehouses*") ? "active" : "" }} {{ request()->is("admin/deliverers*") ? "active" : "" }} {{ request()->is("admin/vat-reports*") ? "active" : "" }} {{ request()->is("admin/vat-report-items*") ? "active" : "" }}" href="#">
                            <i class="fa-fw nav-icon fas fa-cogs">

                            </i>
                            <p>
                                {{ trans('cruds.setting.title') }}
                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            @can('country_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.countries.index") }}" class="nav-link {{ request()->is("admin/countries") || request()->is("admin/countries/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-flag">

                                        </i>
                                        <p>
                                            {{ trans('cruds.country.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('language_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.languages.index") }}" class="nav-link {{ request()->is("admin/languages") || request()->is("admin/languages/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-globe">

                                        </i>
                                        <p>
                                            {{ trans('cruds.language.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('currency_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.currencies.index") }}" class="nav-link {{ request()->is("admin/currencies") || request()->is("admin/currencies/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-dollar-sign">

                                        </i>
                                        <p>
                                            {{ trans('cruds.currency.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('property_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.properties.index") }}" class="nav-link {{ request()->is("admin/properties") || request()->is("admin/properties/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-cogs">

                                        </i>
                                        <p>
                                            {{ trans('cruds.property.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('warehouse_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.warehouses.index") }}" class="nav-link {{ request()->is("admin/warehouses") || request()->is("admin/warehouses/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fab fa-fort-awesome">

                                        </i>
                                        <p>
                                            {{ trans('cruds.warehouse.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('deliverer_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.deliverers.index") }}" class="nav-link {{ request()->is("admin/deliverers") || request()->is("admin/deliverers/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-people-carry">

                                        </i>
                                        <p>
                                            {{ trans('cruds.deliverer.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('vat_report_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.vat-reports.index") }}" class="nav-link {{ request()->is("admin/vat-reports") || request()->is("admin/vat-reports/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fab fa-wpforms">

                                        </i>
                                        <p>
                                            {{ trans('cruds.vatReport.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('vat_report_item_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.vat-report-items.index") }}" class="nav-link {{ request()->is("admin/vat-report-items") || request()->is("admin/vat-report-items/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-cogs">

                                        </i>
                                        <p>
                                            {{ trans('cruds.vatReportItem.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcan
                @can('content_management_access')
                    <li class="nav-item has-treeview {{ request()->is("admin/pages*") ? "menu-open" : "" }} {{ request()->is("admin/letters*") ? "menu-open" : "" }} {{ request()->is("admin/blocks*") ? "menu-open" : "" }} {{ request()->is("admin/coupons*") ? "menu-open" : "" }} {{ request()->is("admin/translations*") ? "menu-open" : "" }} {{ request()->is("admin/banners*") ? "menu-open" : "" }}">
                        <a class="nav-link nav-dropdown-toggle {{ request()->is("admin/pages*") ? "active" : "" }} {{ request()->is("admin/letters*") ? "active" : "" }} {{ request()->is("admin/blocks*") ? "active" : "" }} {{ request()->is("admin/coupons*") ? "active" : "" }} {{ request()->is("admin/translations*") ? "active" : "" }} {{ request()->is("admin/banners*") ? "active" : "" }}" href="#">
                            <i class="fa-fw nav-icon fas fa-folder">

                            </i>
                            <p>
                                {{ trans('cruds.contentManagement.title') }}
                                <i class="right fa fa-fw fa-angle-left nav-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            @can('page_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.pages.index") }}" class="nav-link {{ request()->is("admin/pages") || request()->is("admin/pages/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon far fa-file-alt">

                                        </i>
                                        <p>
                                            {{ trans('cruds.page.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('letter_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.letters.index") }}" class="nav-link {{ request()->is("admin/letters") || request()->is("admin/letters/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon far fa-envelope-open">

                                        </i>
                                        <p>
                                            {{ trans('cruds.letter.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('block_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.blocks.index") }}" class="nav-link {{ request()->is("admin/blocks") || request()->is("admin/blocks/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-puzzle-piece">

                                        </i>
                                        <p>
                                            {{ trans('cruds.block.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('coupon_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.coupons.index") }}" class="nav-link {{ request()->is("admin/coupons") || request()->is("admin/coupons/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-percentage">

                                        </i>
                                        <p>
                                            {{ trans('cruds.coupon.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('translation_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.translations.index") }}" class="nav-link {{ request()->is("admin/translations") || request()->is("admin/translations/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon fas fa-language">

                                        </i>
                                        <p>
                                            {{ trans('cruds.translation.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                            @can('banner_access')
                                <li class="nav-item">
                                    <a href="{{ route("admin.banners.index") }}" class="nav-link {{ request()->is("admin/banners") || request()->is("admin/banners/*") ? "active" : "" }}">
                                        <i class="fa-fw nav-icon far fa-images">

                                        </i>
                                        <p>
                                            {{ trans('cruds.banner.title') }}
                                        </p>
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcan
                @can('message_access')
                    <li class="nav-item">
                        <a href="{{ route("admin.messages.index") }}" class="nav-link {{ request()->is("admin/messages") || request()->is("admin/messages/*") ? "active" : "" }}">
                            <i class="fa-fw nav-icon fas fa-envelope">

                            </i>
                            <p>
                                {{ trans('cruds.message.title') }}
                            </p>
                        </a>
                    </li>
                @endcan
                @if(file_exists(app_path('Http/Controllers/Auth/ChangePasswordController.php')))
                    @can('profile_password_edit')
                        <li class="nav-item">
                            <a class="nav-link {{ request()->is('profile/password') || request()->is('profile/password/*') ? 'active' : '' }}" href="{{ route('profile.password.edit') }}">
                                <i class="fa-fw fas fa-key nav-icon">
                                </i>
                                <p>
                                    {{ trans('global.change_password') }}
                                </p>
                            </a>
                        </li>
                    @endcan
                @endif
                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="event.preventDefault(); document.getElementById('logoutform').submit();">
                        <p>
                            <i class="fas fa-fw fa-sign-out-alt nav-icon">

                            </i>
                            <p>{{ trans('global.logout') }}</p>
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
