<?php

namespace App\Http\Middleware;

use App\Models\Review;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class Admin
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
        $user = auth()->user();

        if (!$user || (!$user->isAdmin && !$user->isWarehouse)) {
            abort(404);
        }

//        TODO: move to View Share provider
        $newReviewsCount = Review::newCount();
        View::share('newReviewsCount', $newReviewsCount);

        return $next($request);
    }
}
