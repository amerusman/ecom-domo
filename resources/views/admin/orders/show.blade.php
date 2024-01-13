@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.order.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.orders.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>

                <a class="btn btn-default" href="{{ route('admin.orders.newInvoice', ['order_id' => $order->id]) }}">
                    create new Invoice
                </a>

                <a class="btn btn-default" href="{{ route('admin.orders.invoice', ['order_id' => $order->id]) }}">
                    download Invoice
                </a>

                <a class="btn btn-default" href="{{ route('admin.orders.delivery', ['order_id' => $order->id]) }}">
                    download Delivery Doc
                </a>
                <a class="btn btn-default" href="{{ route('admin.orders.fullDoc', ['order_id' => $order->id]) }}">
                    download accountant doc
                </a>
                @if(empty($order->meta['delivery']))
                    <a class="btn btn-default" href="{{ route('admin.orders.createDelivery', ['order_id' => $order->id]) }}">
                        create Delivery
                    </a>
                @endif
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.id') }}
                        </th>
                        <td>
                            {{ $order->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.status') }}
                        </th>
                        <td>
                            {{ $order->status->label() }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.user') }}
                        </th>
                        <td>
                            {{ $order->user->name ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.billing') }}
                        </th>
                        <td>
                            @empty(!$order->billing)
                            @forelse($order->billing as $k => $v)
                                {{ $k }}: {{ $v }}
                            @empty
                            @endforelse
                            @endempty
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.shipping') }}
                        </th>
                        <td>
                            @foreach($order->shipping as $k => $v)
                                {{ $k }}: {{ $v }}
                            @endforeach
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.payment') }}
                        </th>
                        <td>
                            @dump($order->payment)
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.total') }}
                        </th>
                        <td>
                            {{ $order->total }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.currency') }}
                        </th>
                        <td>
                            {!! $order->currency->sign ?? '' !!}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.items') }}
                        </th>
                        <td>
                            <table>
                                <tr>
                                    @foreach($order->items [0] as $k => $v)
                                        <td>{{ $k }}</td>
                                    @endforeach
                                </tr>
                            @foreach($order->items as $item)
                                <tr>
                                @foreach($item as $k => $v)
                                        <td>{{ $v }}</td>
                                @endforeach
                                </tr>
                            @endforeach
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.order.fields.paid_at') }}
                        </th>
                        <td>
                            {{ $order->paid_at }}
                        </td>
                    </tr>
                    @if($order->metric)
                        <tr>
                            <th>traffic metric</th>
                            <td>
                                click Id: {{$order->metric['click_id']}} <br>
                                utm_medium: {{$order->metric['utm_medium']}} <br>
                                utm_campaign: {{$order->metric['utm_campaign']}} <br>
                            </td>
                        </tr>
                    @endif
                    <tr>
                        <th>

                        </th>
                        <td>
                            @dump($order->meta)
                        </td>
                    </tr>


{{--                    <tr>--}}
{{--                        <th>--}}
{{--                            {{ trans('cruds.order.fields.invoice') }}--}}
{{--                        </th>--}}
{{--                        <td>--}}
{{--                            @if($order->invoice)--}}
{{--                                <a href="{{ $order->invoice->getUrl() }}" target="_blank">--}}
{{--                                    {{ trans('global.view_file') }}--}}
{{--                                </a>--}}
{{--                            @endif--}}
{{--                        </td>--}}
{{--                    </tr>--}}
{{--                    <tr>--}}
{{--                        <th>--}}
{{--                            {{ trans('cruds.order.fields.packing') }}--}}
{{--                        </th>--}}
{{--                        <td>--}}
{{--                            @if($order->packing)--}}
{{--                                <a href="{{ $order->packing->getUrl() }}" target="_blank">--}}
{{--                                    {{ trans('global.view_file') }}--}}
{{--                                </a>--}}
{{--                            @endif--}}
{{--                        </td>--}}
{{--                    </tr>--}}
                </tbody>
            </table>

            @foreach($order->payments()->latest()->get() as $payment)
            <table class="table table-bordered table-striped">
                <tbody>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        {{ $payment->id }}
                    </td>
                </tr>
                <tr>
                    <td>
                        status
                    </td>
                    <td>
                        {{ $payment->status }}
                    </td>
                </tr>
                <tr>
                    <td>
                        notification_type
                    </td>
                    <td>
                        {{ $payment->notification_type }}
                    </td>
                </tr>
                <tr>
                    <td>
                        country
                    </td>
                    <td>
                        {{ $payment->country->name }}
                    </td>
                </tr>
                <tr>
                    <td>
                        ip
                    </td>
                    <td>
                        {{ $payment->ip }}
                    </td>
                </tr>
                <tr>
                    <td>
                        name
                    </td>
                    <td>
                        {{ $payment->name }}
                    </td>
                </tr>
                <tr>
                    <td>
                        token
                    </td>
                    <td>
                        {{ $payment->token }}
                    </td>
                </tr>
                <tr>
                    <td>
                        amount
                    </td>
                    <td>
                        {{ $payment->amount }}
                    </td>
                </tr>
                <tr>
                    <td>
                        currency_id
                    </td>
                    <td>
                        {{ $payment->currency->name }}
                    </td>
                </tr>
                <tr>
                    <td>
                        created_at
                    </td>
                    <td>
                        {{ $payment->created_at }}
                    </td>
                </tr>
                <tr>
                    <td>
                        updated_at
                    </td>
                    <td>
                        {{ $payment->updated_at }}
                    </td>
                </tr>
                <tr>
                    <td>
                        data
                    </td>
                    <td>
                        @dump($payment->data)
                    </td>
                </tr>
                </tbody>
            </table>
            @endforeach
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.orders.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection
