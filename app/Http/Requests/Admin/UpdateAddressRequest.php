<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAddressRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('address_edit');
    }

    public function rules()
    {
        return [
            'user_id' => [
                'required',
                'integer',
            ],
            'type' => [
                'required',
            ],
            'country_id' => [
                'required',
                'integer',
            ],
            'state' => [
                'string',
                'required',
            ],
            'city' => [
                'string',
                'min:2',
                'required',
            ],
            'first_name' => [
                'string',
                'nullable',
            ],
            'last_name' => [
                'string',
                'nullable',
            ],
            'company' => [
                'string',
                'nullable',
            ],
            'address_1' => [
                'string',
                'required',
            ],
            'address_2' => [
                'string',
                'nullable',
            ],
            'zip' => [
                'string',
                'required',
            ],
            'phone' => [
                'string',
                'min:8',
                'required',
            ],
        ];
    }
}
