<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreDelivererRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('deliverer_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
                'unique:deliverers',
            ],
            'site' => [
                'string',
                'required',
            ],
            'tracking_url' => [
                'string',
                'nullable',
            ],
        ];
    }
}
