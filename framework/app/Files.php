<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{
    protected $fillable = [
        'number', 'name', 'type', 'hash',
    ];
    
    public function flats()
    {
        return $this->belongsTo('App\Flats');
    }
}
