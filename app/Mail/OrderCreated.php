<?php

namespace App\Mail;

use App\Models\Letter;
use App\Models\Order;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderCreated extends Mailable
{
    use Queueable, SerializesModels;

    private string $letter = 'order-created';

    /**
     * The user instance.
     *
     * @var User
     */
    public User $user;

    public Order $order;

    public string $body;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->user = $order->user;
        $letter = Letter::where('slug', $this->letter)->firstOrFail();

        $footer = Letter::where('slug', Letter::FOOTER_TEMPLATE)->firstOrFail()->getTranslation('body', $this->user->preferredLocale());
        $this->subject = $letter->getTranslation('subject', $this->user->preferredLocale());
        $this->body = $this->replaceVariables($letter->getTranslation('body', $this->user->preferredLocale()) . $footer);
//        dd($this->body);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: $this->subject,
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.template',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }

    private function replaceVariables($text): string
    {
        $vars = [
            '{order.id}'    => $this->order->invoice->number,
            '{order.date}'    => $this->order->paid_at,
            '{order.items}'    => view('emails.partials.order-items', ['items' => $this->order->items_list, 'order' => $this->order])->render(),
            '{order.address.billing}'    => $this->order->billing_address,
            '{order.address.shipping}'    => $this->order->shipping_address,
            '{user.firstname}'  => $this->user->firstname,
            '{user.name}'  => $this->user->name,
            '{user.email}'  => $this->user->email,
            '{app.url}'     => route('home'),
            '{app.profile}'    => route('profile.home'),
            '{app.register}'    => route('register'),
        ];
        $text = str_replace(array_keys($vars), $vars, $text);
        return $text;
    }
}
