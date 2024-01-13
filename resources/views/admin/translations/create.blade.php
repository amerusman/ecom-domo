@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.translation.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.translations.store") }}" enctype="multipart/form-data">
            @csrf
            @include('admin.translations.partials._form')
        </form>
    </div>
</div>



@endsection
