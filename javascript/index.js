$(window).scroll(function(){
    if($(this).scrollTop()>=200){
        $("#navbarNav").addClass("noTransparrent");
     }
    else{
        $("#navbarNav").removeClass("noTransparrent");
     }
});

$(document).ready(function(){
    $("a.scroll").on('click', function(event) {
 
        var hash = this.hash;
 
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    
    });

    $("form").validate();

})


$('.circle').circleProgress({
	startAngle: -Math.PI / 2, 
	fill: "#0575e6", 
}).on('circle-animation-progress', function (event, progress, stepValue) {
	$(this).find('span').html(Math.round(stepValue * 100) + '%');
});