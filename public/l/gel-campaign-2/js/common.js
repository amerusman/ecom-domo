/* ===========> Scripts Firing <=========== */
window.addEventListener( "load", function () {
    lav_custom_animation();
    lav_languages();
    lav_button_up();
    lav_sticky_button();
    lav_get_utm();
});

jQuery(window).on( 'orientationchange', function () {
    lav_force_show_animated();
});

let clickCounter = 1;

/* ===========> Scripts Helpers <=========== */
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

/* ===========> Scripts Declaration <=========== */

function lav_custom_animation() {
    setTimeout(function(){
        let animatedColumns = [];
        let checkScroll = 0;
        let windowHeight = jQuery(window).height();

        jQuery('.lav-animation').each(function(i, product){
            let module_offset = jQuery(product).offset().top;
            let module_show = windowHeight - jQuery(product).innerHeight() / 4;
            let delay = jQuery(product).data('delay');
            let elHeight = jQuery(product).height();

            if( elHeight > windowHeight * 2 ){
                module_show = windowHeight - jQuery(product).innerHeight() / 4;
            }

            animatedColumns[i] = [ jQuery(product), module_show, module_offset ];

            if( jQuery(window).scrollTop() + module_show >= module_offset ) {
                if( typeof delay != 'undefined' ) {
                    setTimeout(function(){
                        jQuery(product).addClass('loaded');
                    }, delay);
                } else {
                    jQuery(product).addClass('loaded');
                }
            }
        });

        jQuery(window).on('scroll', function(){
            let currentScroll = jQuery(this).scrollTop();

            if( currentScroll > checkScroll + 100 ){

                jQuery(animatedColumns).each(function(i, product){
                    if( currentScroll + product[1] >= product[2] ){

                        if( typeof delay != 'undefined' ) {
                            setTimeout(function(){
                                product[0].addClass('loaded');
                            }, delay);
                        } else {
                            product[0].addClass('loaded');
                        }
                    }
                });

                checkScroll = currentScroll;
            }
        });
    }, 500);
}

function lav_force_show_animated() {
    jQuery('.lav-animation').each(function(i, product){
        jQuery(product).addClass('loaded')
    });
}

function lav_button_up() {
    jQuery(window).on('scroll', function() {
        if( jQuery(this).scrollTop() > 800 ){
            jQuery('.lav-button-up').addClass('active');
        } else {
            jQuery('.lav-button-up').removeClass('active');
        }
    });

    jQuery('.lav-button-up').on('click', function() {
        jQuery('body,html').animate({'scrollTop':0}, 500);
    });
}

function lav_languages() {
    jQuery('.lav-current-language').on('click', function() {
        jQuery(this).next().slideToggle();
    });
}

function lav_sticky_button() {
    let currentScroll = jQuery(window).scrollTop();

    // Sticky button appearance script
    stickyButton = jQuery('.lav-sticky-button .primary-btn');
    let stickyButtonHeight = stickyButton.outerHeight();

    stickyButton.css('bottom', '-' + stickyButtonHeight + 'px');

    // Show sticky on load
    if( currentScroll > stickyButtonHeight + 800 ){
        stickyButton.addClass('is-visible');
    }

    // Show sticky on scroll
    jQuery(window).on('scroll', function(){
        let currentScroll = jQuery(this).scrollTop();

        if( currentScroll > stickyButtonHeight + 800 ){
            stickyButton.addClass('is-visible');
        } else {
            stickyButton.removeClass('is-visible');
        }
    });
}

function lav_get_utm() {
    let paramsUTM = window.location.search.substring(1);
    let UTCDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString();
    if (paramsUTM) {
        document.cookie = `utm =${JSON.stringify(decodeURI(paramsUTM))}; expires=${UTCDate}`;
    }
    let _location = $(this).data('location')
    let resultsUTM = document.cookie.match(/utm=(.+?)(;|$)/) 

    $('.button.cta').click(function() {
        if (resultsUTM !== null) {
            $.post('/products' + JSON.parse(resultsUTM[1]));
        }
    })
}


