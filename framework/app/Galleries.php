<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galleries extends Model
{
    const IMAGES = 'img/gallery/';
    const HEIGHT = 150;
    
    protected $fillable = [
        'type', 'hash'
    ];
}
