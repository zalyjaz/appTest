//移动端设置屏幕宽度 自适应
window.onload = function() {
	var b = document.getElementsByTagName("body")[0];
	//获取屏幕的宽度    
	var w = window.innerWidth / 7.5;
	//大于750px ，让宽度设置为750px
	if(w > 100) {
		w = 100;
	}
	document.documentElement.style.fontSize = w + 'px'//
	//onresize事件会在窗口或框架被调整大小时发生
	window.onresize = function() {
		var w = window.innerWidth / 7.5;
		//屏幕的宽度大于750px 宽度设置为750px
		if(w > 100) {
			w = 100;
		}
		console.log(w);
		document.documentElement.style.fontSize = w + 'px'
	}
}

//JQuery 函数
$(function(){
	//返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>=200){
			$(".return img").css("display","block");					
		}
		else{
			$(".return img").css("display","none");
		}		
	})	
	$(".return img").click(function(){
		$(window).scrollTop(0);
	})	
	
	//首页搜索框根据鼠标滚动位置添加背景颜色
	$(window).scroll(function(){
		if($(window).scrollTop()>=300){
			$(".top-line").css("background","rgba(150,150,150,0.6)");					
		}
		else{
			$(".top-line").css("background","none");
		}		
	})	

	
/*开始       详情页面*/
	
	//详情分期首付百分值切换
	$(".fenqi-two li").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");	
	})
	//详情弹框加入购物车、立即购买
	$(".buy-now,.jia-car").click(function(){
		$(".mask").show();
		$(".detail-fenqi02,.buy1").click(function(){
			$(".mask").hide();
		})
	})	
	//详情页面商品  详情  评价切换
		$(".li-shops a").click(function(){
			$(this).children("span").addClass("a-shop");
			$(this).siblings().children("span").removeClass("a-shop");
			var index=$(this).index();
			$(".tab-body > div").eq(index).show().siblings().hide();
		})
	//三级配送地址
	$(".you").click(function(){
		$(".mask1").show();	
		var flag=1;
		$(".shi > li").click(function(){
			if(flag==1){
				var name=$(this).text();
				$("#font-span4").hide();
				$("#font-span1").html(name);
				$("#font-span1").addClass("font-span11");
				$("#sheng").html(name);
				var index=$("#sheng").index();
				$(".ul-body1 > ul").eq(index+1).show().siblings().hide();
				flag=2;		
			}
			else if(flag==2){
				var name=$(this).text();
				$("#font-span4").hide();
				$("#font-span2").html(name);
				$("#shi").html(name);
	  			var index=$("#shi").index();
				$(".ul-body1 > ul").eq(index+1).show().siblings().hide();
				flag=3;
				$("#sheng").click(function(){
					$("#font-span2,#shi").html(" ");
					$("#please-choose").css("border-bottom","none");
					$(this).css("border-bottom","2px solid #c81623");
					$(this).css("padding-bottom","0.15rem");
					$(".shi1").show().siblings().hide();
					$("#please-choose").click(function(){
						$("#sheng").css("border-bottom","none");
						$(this).css("border-bottom","2px solid #c81623");
						$(".shi1").hide();
						$(".shi1").next("ul").show();
						$("#font-span2,#shi").html(" ");
					})
				})				
			}
			else if(flag==3){
				var name=$(this).text();
				$("#font-span4").hide();
				$("#font-span3").html(name);
				$("#xian").html(name);
				var index=$("#xian").index();
				$(".ul-body1 > ul").eq(index-2).show().siblings().hide();
				$("#sheng,#shi,#xian").html(" ");				
				flag=1;	
				$(".mask1").hide();
			}
		})
		$(".peisong-to").click(function(e){
			e.stopPropagation();
		})
		$(".mask1").click(function(){
			$(this).hide();
		})
		
		$("#shi").click(function(){
			$("#please-choose").css("border-bottom","none");
			$(this).css("border-bottom","2px solid #c81623");
			$(this).css("padding-bottom","0.15rem");
			$("#xian").hide();
			$(".shi1").next("ul").show().siblings().hide();
			$("#please-choose").click(function(){
				$("#shi").css("border-bottom","none");
				$(this).css("border-bottom","2px solid #c81623")
				$(".shi2").hide();
				$(".shi2").next("ul").show();
				$("#font-span3").html(" ");
				$(".shi2").next("ul").children("li").click(function(){
					var name=$(this).text(); 
					$("#font-span4").hide();
					$("#font-span3").html(name);
					$("#xian").html(name);
				})
			})
		})	
	})	

/*结束      详情页面*/

/*开始      购物车页面*/
	
	//购物车全选，反选
	var flag=1;
	$(".ul-one1 li").click(function(){
		if(flag==1){
			$(".choose-no").hide();
			$(".choose-yes").show();
			flag=2;
		}
		else if(flag==2){
			$(".choose-no").show();
			$(".choose-yes").hide();
			flag=1;
		}
	})	
	
	//购物车一个店全选、全不选
	$(".dian > .li-left").click(function(){
		if(flag==1){
			$(this).children(".choose-no").hide();
			$(this).children(".choose-yes").show();
			$(this).parent().siblings().children().children(".choose-no").hide();
			$(this).parent().siblings().children().children(".choose-yes").show();
			flag=2;
		}
		else if(flag==2){
			$(this).children(".choose-no").show();
			$(this).children(".choose-yes").hide();
			$(this).parent().siblings().children().children(".choose-no").show();
			$(this).parent().siblings().children().children(".choose-yes").hide();
			flag=1;
		}
	})

	//购物车单样商品选中、不选中
	$(".dian1 > .li-left").click(function(){
		if(flag==1){
			$(this).children(".choose-no").hide();
			$(this).children(".choose-yes").show();
			flag=2;
		}
		else if(flag==2){
			$(this).children(".choose-no").show();
			$(this).children(".choose-yes").hide();
			flag=1;
		}
		
	})
	
	//点击编辑删除商品
	$(".bian-ji").click(function(){
		$(this).parent().parent().parent().parent().hide();
		$(this).parent().parent().parent().parent().next(".wacom-bian").show();
		$(".delete").click(function(){
			$(this).parent().hide();
		})
	})
	//点击一个店编辑效果
	$(".finish").click(function(){
		if(flag==1){
			$(this).parent().parent().children(".li-left").children(".choose-yes").hide().prev(".choose-no").show();
			$(this).html("编辑");
			flag=2;
		}
		else if(flag==2){
			$(this).parent().parent().children(".li-left").children(".choose-yes").show().prev(".choose-no").hide();
			$(this).html("完成");
			flag=1;
		}
	})
	$(".delete").click(function(){
		$(this).parent().hide();
		$(this).parent().prev(".dian").children(".li-left").children(".choose-yes").hide().prev(".choose-no").show();
		$(".ul-one1 > li > .choose-no").show();
		$(".ul-one1 > li > .choose-yes").hide();
	})
	$(".bian-ji1").click(function(){
		if(flag==1){
			$(".wacom").hide();
			$(".wacom-bian").show();
			$(this).html("完成");
			$(".finish").html("完成");
			$(".choose-yes").show().prev(".choose-no").hide();
			flag=2;
		}
		else if(flag==2){
			$(".wacom").hide();
			$(".wacom-bian").show();
			$(".finish").html("编辑");
			$(".choose-yes").hide().prev(".choose-no").show();
			flag=1;
		}
	})
	//点击+号、-号 实现增加、减少商品数量
	$(".number > .img1").click(function(){
		var number=$(this).parent().children("p").text();		
		number=number-1;
		if(number<1){
			number=1;
			$(this).parent().children("p").html(number);
		}
		$(this).parent().children("p").html(number);	
	})
	$(".number > .img2").click(function(){
		var number1=$(this).parent().children("p").text();	
		console.log(number1);
		number1++;	
		console.log(number1);
		$(this).parent().children("p").html(number1);	
	})
	
/*结束      购物车页面*/


/*开始      分类页面*/
	//分类商品切换
	$(".style-left li").click(function(){
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");
		var index=$(this).index();
		console.log(index);		
		$("#ul-body > ul").eq(index).show().siblings().hide();

	})		
/*结束      分类页面*/


/*开始      详情页面*/
	
	//详情页面 点击收藏效果
	$(".shou03").click(function(){
		$(this).hide();
		$(".shou04").show();
	})
	$(".shou04").click(function(){
		$(this).hide();
		$(".shou03").show();
	})

/*结束      详情页面*/


/*开始      搜索页面*/
	$(".record-info > ul > li").click(function(){
		var name=$(this).text();
		$(".inpt").val(name);
	})
	$(".record-right").click(function(){
		$("#confirm").show();
		$(".quxiao").click(function(){
			$("#confirm").hide();
		})
		$(".queding").click(function(){
			$(".record-info").hide();
			$(".record").hide();
			$("#confirm").hide();
		})
	})
/*结束      搜索页面*/
})