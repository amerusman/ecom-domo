<?php

namespace App\Http\Requests;

use App\Models\Property;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdatePropertyRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('property_edit');
    }

    public function rules()
    {
        return [
            'key' => [
                'string',
                'required',
                'unique:properties,key,' . request()->route('property')->id,
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
