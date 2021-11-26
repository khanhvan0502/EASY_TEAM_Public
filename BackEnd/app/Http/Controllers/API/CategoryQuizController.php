<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CategoryQuiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryQuizController extends Controller
{
    public function index()
    {
        $categoryquiz = CategoryQuiz::all();
        return response()->json([
            'status' => 200,
            'category' => $categoryquiz,
        ]);
    }

    public function edit($id)
    {
        $categoryquiz = CategoryQuiz::find($id);
        if ($categoryquiz) {
            return response()->json([
                'status' => 200,
                'category' => $categoryquiz,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy ID danh mục',
            ]);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'description' => 'required|max:191',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        } else {
            $categoryquiz = new CategoryQuiz;
            $categoryquiz->name = $request->input('name');
            $categoryquiz->description = $request->input('description');
            $categoryquiz->status = $request->input('status') == true ? '1' : '0';
            $categoryquiz->save();
            return response()->json([
                'status' => 200,
                'message' => 'Thêm danh mục thành công',
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'description' => 'required|max:191',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {
            $categoryquiz = CategoryQuiz::find($id);
            if ($categoryquiz) {
                $categoryquiz->name = $request->input('name');
                $categoryquiz->description = $request->input('description');
                $categoryquiz->status = $request->input('status') == true ? '1' : '0';
                $categoryquiz->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Cập nhật danh mục thành công',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Không tìm thấy ID danh mục',
                ]);
            }
        }
    }

    public function destroy($id)
    {
        $categoryquiz = CategoryQuiz::find($id);
        if ($categoryquiz) {
            $categoryquiz->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Xóa danh mục thành công',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy ID danh mục',
            ]);
        }
    }
}
