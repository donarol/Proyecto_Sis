<?php

namespace App\Http\DAO;
use App\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class AuthDAO{
    public function crear(User $user){
       
        $user->save();
       /* return response()->json([
            'message' => 'Successfully created user!'], 201);*/
        return response()->json($user,200);
    }
    public function login($user){
        $client = DB::table('oauth_clients')->where('id',rand(1,2))->first(); 
        $clientSecret = $client->secret;
        $tokenResult = $user->createToken($clientSecret);
        $token = $tokenResult->token;
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type'   => 'Bearer',
            'expires_at'   => Carbon::parse(
                $tokenResult->token->expires_at)
                    ->toDateTimeString(),
            'message'      => 'Token exitoso'
        ]);
    }
}