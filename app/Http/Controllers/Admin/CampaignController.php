<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyCampaignRequest;
use App\Http\Requests\StoreCampaignRequest;
use App\Http\Requests\UpdateCampaignRequest;
use App\Models\Campaign;
use App\Models\CampaignProduct;
use App\Models\Product;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CampaignController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('campaign_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $campaigns = Campaign::all();

        return view('admin.campaigns.index', compact('campaigns'));
    }

    public function create()
    {
        abort_if(Gate::denies('campaign_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.campaigns.create');
    }

    public function store(StoreCampaignRequest $request)
    {
        $campaign = Campaign::create($request->all());

        return redirect()->route('admin.campaigns.index');
    }

    public function edit(Campaign $campaign)
    {
        abort_if(Gate::denies('campaign_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $products = Product::active()->get();
        $prices = $campaign->products->keyBy('id');

        return view('admin.campaigns.edit', compact('campaign', 'products', 'prices'));
    }

    public function update(UpdateCampaignRequest $request, Campaign $campaign)
    {
        $campaign->update($request->all());

        $regularPrice = $request->input('rprice');
        foreach ($request->input('price') as $productId => $price)
        {
            if ($price || $regularPrice[$productId]) {
                $cp = CampaignProduct::updateOrCreate(
                    ['campaign_id' => $campaign->id, 'product_id' => $productId],
                    ['rprice' => $regularPrice[$productId], 'price' => $price]
                );
            }
        }

        return redirect()->route('admin.campaigns.index');
    }

    public function show(Campaign $campaign)
    {
        abort_if(Gate::denies('campaign_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.campaigns.show', compact('campaign'));
    }

    public function destroy(Campaign $campaign)
    {
        abort_if(Gate::denies('campaign_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $campaign->delete();

        return back();
    }

    public function massDestroy(MassDestroyCampaignRequest $request)
    {
        $campaigns = Campaign::find(request('ids'));

        foreach ($campaigns as $campaign) {
            $campaign->delete();
        }

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
