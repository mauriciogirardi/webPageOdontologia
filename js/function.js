$(function(){

    //efeito do menu desktop.
    $('nav a').hover(function(){
        $('nav#desktop li').removeClass('selected')
        $(this).parent().addClass('selected')
    })

    // Menu-mobile
    $('.mobileBtn').click(function(){
        $('nav#menu-mobile ul').slideToggle()
        $('.mobileBtn').toggleClass('toggle')
        
    })

    //buttom scroll to top.
    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop : 0},800)
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn()
        } else {
            $('#topBtn').fadeOut()
        }
    })
             
})

 