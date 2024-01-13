<?php

namespace App\Http\Requests;

use App\Models\Message;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateMessageRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('message_edit');
    }

    public function rules()
    {
        return [
            'firstname' => [
                'string',
                'min:2',
                'required',
                'unique:messages,firstname,' . request()->route('message')->id,
            ],
            'lastname' => [
                'string',
                'min:2',
                'required',
            ],
            'email' => [
                'required',
            ],
            'phone' => [
                'string',
                'nullable',
            ],
            'message' => [
                'required',
            ],
        ];
    }
}
