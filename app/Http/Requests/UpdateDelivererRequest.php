<?php

namespace App\Http\Requests;

use App\Models\Deliverer;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateDelivererRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('deliverer_edit');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
                'unique:deliverers,name,' . request()->route('deliverer')->id,
            ],
            'site' => [
                'string',
                'required',
            ],
            'tracking_url' => [
                'string',
                'nullable',
            ],
        ];
    }
}
