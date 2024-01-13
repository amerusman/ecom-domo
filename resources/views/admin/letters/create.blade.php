@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.letter.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.letters.store") }}" enctype="multipart/form-data">
            @csrf
            @include('admin.letters.partials._form')
        </form>
    </div>
</div>



@endsection
