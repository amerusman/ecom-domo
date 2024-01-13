<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreBlockRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('block_create');
    }

    public function rules()
    {
        return [
            'slug' => [
                'string',
                'required',
                'unique:blocks',
            ],
            'name' => [
                'string',
                'required',
                'unique:blocks',
            ],
            'body.en' => [
                'required',
            ],
        ];
    }
}
