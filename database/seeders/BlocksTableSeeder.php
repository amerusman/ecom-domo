<?php

namespace Database\Seeders;

use App\Models\Block;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlocksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blocks = [
            [
                'slug'  => 'copyright',
                'name'  => 'Copyright',
                'body'  => [
                    "de"    => "ITALYSKINCARE.COM. ALLE RECHTE VORBEHALTEN",
                    "en"    => "ITALYSKINCARE.COM. ALL RIGHT RESERVED",
                    "fr"    => "ITALYSKINCARE.COM. TOUS DROITS RÉSERVÉS",
                    "it"    => "ITALYSKINCARE.COM. TUTTI I DIRITTI RISERVATI"
                ]
            ],
            [
                'slug'  => 'bottom-subscribe',
                'name'  => 'Bottom subscribe message',
                'body'  => [
                    "de"    => "Abonnieren Sie unseren Newsletter und erhalten Sie <br><span>10% Rabatt</span> auf Ihre erste Bestellung",
                    "en"    => "Subscribe to our newsletter and get a <br><span>10% discount</span> on your first order",
                    "fr"    => "Inscrivez-vous à notre newsletter et bénéficiez d\'une réduction de <br><span>10 % sur</span> votre première commande.",
                    "it"    => "Iscrivetevi alla nostra newsletter e otterrete uno sconto del <br><span>10% sul</span> vostro primo ordine."
                ]
            ],
            [
                'slug'  => 'product-on-home-title',
                'name'  => 'product on home page title',
                'body'  => [
                    "de"    => "Styling mit<br/><span>festem Halt</span>",
                    "en"    => "decisive <br/><span> looks</span>",
                    "fr"    => "decisive <br/><span> looks</span>",
                    "it"    => "look<br/><span>decisi</span>"
                ]
            ],
        ];

        foreach ($blocks as $block) {
            Block::create($block);
        }
    }
}
