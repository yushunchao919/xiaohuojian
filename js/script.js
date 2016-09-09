
$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#2A3E63', '#14466C', '#33799A', '#178BC1', '#ef820'],
	});
});
$(function(){
  $(".button").click(function(){
	$(this).hide();
	$(".flash1,.flash").hide();
	$(this).siblings(".huojian").animate({top:'-1000px'},1000,function(){
      $(this).parents(".huojian_bj").hide();
	  $(".tow").show();
    })
  })
$(".plan").animate({width:'0%'},0,function(){
  $(".plan_text").text("0%");
})
$(".plan").animate({width:'33%'},100,function(){
  $(".plan_text").text("33%");
});
$(".plan").animate({width:'66%'},100,function(){
  $(".plan_text").text("66%");
});
$(".plan").animate({width:'100%'},100,function(){
  $(".plan_text").text("100%");
});
$(".plan").animate({width:'100%'},100,function(){
  $(".plan_text").text("100%");
  $(".plan_wrap").hide();
  $(".button").css("display","inline");
});
})
