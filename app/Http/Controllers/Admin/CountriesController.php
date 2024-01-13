<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MassDestroyCountryRequest;
use App\Http\Requests\Admin\StoreCountryRequest;
use App\Http\Requests\UpdateCountryRequest;
use App\Models\Country;
use App\Models\Currency;
use App\Models\Language;
use Gate;
use Symfony\Component\HttpFoundation\Response;

class CountriesController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('country_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $countries = Country::with(['currency', 'languages'])->get();

        return view('admin.countries.index', compact('countries'));
    }

    public function create()
    {
        abort_if(Gate::denies('country_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $currencies = Currency::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $languages = Language::pluck('name', 'id');

        return view('admin.countries.create', compact('currencies', 'languages'));
    }

    public function store(StoreCountryRequest $request)
    {
        $country = Country::create($request->all());
        $country->languages()->sync($request->input('languages', []));

        return redirect()->route('admin.countries.index');
    }

    public function edit(Country $country)
    {
        abort_if(Gate::denies('country_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $currencies = Currency::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        $languages = Language::pluck('name', 'id');

        $country->load('currency', 'languages');

        return view('admin.countries.edit', compact('country', 'currencies', 'languages'));
    }

    public function update(UpdateCountryRequest $request, Country $country)
    {
        $country->update($request->all());
        $country->languages()->sync($request->input('languages', []));

        return redirect()->route('admin.countries.index');
    }

    public function show(Country $country)
    {
        abort_if(Gate::denies('country_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $country->load('currency', 'languages');

        return view('admin.countries.show', compact('country'));
    }

    public function destroy(Country $country)
    {
        abort_if(Gate::denies('country_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $country->delete();

        return back();
    }

    public function massDestroy(MassDestroyCountryRequest $request)
    {
        Country::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
