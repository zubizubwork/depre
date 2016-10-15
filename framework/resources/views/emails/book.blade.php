@if (isset($data['flat_id']) && $data['flat_id'])
Лот: {{ $data['flat_id'] }}<br />
@endif
Имя: {{ $data['name'] }}<br />
Телефон: {{ $data['phone'] }}<br />
Время звонка: {{ $data['time'] }}
@if (isset($data['question']) && $data['question'])
<br />
Вопрос:<br />
{{ nl2br($data['question']) }}
@endif
