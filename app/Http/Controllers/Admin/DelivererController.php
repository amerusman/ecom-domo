<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MassDestroyDelivererRequest;
use App\Http\Requests\Admin\StoreDelivererRequest;
use App\Http\Requests\UpdateDelivererRequest;
use App\Models\Deliverer;
use Gate;
use Symfony\Component\HttpFoundation\Response;

class DelivererController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('deliverer_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deliverers = Deliverer::all();

        return view('admin.deliverers.index', compact('deliverers'));
    }

    public function create()
    {
        abort_if(Gate::denies('deliverer_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.deliverers.create');
    }

    public function store(StoreDelivererRequest $request)
    {
        $deliverer = Deliverer::create($request->all());

        return redirect()->route('admin.deliverers.index');
    }

    public function edit(Deliverer $deliverer)
    {
        abort_if(Gate::denies('deliverer_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.deliverers.edit', compact('deliverer'));
    }

    public function update(UpdateDelivererRequest $request, Deliverer $deliverer)
    {
        $deliverer->update($request->all());

        return redirect()->route('admin.deliverers.index');
    }

    public function show(Deliverer $deliverer)
    {
        abort_if(Gate::denies('deliverer_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.deliverers.show', compact('deliverer'));
    }

    public function destroy(Deliverer $deliverer)
    {
        abort_if(Gate::denies('deliverer_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deliverer->delete();

        return back();
    }

    public function massDestroy(MassDestroyDelivererRequest $request)
    {
        Deliverer::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
