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
                      

})