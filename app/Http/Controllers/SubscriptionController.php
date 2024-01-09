<?php

namespace App\Http\Controllers;

use App\Mail\UserSubscribed;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class SubscriptionController extends Controller
{
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
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255'],
            'g-recaptcha-response' => 'required|recaptchav3:store,0.5'
        ]);
        $validator->validate();
        $exist = Subscription::where('email', $request->input('email'))->first();
        if ($exist) {
            if ($exist->unsubscribed) {
                $exist->unsubscribed = false;
                $exist->save();
            }
            else {
                $message = trans('web.already_subscribed');
                return response()->json(['status' => 0, 'message' => $message], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        }
        else {
            Subscription::create($request->all());
        }

        Mail::to($request->input('email'))->send(new UserSubscribed());

        return response()->json(['status' => 1]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $subscription)
    {
        //
    }
}
