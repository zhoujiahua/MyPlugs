//以下代码仅为演示用,具体传入参数请参看接口描述详情页.
//需要引用jquery库
$(function() {

	//时间函数
	function formatterDateTime() {
		var date = new Date()
		var month = date.getMonth() + 1
		var datetime = date.getFullYear() +
			"" // "年"
			+
			(month >= 10 ? month : "0" + month) +
			"" // "月"
			+
			(date.getDate() < 10 ? "0" + date.getDate() : date
				.getDate()) +
			"" +
			(date.getHours() < 10 ? "0" + date.getHours() : date
				.getHours()) +
			"" +
			(date.getMinutes() < 10 ? "0" + date.getMinutes() : date
				.getMinutes()) +
			"" +
			(date.getSeconds() < 10 ? "0" + date.getSeconds() : date
				.getSeconds());
		return datetime;
	}

	//构造参数
	function loadParam(pageIndex) {
		return {
			"showapi_timestamp": formatterDateTime(),
			"showapi_appid": "62439", //这里需要改成自己的appid
			"showapi_sign": "5c01b361fae148a7aad1c6d0eaa84d38", //应用的密钥secret
			"channelId": "",
			"channelName": "",
			"title": "足球",
			"page": "1",
			"needContent": "0",
			"needHtml": "0",
			"needAllList": "0",
			"maxResult": "20",
			"id": "",
			"type": $(".ResearchNavListActive").data("id"),
			"category": $(".ResearchActive").data("id"),
			"pageIndex": "pageIndex"
		};
	}

	//初始化
	/*(function() {
		var parm = loadParam(1);
		getData(parm);

		award();
	}());*/

	//页码点击
	function pageHandler(page) {
		var parm = loadParam(page);
		getData(parm);
	}

	//var parm = loadParam(1);
	//getData(parm);
	getData();

	function getData() {
		$.ajax({
			type: 'post',
			url: 'http://route.showapi.com/109-35',
			dataType: 'json',
			data: {
				"showapi_timestamp": formatterDateTime(),
				"showapi_appid": "62439", //这里需要改成自己的appid
				"showapi_sign": "5c01b361fae148a7aad1c6d0eaa84d38", //应用的密钥secret
				"channelId": "",
				"channelName": "",
				"title": "足球",
				"page": "1",
				"needContent": "0",
				"needHtml": "0",
				"needAllList": "0",
				"maxResult": "20",
				"id": "",
			},
			error: function(XmlHttpRequest, textStatus, errorThrown) {
				alert("操作失败!");
			},
			success: function(res) {
				console.log(res);
				var newsList = res.showapi_res_body.pagebean;
				var arr = newsList.contentlist;
				var recordCount = newsList.allNum;

				//			debugger
				//var resPages = newsList.allPages;
				//debugger
				var pageCount = Math.ceil(recordCount / 10);
				if(pageCount <= 1) {
					$("#page").html("");
				} else {
					//$("#page").initPage(recordCount, param.pageIndex, pageHandler);
					$("#page").initPage(pageCount);
				}
			
			var html = "";
			$.each(arr, function(index, item) {
				//SYS_FLD_URL
				var projectName = item.channelName,
					projectUser = item.nid,
					projectTitle = item.title,
					projectTime = item.pubDate,
					projectRemark = item.source,
					projectLlink = item.link;
				
				html += '<li>'+'<a href="+projectLlink+" >'+projectTitle+'</a>'+'<li>';
				
				/*html += '<tr>' +
					'<td title="' + projectUser + '">' + mySubString(projectUser, 10) + '</td>' +
					'<td title="' + projectLevel + '">' + mySubString(projectLevel, 10) + '</td>' +
					'<td title="' + projectTime + '">' + mySubString(projectTime, 15) + '</td>' +
					'<td title="' + projectRemark + '">' + mySubString(projectRemark, 10) + '</td>' +
					'</tr>';*/
				
			});
			$(".new-list ul").html(html);
			}
			

			

		});
	}

})