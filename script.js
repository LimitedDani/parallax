$(window).scroll(function() {
    var height = $(window).scrollTop();
    console.log(height);
});
$(document).on('scroll', function() {
    var alpha = Math.min(20 + 40 * $(this).scrollTop() / 210, 0.9);
    var channel = Math.round(alpha * 255);


    $("#post4text").css("margin-right", Math.max(13000 - 5*window.scrollY , 0) + "px");
    $("#post3text").css("margin-right", Math.max(8000 - 5*window.scrollY , 0) + "px");
    $("#post2text").css("font-size", Math.max(250 - 0.2*window.scrollY, 0) + "px");
    $("#post1text").css("opacity", Math.max(1 - 0.004*window.scrollY, 0));
})