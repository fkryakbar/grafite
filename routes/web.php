<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->to(route('loginPage'));
});
Route::get('/login', [AuthController::class, 'loginPage'])->name('loginPage');
