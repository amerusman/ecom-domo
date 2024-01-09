<?php

namespace App\Mail;

use App\Models\Letter as LetterModel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LetterGuest extends Mailable
{
    use Queueable, SerializesModels;

    public string $body;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(LetterModel $letter, string $locale = 'en')
    {
        $footer = LetterModel::where('slug', LetterModel::FOOTER_TEMPLATE)->firstOrFail()->getTranslation('body', $locale);

        $this->subject = $letter->getTranslation('subject', $locale);
        $this->body = $this->replaceVariables($letter->getTranslation('body', $locale) . $footer);
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
            '{user.firstname}'  => '',
            '{user.name}'  => '',
            '{app.url}'     => route('home'),
            '{app.profile}'    => route('profile.home'),
            '{app.register}'    => route('register'),
        ];
        $text = str_replace(array_keys($vars), $vars, $text);
        return $text;
    }
}
