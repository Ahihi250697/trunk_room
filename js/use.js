// const __loaded = $('.loaded');
// $(window).on('load', function () {
//     __loaded.remove();
// });
$(window).on('load', function () {
    let _id = window.location.href.split('#')[1];
    let ww = $(window).innerWidth();
    //let aa = $('#'+_id).offset().top;
    let hh = 140;
    ww > 768 ? hh = $('#' + _id).offset().top - 140 : hh = $('#' + _id).offset().top - 80;
    $('body, html').animate({
        scrollTop: hh
    }, 0);
});