$('#barNav').on('click', function(){
    if(!$(this).is('.active')){
        $(this).addClass('active');
        $('.header-nav').addClass('active');
        $('html').css('overflow', 'hidden');
    }else{
        $(this).removeClass('active');
        $('.header-nav').removeClass('active');
        $('html').css('overflow', 'visible');
    }
    
})

$('#topPage').on('click', function(){
    $('body, html').animate({scrollTop: 0}, 'slow');
});

function getScrollTop() {
    return (
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.scrollY ||
      window.pageYOffset
    );
  }

window.addEventListener('scroll', function(){
    if(getScrollTop() > 0) {
        $('#topPage').addClass('active');
        $('.btn-entySp').addClass('active');
        $('.header').addClass('active');
    }else{
        $('#topPage').removeClass('active');
        $('.btn-entySp').removeClass('active');
        $('.header').removeClass('active');
    }
})