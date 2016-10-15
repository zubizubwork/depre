@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Квартиры</h1>
            <hr />
            @foreach ($flors as $k=>$flor)
                <h1>{{ $k }} Этаж</h1>
                @foreach ($flor as $flat)
                <h2><a href="{{ action('FlatsController@edit', $flat->id) }}">Лот: {{ $flat->lot }}</a> - {{ $flat->status }}</h2>
                @endforeach
            @endforeach
        </div>
    </div>
</div>
@endsection
