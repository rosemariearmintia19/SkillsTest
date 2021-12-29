<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Product;

class OrderController extends Controller
{
    public function OrderProduct(Request $request){

        $GetStock = Product::select('stock')->where('ProductId',$request->ProductId)->first();
        
        if($GetStock->stock == 0){
            return response()->json(['message'=>'Failed to order this product due to unavailability of the stock'],400);  
        }else{
            $Order = new Order();
            $Order->ProductId = $request->ProductId;
            $Order->Qty = $request->Qty;
            $Order->OrderBy = $request->OrderBy;
            $Order->save();
    
            $NewStock = $GetStock->stock - $request->Qty;
    
            Product::where('ProductId',$request->ProductId)->update(["stock" => $NewStock]);

            return response()->json(['message'=>'You have successfully ordered this product.'],201); 
        }
        
    }
}
