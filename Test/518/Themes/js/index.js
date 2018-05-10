/*主页JS*/
$(function () {

	$(".news-menu-ul li").on({
		click: function () {
			var index = $(this).index();
			$(".news-menu-ul li").eq(index).addClass("news-menu-active").siblings().removeClass("news-menu-active");
			$(".news-tabc").hide().eq(index).show();
		}
	})
});