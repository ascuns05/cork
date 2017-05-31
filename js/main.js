$(".margin-wrapper img").click(function() {
    $(".show_popup").css("display", "block");
    $(".show_popup img").attr("src", this.src);
    return false;
});
$(".child").click(function() {
    $(".show_popup").css("display", "block");
    $(".show_popup img").attr("src", this.id);
    return false;
});
$(".inner").click(function() {
    $(".show_popup").css("display", "block");
    $(".show_popup img").attr("src", this.id);
    return false;
});
$(".exit").click(function() {
    $(".show_popup").css("display", "none");
});

$(document).ready(function(){
			$("header").sticky({topSpacing: 1000});
});



$(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('a').addClass('white');
            $('li a i.fa').css('color', '#2b2b2b');
            $('.nav-bar').css('background-color', '#2b2b2b');
            $('header').addClass('scroll_header');
            $('#nav li a').addClass('scroll_nav');
        } else {
            $('a').removeClass('white');
            $('.nav-bar').css('background-color', '#fff');
            $('li a i.fa').css('color', '#fff');
            $('header').removeClass('scroll_header');
            $('#nav li a').removeClass('scroll_nav');
        }
    })