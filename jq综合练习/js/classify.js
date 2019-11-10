$(function() {
	$("#kind").children("li").click(function () {
		$(this).siblings("li").addClass("active");
		$(this).removeClass("active");	
		$(".shenti").children('.right').hide();
		$(".shenti").children('.right').eq($(this).index()).show();
	})
})