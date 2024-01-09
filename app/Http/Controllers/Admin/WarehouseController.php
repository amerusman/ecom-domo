<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MassDestroyWarehouseRequest;
use App\Http\Requests\Admin\StoreWarehouseRequest;
use App\Http\Requests\Admin\UpdateWarehouseRequest;
use App\Models\Country;
use App\Models\Language;
use App\Models\User;
use App\Models\Warehouse;
use Gate;
use Symfony\Component\HttpFoundation\Response;

class WarehouseController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('warehouse_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $warehouses = Warehouse::with(['country', 'language', 'user'])->get();

        return view('admin.warehouses.index', compact('warehouses'));
    }

    public function create()
    {
        abort_if(Gate::denies('warehouse_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $countries = Country::where('active', '1')->pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $languages = Language::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $users = User::pluck('email', 'id')->prepend(trans('global.pleaseSelect'), '');

        return view('admin.warehouses.create', compact('countries', 'languages', 'users'));
    }

    public function store(StoreWarehouseRequest $request)
    {
        $warehouse = Warehouse::create($request->all());

        return redirect()->route('admin.warehouses.index');
    }

    public function edit(Warehouse $warehouse)
    {
        abort_if(Gate::denies('warehouse_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $countries = Country::where('active', '1')->pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $languages = Language::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $users = User::pluck('email', 'id')->prepend(trans('global.pleaseSelect'), '');

        $warehouse->load('country', 'language', 'user');

        return view('admin.warehouses.edit', compact('countries', 'languages', 'users', 'warehouse'));
    }

    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        $warehouse->update($request->all());

        return redirect()->route('admin.warehouses.index');
    }

    public function show(Warehouse $warehouse)
    {
        abort_if(Gate::denies('warehouse_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $warehouse->load('country', 'language', 'user', 'warehouseProducts');

        return view('admin.warehouses.show', compact('warehouse'));
    }

    public function destroy(Warehouse $warehouse)
    {
        abort_if(Gate::denies('warehouse_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $warehouse->delete();

        return back();
    }

    public function massDestroy(MassDestroyWarehouseRequest $request)
    {
        Warehouse::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
