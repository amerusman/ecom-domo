<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\SiteHelper;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
//            'name'     => ['required', 'string', 'max:255'],
            'firstname' => ['required', 'string', 'max:255', 'min:2'],
            'lastname'  => ['required', 'string', 'max:255', 'min:2'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @return \App\User
     */
    protected function create(array $data)
    {
        $lang = Language::where('locale', app()->getLocale())->firstOrFail();
        return User::create([
//            'name'     => $data['name'],
            'firstname'     => $data['firstname'],
            'lastname'     => $data['lastname'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
            'language_id' => $lang->id,
            'country_id'  => SiteHelper::country()->id
        ]);
    }

    public function redirectTo()
    {
        if (substr_count(url()->previous(), 'checkout')) {
            $route = 'checkout.index';
        }
        else {
            $route = 'profile.home';
        }
        return route($route, ['locale' => auth()->user()->preferredLocale()]);
    }
}
