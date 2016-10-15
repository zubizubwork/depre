@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Регистрация</div>
                <div class="panel-body">
                    {!! Form::model($flat, ['method' => 'PATCH', 'action' => ['FlatsController@update', $flat->id], 'class' => 'form-horizontal', 'files' => true]) !!}
                    @include('flats._form')
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
