<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblCustomers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_Customers', function (Blueprint $table) {
            $table->id();
            $table->string('Name');
            $table->string('Phone')->nullable()->change();;
            $table->string('Company');
            $table->string('Email');
            $table->string('Subject');
            $table->string('ProblemDescription');
            $table->dateTime('CallbackDateTime', $precision = 0)->nullable()->change();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
