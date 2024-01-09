<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreBannerRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('banner_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
            'left_line_1.*' => [
                'string',
                'nullable',
            ],
            'left_line_2.*' => [
                'string',
                'nullable',
            ],
            'right_line_1.*' => [
                'string',
                'nullable',
            ],
            'right_line_2.*' => [
                'string',
                'nullable',
            ],
            'image' => [
                'required',
            ],
            'position' => [
                'nullable',
                'integer',
                'min:0',
                'max:2147483647',
            ],
        ];
    }
}
