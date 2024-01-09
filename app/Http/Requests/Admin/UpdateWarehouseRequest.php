<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateWarehouseRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('warehouse_edit');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
                'unique:warehouses,name,' . request()->route('warehouse')->id,
            ],
        ];
    }
}
