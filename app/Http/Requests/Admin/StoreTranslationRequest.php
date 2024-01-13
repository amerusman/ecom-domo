<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class StoreTranslationRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('translation_create');
    }

    public function rules()
    {
        return [
            'key' => [
                'string',
                'required',
            ],
            'value.en' => [
                'string',
                'required',
            ],
        ];
    }
}
