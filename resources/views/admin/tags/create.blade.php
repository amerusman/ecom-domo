@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.tag.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.tags.store") }}" enctype="multipart/form-data">
            @csrf
            @include('admin.tags.partials._form')
        </form>
    </div>
</div>



@endsection
