<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => [
                    "de" => "Haarwachs",
                    "en" => "Water wax",
                    "fr" => "Water wax",
                    "it" => "Water wax"
                ],
                'slug' => 'euphoria-water-wax',
                'sku' => '8004347133362',
                'active' => 1,
                'in_stock' => 1,
                'trending' => 1,
                'main' => 1,
                'rating' => 4,
                'prices' => [
                    "ch" => "70",
                    "de" => "60",
                    "it" => "50"
                ],
                'description' => [
                    "de" => "<p>Wachs auf Wasserbasis zum Modellieren und Definieren. Fettet nicht und unterstützt entschiedenes Styling mit festem Halt. Lässt sich gut nachmodellieren und hält lange.&nbsp;<br>Anwendung: Eine kleine Menge des Produkts mit den Händen bearbeiten und auf dem Haar verteilen. Mit den Händen nach Wunsch stylen. Um das Produkt zu reaktivieren, die Haare mit feuchten Händen nachmodellieren.</p>",
                    "en" => "<p>High definition water-based modeling wax. Non-greasy, it helps to create decisive looks with a strong, easily remodeled and long-lasting hold.</p><p><strong>How to use:</strong> take a small amount of product, work it with your hands, distribute on damp or dry hair to obtain the desired look.&nbsp;</p><p><strong>To re-style:</strong> simply wet your hands and go through the hair to reactivate the wax.</p>",
                    "fr" => "<p>High definition water-based modeling wax. Non-greasy, it helps to create decisive looks with a strong, easily remodeled and long-lasting hold.</p><p><strong>How to use:</strong> take a small amount of product, work it with your hands, distribute on damp or dry hair to obtain the desired look.&nbsp;</p><p><strong>To re-style:</strong> simply wet your hands and go through the hair to reactivate the wax.</p>",
                    "it" => "<p>Cera a base d’acqua modellante ad alta definizione. Non grassa, aiuta a creare look decisi con un fissaggio forte, facilmente rimodellabile e di lunga durata.&nbsp;<br>Modo d’uso: prelevare una piccola quantità di prodotto, lavorarla con le mani, distribuire sui capelli umidi o asciutti per ottenere il look desiderato. È sufficiente bagnarsi le mani con poca&nbsp;acqua e passarle sui capelli per riattivare la cera e ricreare il look.</p>"
                ],
                'brand_id' => 1,
                'data' => ["format" => "100 ml 3.38 fl.oz"],
                'warehouse_id' => 1,
            ],
            [
                'name' => [
                    "de" => "Mattwachs",
                    "en" => "Matt wax",
                    "fr" => "Matt wax",
                    "it" => "Matt wax"
                ],
                'slug' => 'euphoria-matt-wax',
                'sku' => '8004347133379',
                'active' => 1,
                'in_stock' => 1,
                'trending' => 1,
                'main' => 0,
                'rating' => 5,
                'prices' => [
                    "ch" => "55",
                    "de" => "50",
                    "it" => "45"
                ],
                'description' => [
                    "de" => "<p>Seine reichhaltige Formel aus Kaolin (Porzellanerde) sorgt für eine matte Wirkung und einen strukturierten Stil für einen authentischen Look.&nbsp;<br>Anwendung: Eine kleine Menge des Produkts mit den Händen wärmen und bearbeiten und auf dem Haar verteilen und einarbeiten, um das Haar in die gewünschte Form zu bringen.&nbsp;</p>",
                    "en" => "<p>Its formula rich in Kaolin, the clay of porcelain, gives a matt effect and it is ideal for a structured style and incredible “experienced” look.<br>How to use: take a moderate amount of product, work it between your hands to warm it and massage into dry hair and style.</p>",
                    "fr" => null,
                    "it" => "<p>La sua formula ricca di caolino, l’argilla della porcellana, dona un effetto opaco e permette di creare uno stile strutturato ed incredibilmente “vissuto”.&nbsp;<br>Modo d’uso: prelevare una piccola quantità di prodotto, lavorarla con le mani per scaldarla, quindi massaggiare sui capelli dando la forma desiderata.&nbsp;</p>"
                ],
                'brand_id' => 1,
                'data' => ["format" => "100 ml 3.38 fl.oz"],
                'warehouse_id' => 1,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
