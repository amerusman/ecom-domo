<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            'Terms & Conditions',
            'Privacy Policy',
            'Delivery',
            'Payment',
            'Exchange and return',
            'Terms of sale'
        ];
        $body = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in justo non odio vestibulum laoreet sed id augue. Morbi tempor in quam nec tempus. Phasellus vitae nisl ac dolor volutpat auctor condimentum sed ligula. Phasellus convallis turpis et ipsum vulputate sagittis. Duis in ante id purus fermentum laoreet. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae mollis diam. Nullam dui elit, vehicula id ultricies sed, commodo et sapien. Donec in ligula leo. Maecenas posuere purus sit amet cursus congue. Donec condimentum elit vel nulla efficitur iaculis. Praesent quis mauris sit amet velit sodales condimentum. Sed magna libero, aliquet quis hendrerit ut, eleifend id lectus.</p>
<p>Aliquam bibendum luctus dignissim. Aliquam eget congue nisl, quis bibendum risus. Nunc elementum lacinia ultricies. Donec maximus eros mauris, ut porta dolor tincidunt ut. Nunc at imperdiet turpis. Ut fermentum nunc a pellentesque sodales. Nam vel eros eleifend, fringilla lacus in, porttitor risus. Cras dignissim mattis eros, nec cursus urna rutrum ac. In pulvinar lacinia arcu, a fermentum turpis mollis ut. Sed sit amet tellus lectus. Nullam id venenatis dolor. Donec egestas, leo et sollicitudin varius, purus nunc ultricies est, et consectetur augue quam sed velit. Morbi risus justo, tincidunt ac risus eu, convallis rhoncus nisl. Mauris malesuada scelerisque commodo.</p>
<p>Quisque tincidunt leo et condimentum vehicula. Fusce pretium at erat at malesuada. Etiam dignissim massa at mauris commodo laoreet. Vivamus at semper diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mollis vel elit eu tempus. Duis tristique felis ut nibh fermentum, non sollicitudin sapien consectetur. Pellentesque lacus metus, bibendum nec vulputate vitae, vulputate non sem. Donec ullamcorper sem lacinia massa porta, sit amet ultrices odio rhoncus. Donec blandit lorem eget porta mollis. Phasellus dictum commodo felis vel mollis.</p>
<p>Aliquam nec arcu ultricies, imperdiet neque at, molestie tellus. Proin justo felis, vehicula commodo tempor ac, elementum non risus. Proin congue urna vel blandit aliquet. Curabitur laoreet, eros ac convallis rhoncus, metus justo cursus arcu, sit amet sagittis lorem orci eleifend ante. Vivamus bibendum, dolor ut consectetur sollicitudin, elit augue pulvinar ante, in vestibulum arcu lacus a urna. Cras tempus, est a tempor vulputate, risus neque aliquet mauris, sit amet tristique eros nulla id leo. Aliquam erat volutpat. Vivamus eu ultrices massa. Vivamus varius vestibulum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent interdum odio quis quam efficitur scelerisque. Pellentesque hendrerit, augue at efficitur porttitor, nulla massa lobortis mauris, a commodo odio orci nec nisi. Donec condimentum, justo pellentesque sagittis varius, erat purus tempus massa, vel vehicula enim dui eget diam.</p>
<p>Phasellus malesuada, magna in viverra tempus, leo urna gravida ante, id fermentum odio ante vitae eros. Phasellus in felis finibus, tincidunt nulla non, finibus leo. Quisque sed nisi interdum, mattis dui et, tincidunt turpis. Nam condimentum aliquam euismod. Suspendisse potenti. Pellentesque orci nisl, molestie sit amet turpis vitae, malesuada blandit nulla. Suspendisse scelerisque massa sed tellus dapibus, ac venenatis enim interdum. Aenean sit amet accumsan nisl. Mauris urna ligula, pulvinar sit amet mattis tempus, malesuada vitae libero. Nullam eget lectus eget erat ornare venenatis.</p>';
        foreach ($pages as $page)
        {
            $data = [
                'name'  => $page,
                'slug'  => Str::slug($page),
                'title' => $page,
                'body'  => "<p>$page</p><br><br>" . $body

            ];
            Page::create($data);
        }
    }
}
