$(function(){
	$("#btn").click(function(){
		$("#js_message").show();
		$(".mask").show();

		var $winWidth = $(window).width();
		var $winHeight = $(window).height();

		var $messageWidth = $("#js_message").width();
		var $messageHeight = $("#js_message").height();

		$("#js_message").css( {"left" : ($winWidth - $messageWidth) / 2 } );
		$("#js_message").css( {"top" : ($winHeight - $messageHeight) / 2 } );

	});

	$(window).bind("scroll resize", function() {
		var $winWidth = $(window).width();
		var $winHeight = $(window).height();

		var $messageWidth = $("#js_message").width();
		var $messageHeight = $("#js_message").height();
		var $scrollTop = $("body").scrollTop();

		$("#js_message").css( {"left" : ($winWidth - $messageWidth) / 2 } );
		$("#js_message").css( {"top" : ($winHeight - $messageHeight) / 2 + $scrollTop } );
	});

	$(".close").click(function(){
		$("#js_message").hide();
		$(".mask").hide();
	});
});