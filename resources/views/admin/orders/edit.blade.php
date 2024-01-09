@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.order.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.orders.update", [$order->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group">
                <label>{{ trans('cruds.order.fields.status') }}</label>
                <select class="form-control {{ $errors->has('status') ? 'is-invalid' : '' }}" name="status" id="status">
                    <option value disabled {{ old('status', null) === null ? 'selected' : '' }}>{{ trans('global.pleaseSelect') }}</option>
                    @foreach(\App\Enums\OrderStatus::cases() as $status)
                        <option value="{{ $status }}" {{ old('status', $order->status) === $status ? 'selected' : '' }}>{{ $status->label() }}</option>
                    @endforeach
                </select>
                @if($errors->has('status'))
                    <span class="text-danger">{{ $errors->first('status') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.status_helper') }}</span>
            </div>

{{--            <div class="form-group">
                <label for="billing">{{ trans('cruds.order.fields.billing') }}</label>
                <input class="form-control {{ $errors->has('billing') ? 'is-invalid' : '' }}" type="text" name="billing" id="billing" value="{{ old('billing', $order->billing) }}">
                @if($errors->has('billing'))
                    <span class="text-danger">{{ $errors->first('billing') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.billing_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="shipping">{{ trans('cruds.order.fields.shipping') }}</label>
                <input class="form-control {{ $errors->has('shipping') ? 'is-invalid' : '' }}" type="text" name="shipping" id="shipping" value="{{ old('shipping', $order->shipping) }}">
                @if($errors->has('shipping'))
                    <span class="text-danger">{{ $errors->first('shipping') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.shipping_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="payment">{{ trans('cruds.order.fields.payment') }}</label>
                <input class="form-control {{ $errors->has('payment') ? 'is-invalid' : '' }}" type="text" name="payment" id="payment" value="{{ old('payment', $order->payment) }}">
                @if($errors->has('payment'))
                    <span class="text-danger">{{ $errors->first('payment') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.payment_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="total">{{ trans('cruds.order.fields.total') }}</label>
                <input class="form-control {{ $errors->has('total') ? 'is-invalid' : '' }}" type="number" name="total" id="total" value="{{ old('total', $order->total) }}" step="0.01">
                @if($errors->has('total'))
                    <span class="text-danger">{{ $errors->first('total') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.total_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="currency_id">{{ trans('cruds.order.fields.currency') }}</label>
                <select class="form-control select2 {{ $errors->has('currency') ? 'is-invalid' : '' }}" name="currency_id" id="currency_id">
                    @foreach($currencies as $id => $entry)
                        <option value="{{ $id }}" {{ (old('currency_id') ? old('currency_id') : $order->currency->id ?? '') == $id ? 'selected' : '' }}>{{ $entry }}</option>
                    @endforeach
                </select>
                @if($errors->has('currency'))
                    <span class="text-danger">{{ $errors->first('currency') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.currency_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="items">{{ trans('cruds.order.fields.items') }}</label>
                <input class="form-control {{ $errors->has('items') ? 'is-invalid' : '' }}" type="text" name="items" id="items" value="{{ old('items', $order->items) }}">
                @if($errors->has('items'))
                    <span class="text-danger">{{ $errors->first('items') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.items_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="paid_at">{{ trans('cruds.order.fields.paid_at') }}</label>
                <input class="form-control datetime {{ $errors->has('paid_at') ? 'is-invalid' : '' }}" type="text" name="paid_at" id="paid_at" value="{{ old('paid_at', $order->paid_at) }}">
                @if($errors->has('paid_at'))
                    <span class="text-danger">{{ $errors->first('paid_at') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.paid_at_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="invoice">{{ trans('cruds.order.fields.invoice') }}</label>
                <div class="needsclick dropzone {{ $errors->has('invoice') ? 'is-invalid' : '' }}" id="invoice-dropzone">
                </div>
                @if($errors->has('invoice'))
                    <span class="text-danger">{{ $errors->first('invoice') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.invoice_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="packing">{{ trans('cruds.order.fields.packing') }}</label>
                <div class="needsclick dropzone {{ $errors->has('packing') ? 'is-invalid' : '' }}" id="packing-dropzone">
                </div>
                @if($errors->has('packing'))
                    <span class="text-danger">{{ $errors->first('packing') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.order.fields.packing_helper') }}</span>
            </div>
            --}}
            <div class="form-group">
                <button class="btn btn-danger" type="submit">
                    {{ trans('global.save') }}
                </button>
            </div>
        </form>
    </div>
</div>



@endsection
