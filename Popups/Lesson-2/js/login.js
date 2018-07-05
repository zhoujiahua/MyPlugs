/*登录注册JS*/
$(function() {
	
	//点击事件
	$("#login_btn").click(function() {
		$(".login-register").show();
		$(".login-bg").show();
		getMargin();
	});
	
	adaptive();

	//关闭弹窗
	$(".close").click(function() {
		$(".login-c").hide();
		$(".login-bg").hide();
	});

	//去注册
	$("#go_register").click(function() {
		$(".login-c").hide();
		$(".login-signin").show();
	})

	//重置密码
	$("#forget_pwd").click(function() {
		$(".login-c").hide();
		$(".login-password").show();
	})

	//计算边距
	function getMargin() {
		var $winWidth = $(window).width();
		var $winHeight = $(window).height();

		var $messageWidth = $(".login-c").width();
		var $messageHeight = $(".login-c").height();

		$(".login-c").css({
			"left": ($winWidth - $messageWidth) / 2
		});
		$(".login-c").css({
			"top": ($winHeight - $messageHeight) / 2
		});
	}
	
	//滚动居中
	function adaptive() {
		$(window).bind("scroll resize", function() {
			var $winWidth = $(window).width();
			var $winHeight = $(window).height();

			var $messageWidth = $(".login-c").width();
			var $messageHeight = $(".login-c").height();
			var $scrollTop = $("body").scrollTop();

			$(".login-c").css({
				"left": ($winWidth - $messageWidth) / 2
			});
			$(".login-c").css({
				"top": ($winHeight - $messageHeight) / 2 + $scrollTop
			});
		});

	};

});