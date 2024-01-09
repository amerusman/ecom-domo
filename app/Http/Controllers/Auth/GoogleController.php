<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\SiteHelper;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirect()
    {
        app('redirect')->setIntendedUrl(url()->previous());
        return Socialite::driver('google')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function callback()
    {
        try {

            $user = Socialite::driver('google')->user();

            $finduser = User::where('google_id', $user->id)->first();

            //find user by email if fb_id not found
            if (!$finduser) {
                $finduser = User::where('email', $user->email)->first();
                if ($finduser) {
                    $finduser->google_id = $user->id;
                    $finduser->save();
                }
            }

            if ( $finduser ) {

                Auth::login($finduser);

                return redirect()->intended('/');

            }
            else
            {
                $lang = session('locale');
                $language = Language::where('code', $lang)->first();
                if ($language) {
                    $langId = $language->id;
                }
                else {
                    $langId = null;
                }
                $newUser = User::create([
                    'firstname'     => $user->offsetGet('given_name'),
                    'lastname'      => $user->offsetGet('family_name'),
                    'email'         => $user->email,
                    'google_id'     => $user->id,
                    'password'      => $user->getId() . time(),
                    'language_id'   => $langId,
                    'country_id'    => SiteHelper::country()->id,
                ]);

                Auth::login($newUser);

                return redirect()->intended('/' . $lang);
            }

        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
