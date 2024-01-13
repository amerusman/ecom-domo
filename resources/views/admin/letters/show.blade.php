@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.letter.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.letters.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.letter.fields.id') }}
                        </th>
                        <td>
                            {{ $letter->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.letter.fields.name') }}
                        </th>
                        <td>
                            {{ $letter->name }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.letter.fields.slug') }}
                        </th>
                        <td>
                            {{ $letter->slug }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.letter.fields.subject') }}
                        </th>
                        <td>
                            {{ $letter->subject }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Send email
                        </th>
                        <td>
                            <a href="{{ route('admin.letters.send', ['letter' => $letter, 'event' => 'unfinished-order']) }}">To users with pending orders</a>
                            <br>
                            <a href="{{ route('admin.letters.send', ['letter' => $letter, 'event' => 'subscription']) }}">To subscribers</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.letters.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection
