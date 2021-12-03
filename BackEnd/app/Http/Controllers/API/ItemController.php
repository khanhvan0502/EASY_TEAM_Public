<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::all();
        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }

    public function allitem()
    {
        $item = Item::where('status', '0')->get();
        return response()->json([
            'status' => 200,
            'item' => $item,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:191',
            'name' => 'required|max:191',
            'slug' => 'required|max:191',
            'description' => 'required|max:191',
            'time' => 'required|max:191',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {
            $item = new Item;
            $item->category_id = $request->input('category_id');
            $item->name = $request->input('name');
            $item->slug = $request->input('slug');
            $item->description = $request->input('description');
            $item->time = $request->input('time');

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/item/', $filename);
                $item->image = 'uploads/item/' . $filename;
            }

            $item->status = $request->input('status') == true ? '1' : '0';
            $item->save();
            return response()->json([
                'status' => 200,
                'message' => 'Item Added Successfully',
            ]);
        }
    }

    public function edit($id)
    {
        $item = Item::find($id);
        if ($item) {
            return response()->json([
                'status' => 200,
                'item' => $item,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Product Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:191',
            'name' => 'required|max:191',
            'slug' => 'required|max:191',
            'description' => 'required|max:191',
            'time' => 'required|max:191',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {
            $item = Item::find($id);
            if ($item) {

                $item->category_id = $request->input('category_id');
                $item->name = $request->input('name');
                $item->slug = $request->input('slug');
                $item->description = $request->input('description');
                $item->time = $request->input('time');

                if ($request->hasFile('image')) {
                    $path = $item->image;
                    if (File::exists($path)) {
                        File::delete($path);
                    }
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '.' . $extension;
                    $file->move('uploads/item/', $filename);
                    $item->image = 'uploads/item/' . $filename;
                }

                $item->status = $request->input('status');
                $item->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Item Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Item Not Found',
                ]);
            }
        }
    }

    public function destroy($id)
    {
        $item = Item::find($id);
        if ($item) {
            $item->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Xóa bộ câu hỏi thành công',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy ID bộ câu hỏi',
            ]);
        }
    }
}
