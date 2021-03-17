$(function() {
    "use strict";
    var obj = {
        init: function() {

            //Anchor link
            $('a[href^="#"]').click(function() {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 768) {
                        $('html,body').animate({
                            scrollTop: p.top - 200
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    }
                }
                return false;
            });

            //Anchor scroll
            var hash1 = location.hash;
            var $root = $('html, body');
            if (hash1 !== "") {
                var top01 = $(hash1).offset().top;
                if ($(window).width() > 768) {
                    $root.animate({ scrollTop: top01 - 200 }, 600);
                } else {
                    $root.animate({ scrollTop: top01 - 100 }, 600);
                }
            }
        }

    };

    obj.init();

});