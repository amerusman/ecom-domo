<?php

namespace App\Http\Requests\Admin;

use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreProductRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('product_create');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $slug = $this->slug ?: $this->name['en'];
        $this->merge([
            'slug' => Str::slug($slug),
        ]);
    }

    public function rules()
    {
        return [
            'name.*' => [
                'string',
                'nullable',
            ],
            'name.en' => [
                'string',
                'required',
            ],
            'slug' => [
                'string',
                'required',
                'unique:products',
            ],
            'sku' => [
                'string',
                'required',
                'unique:products',
            ],
            'categories.*' => [
                'integer',
            ],
            'categories' => [
                'required',
                'array',
            ],
            'tags.*' => [
                'integer',
            ],
            'tags' => [
                'array',
            ],
            'photos' => [
                'array',
            ],
            'brand_id' => [
                'required',
                'integer',
            ],
            'prices.*'    => [
                'numeric',
                'nullable',
            ],
            'warehouse_id' => [
                'required',
                'integer',
            ],
            'discount' => [
                'nullable',
                'numeric',
                'min:0',
                'max:100',
            ],
        ];
    }
}
