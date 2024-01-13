@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.block.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.blocks.store") }}" enctype="multipart/form-data">
            @csrf
            @include('admin.blocks.partials._form')
        </form>
    </div>
</div>

@endsection
