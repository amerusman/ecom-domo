<?php


namespace App\Services;


use App\Models\Product;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class FavoritesService
{
    const DEFAULT_INSTANCE = 'favorites';

    protected $session;
    protected $instance;

    /**
     * Constructs a new favorites object.
     *
     */
    public function __construct()
    {
        $this->session = session();
    }

    public function add(int $id)
    {
        if( Auth::check() ) {
            $user = Auth::user();
            $user->favorites()->attach($id);
        }
        else {
            $content = $this->getContent();
            $content[$id] = $id;
            $this->session->put(self::DEFAULT_INSTANCE, $content);
        }
    }

    /**
     * Removes an item from the favorites.
     *
     * @param int $id
     * @return void
     */
    public function remove(int $id): void
    {
        if( Auth::check() ) {
            $user = Auth::user();
            $user->favorites()->detach($id);
        }
        else {
            $content = $this->getContent();
            if (isset($content[$id])) {
                unset($content[$id]);
                $this->session->put(self::DEFAULT_INSTANCE, $content);
            }
        }
    }

    /**
     * Returns Products
     *
     * @return Collection
     */
    public function products(): Collection
    {
        if( Auth::check() ) {
            $user = Auth::user();
            $products = $user->favorites;
        }
        else {
            $content = $this->getContent();
            $products = Product::whereIn('id', $content)->active()->get();
        }
        return $products;
    }

    /**
     * Returns the content of the cart.
     *
     * @return Illuminate\Support\Collection
     */
    protected function getContent(): array
    {
        return $this->session->has(self::DEFAULT_INSTANCE) ? $this->session->get(self::DEFAULT_INSTANCE) : [];
    }
}
