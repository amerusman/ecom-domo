<div class="r1-account-decorative-line"></div>
<!-- .r1-account-menu -->
<nav class="r1-account__menu">
    <ul class="account__menu-items">
        <li class="menu-item menu-item--account-details @if(in_array(Route::currentRouteName(), ['profile.home', 'profile.account.edit'])) current-page--parent @endif">
            <a href="{{ route('profile.home') }}">{{ Trans::__('profile.account_details', 'account details') }}</a>
        </li>
        <li class="menu-item menu-item--order @if('profile.orders.index' == Route::currentRouteName()) current-page--parent @endif">
            <a href="{{ route('profile.orders.index') }}">{{ Trans::__('profile.orders', 'orders') }}</a>
        </li>
        <li class="menu-item menu-item--wish-list @if('favorites.index' == Route::currentRouteName()) current-page--parent @endif">
            <a href="{{ route('favorites.index') }}">{{ Trans::__('profile.wish_list', 'wish list') }}</a>
        </li>
        <li class="menu-item menu-item--viewed-products @if('profile.viewed.index' == Route::currentRouteName()) current-page--parent @endif">
            <a href="{{ route('profile.viewed.index') }}">{{ Trans::__('profile.viewed_products', 'viewed products') }}</a>
        </li>
        <li class="menu-item menu-item--address @if(in_array(Route::currentRouteName(), ['profile.addresses.index', 'profile.addresses.edit', 'profile.addresses.create'])) current-page--parent @endif">
            <a href="{{ route('profile.addresses.index') }}">{{ Trans::__('profile.address', 'address') }}</a>
        </li>
        <li class="menu-item menu-item--logout">
            <a href="#" onclick="event.preventDefault(); document.getElementById('logoutform').submit();">{{ __('global.logout') }}</a>
        </li>
    </ul>
</nav>
<!-- \.r1-account-menu -->
