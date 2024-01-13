<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreCurrencyRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('currency_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'min:3',
                'required',
            ],
            'code' => [
                'string',
                'min:3',
                'max:3',
                'required',
                'unique:currencies',
            ],
            'sign' => [
                'string',
                'required',
            ],
        ];
    }
}
