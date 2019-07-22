$(document).ready(function () {

    // active links (a) above blue line
    var a =$("a.nav-link");
    console.log(a);

    a.click(function () {
        a.removeClass('active');
        $(this).addClass('active');
    });



    var nav_a = $("#home a");

    nav_a.click(function() {
        var data = $(this).data("target");
        // alert(data)
        var t = $(data).offset().top;
        $("html, body").animate({
            scrollTop: t
        }, 1000)
    })


});