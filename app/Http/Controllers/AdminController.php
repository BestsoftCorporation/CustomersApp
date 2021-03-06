<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Comment;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return Customer::all();
    }

    public function addComment(Request $request)
    {
        $comments = $request->all();
        return Comment::create($comments);  
    }
}
