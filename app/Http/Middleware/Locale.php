<?php

namespace App\Http\Middleware;


use App\Facades\CountryFacade;
use App\Models\Language;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class Locale
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
        $defaultCountry = 'de';
        $defaultLang = 'en';
        $countries = [
            'de'    => 'de',
            'it'    => 'it',
            'ch'    => 'it',
            'fr'    => 'fr',
            'at'    => 'de',
            'nl'    => 'en',
            'es'    => 'en',

        ];

        if (!CountryFacade::isCountrySelected())
        {
            $ip = request()->ip();
//            $ip = '81.6.63.255';
//            $ip = '89.46.110.43';
//            $ip = '62.201.164.0';
            $country = strtolower(file_get_contents("https://georegionsrvc2.com/ccode.aspx?ip=" . $ip));
            if (isset($countries[$country])) {
                $defaultLang = $countries[$country];
                CountryFacade::set($country);
            }
            else {
                $country = $defaultCountry;
            }
//            dump($country, $defaultLang);
            session()->put('language', $defaultLang);
        }


        $lang = session('language', $defaultLang);
        if ($request->route('locale'))
        {
            $lang = $request->route('locale');
            $request->route()->forgetParameter('locale');
            //user changed locale
            if (session('locale') != $lang) {
                session()->put('locale', $lang);
                session()->put('language', $lang);
                if (Auth::check()) {
                    $user = Auth::user();
                    $user->language_id = Language::where('code', $lang)->firstOrFail()->id;
                    $user->save();
                }
            }
        }

        app()->setLocale($lang);
        URL::defaults(['locale' => $lang]);

        return $next($request);
    }
}
