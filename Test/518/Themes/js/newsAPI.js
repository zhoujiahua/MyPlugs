$(function () {
	$.ajax({
		type: "get",
		url: "http://ok.softi.cn/Home/All",
		success: function (data) {

			var d = JSON.parse(data);
			var root = d.root;
			var news = root.news;

			//分页
			function ajaxPage() {
				var count = news.item.length;
				var oPage = 0;
				if (count % 10 == 0) {
					oPage += count / 10;
				} else if (count % 10 > 0 && count % 10 < 10) {
					oPage += (count / 10) + 1;
				}
				var oPages = parseInt(oPage);

				$(".page").paging({
					pageNo: 1,
					totalPage: oPages,
					totalSize: count,
					callback: function (num) {
						var pageNumber = num;
						// alert(pageNumber)
						console.log(pageNumber);
					}
				})
			} 

			ajaxPage();

			//新闻列表
			if (news) {
				var newsHtml = '<ul>';
				if (Array.isArray(news.item)) {
					$.each(news.item, function (index, item) {
						if (index < 10) {
							newsHtml += '<li><b>' + 0 + '' + (index + 1) + '</b><a href="' + item["@link"] + '" target="_blank" >' + item["#text"] + '</a></li>';
						}
					});
				} else {
					newsHtml += '<li><a href="' + news.item["@link"] + '" target="_blank" >' + news.item["#text"] + '</a></li>';
				}
				$(".jsNews").append(newsHtml + "</ul>");
			}

		}
	});

});