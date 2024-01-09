<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class MetricRegistration
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $clickId = $request->get('utm_source');
        $utm_medium = $request->get('utm_medium');
        $utm_campaign = $request->get('utm_campaign');

        if ($clickId) {
            Cookie::queue(Cookie::forever('click_id', $clickId));
        }
        if ($utm_medium) {
            Cookie::queue(Cookie::forever('utm_medium', $utm_medium));
        }
        if ($utm_campaign) {
            Cookie::queue(Cookie::forever('utm_campaign', $utm_campaign));
        }

        //selling campaign registration
        $campaign = $request->get('campaign');
        if ($campaign) {
            Cookie::queue(Cookie::forever('campaign', $campaign));
        }


        return $next($request);
    }
}
