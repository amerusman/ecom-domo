@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.country.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.countries.update", [$country->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            @include('admin.countries.partials._form')
        </form>
    </div>
</div>



@endsection
