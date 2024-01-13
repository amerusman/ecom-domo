<?php

namespace App\Http\Requests\Admin;

use App\Models\Letter;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateLetterRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('letter_edit');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'min:2',
                'required',
                'unique:letters,name,' . request()->route('letter')->id,
            ],
            'slug' => [
                'string',
                'min:2',
                'required',
                'unique:letters,slug,' . request()->route('letter')->id,
            ],
            'subject.*' => [
                'string',
                'nullable',
            ],
        ];
    }
}
