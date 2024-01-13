@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.review.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.reviews.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.id') }}
                        </th>
                        <td>
                            {{ $review->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.product') }}
                        </th>
                        <td>
                            {{ $review->product->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.user') }}
                        </th>
                        <td>
                            {{ $review->user->email ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.language') }}
                        </th>
                        <td>
                            {{ $review->language->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.status') }}
                        </th>
                        <td>
                            {{ App\Models\Review::STATUS_SELECT[$review->status] ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.rating') }}
                        </th>
                        <td>
                            {{ $review->rating }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.name') }}
                        </th>
                        <td>
                            {{ $review->name }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.advantages') }}
                        </th>
                        <td>
                            {{ $review->advantages }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.disadvantages') }}
                        </th>
                        <td>
                            {{ $review->disadvantages }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.review.fields.body') }}
                        </th>
                        <td>
                            {{ $review->body }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.reviews.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection