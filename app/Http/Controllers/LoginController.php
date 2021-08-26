<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request){
        $login = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Auth::attempt($login)) {
            return response(['message'=>'Wrong username or password']);
        }
    
        $accessToken=$user->createToken($request->email)->plainTextToken;
        return response(['user'=> Auth::user(),'access_token'=>$accessToken]);
    }

}
