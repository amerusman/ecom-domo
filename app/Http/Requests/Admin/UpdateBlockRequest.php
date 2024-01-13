<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateBlockRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('block_edit');
    }

    public function rules()
    {
        return [
            'slug' => [
                'string',
                'required',
                'unique:blocks,slug,' . request()->route('block')->id,
            ],
            'name' => [
                'string',
                'required',
                'unique:blocks,name,' . request()->route('block')->id,
            ],
            'body.en' => [
                'required',
            ],
        ];
    }
}
