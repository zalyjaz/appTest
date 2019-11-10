$(function() {
	$(".choose").children("p").click(function () {
		$(this).addClass("active");	
		$(this).siblings("p").removeClass("active");
		
	})
	$(".buy").click(function () {		
		$(".tt").show();
		$(this).prevAll("a").hide();
		$(this).text("确定");
		$(this).click(function () {
			$(".tt").hide();
			$(this).prevAll("a").show();
			$(this).text("立即购买");
		})
	})
	$(".cont li").children("span").click(function () {
		$(this).addClass("active");			
		$(this).siblings("span").removeClass("active");		
	})
})