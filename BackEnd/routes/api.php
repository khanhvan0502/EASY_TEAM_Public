<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryQuizController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function () {

    Route::get('checkingAuthenticated', function () {
        return response()->json(['message' => 'You are in', 'status' => 200], 200);
    });

    // Category
    Route::get('view-category-quiz', [CategoryQuizController::class, 'index']);
    Route::post('store-category-quiz', [CategoryQuizController::class, 'store']);
    Route::get('edit-category-quiz/{id}', [CategoryQuizController::class, 'edit']);
    Route::put('update-category-quiz/{id}', [CategoryQuizController::class, 'update']);
    Route::delete('delete-category-quiz/{id}', [CategoryQuizController::class, 'destroy']);
    
});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('logout', [AuthController::class, 'logout']);

});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
