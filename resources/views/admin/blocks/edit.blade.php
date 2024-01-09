@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.block.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.blocks.update", [$block->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf

            @include('admin.blocks.partials._form')

        </form>
    </div>
</div>



@endsection
