<?php

namespace App\Listeners;

use App\Events\searchEvent;
use Daikazu\GA4EventTracking\GA4;

class searchEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     */
    public function handle(searchEvent $q)
    {
        //
        $eventData = [
            'name' => 'search',
            'params' => [
                'search_term' => $q,
            ],
        ];
        $ga4 = new GA4();
        $ga4->setClientId('ss1231');
        $responce = $ga4->sendEvent($eventData);
        ///var_dump($responce);
    }
}
