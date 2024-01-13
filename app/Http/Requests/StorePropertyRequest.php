<?php

namespace App\Http\Requests;

use App\Models\Property;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StorePropertyRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('property_create');
    }

    public function rules()
    {
        return [
            'key' => [
                'string',
                'required',
                'unique:properties',
            ],
            'name' => [
                'string',
                'required',
            ],
            'value' => [
                'string',
                'nullable',
            ],
        ];
    }
}
