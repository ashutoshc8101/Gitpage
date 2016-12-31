$(".nav li").on("click", function(){
    $(".nav li").removeClass("active");
    $(this).addClass("active");
})
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(".carousel").carousel({
    interval: 5000,
    wrap: true,
    pause: false,
    keyboard: true
});
