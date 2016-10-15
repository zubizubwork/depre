<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Galleries;
use Image;

class GalleryController extends Controller
{
    protected $rules = [
        'type' => 'required|in:interior,exterior'
    ];


    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function interior()
    {
        return $this->showGallery('interior');
    }
    
    public function exterior()
    {
        return $this->showGallery('exterior');
    }
    
    protected function showGallery($type)
    {
        $gallery = Galleries::where('type', $type)->get();
        
        return view('gallery.index', [
            'type_text' => $type == 'exterior' ? 'Экстерьер' : 'Интерьер',
            'type' => $type,
            'galleryFolder' => Galleries::IMAGES,
            'gallery' => $gallery
        ]);
    }
    
    public function save(Request $request)
    {
        foreach ($request->file('files') as $k => $v) {
            $this->rules['files.' . $k] = 'image';
        }
        
        $this->validate($request, $this->rules);
        
        if ($request->file('files')) {
            foreach ($request->file('files') as $k => $file) {
                if ($file) {
                    $hash = md5($file->getClientOriginalName() . time()) . '.' . $file->getClientOriginalExtension();
                    Galleries::create([
                        'type' => $request->get('type'),
                        'hash' => $hash,
                    ]);
                    Image::make($file->getRealPath())->heighten(Galleries::HEIGHT)->save(Galleries::IMAGES  . 'mini_' . $hash);
                    $file->move(
                        Galleries::IMAGES, $hash
                    );
                    
                }
            }
        }
        
        return redirect('gallery/' . $request->get('type'));
    }
    
    public function destroy(Request $request, $id)
    {
        $file = Galleries::findOrFail($id);
        
        if (file_exists(Galleries::IMAGES . '/' . $file->hash)) {
            unlink(Galleries::IMAGES . '/' . $file->hash);
        }
        if (file_exists(Galleries::IMAGES . '/mini_' . $file->hash)) {
            unlink(Galleries::IMAGES . '/mini_' . $file->hash);
        }
        
        $file->delete();
        
        return response([]);
    }
}
