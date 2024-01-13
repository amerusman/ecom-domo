<?php

namespace App\Http\Requests;

use App\Models\Review;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateReviewRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('review_edit');
    }

    public function rules()
    {
        return [
            'product_id' => [
                'required',
                'integer',
            ],
            'user_id' => [
                'required',
                'integer',
            ],
            'rating' => [
                'required',
                'integer',
                'min:-2147483648',
                'max:2147483647',
            ],
            'advantages' => [
                'string',
                'nullable',
            ],
            'disadvantages' => [
                'string',
                'nullable',
            ],
            'body' => [
                'required',
            ],
        ];
    }
}
