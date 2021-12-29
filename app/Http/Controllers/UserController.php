<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function Register(Request $request){
        $user = User::select('email')->first();
        if($user->email == $request->email){
            return response()->json(['message'=>'Email already taken!'],400);
        }else{
            $User = new User();
            $User->name = $request->name;
            $User->email = $request->email;
            $User->password = Hash::make($request->password);
            $User->role = 0;
            $User->save();

            return response()->json(['message'=>'User successfully registered!'],201);
        }   
        
    }
}
