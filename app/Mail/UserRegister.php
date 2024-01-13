<?php

namespace App\Mail;

use App\Models\Letter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\User;

class UserRegister extends Mailable
{
    use Queueable, SerializesModels;

    private string $letter = 'user-register';

    /**
     * The user instance.
     *
     * @var User
     */
    public User $user;

    public string $body;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
        $letter = Letter::where('slug', $this->letter)->firstOrFail();

        $footer = Letter::where('slug', Letter::FOOTER_TEMPLATE)->firstOrFail()->getTranslation('body', $user->preferredLocale());

        $this->subject = $letter->getTranslation('subject', $user->preferredLocale());
        $this->body = $this->replaceVariables($letter->getTranslation('body', $user->preferredLocale()) . $footer);
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
