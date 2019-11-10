
	//首页倒计时效果
	function getRTime() {
		var starttime = new Date("2018/1/01");
		var mydate = new Date();
		var time = starttime - mydate;
		var d = Math.floor(time / 1000 / 60 / 60 / 24);
		var h = Math.floor(time / 1000 / 60 / 60 % 24);
		var m = Math.floor(time / 1000 / 60 % 60);
		var s = Math.floor(time / 1000 % 60);
		h=checkTime(h);
		m=checkTime(m);
		s=checkTime(s);
		document.getElementById("hour").innerHTML = h;
		document.getElementById("min").innerHTML = m;
		document.getElementById("miao").innerHTML = s;

	}
	setInterval(getRTime, 1000);
	function checkTime(i)
	{
		if(i<10)
		{ i="0"+i;}
		return i;
	}
	//首页搜索位置
	$(window).scroll(function(){
		if($(window).scrollTop()>=200){
			$(".top-line").css("top","0");					
		}
		else{
			$(".top-line").css("top","4%");
		}		
	})	
	
	

