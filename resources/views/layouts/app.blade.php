<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="user-scalable=1.0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">

    <title>@yield('title', 'D’Omo Cosmetics')</title>
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="/img/favicon/site.webmanifest">
    <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <!-- SEO Meta -->
    <meta property="og:url" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="@yield('title', 'D’Omo Cosmetics')" />
    <meta property="og:description" content="@yield('description')" />
    <meta property="og:image" content="" />

    <!-- Styles -->
    <link rel="stylesheet" href="/css/select2.min.css" />
    <link rel="stylesheet" href="/css/main.css" />
    <link rel="stylesheet" href="/css/slick.css" />
</head>
<body>
    <div class="r1-preloader"></div>

    @yield('content')

    <!-- .footer -->
    <footer class="r1-footer">
        <div class="r1-container">
            <div class="r1-footer__inner">
                <div class="footer-fieldset">
                    <fieldset>
                        <legend>{{ Trans::__('help', 'Help') }}</legend>
                        <div class="fieldset-help-wrapper">
                            <ul>
                                <li>
                                    <a href="{{ route('pages.show', 'delivery') }}">{{ $pages['delivery'] }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('pages.show', 'payment') }}">{{ $pages['payment'] }}</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="{{ route('pages.show', 'exchange-and-return') }}">{{ $pages['exchange-and-return'] }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('pages.show', 'terms-conditions') }}">{{ $pages['terms-conditions'] }}</a>
                                </li>
                            </ul>
                        </div>
                    </fieldset>
                    <!-- <fieldset>
                        <legend>Contact us</legend>
                        <ul>
                            <li>
                                <a href="mailto:info@demolink.org">info@demolink.org</a>
                            </li>
                            <li>
                                <a href="tel:+184412345678">+1 (844) 123 456 78</a>
                            </li>
                            <li>
                                <p>operation hours are 7am - 2 am EST, 7 days a week, excluding holidays</p>
                            </li>
                        </ul>
                    </fieldset> -->
                </div>
            </div>
            <div class="footer-get-in-touch">
                <a class="r1-button" href="{{ route('get-in-touch') }}">{{ Trans::__('get_in_touch') }}</a>
            </div>

        {{--    <div class="footer-social">
                <h4>Social media</h4>
                <ul class="socials">
                    <li>
                        <a href="https://google.com" target="_blank">
                            <img src="/img/facebook.svg" alt="social" />
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank">
                            <img src="/img/instsgram.svg" alt="social" />
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank">
                            <img src="img/linkedin.svg" alt="social" />
                        </a>
                    </li>
                </ul>
            </div>  --}}

        </div>
        <div class="r1-footer__copyrights">
            <p class="copyrights">{{ now()->year }} <x-block id="copyright"/></p>
            <p class="links"><a href="{{ route('pages.show', 'terms-conditions') }}">{{ $pages['terms-conditions'] }}</a>&nbsp;and&nbsp;<a href="{{ route('pages.show', 'privacy-policy') }}">{{ $pages['privacy-policy'] }}</a></p>
            <div class="company">
                <span><x-block id="company_name"/></span>
                <span><x-block id="company_address_1"/></span>
                <span><x-block id="company_address_2"/></span>
            </div>
        </div>
    </footer>
    <!-- \.footer -->

    @include('partials._country-selection')

    @include('partials._cookies-consent')

    <form id="logoutform" action="{{ route('logout') }}" method="POST" style="display: none;">
        {{ csrf_field() }}
    </form>

    @yield('scripts')
    <!-- Scripts -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/slick.min.js"></script>
    <script src="/js/jquery.waypoints.min.js"></script>
    <script src="/js/select2.full.min.js"></script>
{{--    <script type="text/javascript" src="/js/creditly.js"></script>--}}
    <script src="/js/common.js"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N21GE669VJ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-N21GE669VJ');
    </script>

</body>
</html>
