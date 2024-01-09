<?php

namespace App\Http\Requests\Admin;

use App\Models\Letter;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreLetterRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('letter_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'min:2',
                'required',
                'unique:letters',
            ],
            'slug' => [
                'string',
                'min:2',
                'required',
                'unique:letters',
            ],
            'subject.*' => [
                'string',
                'nullable',
            ],
        ];
    }
}
