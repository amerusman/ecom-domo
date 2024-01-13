<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Block extends Component
{
    /**
     * The block id.
     *
     * @var string
     */
    public $id;

    /**
     * The block default content.
     *
     * @var string
     */
    public $default;
    /**
     * Create a new component instance.
     *
     * @param  string  $id
     * @param  string  $default
     * @return void
     */
    public function __construct($id, $default = null)
    {
        $this->id = $id;
        $this->default = $default;
    }
    public function render()
    {
        $block = \App\Models\Block::firstOrCreate(
            ['slug' => $this->id],
            [
                'name' => $this->id,
                'body' => $this->default,
            ]
        );
        $body = $block->body;
        return view('components.block', compact('body'));
    }
}
