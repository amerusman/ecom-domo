<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\AddressRequest;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $addresses = $user->addresses;
        return view('profile.addresses.index', compact('addresses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('profile.addresses.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddressRequest $request)
    {
        if ($request->input('default')) {
            Auth::user()->addresses()->update(['default' => 0]);
        }
        $data = $request->all();
        $data['type'] = 'shipping';
        Auth::user()->addresses()->create($data);
        if ($request->input('default')) {
            $user = Auth::user();
            if ($request->input('country_id') != $user->country_id) {
                $user->country_id = $request->input('country_id');
                $user->save();
            }
        }
        return redirect()->route('profile.addresses.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function show(Address $address)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function edit(Address $address)
    {
        return view('profile.addresses.edit', compact('address'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function update(AddressRequest $request, Address $address)
    {
        if ($request->input('default')) {
            Auth::user()->addresses()->where('id', '!=', $address->id)->update(['default' => 0]);
        }
        $address->update($request->all());
        if ($request->input('default')) {
            $user = Auth::user();
            if ($request->input('country_id') != $user->country_id) {
                $user->country_id = $request->input('country_id');
                $user->save();
            }
        }
        return redirect()->route('profile.addresses.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function destroy(Address $address)
    {
        $address->delete();

        return back();
    }
}
