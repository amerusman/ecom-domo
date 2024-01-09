<tr>
    <td bgcolor= "#ffffff">
        <table role="table"  border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tr>
                <td style="width:100%; text-align:center; background-color: #ffffff">
                    <table class="info-product" cellspacing="0" cellpadding="6" width="100%" border="1" style="color:#ffffff; border:1px solid #d2d2d2;font-family: Arial, Helvetica, sans-serif; font-weight:400; width:100%">
                        <thead>
                            <tr>
                                <th scope="col" style="color:#ffffff; background-color: #b0907b; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700; line-height:140%; padding:12px; padding-left:16px; padding-right:4px; text-align:left">{{ Trans::__('profile.product_name') }}</th>
                                <th scope="col" style="color:#ffffff; background-color: #b0907b; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700; line-height:140%; padding:12px; padding-left:16px; padding-right:4px; text-align:left">{{ Trans::__('product.qty') }}</th>
                                <th scope="col" style="color:#ffffff; background-color: #b0907b; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700; line-height:140%; padding:12px; padding-left:16px; padding-right:4px; text-align:left">{{ Trans::__('product.price') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($items as $items)
                            <tr>
                                <td style="color:#383838; background-color: #f7f7f7; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left:16px; padding-right:4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $items->sku }} {{ $items->name }}</td>
                                <td style="color:#383838; background-color: #f7f7f7; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left:16px; padding-right:4px; text-align:left; vertical-align:middle">{{ $items->quantity }}</td>
                                <td style="color:#383838; background-color: #f7f7f7; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left:16px; padding-right:4px; text-align:left; vertical-align:middle"><span>{{ Site::price($items->amount) }}<span>€</span></span></td>
                            </tr>
                        @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row" colspan="2" style="color:#383838; background-color: #ffffff; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px;padding-left: 16px;padding-right: 4px;text-align:left">{{ Trans::__('checkout.subtotal') }}:</th>
                                <td style="color:#383838; background-color: #ffffff; border:1px solid #d2d2d2; font-size: 14px; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px;padding-left: 16px; padding-right:4px;text-align:left"><span>{{ $order->sub_total }}<span>€</span></span></td>
                            </tr>

                            @if ($order->discount_total)
                            <tr>
                                <th scope="row" colspan="2" style="color:#383838; background-color: #f7f7f7; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px; padding-left: 16px; padding-right: 4px;text-align:left">{{ Trans::__('checkout.discount_coupon') }}</th>
                                <td style="color:#383838; background-color: #f7f7f7; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px; padding-left: 16px; padding-right: 4px;text-align:left"><span>{{ $order->discount_total }}<span>€</span></span></td>
                            </tr>
                            @endif

                            <tr>
                                <th scope="row" colspan="2" style="color:#383838; background-color: #ffffff; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px; padding-left: 16px; padding-right: 4px;text-align:left">{{ Trans::__('checkout.delivery') }}:</th>
                                <td style="color:#383838; background-color: #ffffff; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px; padding-left: 16px; padding-right: 4px;text-align:left">
                                    <span>{{ $order->shipping_total }}<span>€</span></span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row" colspan="2" style="color:#383838; background-color: #f0e6e0; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px; padding-left: 16px; padding-right: 4px; text-align:left">{{ Trans::__('checkout.total') }}:</th>
                                <td style="color:#383838; background-color: #f0e6e0; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px;padding-left: 16px; padding-right:4px; text-align:left">{{ $order->total }}<br>(includes <span>{{ $order->tax_total }}<span>€</span></span> VAT)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" style="color:#383838; background-color: #ffffff; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:700;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px; padding-left: 16px; padding-right: 4px; text-align:left">{{ Trans::__('checkout.payment_method') }}:</th>
                                <td style="color:#383838; background-color: #ffffff; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400;border-color:#e4e4e4;border-width:1px;border-style:solid;padding:12px;padding-left: 16px; padding-right:4px; text-align:left">{{ $order->paymentMethod }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td align="center" bgcolor= "#ffffff" style=" padding: 20px;">
        <table role="table"  border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tr>
                <td style="width:50%; text-align:center; padding-bottom: 30px;">
                    <p style="margin: 0;"><strong>{{ Trans::__('profile.billing_address') }}:</strong></p>
                    <table class="info-client" role="table"  border="0" width="100%" height="201px" cellpadding="5" cellspacing="5" align="left" style="color:#383838; font-family: Arial, Helvetica, sans-serif; font-weight:400; width:100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->billing['first_name'] }} {{ $order->billing['last_name'] }}</td>
                            </tr>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->billing['address_1'] }} {{ $order->billing['address_2'] }}</td>
                            </tr>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->billing['city'] }}</td>
                            </tr>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ \App\Models\Country::find($order->billing['country_id'])->name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td style="width:50%; text-align:center; padding-bottom: 30px;">
                    <p style="margin: 0;"><strong>{{ Trans::__('profile.shipping_address') }}:</strong></p>
                    <table class="info-client" role="table"  border="0" width="100%" height="201px" cellpadding="5" cellspacing="5" align="left" style="color:#383838; font-family: Arial, Helvetica, sans-serif; font-weight:400; width:100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->shipping['first_name'] }} {{ $order->shipping['last_name'] }}</td>
                            </tr>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->shipping['address_1'] }} {{ $order->shipping['address_2'] }}</td>
                            </tr>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->shipping['city'] }}</td>
                            </tr>
                            <tr>
                                <td style="color:#383838; border:1px solid #d2d2d2; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight:400; padding:12px; padding-left: 16px; padding-right: 4px; text-align:left; vertical-align:middle; word-wrap:break-word">{{ $order->country->name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
