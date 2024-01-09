<?php

namespace App\Providers;

use App\Events\OrderPaid;
use App\Listeners\CartChangeCountry;
use App\Listeners\CreateDelivery;
use App\Listeners\ProcessOrder;
use App\Listeners\SendOrderCreatedNotification;
use App\Listeners\SendProcessOrderNotification;
use App\Listeners\SendUserRegisterMail;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
            SendUserRegisterMail::class,
        ],
        Login::class => [
            CartChangeCountry::class,
        ],
        OrderPaid::class => [
            ProcessOrder::class,
            CreateDelivery::class,
            SendOrderCreatedNotification::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
