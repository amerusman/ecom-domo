@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        <div class="r1-account-decorative-line"></div>
        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-get-in-touch divider">
                <div class="r1-title-wrapper r1-title-wrapper-acc">
                    <h2 class="r1-title">{{ Trans::__('get_in_touch', 'Get in touch') }}</h2>
                    @if (Session::has('success'))
                        <div class="success" data-role="success-massage">
                            <h4 class="r1-subtitle"><span>{{ Trans::__('thank_you_for_message', 'Thank you for message') }}</span></h4>
                        </div>
                    @else
                        <h4 class="r1-subtitle"><span>{{ Trans::__('for_info_request', 'For any information or request fill out the form') }}</span></h4>
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                </div>
                <form action="{{ route('message.store') }}" method="post">
                    @csrf
                    <div class="col-wrapper">
                        <div class="first-col">
                            <div class="form-row">
                                <label for="firstname"></label>
                                <input type="text" placeholder="{{ __('global.first_name') }}" class="input-text{{ $errors->has('firstname') ? 'is-invalid' : '' }}" name="firstname" id="firstname" autocomplete="given-name" value="{{ old('firstname') }}" required>
                            </div>
                            <div class="form-row">
                                <label for="lastname"></label>
                                <input placeholder="{{ __('global.last_name') }}" type="text" class="input-text" name="lastname" id="lastname" autocomplete="family-name" value="{{ old('lastname') }}" required>
                            </div>
                        </div>
                        <div class="second-col">
                            <div class="form-row">
                                <label for="email"></label>
                                <input type="email" name="email" placeholder="{{ Trans::__('email') }}" required/>
                            </div>
                            <div class="form-row">
                                <label for="phone"></label>
                                <input type="tel" name="phone" placeholder="{{ Trans::__('phone') }}"/>
                            </div>
                        </div>
                    </div>

                    <div class="textarea-block">
                        <div class="form-row">
                            <label for="text"></label>
                            <textarea name="message" placeholder="{{ Trans::__('write_your_message', 'Write your message here...') }}" rows="4" required>{{ old('message') }}</textarea>
                        </div>
                        <div class="form-row">
                            <input type="checkbox" id="authorize" name="authorize" required checked="checked"
                                    aria-invalid="true"/>
                            <label for="authorize">{{ Trans::__('personal_data_processing', 'I authorize the processing of my personal data. (NB if
                                consent is not provided, the request cannot be sent) The owner and manager of
                                the data collected is Domo Cosmetics Shop') }}</label>
                        </div>
                        <div class="form-row">
                            {!! RecaptchaV3::initJs() !!}

                            {!! RecaptchaV3::field('store') !!}
                        </div>
                    </div>
                    <button type="submit" class="r1-button">{{ Trans::__('contact_us', 'Contact us') }}</button>
                </form>
                    @endif

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
