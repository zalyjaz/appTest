$(function() {
	$(".dian").click(function () {
		$(this).parents().next(".dh").toggle();
		$(this).parents().next(".think").toggle();
	})
	$(window).scroll(function(){
		$(window).scrollTop();
		var val1=$(window).scrollTop();
		console.log(val1);
		//返回顶部
		if(val1>100){
			$("#dingbu").css("background","rgba(0,0,0,0.5)");	
		}else{
			$("#dingbu").css("background","none");	
		}
	})
	var starttime = new Date("2017/10/22");
	  setInterval(function () {
	    var nowtime = new Date();
	    var time = starttime - nowtime;
	    var day = parseInt(time / 1000 / 60 / 60 / 24);
	    var hour = parseInt(time / 1000 / 60 / 60 % 24);
	    var minute = parseInt(time / 1000 / 60 % 60);
	    var seconds = parseInt(time / 1000 % 60);
	    $('.timespan').html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
	  }, 1000)
	
})