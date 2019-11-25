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

    //scroll do menu outomatico.
    $('nav a').click(function(){
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top

        $('html,body').animate({'scrollTop':offSetTop},800)

        return false;
    })
             
})

 