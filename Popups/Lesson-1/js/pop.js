$(function(){
	$("#btn").click(function(){
		$("#login").show();
		$(".mask").show();

		var $winWidth = $(window).width();
		var $winHeight = $(window).height();

		var $loginWidth = $("#login").width();
		var $loginHeight = $("#login").height();

		$("#login").css( {"left" : ($winWidth - $loginWidth) / 2 } );
		$("#login").css( {"top" : ($winHeight - $loginHeight) / 2 } );

	});

	$(window).bind("scroll resize", function() {
		var $winWidth = $(window).width();
		var $winHeight = $(window).height();

		var $loginWidth = $("#login").width();
		var $loginHeight = $("#login").height();
		var $scrollTop = $("body").scrollTop();

		$("#login").css( {"left" : ($winWidth - $loginWidth) / 2 } );
		$("#login").css( {"top" : ($winHeight - $loginHeight) / 2 + $scrollTop } );
	});

	$(".close").click(function(){
		$("#login").hide();
		$(".mask").hide();
	});
});