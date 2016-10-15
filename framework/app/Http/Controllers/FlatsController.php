<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Flats;
use App\Files;
use File;
use Image;

class FlatsController extends Controller
{
    protected $rules = [
        'lot' => 'required|unique:flats,lot',
        'type' => 'required',
        'floor' => 'required|in:1,2,3',
        'area' => 'required',
        'price_for_meter' => 'required',
        'price' => 'required',
        'status' => 'required|in:свободно,забронировано,продано',
        'pdf' => 'mimes:pdf',
    ];


    public function __construct()
    {
        $this->middleware('auth');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $flats = Flats::all();
        $flors = [];
        foreach ($flats as $flat) {
            $flors[$flat->floor][] = $flat;
        }
        ksort($flors);
        return view('flats.index', ['flors' => $flors]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('flats.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        foreach ($request->file('photo') as $k => $v) {
            $this->rules['photo.' . $k] = 'image';
        }
        
        $this->validate($request, $this->rules);
        
        $flat = Flats::create($request->all());
        
        if ($request->file('pdf')) {
            $this->savePdf($flat, $request->file('pdf'));
        }
        $files = [];
        if ($request->file('photo')) {
            foreach ($request->file('photo') as $k => $photo) {
                if ($photo) {
                    $files[] = $this->savePhoto($photo, $k);
                }
            }
        }
        
        $flat->files()->saveMany($files);
        
        return redirect('flats');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $flat = Flats::findOrFail($id);
        $pdf = Flats::FILES . '/' . $flat->getPdfFileName();
        $data = [
            'flat' => $flat,
            'imagesFolder' => Flats::IMAGES,
        ];
        
        if (file_exists($pdf)) {
            $data['pdf'] = $pdf;
        }
        if ($flat->files) {
            foreach ($flat->files as $image) {
                $data['images'][$image['number']] = $image->hash;
            }
        }
        
        return view('flats.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        foreach ($request->file('photo') as $k => $v) {
            $this->rules['photo.' . $k] = 'image';
        }
        
        $this->rules['lot'] = 'required|unique:flats,lot,' . $id;
        $this->validate($request, $this->rules);
        
        $flat = $flatOld = Flats::find($id);
        $flat->update($request->all());
        
        if ($request->file('pdf')) {
            if ($flatOld->pdf) {
                $pdf = Flats::FILES . '/' . $flat->getPdfFileName();
                if (file_exists($pdf)) {
                    unlink($pdf);
                }
            }
            $this->savePdf($flat, $request->file('pdf'));
        }
        $files = [];
        
        if ($request->file('photo')) {
            foreach ($request->file('photo') as $k => $photo) {
                if ($photo) {
                    $fileOld = $flatOld->files()->where('number', $k)->first();
                    if ($fileOld) {
                        $this->deleteImage($fileOld);
                    }
                    $files[] = $this->savePhoto($photo, $k);
                }
            }
        }
        $flat->files()->saveMany($files);
        
        return redirect('flats');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $flat = Flats::find($id);
        foreach ($flat->files as $file) {
            $this->deleteImage($file);
        }
        $pdf = Flats::FILES . '/' . $flat->getPdfFileName();
        
        if (file_exists($pdf)) {
            unlink($pdf);
        }
        
        $flat->delete();
        
        return response([]);
    }
    
    public function destroyImage(Request $request, $id, Files $file)
    {
        $file = $file->where([['flats_id', $id], ['number', $request->get('image')]])->first();
        $this->deleteImage($file);
        $file->delete();
        
        return response([]);
    }
    
    protected function savePdf($flat, $pdf)
    {
        $fileName = $flat->getPdfFileName();
        $pdf->move(
            Flats::FILES, $fileName
        );
    }
    
    protected function savePhoto($photo, $number)
    {
        $hash = md5($photo->getClientOriginalName()) . '.' . $photo->getClientOriginalExtension();
        $file = app(Files::class, [[
            'number' => $number,
            'name' => $photo->getClientOriginalName(),
            'type' => $photo->getClientMimeType(),
            'hash' => $hash,
        ]]);
        $photo->move(
            Flats::IMAGES, $hash
        );
        
        return $file;
    }
    
    protected function deleteImage(Files $file)
    {
        if (file_exists(Flats::IMAGES . '/' . $file->hash)) {
            unlink(Flats::IMAGES . '/' . $file->hash);
        }
        $file->delete();
    }
}
