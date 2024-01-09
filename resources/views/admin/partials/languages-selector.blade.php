<div class="card-header p-0 pt-1">
    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
        @foreach(\App\Models\Language::all() as $lang)
            <li class="nav-item">
                @if($loop->first)
                    <a class="nav-link active" id="tabs-{{ $lang->code }}-tab" data-toggle="pill" href="#tabs-{{ $lang->code }}" role="tab" aria-controls="tabs-{{ $lang->code }}" aria-selected="true">{{ $lang->name }}</a>
                @else
                    <a class="nav-link" id="tabs-{{ $lang->code }}-tab" data-toggle="pill" href="#tabs-{{ $lang->code }}" role="tab" aria-controls="tabs-{{ $lang->code }}" aria-selected="false">{{ $lang->name }}</a>
                @endif
            </li>
        @endforeach
    </ul>
</div>
