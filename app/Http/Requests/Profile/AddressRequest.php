<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
//            'type' => [
//                'required',
//            ],
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
