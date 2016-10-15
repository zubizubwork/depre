<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Flats;
use App\Galleries;
use Mail;

class FrontController extends Controller
{
    public function index()
    {
        $floors = [1 => 0, 2 => 0, 3 => 0];
        $flats = Flats::whereIn('status', ['свободно', 'забронировано'])->with('files')->get()->keyBy('lot');
        foreach ($flats as $flat) {
            $floors[$flat->floor]++;
            $pdf = Flats::FILES . $flat->getPdfFileName();
            if (file_exists($pdf)) {
                $flat->pdf = Flats::FILES . $flat->getPdfFileName();
            }
        }

        $interior = Galleries::where('type', 'interior')->pluck('hash');
        $exterior = Galleries::where('type', 'exterior')->pluck('hash');

        return view('index', [
            'floors' => $floors,
            'flats' => json_encode($flats, JSON_UNESCAPED_UNICODE),
            'interior' => $interior,
            'exterior' => $exterior,
            'galleryFolder' => Galleries::IMAGES,
        ]);
    }

    public function sendPdf($id, Request $request)
    {
        $flat = Flats::find($id);

        if ($flat) {
            $this->validate($request, [
                'email' => 'required|email',
            ]);

            Mail::send('emails.info', ['flat' => $flat], function ($m) use ($request, $flat) {
                $m->from(config('app.system_email'), config('app.system_from'));
                $m->to($request->get('email'))->subject('Информация о квартире');
                $m->attach(Flats::FILES . $flat->getPdfFileName());
            });
        }

        return response([]);
    }

    public function bookFlat(Request $request)
    {
        $subject = $request->get('flat_id') ? 'Запрос на бронь квартиры' : 'Запрос на обратный звонок';

        $this->validate($request, [
            'name' => 'required',
            'phone' => 'required',
            'time' => 'required',
        ]);

        Mail::send('emails.book', ['data' => $request->all()], function ($m) use ($subject) {
            $m->from(config('app.system_email'), config('app.system_from'));
            $m->to(config('app.admin_email'))->subject($subject);
        });

        return response([]);
    }
}
