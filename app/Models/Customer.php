<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = "tbl_Customers";

    protected $fillable = ['Name','Phone','Company','Email','Subject','ProblemDescription','CallbackDateTime'];
}
