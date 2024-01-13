@extends('layouts.app')
@section('content')

    <!-- .page-wrapper -->
    <div class="page-wrapper r1-container">

        @include('partials.header')

        @include('profile.partials.menu')

        <!-- .r1-main -->
        <main class="r1-main">
            <section class="section-address divider">
                <div class="r1-title-wrapper">
                    <h2 class="r1-title">{{ Trans::__('profile.address', 'address') }}</h2>
                </div>
                @foreach($addresses as $address)
                <div class="r1-title-wrapper">
                    <h4 class="r1-subtitle">
                        <span>
                            @if($address->default)
                                {{ Trans::__('profile.default_address', 'default address') }}
                            @else
                                {{ Trans::__('profile.additional_address', 'additional address') }}
                            @endif
                        </span>
                    </h4>
                </div>
                <form action="{{ route('profile.addresses.destroy', $address) }}" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="col-wrapper section-address__information">
                        <div class="first-col">
                            <div class="form-row">
                                <label for="phone">{{ Trans::__('phone') }}</label>
                                <input type="tel" placeholder="{{ $address->phone }}" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="address">{{ Trans::__('address') }}</label>
                                <input type="text" placeholder="{{ $address->address_1 }}" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="country">{{ Trans::__('country') }}</label>
                                <input type="text" placeholder="{{ $address->country->name }}" readonly/>
                            </div>
                        </div>
                        <div class="second-col">
                            <div class="form-row">
                                <label for="state">{{ Trans::__('state') }}</label>
                                <input type="text" placeholder="{{ $address->state }}" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="city">{{ Trans::__('city') }}</label>
                                <input type="text" placeholder="{{ $address->city }}" readonly/>
                            </div>
                            <div class="form-row">
                                <label for="zip">{{ Trans::__('zip') }}</label>
                                <input type="text" placeholder="{{ $address->zip }}" readonly/>
                            </div>
                        </div>
                    </div>
                    <div class="address-btns">
                        <a href="{{ route('profile.addresses.edit', $address) }}" class="r1-button">{{ Trans::__('edit', 'Edit') }}</a>
                        <button type="submit" class="r1-button">{{ Trans::__('delete', 'Delete') }}</button>
                    </div>
                </form>
                @endforeach
                    <a href="{{ route('profile.addresses.create') }}" class="account-btn add-new">{{ Trans::__('profile.add_new_address', 'add new address') }}</a>

            </section>

            @include('partials.bottom')

        </main>
        <!-- \.r1-main -->

    </div>
    <!-- \.page-wrapper -->

@endsection
