<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CampaignProduct extends Pivot
{
    public $table = 'campaign_product';
    public $timestamps = false;

    protected $fillable = [
        'campaign_id',
        'product_id',
        'rprice',
        'price',
    ];


}
