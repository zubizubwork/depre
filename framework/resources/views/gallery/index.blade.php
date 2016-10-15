@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>{{ $type_text }}</h1>
            <hr />
            @foreach ($gallery as $image)
                <div id="img_{{ $image->id }}">
                    <img src="{{ $galleryFolder . 'mini_' . $image->hash }}" /> <br />
                    <span style="cursor: pointer;" onclick="deleteImage({{ $image->id }})">Удалить</span>
                </div>
            @endforeach
            
            {!! Form::model(null, ['method' => 'POST', 'action' => ['GalleryController@save'], 'class' => 'form-horizontal', 'files' => true]) !!}
            {!! Form::hidden('type', $type) !!}
            <div class="form-group">
                <label class="col-md-4 control-label">Фотографии</label>
                <div class="col-md-6">
                    {!! Form::file('files[]', ['multiple']) !!}
                </div>
            </div>
            
            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa fa-btn fa-user"></i>Сохранить
                    </button>
                </div>
            </div>
            {!! Form::close() !!}
            @if ($errors->any())
                <ul class="alert alert-danger">
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            @endif
        </div>
    </div>
</div>
<script>
    function deleteImage(img)
    {
        $.ajax({
            url: "{{ url('gallery') }}/" + img,
            type: "post",
            data: {'image' : img, '_token' : $("input[name=_token]").val()},
            dataType: 'json',
            success: function(responce) {
                $("#img_" + img).remove();
            }
        });
    }
</script>
@endsection
