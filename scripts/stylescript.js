
$(document).ready(function() {
    $("body").css({'padding-top': 1.5*$('nav.navbar').height()});
});

$(document).scroll(function() { 
    var scroll_start = 0;
    var offset = 1.5*$('nav.navbar').height();
        scroll_start = $(document).scrollTop();
        if(scroll_start < offset) {
            $('nav.navbar').addClass('navbar-light').removeClass('navbar-dark').addClass('bg-light').removeClass('bg-dark');
        } else {
            $('nav.navbar').addClass('navbar-dark').removeClass('navbar-light').addClass('bg-dark').removeClass('bg-light');
        }
});
