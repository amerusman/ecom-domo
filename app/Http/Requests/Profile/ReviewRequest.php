<?php

namespace App\Http\Requests\Profile;

use App\Helpers\SiteHelper;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }
    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'language_id' => SiteHelper::language()->id,
            'status'    => 'new'
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'product_id' => [
                'required',
                'integer',
            ],
            'rating' => [
                'required',
                'integer',
                'min:0',
                'max:5',
            ],
//            'advantages' => [
//                'string',
//                'nullable',
//            ],
//            'disadvantages' => [
//                'string',
//                'nullable',
//            ],
            'body' => [
                'required',
            ],
        ];
    }
}
