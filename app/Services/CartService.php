<?php


namespace App\Services;


use App\Events\checkOutEvent;
use App\Helpers\SiteHelper;
use App\Models\Coupon;
use App\Models\Product;
use Illuminate\Support\Collection;

class CartService
{
    const DEFAULT_INSTANCE = 'shopping-cart';

    protected $session;
    protected $instance;

    protected float $total = 0;
    protected float $subtotal = 0;
    protected float $vat = 0;
    protected float $discount = 0;
    protected float $discountCoupon = 0;

    /**
     * Constructs a new cart object.
     *
     * @param Illuminate\Session\SessionManager $session
     */
    public function __construct()
    {
        $this->session = session();
    }

    /**
     * Adds a new item to the cart.
     *
     * @param int|array $id
     * @param int $quantity
     * @param array $options
     * @return void
     */
    public function add($id, int $quantity = 1, array $options = []): void
    {

        if (is_array($id)) {
            $products = Product::find($id);
        } else {
            $products = [Product::findOrFail($id)];
        }
        event(new checkOutEvent($products,'add_to_cart'));
        $content = $this->getContent();
        foreach ($products as $product) {
            if ($product->active && $product->in_stock) {
                $cartItem = $this->createCartItem($product->name, $product->price, $quantity, $options);

                if ($content->has($product->id)) {
                    $cartItem->put('quantity', $content->get($product->id)->get('quantity') + $quantity);
                }

                $content->put($product->id, $cartItem);
            }
        }

        $this->putContent($content);
    }

    /**
     * Returns the content of the cart.
     *
     * @return Illuminate\Support\Collection
     */
    protected function getContent(): Collection
    {
        return $this->get()['content'];
    }

    protected function get(): array
    {
        return $this->session->has(self::DEFAULT_INSTANCE) ? $this->session->get(self::DEFAULT_INSTANCE) : [
            'content' => collect([]),
            'order_id' => null,
            'coupon' => null,
        ];
    }

    /**
     * Creates a new cart item from given inputs.
     *
     * @param string $name
     * @param string $price
     * @param string $quantity
     * @param array $options
     * @return Illuminate\Support\Collection
     */
    protected function createCartItem(string $name, string $price, string $quantity, array $options): Collection
    {
        $price = floatval($price);
        $quantity = intval($quantity);

        if ($quantity < 1) {
            $quantity = 1;
        }

        return collect([
            'name' => $name,
            'price' => $price,
            'quantity' => $quantity,
            'options' => $options,
        ]);
    }

    protected function put(array $data): void
    {
        $session = $this->get();
        $data = array_merge($session, $data);
        $this->session->put(self::DEFAULT_INSTANCE, $data);
    }

    protected function putContent(Collection $content): void
    {
        $data = [
            'content' => $content
        ];
        $this->put($data);
    }

    /**
     * Updates the quantity of a cart item.
     *
     * @param string $id
     * @param string $action
     * @return void
     */
    public function update(string $id, string $action): void
    {
        $content = $this->getContent();

        if ($content->has($id)) {
            $cartItem = $content->get($id);

            switch ($action) {
                case 'plus':
                    $cartItem->put('quantity', $content->get($id)->get('quantity') + 1);
                    break;
                case 'minus':
                    $updatedQuantity = $content->get($id)->get('quantity') - 1;

                    if ($updatedQuantity < 1) {
                        $updatedQuantity = 1;
                    }

                    $cartItem->put('quantity', $updatedQuantity);
                    break;
            }

            $content->put($id, $cartItem);

            $this->putContent($content);
        }
    }

    /**
     * Removes an item from the cart.
     *
     * @param string $id
     * @return void
     */
    public function remove(string $id): void
    {
        $content = $this->getContent();

        if ($content->has($id)) {
            $this->putContent($content->except($id));
        }
    }

    public function addCoupon(Coupon $coupon)
    {
        if ($coupon && $coupon->discount) {
            $this->put([
                'coupon' => [
                    'id' => $coupon->id,
                    'discount' => $coupon->discount,
                ]
            ]);
        }
    }

    public function changeCountry(): void
    {
        $content = $this->getContent();
        $ids = $content->keys()->push(0)->all();
        $products = Product::whereIn('id', $ids)->get()->keyBy('id');

        foreach ($content as $id => $cartItem) {
            $cartItem->put('price', $products[$id]->price);
            $content->put($id, $cartItem);
        }

        $this->putContent($content);
    }

    /**
     * Clears the cart.
     *
     * @return void
     */
    public function clear(): void
    {
        $this->session->forget(self::DEFAULT_INSTANCE);
    }

    /**
     * Returns the content of the cart.
     *
     * @return Illuminate\Support\Collection
     */
    public function content(): Collection
    {
        return $this->getContent();
    }

    /**
     * Returns formatted total price of the items in the cart.
     *
     * @return string
     */
    public function total(): string
    {
        return number_format($this->totalValue(), 2);
    }

    /**
     * Returns total price of the items in the cart.
     *
     * @return float
     */
    public function totalValue(): float
    {
        if ($this->total) {
            return $this->total;
        }

        $total = $this->subtotal() - $this->discountCoupon() + $this->deliveryCost();

        if (empty($total)) {
            $total = 0.0;
        }
        $this->total = $total;

        return $this->total;
    }

    /**
     * Returns formatted total price of the items in the cart.
     *
     * @return string
     */
    public function subtotal(): float
    {
        if ($this->subtotal) {
            return $this->subtotal;
        }
        $content = $this->getContent();

        $total = $content->reduce(function ($total, $item) {
            return $total += $item->get('price') * $item->get('quantity');
        });

        if (empty($total)) {
            $total = 0.0;
        }
        $this->subtotal = $total;

        return $this->subtotal;
    }

    /**
     * Calculate discount by coupon
     * @return float
     */
    public function discountCoupon(): float
    {
        if ($this->discountCoupon) {
            return $this->discountCoupon;
        }
        $result = 0;

        $coupon = $this->get()['coupon'];
        if ($coupon) {
            $result = $this->subtotal() * ($coupon['discount'] / 100);
        }

        $this->discountCoupon = $result ?: 0;

        return $this->discountCoupon;
    }

    public function deliveryCost(): float
    {
        $deliveryCost = 5.00;
        $freeDeliveryLimit = 30;
        $result = ($this->subtotal() >= $freeDeliveryLimit) ? 0 : $deliveryCost;
        return $result;
    }

    /**
     * Returns total price without VAT and taxes
     *
     * @return string
     */
    public function untaxedSubtotal(): string
    {
        $result = $this->subtotal() - $this->vatValue() + $this->discount();
        return number_format($result, 2);
    }

    /**
     * Returns vat value of the items in the cart.
     *
     * @return float
     */
    public function vatValue(): float
    {
        if (!$this->vat) {
            $total = $this->totalValue();
            $vatPerc = SiteHelper::country()->vat;
            $this->vat = round($total - $total / (1 + $vatPerc / 100), 2);
        }

        return $this->vat;
    }

    public function discount(): float
    {
        if ($this->discount) {
            return $this->discount;
        }
        $products = $this->products();

        $result = $products->reduce(function ($result, $product) {
            return $result += $product->quantity * ($product->regular_price - $product->price);
        });

        $this->discount = $result ?: 0;

        return $this->discount;
    }

    /**
     * Returns Products
     *
     * @return Collection
     */
    public function products(): Collection
    {
        $content = $this->getContent();
        $ids = $content->keys()->push(0)->all();
        $products = Product::whereIn('id', $ids)->get();

        foreach ($products as $key => $product) {
            $product->setAttribute('r_price', $product->regular_price);
            $product->setAttribute('quantity', $content[$product->id]['quantity']);
            $product->setAttribute('amount', number_format($product->price * $product->quantity, 2));
            $products->put($key, $product);
        }

        return $products;
    }

    /**
     * Returns vat value of the items in the cart.
     *
     * @return string
     */
    public function vat(): string
    {
        return number_format($this->vatValue(), 2);
    }

    /**
     * Returns quantity of the items in the cart.
     *
     * @return int
     */
    public function quantity(): int
    {
        $content = $this->getContent();

        $result = $content->reduce(function ($result, $item) {
            return $result += $item->get('quantity');
        });

        return intval($result);
    }

    public function getCoupon()
    {
        $coupon = $this->get()['coupon'];
        if ($coupon) {
            return Coupon::find($coupon['id']);
        }
    }

    public function orderId($orderId = null)
    {
        if ($orderId) {
            $this->put(['order_id' => $orderId]);
        }
        return $this->get()['order_id'];
    }
}
