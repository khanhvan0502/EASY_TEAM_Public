<?php

namespace App\Models;

use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $table = 'quizs';
    protected $fillable = [
        'item_id',
        'question',
        'ans_a',
        'ans_b',
        'ans_c',
        'ans_d',
        'ans_correct',
        'description',
        'status',
    ];

    protected $with = ['items'];
    public function items()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }
}
