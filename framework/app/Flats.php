<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flats extends Model
{
    const FILES = 'files/';
    const IMAGES = 'img/flats/';
    
    protected $fillable = [
        'lot', 'type', 'floor', 'area', 'price_for_meter', 'price', 'status'
    ];
    
    public function files()
    {
        return $this->hasMany('App\Files');
    }
    
    public function getPdfFileName()
    {
        return 'Lot ' . $this->lot . '.pdf';
    }
}
