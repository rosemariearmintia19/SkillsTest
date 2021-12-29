<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $items = [            
                ['name' => '30ml Alcoholder','stock' => '30'],
                ['name' => '50ml Alcoholder','stock' => '30'], 
                ['name' => '60ml Alcoholder','stock' => '30']
        ];
        foreach ($items as $item) {
            Product::create($item);
        }
        
    }
}
