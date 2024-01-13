<?php

namespace App\Http\Requests;

use App\Models\Feature;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class UpdateFeatureRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('feature_edit');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $key = $this->key ?: $this->name['en'];
        $this->merge([
            'key' => Str::slug($key),
        ]);
    }


    public function rules()
    {
        return [
            'key' => [
                'string',
                'required',
                'unique:features,key,' . request()->route('feature')->id,
            ],
            'name.*' => [
                'string',
                'required',
            ],
            'type' => [
                'required',
            ],
            'unit.*' => [
                'string',
                'nullable',
            ],
        ];
    }
}
