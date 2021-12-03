<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuizController extends Controller
{
    public function index()
    {
        $quizs = Quiz::all();
        return response()->json([
            'status' => 200,
            'quizs' => $quizs,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'item_id' => 'required|max:191',
            'question' => 'required|max:255',
            'ans_a' => 'required|max:255',
            'ans_b' => 'required|max:255',
            'ans_c' => 'required|max:255',
            'ans_d' => 'required|max:255',
            'ans_correct' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {
            $quiz = new Quiz;
            $quiz->item_id = $request->input('item_id');
            $quiz->question = $request->input('question');
            $quiz->ans_a = $request->input('ans_a');
            $quiz->ans_b = $request->input('ans_b');
            $quiz->ans_c = $request->input('ans_c');
            $quiz->ans_d = $request->input('ans_d');
            $quiz->ans_correct = $request->input('ans_correct');
            $quiz->description = $request->input('description');
            $quiz->status = $request->input('status') == true ? '1' : '0';
            $quiz->save();
            return response()->json([
                'status' => 200,
                'message' => 'Quiz Added Successfully',
            ]);
        }
    }

    public function edit($id)
    {
        $quiz = Quiz::find($id);
        if ($quiz) {
            return response()->json([
                'status' => 200,
                'quiz' => $quiz,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Quiz Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'item_id' => 'required|max:191',
            'question' => 'required|max:255',
            'ans_a' => 'required|max:255',
            'ans_b' => 'required|max:255',
            'ans_c' => 'required|max:255',
            'ans_d' => 'required|max:255',
            'ans_correct' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {
            $quiz = Quiz::find($id);
            if ($quiz) {
                $quiz->item_id = $request->input('item_id');
                $quiz->question = $request->input('question');
                $quiz->ans_a = $request->input('ans_a');
                $quiz->ans_b = $request->input('ans_b');
                $quiz->ans_c = $request->input('ans_c');
                $quiz->ans_d = $request->input('ans_d');
                $quiz->ans_correct = $request->input('ans_correct');
                $quiz->description = $request->input('description');
                $quiz->status = $request->input('status') == true ? '1' : '0';
                $quiz->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Quiz Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Quiz Not Found',
                ]);
            }
        }
    }

    public function destroy($id)
    {
        $quiz = Quiz::find($id);
        if ($quiz) {
            $quiz->delete();
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
