//媒体报道更多页面JS
$(function() {
	$.ajax({
		type: "get",
		url: "http://ok.softi.cn/Home/All",
		success: function(data) {
			var d = JSON.parse(data);
			var root = d.root;

			var news = root.news;

			//媒体报道
			if(news) {
				var newsHtml = '<ul>';
				if(Array.isArray(news.item)) {
					$.each(news.item, function(index, item) {
						newsHtml += '<li><b>' + 0 + '' + (index + 1) + '</b><a href="' + item["@link"] + '" target="_blank" >' + item["#text"] + '</a></li>';
					});
				} else {
					newsHtml += '<li><a href="' + news.item["@link"] + '" target="_blank" >' + news.item["#text"] + '</a></li>';
				}
				$(".madia-list").append(newsHtml + "</ul>");
			}
		}
	});

});