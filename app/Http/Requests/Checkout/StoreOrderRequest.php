<?php

namespace App\Http\Requests\Checkout;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
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
        $rules = [
            'billing.country_id' => [
                'required',
                'integer',
                Rule::exists('countries', 'id')->where(function ($query) {
                    return $query->where('active', 1);
                }),
            ],
            'billing.state' => [
                'regex:/^[\pL\s\-]+$/u',
                'min:2',
                'required',
            ],
            'billing.city' => [
                'regex:/^[\pL\s\-]+$/u',
                'min:2',
                'required',
            ],
            'billing.first_name' => [
                'string',
                'min:2',
                'required',
            ],
            'billing.last_name' => [
                'string',
                'min:2',
                'required',
            ],
            'billing.company' => [
                'string',
                'nullable',
            ],
            'billing.address_1' => [
                'string',
                'required',
            ],
            'billing.address_2' => [
                'string',
                'nullable',
            ],
            'billing.zip' => [
                'string',
                'required',
            ],
            'billing.phone' => [
                'string',
                'min:8',
                'required',
            ],
        ];

        if ($this->select_shipping_address)
        {
            $rules = array_merge($rules, [
                'shipping.country_id' => [
                    'required_if:select_shipping_address,1',
                    'integer',
                    Rule::exists('countries', 'id')->where(function ($query) {
                        return $query->where('active', 1);
                    }),
                ],
                'shipping.state' => [
                    'regex:/^[\pL\s\-]+$/u',
                    'min:2',
                    'required_if:select_shipping_address,1',
                    'nullable',
                ],
                'shipping.city' => [
                    'regex:/^[\pL\s\-]+$/u',
                    'min:2',
                    'required_if:select_shipping_address,1',
                    'nullable',
                ],
                'shipping.first_name' => [
                    'string',
                    'min:2',
                    'required_if:select_shipping_address,1',
                    'nullable',
                ],
                'shipping.last_name' => [
                    'string',
                    'min:2',
                    'required_if:select_shipping_address,1',
                    'nullable',
                ],
                'shipping.company' => [
                    'string',
                    'nullable',
                ],
                'shipping.address_1' => [
                    'string',
                    'required_if:select_shipping_address,1',
                    'nullable',
                ],
                'shipping.address_2' => [
                    'string',
                    'nullable',
                ],
                'shipping.zip' => [
                    'string',
                    'required_if:select_shipping_address,1',
                    'nullable',
                ],
                'shipping.phone' => [
                    'nullable',
                    'string',
                    'min:8',
                    'required_if:select_shipping_address,1',
                ],
            ]);
        }

        return $rules;
    }
}
