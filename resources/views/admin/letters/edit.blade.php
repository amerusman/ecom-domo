@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.letter.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.letters.update", [$letter->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            @include('admin.letters.partials._form')
        </form>
    </div>
</div>



@endsection
