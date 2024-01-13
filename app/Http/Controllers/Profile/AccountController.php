<?php

namespace App\Http\Controllers\Profile;

use App\Facades\CountryFacade;
use App\Helpers\Translator;
use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\AccountRequest;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        return view('profile.account.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AccountRequest $request)
    {
        if ($request->filled('firstname') || $request->filled('lastname'))
        {
            $user = auth()->user();
            $user->firstname = $request->input('firstname');
            $user->lastname = $request->input('lastname');
            $user->save();
        }
        elseif ($request->filled('password_change')) {
            $user = auth()->user();
            if (Hash::check($request->input('password_current'), $user->password)) {
                $user->password = $request->input('password');
                $user->save();
            }
            else {
                return redirect()->back()->withErrors(['password_current' => Translator::__('profile.password_do_not_match', 'These password do not match')]);
            }
        }
        return redirect()->route('profile.home')->with([
            'success' => 'Solved'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function setCountry()
    {
        $countryId = intval(request()->input('country'));
        $country = Country::find($countryId);
        if ($country && $country->active) {
            CountryFacade::set($country->short_code);
        }

        return back();
    }
}
