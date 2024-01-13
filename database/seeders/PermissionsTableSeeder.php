<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'country_create',
            ],
            [
                'id'    => 18,
                'title' => 'country_edit',
            ],
            [
                'id'    => 19,
                'title' => 'country_show',
            ],
            [
                'id'    => 20,
                'title' => 'country_delete',
            ],
            [
                'id'    => 21,
                'title' => 'country_access',
            ],
            [
                'id'    => 22,
                'title' => 'brand_create',
            ],
            [
                'id'    => 23,
                'title' => 'brand_edit',
            ],
            [
                'id'    => 24,
                'title' => 'brand_show',
            ],
            [
                'id'    => 25,
                'title' => 'brand_delete',
            ],
            [
                'id'    => 26,
                'title' => 'brand_access',
            ],
            [
                'id'    => 27,
                'title' => 'address_create',
            ],
            [
                'id'    => 28,
                'title' => 'address_edit',
            ],
            [
                'id'    => 29,
                'title' => 'address_delete',
            ],
            [
                'id'    => 30,
                'title' => 'address_access',
            ],
            [
                'id'    => 31,
                'title' => 'setting_access',
            ],
            [
                'id'    => 32,
                'title' => 'language_create',
            ],
            [
                'id'    => 33,
                'title' => 'language_edit',
            ],
            [
                'id'    => 34,
                'title' => 'language_show',
            ],
            [
                'id'    => 35,
                'title' => 'language_delete',
            ],
            [
                'id'    => 36,
                'title' => 'language_access',
            ],
            [
                'id'    => 37,
                'title' => 'product_management_access',
            ],
            [
                'id'    => 38,
                'title' => 'content_management_access',
            ],
            [
                'id'    => 39,
                'title' => 'tag_create',
            ],
            [
                'id'    => 40,
                'title' => 'tag_edit',
            ],
            [
                'id'    => 41,
                'title' => 'tag_show',
            ],
            [
                'id'    => 42,
                'title' => 'tag_delete',
            ],
            [
                'id'    => 43,
                'title' => 'tag_access',
            ],
            [
                'id'    => 44,
                'title' => 'category_create',
            ],
            [
                'id'    => 45,
                'title' => 'category_edit',
            ],
            [
                'id'    => 46,
                'title' => 'category_show',
            ],
            [
                'id'    => 47,
                'title' => 'category_delete',
            ],
            [
                'id'    => 48,
                'title' => 'category_access',
            ],
            [
                'id'    => 49,
                'title' => 'page_create',
            ],
            [
                'id'    => 50,
                'title' => 'page_edit',
            ],
            [
                'id'    => 51,
                'title' => 'page_show',
            ],
            [
                'id'    => 52,
                'title' => 'page_delete',
            ],
            [
                'id'    => 53,
                'title' => 'page_access',
            ],
            [
                'id'    => 54,
                'title' => 'product_create',
            ],
            [
                'id'    => 55,
                'title' => 'product_edit',
            ],
            [
                'id'    => 56,
                'title' => 'product_show',
            ],
            [
                'id'    => 57,
                'title' => 'product_delete',
            ],
            [
                'id'    => 58,
                'title' => 'product_access',
            ],
            [
                'id'    => 59,
                'title' => 'currency_create',
            ],
            [
                'id'    => 60,
                'title' => 'currency_edit',
            ],
            [
                'id'    => 61,
                'title' => 'currency_show',
            ],
            [
                'id'    => 62,
                'title' => 'currency_delete',
            ],
            [
                'id'    => 63,
                'title' => 'currency_access',
            ],
            [
                'id'    => 64,
                'title' => 'order_edit',
            ],
            [
                'id'    => 65,
                'title' => 'order_show',
            ],
            [
                'id'    => 66,
                'title' => 'order_access',
            ],
            [
                'id'    => 67,
                'title' => 'letter_create',
            ],
            [
                'id'    => 68,
                'title' => 'letter_edit',
            ],
            [
                'id'    => 69,
                'title' => 'letter_show',
            ],
            [
                'id'    => 70,
                'title' => 'letter_delete',
            ],
            [
                'id'    => 71,
                'title' => 'letter_access',
            ],
            [
                'id'    => 72,
                'title' => 'message_create',
            ],
            [
                'id'    => 73,
                'title' => 'message_edit',
            ],
            [
                'id'    => 74,
                'title' => 'message_show',
            ],
            [
                'id'    => 75,
                'title' => 'message_delete',
            ],
            [
                'id'    => 76,
                'title' => 'message_access',
            ],
            [
                'id'    => 77,
                'title' => 'block_create',
            ],
            [
                'id'    => 78,
                'title' => 'block_edit',
            ],
            [
                'id'    => 79,
                'title' => 'block_show',
            ],
            [
                'id'    => 80,
                'title' => 'block_delete',
            ],
            [
                'id'    => 81,
                'title' => 'block_access',
            ],
            [
                'id'    => 82,
                'title' => 'property_create',
            ],
            [
                'id'    => 83,
                'title' => 'property_edit',
            ],
            [
                'id'    => 84,
                'title' => 'property_show',
            ],
            [
                'id'    => 85,
                'title' => 'property_delete',
            ],
            [
                'id'    => 86,
                'title' => 'property_access',
            ],
            [
                'id'    => 87,
                'title' => 'feature_create',
            ],
            [
                'id'    => 88,
                'title' => 'feature_edit',
            ],
            [
                'id'    => 89,
                'title' => 'feature_show',
            ],
            [
                'id'    => 90,
                'title' => 'feature_delete',
            ],
            [
                'id'    => 91,
                'title' => 'feature_access',
            ],
            [
                'id'    => 92,
                'title' => 'review_create',
            ],
            [
                'id'    => 93,
                'title' => 'review_edit',
            ],
            [
                'id'    => 94,
                'title' => 'review_show',
            ],
            [
                'id'    => 95,
                'title' => 'review_delete',
            ],
            [
                'id'    => 96,
                'title' => 'review_access',
            ],
            [
                'id'    => 97,
                'title' => 'subscription_create',
            ],
            [
                'id'    => 98,
                'title' => 'subscription_edit',
            ],
            [
                'id'    => 99,
                'title' => 'subscription_show',
            ],
            [
                'id'    => 100,
                'title' => 'subscription_delete',
            ],
            [
                'id'    => 101,
                'title' => 'subscription_access',
            ],
            [
                'id'    => 102,
                'title' => 'coupon_create',
            ],
            [
                'id'    => 103,
                'title' => 'coupon_edit',
            ],
            [
                'id'    => 104,
                'title' => 'coupon_show',
            ],
            [
                'id'    => 105,
                'title' => 'coupon_delete',
            ],
            [
                'id'    => 106,
                'title' => 'coupon_access',
            ],
            [
                'id'    => 107,
                'title' => 'warehouse_create',
            ],
            [
                'id'    => 108,
                'title' => 'warehouse_edit',
            ],
            [
                'id'    => 109,
                'title' => 'warehouse_show',
            ],
            [
                'id'    => 110,
                'title' => 'warehouse_delete',
            ],
            [
                'id'    => 111,
                'title' => 'warehouse_access',
            ],
            [
                'id'    => 112,
                'title' => 'deliverer_create',
            ],
            [
                'id'    => 113,
                'title' => 'deliverer_edit',
            ],
            [
                'id'    => 114,
                'title' => 'deliverer_show',
            ],
            [
                'id'    => 115,
                'title' => 'deliverer_delete',
            ],
            [
                'id'    => 116,
                'title' => 'deliverer_access',
            ],
            [
                'id'    => 117,
                'title' => 'translation_create',
            ],
            [
                'id'    => 118,
                'title' => 'translation_edit',
            ],
            [
                'id'    => 119,
                'title' => 'translation_show',
            ],
            [
                'id'    => 120,
                'title' => 'translation_delete',
            ],
            [
                'id'    => 121,
                'title' => 'translation_access',
            ],
            [
                'id'    => 122,
                'title' => 'profile_password_edit',
            ],
        ];

        Permission::insert($permissions);
    }
}
