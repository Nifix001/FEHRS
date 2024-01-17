<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function show(){
        $user = User::latest()->with('role:id,name')->get();
        return response()->json(["data"=>$user]);
    }


    public function update(Request $request, $id){
        $user = User::findOrFail($id);
        $user->role_id= $request->role_id;
        $user->update();
    }
}
