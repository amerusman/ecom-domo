<?php


namespace App\Services;


class CountryService
{
    const DEFAULT_INSTANCE = 'country';

    protected $session;
    protected $instance;
    protected array $countries = [
        'de'    => 'de',
        'it'    => 'it',
        'ch'    => 'it',
        'fr'    => 'fr',
        'at'    => 'de',
        'nl'    => 'en',
        'es'    => 'en',
    ];
    public string $default = 'de';

    /**
     * Constructs a new country object.
     *
     * @param Illuminate\Session\SessionManager $session
     */
    public function __construct()
    {
        $this->session = session();
    }

    public function isCountrySelected()
    {
        return $this->session->has(self::DEFAULT_INSTANCE);
    }

    public function getCountrySelected()
    {
        $country = $this->session->get(self::DEFAULT_INSTANCE, $this->default);
        if (!isset($this->countries[$country])) {
            $country = $this->default;
        }
        return $country;
    }

    public function set(string $country): void
    {
        $this->session->put(self::DEFAULT_INSTANCE, $country);
    }
}
