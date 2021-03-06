@php
//    $column = $column['name'];
/*
   $options = $options ?? cache()->remember('gl-selects-' . $column, strlen($column) * 30, function () use ($column) {
                    return \App\Models\GeneralLedger::select($column)
                    ->distinct()
                    ->get()
                    ->pluck($column, $column)
                    ->toArray();
                });
*/
@endphp

{{-- {{ count($options) }} --}}

<select onchange="console.log(this.value)" class="w-full p-0 text-sm border-gray-100 rounded-sm" 
wire:model.stop="state.filters.{{$column->name}}" 
>
    <option value=""></option>
    @foreach ($column->getOptions() as $option)
        <option value="{{ $option }}">{{ $option }}</option>    
    @endforeach
</select>