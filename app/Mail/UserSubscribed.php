<?php

namespace App\Mail;

use App\Models\Letter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UserSubscribed extends Mailable
{
    use Queueable, SerializesModels;

    private string $letter = 'user-subscribed';

    public string $body;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        $letter = Letter::where('slug', $this->letter)->firstOrFail();

        $footer = Letter::where('slug', Letter::FOOTER_TEMPLATE)->firstOrFail()->body;

        $this->subject = $letter->subject;
        $this->body = $this->replaceVariables($letter->body . $footer);
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
            '{app.url}'     => route('home'),
            '{app.profile}'    => route('profile.home'),
            '{app.register}'    => route('register'),
        ];
        $text = str_replace(array_keys($vars), $vars, $text);
        return $text;
    }
}
