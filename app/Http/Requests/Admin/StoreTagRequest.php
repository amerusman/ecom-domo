<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreTagRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('tag_create');
    }

    public function rules()
    {
        return [
            'name.en' => [
                'string',
                'min:2',
                'required',
            ],
            'slug' => [
                'string',
                'required',
                'unique:tags',
            ],
        ];
    }
}
