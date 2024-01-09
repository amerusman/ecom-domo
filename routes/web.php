<?php

Route::redirect('/profile', '/' . app()->getLocale() . '/profile');
Route::redirect('/login', '/' . app()->getLocale() . '/register');

Route::group(['middleware' => ['guest']], function() {
    /* Google Social Login */
    Route::get('/login/google', [\App\Http\Controllers\Auth\GoogleController::class, 'redirect'])->name('login.google');
    Route::get('/login/google/callback', [\App\Http\Controllers\Auth\GoogleController::class, 'callback'])->name('login.google-callback');
    /* Facebook Social Login */
    Route::get('/login/facebook', [\App\Http\Controllers\Auth\FacebookController::class, 'redirect'])->name('login.facebook');
    Route::get('/login/facebook/callback', [\App\Http\Controllers\Auth\FacebookController::class, 'callback'])->name('login.facebook-callback');

    Route::post('as-guest', [\App\Http\Controllers\Auth\GuestController::class, 'register'])->name('as-guest');
    Route::post('order-as-guest', [\App\Http\Controllers\Auth\GuestController::class, 'order'])->name('order-as-guest');

});

Route::prefix('{locale?}')
    ->where(['locale' => '[a-zA-Z]{2}'])
    ->middleware(['cache'])
    ->group(function ($locale = 'en') {

        Auth::routes();

        Route::get('/', \App\Http\Controllers\Index::class)->name('home');
        Route::resource('products', \App\Http\Controllers\ProductController::class)->only(['index', 'show']);
        Route::get('products/{product:slug}', [\App\Http\Controllers\ProductController::class, 'show'])->name('products.show');

        Route::resource('pages', \App\Http\Controllers\PageController::class);
        Route::resource('brands', \App\Http\Controllers\BrandController::class)->only(['index']);
        Route::get('brands/{brand:slug}', [\App\Http\Controllers\BrandController::class, 'show'])->name('brands.show');

        Route::get('category/{category:slug}', [\App\Http\Controllers\CategoryController::class, 'show'])->name('category');
        Route::resource('categories', \App\Http\Controllers\CategoryController::class);
        Route::get('trending', \App\Http\Controllers\Trending::class)->name('trending');
        Route::get('search', \App\Http\Controllers\SearchController::class)->name('search');
        Route::get('get-in-touch', [\App\Http\Controllers\MessageController::class, 'create'])->name('get-in-touch');
        Route::post('get-in-touch', [\App\Http\Controllers\MessageController::class, 'store'])->name('message.store');
        Route::get('favorites', [\App\Http\Controllers\FavoritesController::class, 'index'])->name('favorites.index');

        Route::get('checkout', [\App\Http\Controllers\CheckoutController::class, 'index'])->name('checkout.index');
        Route::get('checkout/create', [\App\Http\Controllers\CheckoutController::class, 'create'])->name('checkout.create');
        Route::post('checkout', [\App\Http\Controllers\CheckoutController::class, 'store'])->name('checkout.store');
        Route::get('checkout/success', [\App\Http\Controllers\CheckoutController::class, 'success'])->name('checkout.success');
        Route::get('checkout/failure', [\App\Http\Controllers\CheckoutController::class, 'failure'])->name('checkout.failure');

        Route::post('subscriptions', [\App\Http\Controllers\SubscriptionController::class, 'store'])->name('subscriptions.store');
        Route::get('cart', [\App\Http\Controllers\CartController::class, 'index'])->name('cart.index');

        Route::post('set-country', [\App\Http\Controllers\Profile\AccountController::class, 'setCountry'])->name('profile.country');

        Route::group(['prefix' => 'profile', 'as' => 'profile.', 'namespace' => 'Profile', 'middleware' => ['auth']], function () {
            Route::get('/', 'HomeController@index')->name('home');
            Route::get('account', [\App\Http\Controllers\Profile\AccountController::class, 'edit'])->name('account.edit');
            Route::post('account', [\App\Http\Controllers\Profile\AccountController::class, 'update'])->name('account.update');
            Route::resource('viewed', \App\Http\Controllers\Profile\ViewedController::class)->only('index');
            Route::resource('orders', \App\Http\Controllers\Profile\OrderController::class)->only(['index', 'show']);
            Route::resource('addresses', \App\Http\Controllers\Profile\AddressController::class);
            Route::resource('reviews', \App\Http\Controllers\Profile\ReviewController::class);
//            Route::get('favorites', [\App\Http\Controllers\FavoritesController::class, 'index'])->name('favorites.index');
        });

        Route::group(['prefix' => 'checkout', 'as' => 'checkout.', 'namespace' => 'Checkout'], function ()
        {
            Route::resource('orders', OrderController::class);
            Route::resource('payments', PaymentController::class);
            Route::post('coupon/add', [\App\Http\Controllers\Checkout\CouponController::class, 'add'])->name('coupon.add');
            Route::controller(\App\Http\Controllers\Checkout\PayPalController::class)
                ->prefix('paypal')
                ->group(function () {
                    Route::get('handle', 'handlePayment')->name('make.payment');
                    Route::get('cancel-payment', 'paymentCancel')->name('cancel.payment');
                    Route::get('payment-success', 'paymentSuccess')->name('success.payment');
                });
        });

});

Route::post('favorites', [\App\Http\Controllers\FavoritesController::class, 'store'])->name('favorites.store');
Route::post('cart/add', [\App\Http\Controllers\CartController::class, 'add']);
Route::post('cart/remove', [\App\Http\Controllers\CartController::class, 'remove']);
Route::post('cart/bulk-add', [\App\Http\Controllers\CartController::class, 'bulkAdd'])->name('cart.bulk-add');
Route::post('payments/webhook', [\App\Http\Controllers\Checkout\PaymentController::class, 'webhook'])->name('payments.webhook');
Route::post('stripe/webhook', [\App\Http\Controllers\Checkout\StripeController::class, 'webhook'])->name('stripe.webhook');


Route::group(['prefix' => 'admin', 'as' => 'admin.', 'namespace' => 'Admin', 'middleware' => ['auth', 'admin']], function ()
{
    Route::get('/', 'HomeController@index')->name('home');
    // Permissions
    Route::delete('permissions/destroy', 'PermissionsController@massDestroy')->name('permissions.massDestroy');
    Route::resource('permissions', 'PermissionsController');

    // Roles
    Route::delete('roles/destroy', 'RolesController@massDestroy')->name('roles.massDestroy');
    Route::resource('roles', 'RolesController');

    // Users
    Route::delete('users/destroy', 'UsersController@massDestroy')->name('users.massDestroy');
    Route::resource('users', 'UsersController');

    // Countries
    Route::delete('countries/destroy', 'CountriesController@massDestroy')->name('countries.massDestroy');
    Route::resource('countries', 'CountriesController');

    // Brand
    Route::delete('brands/destroy', 'BrandController@massDestroy')->name('brands.massDestroy');
    Route::post('brands/media', 'BrandController@storeMedia')->name('brands.storeMedia');
    Route::post('brands/ckmedia', 'BrandController@storeCKEditorImages')->name('brands.storeCKEditorImages');
    Route::resource('brands', 'BrandController');

    // Address
    Route::delete('addresses/destroy', 'AddressController@massDestroy')->name('addresses.massDestroy');
    Route::resource('addresses', 'AddressController', ['except' => ['show']]);

    // Language
    Route::delete('languages/destroy', 'LanguageController@massDestroy')->name('languages.massDestroy');
    Route::resource('languages', 'LanguageController');

    // Tag
    Route::delete('tags/destroy', 'TagController@massDestroy')->name('tags.massDestroy');
    Route::resource('tags', 'TagController');

    // Category
    Route::delete('categories/destroy', 'CategoryController@massDestroy')->name('categories.massDestroy');
    Route::post('categories/media', 'CategoryController@storeMedia')->name('categories.storeMedia');
    Route::post('categories/ckmedia', 'CategoryController@storeCKEditorImages')->name('categories.storeCKEditorImages');
    Route::resource('categories', 'CategoryController');

    // Page
    Route::delete('pages/destroy', 'PageController@massDestroy')->name('pages.massDestroy');
    Route::post('pages/media', 'PageController@storeMedia')->name('pages.storeMedia');
    Route::post('pages/ckmedia', 'PageController@storeCKEditorImages')->name('pages.storeCKEditorImages');
    Route::resource('pages', 'PageController');

    // Product
    Route::delete('products/destroy', 'ProductController@massDestroy')->name('products.massDestroy');
    Route::post('products/media', 'ProductController@storeMedia')->name('products.storeMedia');
    Route::post('products/ckmedia', 'ProductController@storeCKEditorImages')->name('products.storeCKEditorImages');
    Route::resource('products', 'ProductController');

    // Currency
    Route::delete('currencies/destroy', 'CurrencyController@massDestroy')->name('currencies.massDestroy');
    Route::resource('currencies', 'CurrencyController');

    // Order
    Route::post('orders/media', 'OrderController@storeMedia')->name('orders.storeMedia');
    Route::post('orders/ckmedia', 'OrderController@storeCKEditorImages')->name('orders.storeCKEditorImages');
    Route::get('orders/invoice', 'OrderController@invoice')->name('orders.invoice');
    Route::get('orders/new-invoice', 'OrderController@generateInvoice')->name('orders.newInvoice');
    Route::get('orders/delivery', 'OrderController@delivery')->name('orders.delivery');
    Route::get('orders/info', 'OrderController@info')->name('orders.info');
    Route::get('orders/full-doc', 'OrderController@fullDoc')->name('orders.fullDoc');
    Route::get('orders/create-delivery', 'OrderController@createDelivery')->name('orders.createDelivery');
    Route::get('orders/statistics', 'OrderController@statistics')->name('orders.statistics');
    Route::resource('orders', 'OrderController', ['except' => ['create', 'store', 'destroy']]);

    // Letter
    Route::get('letters/send/{letter:id}/{event}', 'LetterController@send')->name('letters.send');
    Route::delete('letters/destroy', 'LetterController@massDestroy')->name('letters.massDestroy');
    Route::resource('letters', 'LetterController');

    // Message
    Route::delete('messages/destroy', 'MessageController@massDestroy')->name('messages.massDestroy');
    Route::resource('messages', 'MessageController');

    // Block
    Route::delete('blocks/destroy', 'BlockController@massDestroy')->name('blocks.massDestroy');
    Route::resource('blocks', 'BlockController');

    // Property
    Route::delete('properties/destroy', 'PropertyController@massDestroy')->name('properties.massDestroy');
    Route::resource('properties', 'PropertyController');

    // Feature
    Route::delete('features/destroy', 'FeatureController@massDestroy')->name('features.massDestroy');
    Route::resource('features', 'FeatureController');

    // Review
    Route::delete('reviews/destroy', 'ReviewController@massDestroy')->name('reviews.massDestroy');
    Route::resource('reviews', 'ReviewController');

    // Subscription
    Route::get('subscriptions/clear', 'SubscriptionController@clear')->name('subscriptions.clear');
    Route::delete('subscriptions/destroy', 'SubscriptionController@massDestroy')->name('subscriptions.massDestroy');
    Route::resource('subscriptions', 'SubscriptionController');

    // Coupon
    Route::delete('coupons/destroy', 'CouponController@massDestroy')->name('coupons.massDestroy');
    Route::resource('coupons', 'CouponController');

    // Warehouse
    Route::delete('warehouses/destroy', 'WarehouseController@massDestroy')->name('warehouses.massDestroy');
    Route::resource('warehouses', 'WarehouseController');

    // Deliverer
    Route::delete('deliverers/destroy', 'DelivererController@massDestroy')->name('deliverers.massDestroy');
    Route::resource('deliverers', 'DelivererController');

    // Translation
    Route::get('translations/export', 'TranslationController@export')->name('translations.export');
    Route::post('translations/import', 'TranslationController@import')->name('translations.import');
    Route::delete('translations/destroy', 'TranslationController@massDestroy')->name('translations.massDestroy');
    Route::resource('translations', 'TranslationController');

    // Banner
    Route::delete('banners/destroy', 'BannerController@massDestroy')->name('banners.massDestroy');
    Route::post('banners/media', 'BannerController@storeMedia')->name('banners.storeMedia');
    Route::post('banners/ckmedia', 'BannerController@storeCKEditorImages')->name('banners.storeCKEditorImages');
    Route::resource('banners', 'BannerController', ['except' => ['show']]);

    // Campaign
    Route::delete('campaigns/destroy', 'CampaignController@massDestroy')->name('campaigns.massDestroy');
    Route::resource('campaigns', 'CampaignController');

    // Vat Report
    Route::get('vat-reports/import', 'VatReportController@importRecords')->name('vat-reports.import');
    Route::get('vat-reports/generate', 'VatReportController@generate')->name('vat-reports.generate');
    Route::resource('vat-reports', 'VatReportController', ['except' => ['create', 'store', 'edit', 'update', 'destroy']]);

    // Vat Report Item
    Route::delete('vat-report-items/destroy', 'VatReportItemController@massDestroy')->name('vat-report-items.massDestroy');
    Route::resource('vat-report-items', 'VatReportItemController', ['except' => ['create', 'store']]);

});

Route::group(['prefix' => 'profile', 'as' => 'profile.', 'namespace' => 'Auth', 'middleware' => ['auth']], function () {
    // Change password
    if (file_exists(app_path('Http/Controllers/Auth/ChangePasswordController.php'))) {
        Route::get('password', 'ChangePasswordController@edit')->name('password.edit');
        Route::post('password', 'ChangePasswordController@update')->name('password.update');
        Route::post('profile', 'ChangePasswordController@updateProfile')->name('password.updateProfile');
        Route::post('profile/destroy', 'ChangePasswordController@destroy')->name('password.destroyProfile');
    }
});
