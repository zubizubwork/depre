<div class="form-group{{ $errors->has('lot') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Лот</label>

    <div class="col-md-6">
        {!! Form::text('lot', null, ['class' => 'form-control']) !!}

        @if ($errors->has('type'))
        <span class="help-block">
            <strong>{{ $errors->first('lot') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('type') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Тип</label>

    <div class="col-md-6">
        {!! Form::text('type', null, ['class' => 'form-control']) !!}

        @if ($errors->has('type'))
        <span class="help-block">
            <strong>{{ $errors->first('type') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('floor') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Этаж</label>

    <div class="col-md-6">
        {!! Form::select('floor', ['' => 'Выберете этаж', 1 => '1', 2 => '2', 3 => '3'], null, ['class' => 'form-control']) !!}

        @if ($errors->has('floor'))
        <span class="help-block">
            <strong>{{ $errors->first('floor') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('area') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Площадь</label>

    <div class="col-md-6">
        {!! Form::text('area', null, ['class' => 'form-control']) !!}

        @if ($errors->has('area'))
        <span class="help-block">
            <strong>{{ $errors->first('area') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('price_for_meter') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Цена за метр 2</label>

    <div class="col-md-6">
        {!! Form::text('price_for_meter', null, ['class' => 'form-control']) !!}

        @if ($errors->has('price_for_meter'))
        <span class="help-block">
            <strong>{{ $errors->first('price_for_meter') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('price') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Цена</label>

    <div class="col-md-6">
        {!! Form::text('price', null, ['class' => 'form-control']) !!}

        @if ($errors->has('price'))
        <span class="help-block">
            <strong>{{ $errors->first('price') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('status') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Статус</label>

    <div class="col-md-6">
        {!! Form::select('status', ['' => '', 'свободно' => 'Свободно', 'забронировано' => 'Забронировано', 'продано' => 'Продано'], null, ['class' => 'form-control']) !!}

        @if ($errors->has('status'))
        <span class="help-block">
            <strong>{{ $errors->first('status') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('pdf') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">PDF</label>

    <div class="col-md-6">
        {!! Form::file('pdf') !!}
        @if (isset($pdf))
        <a href="{{ url($pdf) }}" target="_blank">Скачать</a>
        @endif

        @if ($errors->has('pdf'))
        <span class="help-block">
            <strong>{{ $errors->first('pdf') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('photo') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Фото 1</label>

    <div class="col-md-6">
        {!! Form::file('photo[]') !!}

        @if ($errors->has('photo'))
        <span class="help-block">
            <strong>{{ $errors->first('photo') }}</strong>
        </span>
        @endif
        @if (isset($images) && isset($images[0]))
        <div id="img_0">
            <img src="{{ $imagesFolder . $images[0] }}" /> <br />
            <span style="cursor: pointer;" onclick="deleteImage(0)">Удалить</span>
        </div>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('photo') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Фото 2</label>

    <div class="col-md-6">
        {!! Form::file('photo[]') !!}

        @if ($errors->has('photo'))
        <span class="help-block">
            <strong>{{ $errors->first('photo') }}</strong>
        </span>
        @endif
        @if (isset($images) && isset($images[1]))
        <div id="img_1">
            <img src="{{ $imagesFolder . $images[1] }}" /> <br />
            <span style="cursor: pointer;" onclick="deleteImage(1)">Удалить</span>
        </div>
        @endif
    </div>
</div>

<div class="form-group{{ $errors->has('photo') ? ' has-error' : '' }}">
    <label class="col-md-4 control-label">Фото 3</label>

    <div class="col-md-6">
        {!! Form::file('photo[]') !!}

        @if ($errors->has('photo'))
        <span class="help-block">
            <strong>{{ $errors->first('photo') }}</strong>
        </span>
        @endif
        @if (isset($images) && isset($images[2]))
        <div id="img_2">
            <img src="{{ $imagesFolder . $images[2] }}" /> <br />
            <span style="cursor: pointer;" onclick="deleteImage(2)">Удалить</span>
        </div>
        @endif
    </div>
</div>

<div class="form-group">
    <div class="col-md-6 col-md-offset-4">
        <button type="submit" class="btn btn-primary">
            <i class="fa fa-btn fa-user"></i>Сохранить
        </button>
        @if (isset($flat))
        <button type="buton" class="btn btn-primary" onclick="deleteFlat(); return false;">
            <i class="fa fa-btn fa-user"></i>Удалить
        </button>
        @endif
    </div>
</div>
<script>
    @if (isset($images))
    function deleteImage(img)
    {
        $.ajax({
            url: "{{ action('FlatsController@destroyImage', [$flat->id]) }}",
            type: "post",
            data: {'image' : img, '_token' : $("input[name=_token]").val()},
            dataType: 'json',
            success: function(responce) {
                $("#img_" + img).remove();
            }
        });
    }
    @endif
    
    @if (isset($flat))
    function deleteFlat()
    {
        if (!confirm("Вы уверены?"))
            return;
        $.ajax({
            url: "{{ route('flats.destroy', [$flat->id]) }}",
            type: "delete",
            data: {'_token' : $("input[name=_token]").val()},
            dataType: 'json',
            success: function(responce) {
                location.href = "{{ route('flats.index') }}";
            }
        });
        return false;
    }
    @endif
</script>
