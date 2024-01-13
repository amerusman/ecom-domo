<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MassDestroyLetterRequest;
use App\Http\Requests\Admin\StoreLetterRequest;
use App\Http\Requests\Admin\UpdateLetterRequest;
use App\Models\Letter;
use App\Models\Order;
use App\Models\Subscription;
use App\Models\User;
use Gate;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class LetterController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('letter_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $letters = Letter::all();

        return view('admin.letters.index', compact('letters'));
    }

    public function create()
    {
        abort_if(Gate::denies('letter_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.letters.create');
    }

    public function store(StoreLetterRequest $request)
    {
        $letter = Letter::create($request->all());

        return redirect()->route('admin.letters.index');
    }

    public function edit(Letter $letter)
    {
        abort_if(Gate::denies('letter_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.letters.edit', compact('letter'));
    }

    public function update(UpdateLetterRequest $request, Letter $letter)
    {
        $letter->update($request->all());

        return redirect()->route('admin.letters.index');
    }

    public function show(Letter $letter)
    {
        abort_if(Gate::denies('letter_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.letters.show', compact('letter'));
    }

    public function destroy(Letter $letter)
    {
        abort_if(Gate::denies('letter_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $letter->delete();

        return back();
    }

    public function massDestroy(MassDestroyLetterRequest $request)
    {
        Letter::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function send(Letter $letter, string $event)
    {
        $cnt = 0;
        switch ($event)
        {
            case 'unfinished-order':
                $users = User::whereHas('orders', function (Builder $query) {
                    $query->where('status', OrderStatus::Pending);
                })->get();

                foreach ($users as $user) {
                    try {
                        $res = Mail::to($user)->queue(new \App\Mail\Letter($letter, $user));
                    }
                    catch (\Exception $e) {

                    }

                }
                return back()->with(['message' => 'Email send suspenseful to ' . $users->count() . ' users']);
                break;
            case 'subscription':
                $subscriptions = Subscription::where('unsubscribed', 0)->get();

                foreach ($subscriptions as $subscription) {
                    try {
                        $res = Mail::to($subscription->email)->queue(new \App\Mail\LetterGuest($letter));
                    }
                    catch (\Exception $e) {

                    }

                }
                return back()->with(['message' => 'Email send suspenseful to ' . $subscriptions->count() . ' users']);
                break;
        }
    }
}
