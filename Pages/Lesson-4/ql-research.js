/*
*科研项目页面
*/

$(function () {

    //构造参数
    function loadParam(pageIndex) {
        return {
            type: $(".ResearchNavListActive").data("id"),
            category: $(".ResearchActive").data("id"),
            pageIndex: pageIndex
        };
    }

    //获取科研项目数据
    function getData(param) {
        $.ajax({
            type: "GET",
            url: "/QinLing/GetProject",
            data: param,
            dataType: "json",
            success: function (d) {
                var arr = d.data;
                //debugger
                var recordCount = d.total;
                var pageCount = Math.ceil(recordCount / 10);
                if (pageCount <= 1) {
                    $("#page").html("");
                }
                else {
                    $("#page").initPage(recordCount, param.pageIndex, pageHandler);
                }
                var html = '';
                $.each(arr, function (index, item) {
                    //SYS_FLD_URL
                    var projectName = item.ProjectName,
                        projectUser = item.ProjectUser,
                        projectLevel = item.ProjectLevel,
                        projectTime = item.ProjectTime,
                        projectRemark = item.ProjectRemark,
                        projectDetail = item.ProjectDetail;

                    //如果存在详情，则标题展示为超链接
                    var title = projectDetail ?
                        '<a title="' + projectName + '" style="color:#A3865A;" href="javascript:;">' + mySubString(projectName, 10) + '</a><p style="display:none;line-height:1.8;">' + projectDetail + '</p>'
                        : '<span style="cursor:default;" title="' + projectName + '">' + mySubString(projectName, 10) + '</span>';
                    html += '<tr>'
                              + '<td>' + title + '</td>'
                              + '<td title="' + projectUser + '">' + mySubString(projectUser, 10) + '</td>'
                              + '<td title="' + projectLevel + '">' + mySubString(projectLevel, 10) + '</td>'
                              + '<td title="' + projectTime + '">' + mySubString(projectTime, 15) + '</td>'
                              + '<td title="' + projectRemark + '">' + mySubString(projectRemark, 10) + '</td>'
                           + '</tr>';
                });
                $(".ResearchDataList table tbody").html(html);
            },
            error: function () { }
        });
    }

    //左侧点击
    $(".ResearchNavList li").click(function () {
        $(".ResearchNavList li").removeClass("ResearchNavListActive");
        $(this).addClass("ResearchNavListActive");
        var parm = loadParam(1);
        getData(parm);
    });

    //右侧点击
    $(".qlResearchConMenu ul li").click(function () {
        $(".qlResearchConMenu ul  li").removeClass("ResearchActive");
        $(this).addClass("ResearchActive");
        var parm = loadParam(1);
        getData(parm);
    });

    //页码点击
    function pageHandler(page) {
        var parm = loadParam(page);
        getData(parm);
    }

    //科研奖项
    function projectAwards() {
        //闭包
        var awardPageIndex = 0;
        return function () {
            awardPageIndex += 1;
            $.ajax({
                type: "GET",
                url: "/QinLing/GetAwards?pageIndex=" + awardPageIndex,
                dataType: "json",
                success: function (d) {
                    var arr = d.data;
                    var recordCount = d.total;
                    var page = Math.ceil(recordCount / 10);

                    var html = '';
                    $.each(arr, function (index, item) {
                        var awardTime = item.AwardTime,
                             projectName = item.ProjectName,
                             awardName = item.AwardName,
                             awardDetail = item.AwardDetail;

                        var title = awardDetail ?
                                    '<a title="' + projectName + '" style="color:#A3865A;" href="javascript:;">' + projectName + '</a><p style="display:none;line-height:1.8;">' + awardDetail + '</p>'
                                    : '<span style="cursor:default;" title="' + projectName + '">' + projectName + '</span>';
                        html += '<tr>'
                                  + '<td title="' + awardTime + '">' + awardTime + '</td>'
                                  + '<td>' + title + '</td>'
                                  + '<td title="' + awardName + '">' + awardName + '</td>'
                               + '</tr>';
                    });

                    $(".AwardsTableList table tbody").append(html);

                    if (awardPageIndex >= page) {
                        $(".more").remove();
                        return;
                    }
                },
                error: function () { }
            });
        }
    }

    var award = projectAwards();

    $(".more").click(function () {
        award();
    });

    //查看详情
    $("table").on("click", "td a", function () {
        var title = $(this).attr("title");
        var detail = $(this).next("p").clone();
        var d = dialog({
            title: title,
            content: detail,
            width: 600,
            backdropOpacity: 0.3,
            fixed: true
        });
        d.showModal();
    });

    //初始化
    (function () {
        var parm = loadParam(1);
        getData(parm);

        award();
    }());
});