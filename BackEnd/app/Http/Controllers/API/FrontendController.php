<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CategoryQuiz;
use App\Models\Item;

class FrontendController extends Controller
{
    public function category()
    {
        $category = CategoryQuiz::where('status', '0')->get();
        return response()->json([
            'status' => 200,
            'category' => $category,
        ]);
    }

    public function item($slug)
    {
        $category = CategoryQuiz::where('slug', $slug)->where('status', '0')->first();
        if ($category) {
            $item = Item::where('category_id', $category->id)->where('status', '0')->get();
            if ($item) {
                return response()->json([
                    'status' => 200,
                    'item_data' => [
                        'item' => $item,
                        'category' => $category,
                    ],
                ]);
            } else {
                return response()->json([
                    'status' => 400,
                    'message' => 'No Item Avaiable',
                ]);
            }
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such Category Found',
            ]);
        }
    }
}
