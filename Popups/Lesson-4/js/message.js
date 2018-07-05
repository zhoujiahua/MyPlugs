/*登录注册JS*/
$(function() {
	
	//留言
	$("#leave_btn").click(function() {
		$("#js_message_leave").show();
		$("#js_bgc").show();
		getMargin();
	});
	//回复
	$("#reply_btn").click(function() {
		$("#js_message_reply").show();
		$("#js_bgc").show();
		getMargin();
	});

	adaptive();

	//关闭弹窗
	$(".js_close").click(function() {
		$(".message-c").hide();
		$("#js_bgc").hide();
	});

	//计算边距
	function getMargin() {
		var $winWidth = $(window).width();
		var $winHeight = $(window).height();

		var $messageWidth = $(".message-c").width();
		var $messageHeight = $(".message-c").height();

		$(".message-c").css({
			"left": ($winWidth - $messageWidth) / 2
		});
		$(".message-c").css({
			"top": ($winHeight - $messageHeight) / 2
		});
	}
	
	//滚动居中
	function adaptive() {
		$(window).bind("scroll resize", function() {
			var $winWidth = $(window).width();
			var $winHeight = $(window).height();

			var $messageWidth = $(".message-c").width();
			var $messageHeight = $(".message-c").height();
			var $scrollTop = $("body").scrollTop();

			$(".message-c").css({
				"left": ($winWidth - $messageWidth) / 2
			});
			$(".message-c").css({
				"top": ($winHeight - $messageHeight) / 2 + $scrollTop
			});
		});

	};

});