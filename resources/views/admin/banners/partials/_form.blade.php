<div class="form-group">
    <label class="required" for="name">{{ trans('cruds.banner.fields.name') }}</label>
    <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('name', isset($banner) ? $banner->name : null) }}" required>
    @if($errors->has('name'))
        <span class="text-danger">{{ $errors->first('name') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.banner.fields.name_helper') }}</span>
</div>

<x-admin.translation-form module="banner" :model="isset($banner) ? $banner : null"
                          :fields="[
                            ['name' => 'left_line_1', 'type' => 'text', 'required' => false],
                            ['name' => 'left_line_2', 'type' => 'text', 'required' => false],
                            ['name' => 'right_line_1', 'type' => 'text', 'required' => false],
                            ['name' => 'right_line_2', 'type' => 'text', 'required' => false],
]"/>


<div class="form-group">
    <label class="required" for="image">{{ trans('cruds.banner.fields.image') }}</label>
    <div class="needsclick dropzone {{ $errors->has('image') ? 'is-invalid' : '' }}" id="image-dropzone">
    </div>
    @if($errors->has('image'))
        <span class="text-danger">{{ $errors->first('image') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.banner.fields.image_helper') }}</span>
</div>

<div class="form-group">
    <div class="form-check {{ $errors->has('active') ? 'is-invalid' : '' }}">
        <input type="hidden" name="active" value="0">
        <input class="form-check-input" type="checkbox" name="active" id="active" value="1" {{ (isset($banner) && $banner->active) || old('active', 0) === 1 ? 'checked' : '' }}>
        <label class="form-check-label" for="active">{{ trans('cruds.banner.fields.active') }}</label>
    </div>
    @if($errors->has('active'))
        <span class="text-danger">{{ $errors->first('active') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.banner.fields.active_helper') }}</span>
</div>

<div class="form-group">
    <label for="position">{{ trans('cruds.banner.fields.position') }}</label>
    <input class="form-control {{ $errors->has('position') ? 'is-invalid' : '' }}" type="number" name="position" id="position" value="{{ old('position' , isset($banner) ? $banner->position : 0) }}" step="1">
    @if($errors->has('position'))
        <span class="text-danger">{{ $errors->first('position') }}</span>
    @endif
    <span class="help-block">{{ trans('cruds.banner.fields.position_helper') }}</span>
</div>

<div class="form-group">
    <button class="btn btn-danger" type="submit">
        {{ trans('global.save') }}
    </button>
</div>



@section('scripts')
    <script>
        Dropzone.options.imageDropzone = {
            url: '{{ route('admin.banners.storeMedia') }}',
            maxFilesize: 200, // MB
            acceptedFiles: '.jpeg,.jpg,.png,.gif',
            maxFiles: 1,
            addRemoveLinks: true,
            headers: {
                'X-CSRF-TOKEN': "{{ csrf_token() }}"
            },
            params: {
                size: 200,
                width: 4096,
                height: 4096
            },
            success: function (file, response) {
                $('form').find('input[name="image"]').remove()
                $('form').append('<input type="hidden" name="image" value="' + response.name + '">')
            },
            removedfile: function (file) {
                file.previewElement.remove()
                if (file.status !== 'error') {
                    $('form').find('input[name="image"]').remove()
                    this.options.maxFiles = this.options.maxFiles + 1
                }
            },
            init: function () {
                @if(isset($banner) && $banner->image)
                var file = {!! json_encode($banner->image) !!}
                this.options.addedfile.call(this, file)
                this.options.thumbnail.call(this, file, file.preview ?? file.preview_url)
                file.previewElement.classList.add('dz-complete')
                $('form').append('<input type="hidden" name="image" value="' + file.file_name + '">')
                this.options.maxFiles = this.options.maxFiles - 1
                @endif
            },
            error: function (file, response) {
                if ($.type(response) === 'string') {
                    var message = response //dropzone sends it's own error messages in string
                } else {
                    var message = response.errors.file
                }
                file.previewElement.classList.add('dz-error')
                _ref = file.previewElement.querySelectorAll('[data-dz-errormessage]')
                _results = []
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    node = _ref[_i]
                    _results.push(node.textContent = message)
                }

                return _results
            }
        }

    </script>
@endsection
