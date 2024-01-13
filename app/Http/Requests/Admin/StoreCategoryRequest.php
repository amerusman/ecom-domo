<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('category_create');
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
                'min:2',
                'required',
                'unique:categories',
            ],
        ];
    }
}
