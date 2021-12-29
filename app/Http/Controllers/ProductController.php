<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;


class ProductController extends Controller
{
    public function Products(){
        $ProductList = Product::all();
        return $ProductList;
    }

    public function GetProduct(Request $request){
        $Product = Product::where('ProductId',$request->ProductId)->get();
        return $Product;
    }
}
