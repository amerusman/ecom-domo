<?php

namespace Database\Seeders;

use App\Models\Letter;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LettersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $letters = [
            [
                'name'  => 'User registration email',
                'slug'  => 'user-register',
                'subject'  => [
                    'en'    => 'Your Premium Italian Cosmetics account has been created!',
                    'de'    => 'Ihr Premium Italian Cosmetics Konto wurde erstellt!',
                    'it'    => 'Il tuo account Premium Italian Cosmetics è stato creato!',
                ],
                'body'  => nl2br('Hello {user.firstname}!

Thank you so much for registration on our website <a href="{app.url}">www.italyskincare.com</a>

Now it will be much more convenient for you to make purchases on our website!


As a thank you gift to you, the new member of our online Italian cosmetics market, we would love to give you an additional 10% discount for your first order under the promo code:

    WELCOME-10

Promo code will be available for this email address only and can be used just once.

Кнопка “Use promo code” ссылка на наш магазин.

Information for entering your Personal Account:
LOGIN: {user.email}
PASSWORD: You have selected a secure password, which, if necessary, may be changed in your personal <a href="{app.profile}">account</a>.

You can also subscribe to our newsletter here and be the first to know about our offers and new products.
 '),
            ],
            [
                'name'  => 'Restore password email',
                'slug'  => 'user-forgot-password',
                'subject'  => [
                    'en'    => 'Restore password',
                    'de'    => 'Passwort wiederherstellen',
                    'it'    => 'Ripristino della password',
                ],
                'body'  => nl2br('<h1>Forgot Password Email</h1>

You can reset password from bellow link:
<a href="{app.reset-password}">Reset Password</a>'),
            ],
            [
                'name'  => 'Subscription to newsletter',
                'slug'  => 'user-subscribed',
                'subject'  => [
                    'en'    => 'Your Premium Italian Cosmetics subscription to newsletter!',
                    'de'    => 'Ihre Premium Italian Cosmetics Anmeldung zum Newsletter!',
                    'it'    => 'Il tuo abbonamento alla newsletter di Premium Italian Cosmetics!',
                ],
                'body'  => nl2br('<h1>Welcome to Premium Italian Cosmetics!</h1>

Hello!

Thank you so much for subscribing to our newsletter!

We’re so glad you’re here!

Now you’ll be the first to know about our special offers!

As a thank you, we would love to give you an additional 10% discount for your first order under the promo code:

    WELCOME-10



Use promo code

Promo code will be available for this email address only and can be used just once.



If you have not yet registered your account on our website, then you can do it here:

<a href="{app.register}">REGISTER</a>

This will help you make purchases on our website much more conveniently.'),
            ],
            [
                'name'  => 'Order confirmation',
                'slug'  => 'order-created',
                'subject'  => [
                    'en'    => 'Your  Premium Italian Cosmetics order has been received.',
                    'de'    => 'Ihre Bestellung von Premium Italian Cosmetics ist bei uns eingegangen.',
                    'it'    => 'Il vostro ordine di Premium Italian Cosmetics è stato ricevuto.',
                ],
                'body'  => nl2br('<h1>Thank you for your order! </h1>

Your order has been received and is now being processed. Your order details are shown below for your reference.
When your order is packaged and shipped from our warehouse, we will send you a order confirmation* that will include shipping details and a tracking number.

Order number: {order.id}

Order date: {order.date}

{order.info}

<table>
<tr><td>Billing address.</td><td>Shipping address.</td></tr>
<tr><td>{order.address.billing}</td><td>{order.address.shipping}</td></tr>
</table>

* The Order is not deemed to be accepted until the Client receives the confirmation of acceptance of the Order (“Order Confirmation”), which generally coincides with the date of dispatch of the products ordered. Thus, the contract of sale for the products between IDEA PARTNERS GbmH and the Client must not be considered perfected until such date.'),
            ],
            [
                'name'  => 'Order shipped',
                'slug'  => 'order-shipped',
                'subject'  => [
                    'en'    => 'Your Premium Italian Cosmetics order shipped.',
                    'de'    => 'Ihre Premium Italian Cosmetics Bestellung wurde versandt.',
                    'it'    => 'L\'ordine di Premium Italian Cosmetics è stato spedito.',
                ],
                'body'  => nl2br('<h1>Thank you for your order! </h1>
 Delivery confirmation
Your Premium Italian Cosmetics order is on its way!


Order N: {order.id} has left our warehouse.

Delivery of the order is made by
{order.delivery-company}

Soon you will receive a separate message from the delivery company, which will include the tracking number and delivery details.


Also in this email you will find the invoice of your order and packing slip.

<table>
<tr><td>Billing address.</td><td>Shipping address.</td></tr>
<tr><td>{order.address.billing}</td><td>{order.address.shipping}</td></tr>
</table>
'),
            ],
            [
                'name'  => 'Order Partially Refunded ',
                'slug'  => 'order-partially-refunded',
                'subject'  => [
                    'en'    => 'Your Premium Italian Cosmetics order has been partially refunded.',
                    'de'    => 'Ihre Bestellung bei Premium Italian Cosmetics wurde teilweise zurückerstattet.',
                    'it'    => 'Il tuo ordine di Premium Italian Cosmetics è stato parzialmente rimborsato.',
                ],
                'body'  => nl2br('<h1>Your Premium Italian Cosmetics order has been partially refunded.</h1>

Below you will find a more detailed refund calculation.
Refunds will be made using the same payment method used for the purchase.  The terms for refunding the payment depend on the method of the initial payment.  Estimated refund time is 1-5 business days.

Order #{order.id} ({order.date})'),
            ],
            [
                'name'  => 'Order Refunded ',
                'slug'  => 'order-refunded',
                'subject'  => [
                    'en'    => 'Your Premium Italian Cosmetics order has been refunded.',
                    'de'    => 'Ihre Premium Italian Cosmetics-Bestellung wurde zurückerstattet.',
                    'it'    => 'Il tuo ordine di Premium Italian Cosmetics è stato rimborsato.',
                ],
                'body'  => nl2br('<h1>Your Premium Italian Cosmetics order has been refunded.</h1>

Below you will find a more detailed refund calculation.
Refunds will be made using the same payment method used for the purchase.  The terms for refunding the payment depend on the method of the initial payment.  Estimated refund time is 1-5 business days.

Order #{order.id} ({order.date})'),
            ],
        ];

        foreach ($letters as $letter) {
            Letter::create($letter);
        }
    }
}
