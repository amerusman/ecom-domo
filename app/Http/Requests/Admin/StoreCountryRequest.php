<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreCountryRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('country_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
            'short_code' => [
                'string',
                'required',
            ],
            'currency_id' => [
                'required',
                'integer',
            ],
            'languages.*' => [
                'integer',
            ],
            'languages' => [
                'array',
            ],
            'vat' => [
                'numeric',
                'min:0',
                'max:99',
            ],
        ];
    }
}
