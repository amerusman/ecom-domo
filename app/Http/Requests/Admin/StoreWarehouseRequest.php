<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreWarehouseRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('warehouse_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
                'unique:warehouses',
            ],
        ];
    }
}
