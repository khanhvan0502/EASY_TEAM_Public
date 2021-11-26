<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $status     =   200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //show all users
        $user = User::all();
        // check condition if count of users is greater than 0
        if (count($user) > 0) {
            // return json response
            return response()->json($user, 200);
        } else {
            // return json response
            return response()->json(['message' => 'No users found'], 404);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        //update user
        $user = User::find($id);
        if (!is_null($user)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $user]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no user found"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user  =  User::find($id);
        if (!is_null($user)) {
            $delete_status      =       User::where("id", $id)->delete();
            if ($delete_status == 1) {
                return response()->json(["status" => $this->status, "success" => true, "message" => "user record deleted successfully"]);
            } else {
                return response()->json(["status" => "failed", "message" => "failed to delete, please try again"]);
            }
        } else {
            return response()->json(["status" => "failed", "message" => "Whoops! no user found with this id"]);
        }
    }
}
