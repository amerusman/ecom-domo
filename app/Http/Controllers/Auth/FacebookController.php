<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\SiteHelper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class FacebookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirect()
    {
        app('redirect')->setIntendedUrl(url()->previous());
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function callback()
    {
        try {
            $user = Socialite::driver('facebook')->fields([
                'first_name',
                'last_name',
                'email',
            ])
                ->user();

        } catch (Exception $exception) {
            redirect(route('home'));
        }

        try {
            $isUser = User::where('fb_id', $user->id)->first();

            //find user by email if fb_id not found
            if (!$isUser) {
                $isUser = User::where('email', $user->email)->first();
                if ($isUser) {
                    $isUser->fb_id = $user->id;
                    $isUser->save();
                }
            }

            if($isUser)
            {
                Auth::login($isUser);
                return redirect()->intended('/');
            }
            else
            {
//                dd($user);
                $createUser = User::create([
                    'firstname' => $user->offsetGet('first_name'),
                    'lastname' => $user->offsetGet('last_name'),
                    'email' => $user->email,
                    'fb_id' => $user->id,
                    'password' => $user->getId() . time(),
                    'country_id'    => SiteHelper::country()->id,
                ]);

                Auth::login($createUser);
                return redirect()->intended('/');
            }

        } catch (Exception $exception) {
            dd($exception->getMessage());
        }
    }
}
