@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.translation.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.translations.update", [$translation->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            @include('admin.translations.partials._form')
        </form>
    </div>
</div>



@endsection
