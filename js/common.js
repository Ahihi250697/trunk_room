$('#barNav').on('click', function(){
    if(!$(this).is('.active')){
        $(this).addClass('active');
        $('.header-nav').addClass('active');
    }else{
        $(this).removeClass('active');
        $('.header-nav').removeClass('active');
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
    }else{
        $('#topPage').removeClass('active');
        $('.btn-entySp').removeClass('active');
    }
})