var $ = jQuery.noConflict();

window.addEventListener( "load", function () {
    init();
    r1_preloader();
    r1_transfer_mobile_links();
    r1_toggle_languages();
    r1_toggle_search();
    r1_menu();
    r1_popup();
    disable_scroll_region_selection_popup ();
    r1_cart_popup()
    r1_mobile_menu();
    r1_toggle_personal_mobile_menu ();
    InfiniteRotator.init();
    init_carousel();
    r1_change_count();
    r1_product_tabs();
    r1_manage_rating();
    r1_lost_password();
    r1_select2();
    r1_open_registration_form ();
    r1_empty_input_desable_btn ();
    r1_product_check();
    r1_remove_product();
    r1_toggle_order_review();
    change_contact_form ();
    add_additional_address ();
    show_password ();
    show_cvv_tooltip ();
    change_payment_method ();
    change_product_count();
    load_cookie_popup ();
    change_main_title_fnt_size ();
    captcha_z_position ();
});

$(window).resize( function () {
    r1_transfer_mobile_links();
});

$(window).on( 'orientationchange', function () {
    r1_transfer_mobile_links();
});

/**
 * Hide preloader after small delay for smooth page loading.
 *
 * @since    1.0.0
 */
function r1_preloader() {
    setTimeout(function(){
        $('.r1-preloader').addClass('hidden');
    }, 50);
}

/**
 * Transfer menu links into mobile menu
 *
 * @since    1.0.0
 */
function r1_transfer_mobile_links() {
    if ( $(window).width() < 768 ) {
        let links = $('.r1-header__links').children();

        links.each(function(i, el) {
            if ( $(el).hasClass('search-trigger') || $(el).hasClass('languages') ) {
                $(el).appendTo('.r1-header__menu .mobile-links');
            }
        });
    } else if ( $(window).width() > 767 ) {
        let links = $('.r1-header__menu .mobile-links').children();

        links.each(function(i, el) {
            if ( $(el).hasClass('search-trigger') ) {
                $(el).prependTo('.r1-header .r1-header__links');
            } else if ( $(el).hasClass('languages') ) {
                $(el).appendTo('.r1-header .r1-header__links');
            }
        });
    }
}

/**
 * Toggle language bar.
 *
 * @since    1.0.0
 */
function r1_toggle_languages() {
    if ( $(window).width() > 767 ) {
        $('.languages__curent').on('click', function() {
            let this_is = $(this);

            this_is.next().toggleClass('active');
        });

        // Close languages list on any area click
        $('html').click(function(e) {
            if( !$(e.target).parents().hasClass('languages') ){
                $('.link-item.languages ul').removeClass('active');
            }
        });
    }
}

/**
 * Toggle search bar.
 *
 * @since    1.0.0
 */
function r1_toggle_search() {
    if ( $(window).width() > 767 ) {
        $('.search-trigger > a').on('click', function() {
            let this_is = $(this);

            this_is.parent().toggleClass('active');
        });

        // Close languages list on any area click
        $('html').click(function(e) {
            if( !$(e.target).parents().hasClass('search-trigger') ){
                $('.search-trigger').removeClass('active');
            }
        });
    }
}

/**
 * Toggle menu.
 *
 * @since    1.0.0
 */
 function r1_menu() {
    if ( $(window).width() < 1365 ) {
        $('.menu-item.has-sub-menu > a > svg').on('click', function(e) {

            let this_is = $(this).parent();
            let parent = this_is.parent();

            if ( ! parent.hasClass('active') ) {
                e.preventDefault();

                // Open sub menu
                parent.addClass('active');
                this_is.next().addClass('active');

                if ( $(window).width() < 1366 ) {
                    this_is.next().slideDown();
                }

                // Close other submenus on current level
                siblings = parent.siblings();

                siblings.not(parent).removeClass('active');
                siblings.not(parent).find('.sub-menu').removeClass('active');
                siblings.not(parent).find('.menu-item').removeClass('active');

                if ( $(window).width() < 1366 ) {
                    siblings.not(parent).find('.sub-menu').slideUp();
                }

            } else {
                e.preventDefault();

                // Close sub menu clicking on arrow
                parent.removeClass('active');
                this_is.next().removeClass('active');

                if ( $(window).width() < 1366 ) {
                    this_is.next().slideUp();
                }
            }

        });
    }

    // Close sub-menu on any area click
    if ( $(window).width() > 1365 ) {

        $('html').click(function(e) {
            if( !$(e.target).parents().hasClass('r1-header__menu') ){
                $('.sub-menu').removeClass('active');
                $('.menu-item.has-sub-menu').removeClass('active');
            }
        });

    }
}
/**
 * Popup scripts.
 *
 * @since    1.0.0
 */
function r1_popup() {
    let wrapper = $('.r1-popup-wrapper');

    // Open popup
    $('.r1-popup-trigger').on('click', function(e) {
        e.preventDefault();

        let this_is = $(this);
        let popup = this_is.data('popup');

        wrapper = $('.r1-popup-wrapper[data-popup="' + popup + '"]');

        wrapper.addClass('active');
        wrapper.find('.r1-popup[data-popup="' + popup + '"]').addClass('active');

        $('body').addClass('r1-disable-scroll');

    });

    // Close popup
    $('.r1-popup__close, .r1-popup-overlay').on('click', function() {

        wrapper.removeClass('active');
        wrapper.find('.r1-popup').removeClass('active');

        $('body').removeClass('r1-disable-scroll');

    })
}

function disable_scroll_region_selection_popup () {
    let popup = $('[data-popup="region-selection"]');

    if (popup.parent().hasClass('active')) {
        $('body').addClass('r1-disable-scroll');
    }
}

function r1_cart_popup() {
    let wrapper = $('.r1-popup-wrapper.shopping-cart');

    // Open popup
    $('.r1-cart-popup-trigger').on('click', function(e) {
        e.preventDefault();

        let this_is = $(this);
        let popup = this_is.data('popup');

        wrapper.addClass('active');
        wrapper.find('.r1-popup[data-popup="' + popup + '"]').addClass('active');

    });

    // Close popup
    $('body').on('click', '.r1-popup__close, .r1-popup-overlay', function() {
        wrapper.removeClass('active');
        wrapper.find('.r1-popup').removeClass('active');
    });
    $('body').on('keydown', function(e) {
        if (e.which === 27) {
            wrapper.removeClass('active');
            wrapper.find('.r1-popup').removeClass('active');
        }
    });

    // Remove from popup cart
    $('body').on('click', 'i[data-action="cart-remove"]', function() {
        let parent = $(this).parents('div.product');
        let _id = parent.data('id');
        parent.hide(200, () => {parent.remove()} );
        cart.remove(_id);
    });

    // Add to favorites from shopping cart popup
    $('body').on('click', 'i[data-action="cart-favorites"]', function() {
        let active = 0,
            _id = $(this).parents('div.product').data('id');
        if ($(this).hasClass("active")) {
            $(this).removeClass("active added");
            active = 1;
        }
        else {
            $(this).addClass("active added");
            active = 0;
        }
        $.post('/favorites',{active: active, id: _id});
    });
}

/**
* Script that animate things on scroll.
*
* @since    1.0.0
*/
function r1_mobile_menu() {

    let menu = $('.r1-header__menu');
    let overlay = $('.r1-header__mobile-overlay');

    // Open mobile menu
    $('.mobile-menu-trigger').on('click', function() {

        let this_is = $(this);

        this_is.addClass('active');
        menu.addClass('active');
        overlay.addClass('active');
        $('body').addClass('r1-disable-scroll');

    });

    // Close mobile menu
    overlay.on('click', function() {

        $('.mobile-menu-trigger').removeClass('active');
        menu.removeClass('active');
        overlay.removeClass('active');
        $('body').removeClass('r1-disable-scroll');

        // Close all submenus
        $('.sub-menu').slideUp('active');
        $('.menu-item.has-sub-menu').removeClass('active');

    });

}

function r1_toggle_personal_mobile_menu () {
    $('.personal-menu-button').on('click', function () {
        let this_is = $(this);
        this_is.toggleClass('active');

        if ( this_is.hasClass('active') ) {

            this_is.next('.personal-menu-items').slideDown(200)

        } else {
            this_is.next('.personal-menu-items').slideUp(200)
        }
    });
}

/**
 * Init main page banner slider
*/
var InfiniteRotator = {
    init: function() {
        //initial fade-in time (in milliseconds)
        var initialFadeIn = 0;

        //interval between items (in milliseconds)
        var itemInterval = 5000;

        //cross-fade time (in milliseconds)
        var fadeTime = 0;

        //count number of items
        var numberOfImgs = $('.rotating-banner').length;
        var numberOfFirstTitles = $('.rotating-title-h1').length;
        var numberOfSecondTitles = $('.rotating-title-h2').length;

        //set current image
        var currentImg = 0;
        var currentFirstTitle = 0;
        var currentSecondTitle = 0;

        //show first image
        $('.rotating-banner').eq(currentImg).fadeIn(initialFadeIn);
        $('.rotating-title-h1').eq(currentFirstTitle).fadeIn(initialFadeIn);
        $('.rotating-title-h2').eq(currentSecondTitle).fadeIn(initialFadeIn);

        //loop through the items
        var infiniteLoop = setInterval(function() {
            $('.rotating-banner').eq(currentImg).fadeOut(fadeTime);
            $('.rotating-title-h1').eq(currentFirstTitle).fadeOut(fadeTime);
            $('.rotating-title-h2').eq(currentSecondTitle).fadeOut(fadeTime);

            if (currentImg == numberOfImgs - 1 && currentFirstTitle == numberOfFirstTitles - 1 && currentSecondTitle == numberOfSecondTitles - 1 ) {
                currentImg = 0;
                currentFirstTitle = 0;
                currentSecondTitle = 0;
            } else {
                currentImg++;
                currentFirstTitle++;
                currentSecondTitle++;
            }


            $('.rotating-banner').eq(currentImg).fadeIn(fadeTime);
            $('.rotating-title-h1').eq(currentFirstTitle).fadeIn(fadeTime);
            $('.rotating-title-h2').eq(currentSecondTitle).fadeIn(fadeTime);

        }, itemInterval);
    }
};


/**
* Init slick slider on product page
*
* @since    1.0.0
*/
function init_carousel() {

    let slider = $('.image-carousel');

    if ( slider.length > 0 )
    {
        let paginationAll = $('.custom-pagination .all');
        let paginationCurrent = $('.custom-pagination .current');

        paginationAll.text(slider.find('img').length);

        let productSlider = slider.slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        productSlider.on('afterChange', function( slick, current ) {
            paginationCurrent.text( current.currentSlide + 1 );
        });
    }

}

/**
* Change product count
*
* @since    1.0.0
*/
function r1_change_count() {
    let quantityInput = $('#qty');

    if ( quantityInput.length > 0 ) {
        let minus = quantityInput.prev();
        let plus = quantityInput.next();

        minus.on('click', function() {
            let value = quantityInput.val();
            if ( value > 1 ){
                value --;
                quantityInput.val( value );
            }
        });

        plus.on('click', function() {
            let value = quantityInput.val();
            value ++;
            quantityInput.val( value );
        });
    }
}

/**
 * Script that animate things on scroll.
 *
 * @since    1.0.0
 */
/* function r1_animations() {
    setTimeout( function() {
        $('.r1-animation').each(function(i, el) {

            let animatedObj = $(el);

            animatedObj.waypoint({
                handler: function(direction) {

                    // Reveal section.
                    animatedObj.addClass('animated');

                    // Do not repeat again.
                    this.destroy();

                },
                offset: '80%'
            });
        });
    }, 100);
} */

/**
 * Script that switch product description tabs.
 *
 * @since    1.0.0
 */
function r1_product_tabs() {

    let tabLink = $('.product-tabs__list li');

    if ( tabLink.length > 0 ) {

        tabLink.on('click', function() {
            let this_is = $(this);
            let tab = this_is.data('tab');

            if ( ! this_is.hasClass('active') ) {
                // Manage links
                tabLink.removeClass('active');
                this_is.addClass('active');

                // Manage content
                $('.product-tabs__content').hide();
                $('.product-tabs__content[data-tab="' + tab + '"]').show();
            }

            $('.r1-animation').addClass('animated');
        })
    }

}

/**
 * Script that managing product rating.
 *
 * @since    1.0.0
 */
function r1_manage_rating() {
    let rating = $('.stars-rating');

    if ( rating.length > 0 ) {

        rating.find('svg').on('click', function() {
            let this_is = $(this);
            let count = this_is.prevAll().length + 1;
            let ratingClass = 'stars-' + count;
            let parent = rating.closest('.stars');
            let select = $('#review-rating');

            parent.removeClass(function (index, className) {
                return (className.match (/(^|\s)stars-\S+/g) || []).join(' ');
            });
            parent.addClass(ratingClass);
            select.val(count);
        });

    }
}

/**
 * Trigger lost password popup.
 *
 * @since    1.0.0
 */
function r1_lost_password() {
    let lostLink = $('#lost-password');

    if ( lostLink.length > 0 ) {

    }
}

/**
 * Init select2 script.
 *
 * @since    1.0.0
 */
function r1_select2() {
    let selectList = $('.select2');

    if ( selectList.length > 0 ){
        selectList.select2();
    }
}

/**
* LogIn page. Open registration form
*
* @since    1.0.0
*/
function r1_open_registration_form () {
    $('.create-account').on('click', function(e) {
        e.preventDefault();

        let this_is = $(this);
        let currentPage = this_is.closest('.registration-wrapper');
        let registrationPage = currentPage.next();

        currentPage.hide();
        registrationPage.show();
        window.scrollTo({top:550, behavior:"smooth"})

    });
}

/**
* Disable login button till inputs are empty
*
* @since    1.0.0
*/
function r1_empty_input_desable_btn () {
    $('.r1-section-login__col input').keyup(function () {
        let this_is = $(this);
        let empty = false;

        this_is.each(function() {
            if (this_is.val() == ' ') {
                empty = true;
            }
        });

        if (empty) {
            $('#login').attr('disabled', 'disabled');
        } else {
            $('#login').removeAttr('disabled');
        }
    });
}


// Wish List check all
function r1_product_check () {
    let checkeboxes = $('.wl-checkbox');

    $('.global-cb').on('click', function() {
        const valueToSet = this.checked

        checkeboxes.each(function() {
            this.checked = valueToSet
        })
    })

}

/***
 * Remove products from wish list
 *
 */
function r1_remove_product() {
    $('.btn-prod-remove').on('click', function () {
        let this_is = $(this);
        let parent = this_is.closest('.wl-item');
        parent.hide(150, () => { parent.remove()} )
    });
}


/*
* Order Info Review *
 */
function r1_toggle_order_review () {
    $('.account-btn.view').on('click', function () {
        let this_is = $(this);
        let parent = this_is.closest('.r1-order-info-review-wrapper');
        this_is.toggleClass('active');
        parent.toggleClass('active');

        if ( parent.hasClass('active') ) {

            parent.children('.order-review').slideDown(300)

        } else {
            parent.children('.order-review').slideUp(200)
        }
    });
}

/* Checkout Page */

function change_contact_form () {
   let formBtns = $('.contact-info__buttons button');
   let forms = $('.contact-info--forms > div');

   formBtns.on('click', function () {
        let this_is = $(this);
        let index = formBtns.index(this_is);

        this_is.addClass('active').siblings().removeClass('active');
        forms.eq(index).addClass('active').siblings().removeClass('active');
    })
}

/*  ***  */
function add_additional_address () {
    if ($('.address-select-container').length)
    {
        let form = $('.additional-address-container')
        inputs = $('.additional-address-container div').children()

        if ($("#other_address").is(':checked')) {
            form.show();
            inputs.prop('required', true);
        }

        $('.address-select-container .form-container input').on('click', function ()
        {
            if (!$("#other_address").is(':checked')) {
                form.slideUp(200)
                inputs.removeAttr('required')

            } else {
                form.slideDown(500)
                inputs.not("#shipping_apartment").prop('required', true)
            }
        });
    }
}

/* *** */
function show_password () {

    $('.show-password-input').on('click', function () {

        let hiddenPassInput = $(this).siblings('input')

        if (hiddenPassInput.attr('type') === 'password') {
            hiddenPassInput.attr('type', 'text');
            if (hiddenPassInput.parent().next().children('input').attr('type') === 'password') {
                hiddenPassInput.parent().next().children('input').attr('type', 'text');
            }

        } else {
            hiddenPassInput.attr('type', 'password')
            if (hiddenPassInput.parent().next().children('input').attr('type') === 'text') {
                hiddenPassInput.parent().next().children('input').attr('type', 'password');
            }
        }
    })
}

/* *** */
function show_cvv_tooltip () {
    let tooltipText = $('.tooltip-text')

    $('#cvv-tip').on('click', function() {
        tooltipText.toggleClass('active')
    })
}


/* **** */
function change_payment_method () {
    let paymentBtns = $('.payment-buttons button');
    let paymentMethods = $('.payment-method > div');

    paymentBtns.on('click', function () {
        let this_is = $(this);
        let index = paymentBtns.index(this_is);
        let input = $('.payment-method__wrapper:first-child > div input');

        this_is.children('input').prop("checked", "checked");
        this_is.addClass('active').siblings().removeClass('active');
        paymentMethods.eq(index).addClass('active').siblings().removeClass('active')

        if (!this_is.is(':first-child')) {
            input.removeAttr('required')
        } else {
            input.attr('required', 'required')
        }
    })
}
/* *********** */

/*Cart page. Change product count.  */
function change_product_count() {

    $('.cart-item .minus').on('click', function() {
        let this_is = $(this);
        let _id = $(this).data('id');
            qty = -1;
        let closestInput = this_is.siblings('.cart-item .quantity input');
            value = closestInput.val();

        let parent = this_is.closest('form.cart-item')
            productPrice = parent.find('.product-price ins').text().replace(/[^\d,.]/gi, '')
            productTotalPrice = parent.find('.product-control__total-price').text().replace(/[^\d,.]/gi, '')

        if ( value > 1 ) {
            value --;
            closestInput.val(value);
            cart.add_to_cart(_id, qty)

            let newTotalPrice = parseFloat(productTotalPrice) - parseFloat(productPrice)
            parent.find('.product-control__total-price').html(newTotalPrice.toFixed(2))
        }
    });

    $('.cart-item .plus').on('click', function() {
        let this_is = $(this);
        let _id = $(this).data('id');
            qty = 1
        let closestInput = this_is.siblings('.cart-item .quantity input');
            value = closestInput.val();

        let parent = this_is.closest('form.cart-item')
            productPrice = parent.find('.product-price ins').text().replace(/[^\d,.]/gi, '')
            productTotalPrice = parent.find('.product-control__total-price').text().replace(/[^\d,.]/gi, '')

        value ++;
        closestInput.val(value);
        cart.add_to_cart(_id, qty)

        let newTotalPrice = parseFloat(productPrice) + parseFloat(productTotalPrice)
        parent.find('.product-control__total-price').html(newTotalPrice.toFixed(2))
    });

}

/* Cookies Consent Popup */

function load_cookie_popup () {
    const cookieStorage = {
        getItem: (key) => {
            const cookies = document.cookie
                                        .split(';')
                                        .map(cookie => cookie.split('='))
                                        .reduce((accumulator, [key, value]) => ({...accumulator,
                                                                    [key.trim()] : value}), {});

            return cookies[key];
        },
        setItem: (key, value) => {
            document.cookie = `${key}=${value};expires=Sun, 16 Jul 3567 06:23:41 GMT`;
        },
    }

    const storageType = cookieStorage;
    const consentPropertyType = 'italyskincare.com';

    const hasConsented = () => storageType.getItem(consentPropertyType) === "true" ? true : false;
    const toggleStorage = (prop) => storageType.setItem(consentPropertyType, prop);

    const popup = $('.cookie-popup-wrapper');
    const btnSubmit = $('[data-confirm]');
    const btnClose = $('[data-cancel]');

    if (hasConsented()) {
        console.log('Loading...');
    } else {
        popup.addClass('active');
    }

    btnSubmit.on('click', () => {
        toggleStorage(true);
        popup.removeClass('active');
        console.log('Loading...')
    });

    btnClose.on('click', () => {
        toggleStorage(false);
        popup.removeClass('active');
    });
}

/* Changing Main Title font-size */
function change_main_title_fnt_size () {
    let title = $('[data="main-title"] span');

    title.each(function() {
        let this_is = $(this);

        if (this_is.width() >= 404.8) {
            title.css('font-size', '2rem')
        }
    })
}

/* Chaptcha z-index position */
function captcha_z_position () {
    $('.grecaptcha-badge').css('z-index', '1000')
}

/* *********** */

let cart = null;
function init() {
    cart = new Cart();
}
$(document).ready(function()
{
    $('i[data-action="favorites"]').click(function()
    {
        let active = 0,
            _id = $(this).parents('div.product').data('id');
        if ($(this).hasClass("active")) {
            $(this).removeClass("active added");
            active = 1;
        }
        else {
            $(this).addClass("active added");
            active = 0;
        }
        $.post('/favorites',{active: active, id: _id});
    });

    $('a[data-action="add-to-cart"]').click(function()
    {
        let _id = $(this).parents('div.product').data('id');
        $.post('/cart/add',{id: _id}, function (data) {
            if (data && data.status)
            {
                if (data.count) {
                    $('#cart-count').html(data.count);
                }
                if (data.content) {
                    $('div[role="cart-popup"]').html(data.content);
                    $('div[role="cart-popup"]').addClass('active');
                    $('div[role="cart-popup"]').parent().addClass('active');
                }
            }
        });
    });

    $('button[data-action="add-to-cart"]').click(function()
    {
        let _id = $(this).data('id'),
            qty = $("#qty").val();
        $.post('/cart/add',{id: _id, qty: qty}, function (data) {
            if (data && data.status) {
                if (data.count) {
                    $('#cart-count').html(data.count);
                }
                if (data.content) {
                    $('div[role="cart-popup"]').html(data.content);
                    $('div[role="cart-popup"]').addClass('active');
                    $('div[role="cart-popup"]').parent().addClass('active');
                }
            }
        });
    });

    $('button[data-action="buy-now"]').click(function()
    {
        let _id = $(this).data('id'),
            _location = $(this).data('location'),
            qty = $("#qty").val();
        $.post('/cart/add',{id: _id, qty: qty}, function (data) {
            if (data && data.status) {
                window.location.href = _location;
            }
        });
    });

    /* Add product to cart from landing */
    $('button[data-action="order-now"]').click(function()
    {
        let _id = $(this).data('id'),
            _location = $(this).data('location')

        let resultsUTM = document.cookie.match(/utm=(.+?)(;|$)/)    

        $.post('/cart/add?' + JSON.parse(resultsUTM[1]),{id: _id}, function (data) {
            if (data && data.status) {
                window.location.href = _location;
            }
        });
    });

    /* Remove from cart page */
    $('button[data-action="cart-remove"]').click(function()
    {
        let parent = $(this).parents('form.product')
        let _id = parent.data('id');
        parent.hide(200, () => {parent.remove()} );
        cart.remove(_id);
    });

    /* Cart page add products to favorites*/
    $('button[data-action="favorites"]').click(function()
    {
        let active = 0,
            _id = $(this).parents('form.product').data('id');
        if ($(this).hasClass("active")) {
            $(this).removeClass("active added");
            active = 1;
        }
        else {
            $(this).addClass("active added");
            active = 0;
        }
        $.post('/favorites',{active: active, id: _id});
    });

    $('button[data-action="wishlist-remove"]').click(function()
    {
        let parent = $(this).parents('div.product')
        let _id = $(this).val();
        parent.hide(200, () => {parent.remove()});
        $.post('/favorites',{active: 1, id: _id});
    });

    $('button[data-action="wishlist-to-cart"]').click(function()
    {
        let _id = $(this).val();
        $.post('/cart/add',{id: _id}, function (data) {
            if (data && data.status)
            {
                if (data.count) {
                    $('#cart-count').html(data.count);
                }
                if (data.content) {
                    $('div[role="cart-popup"]').html(data.content);
                    $('div[role="cart-popup"]').addClass('active');
                    $('div[role="cart-popup"]').parent().addClass('active');
                }
            }
        });
    });

    $('form[data-action="cart.bulk-add"]').on('submit', function (e)
    {
        e.preventDefault();
        let $form = $(this);
        let data = $form.serialize();

        $.post($form.attr('action'), data, function (data)
        {
            if(data && data.status) {
                if (data.count) {
                    $('#cart-count').html(data.count);
                }
                if (data.content) {
                    $('div[role="cart-popup"]').html(data.content);
                    $('div[role="cart-popup"]').addClass('active');
                    $('div[role="cart-popup"]').parent().addClass('active');
                }
            }
        }, 'json');

        return false;
    });


    $('form[data-action="reviews.create"]').on('submit', function (e)
    {
        e.preventDefault();
        let $form = $(this);
        $form.find('div[role="alert"]').hide();
        $.post($form.attr('action'), $form.serialize(), function (data)
        {
            if(data && data.status) {
                $('div[role="success-massage"]').show();
                $form.hide();
            }
        }, 'json')
            .fail(function(data)
            {
                if(data && data.responseJSON && data.responseJSON.message) {

                    $form.find('div[role="alert"]').show();
                    $form.find('div[role="alert"]').html(data.responseJSON.message);
                }
        });
        return false;
    });

    $('form[data-action="subscriptions.store"]').on('submit', function (e)
    {
        e.preventDefault();
        let $form = $(this);
        let $alert = $form.find('div[role="alert"]');
        let $success = $('div[role="success-' + $form.data('action') + '"]')

        $alert.hide();
        $form.parent().fadeTo("fast", 0.2);
        $.post($form.attr('action'), $form.serialize(), function (data)
        {
            if(data && data.status) {
                $success.show();
                $success.next('h3').hide();
                $form.hide();
            }
            $form.parent().fadeTo("fast", 1);
        }, 'json')
            .fail(function(data)
            {
                if(data && data.responseJSON && data.responseJSON.message) {
                    $form.parent().fadeTo("fast", 1);
                    $alert.show();
                    $alert.html(data.responseJSON.message);
                }
        });
        return false;
    });

    /*forgot password form*/
    $('form[data-action="password.email"]').on('submit', function (e)
    {
        e.preventDefault();
        let $form = $(this);
        let $alert = $form.find('div[role="alert"]');
        let $success = $('div[role="success-' + $form.data('action') + '"]')

        $alert.hide();
        $form.parent().fadeTo("fast", 0.2);
        $.post($form.attr('action'), $form.serialize(), function (data)
        {
            if(data) {
                $success.show();
                $form.hide();
                if (data.message) {
                    $success.html(data.message);
                }
            }
            $form.parent().fadeTo("fast", 1);
        }, 'json')
            .fail(function(data)
            {
                if(data && data.responseJSON && data.responseJSON.message) {
                    $form.parent().fadeTo("fast", 1);
                    $alert.show();
                    $alert.html(data.responseJSON.message);
                }
        });
        return false;
    });
    /*order and limit for products list*/
    $('form[role="products-order"] select').change(function() {
        console.log($(this));
        $(this).parents('form').submit();
    });

});

class Cart
{
    constructor() {
        this.countContainer = $('#cart-count');
        this.popupContainer = $('div[role="cart-popup"]');
    }

    remove(productId) {
        $.post('/cart/remove',{id: productId}, function (data) {cart.update(data)});
    }

    add_to_cart(productId, qty) {
        $.post('/cart/add',{id: productId, qty: qty}, function (data) {cart.update(data)});
    }

    update(data) {
        console.log(data);
        if (data && data.status)
        {
            this.#updateCount(data.count);

            if (data.content) {
                this.popupContainer.html(data.content);
            }

            this.#updateSummary(data);
        }
    }

    #updateCount(count) {
        this.countContainer.html(count);
    }

    #updateSummary(data) {
        if(data.subtotal) {
            $('[role="subtotal"]').html(data.subtotal);
        }
        if(data.discount) {
            $('[role="discount"]').html(data.discount);
        }
        if(data.vat) {
            $('[role="vat"]').html(data.vat);
        }
        if(data.total) {
            $('[role="total"]').html(data.total);
        }
        if(data.delivery) {
            $('[role="delivery"]').html(data.delivery);
        }

    }
}

class Checkout
{

}



// ------- UI helpers -------

function showMessage(messageText) {
    const messageContainer = document.querySelector("#payment-message");

    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;

    setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageContainer.textContent = "";
    }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
    if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
}
