$(document).bind("click",function(e){
    var clickMe=$(e.target);/*获取点击元素*/
    if(!clickMe.hasClass("select-title")){/*点击元素不是下拉框标题时*/
        $(".select-box ul").addClass("none").removeClass("block");
        if(clickMe.parent().hasClass("select-con")) {/*点击元素是下拉选项时*/
            var currenLiHtml = clickMe.html();/*获取点击的下拉选项HTML*/
            clickMe.parent().siblings(".select-title").html(currenLiHtml);/*把点击的下拉选项HTML放到下拉标题*/
            clickMe.addClass("current").siblings().removeClass("current");}/*给点击的下拉选项加背景色*/
    }else if(clickMe.siblings(".select-con").hasClass("none")){/*点击下拉标题时如果有none类的话*/
        clickMe.parents("body").find(".select-con").addClass("none").removeClass("block");/*点击下拉标题时如果有none类的话,全部下拉关闭，然后在展开当前的下拉*/
        clickMe.parents("body").find(".select-con").addClass("none").removeClass("block");/*点击下拉标题时如果有none类的话,全部下拉关闭，然后在展开当前的下拉*/
        clickMe.siblings(".select-con").addClass("block").removeClass("none");
    }else if(clickMe.siblings(".select-con").hasClass("block")){/*点击下拉标题时如果有block类下拉是展开的话*/
        $(".select-box ul").addClass("none").removeClass("block");
    }
});

$(document).ready(function () {
    $("#user-signin").bind("click",function () {
        $(".triangle").slideToggle(50);
        $(".sign-in-info").slideToggle(50);
    })
});
