/// <reference path="jquery-1.10.2.min.js" />

var i = 0;
var timer;
$(function () {//页面加载完毕之后
    $(".ig").eq(0).show().siblings().hide();//第一个图片显示，其余的图片隐藏
    Lunbo();
    $(".tab").hover(function () {//鼠标移到、离开下标之后
        i = $(this).index();//获取到当前鼠标放上去的下标的索引，并将值赋值给i
        ShowPicTab();
        clearInterval(timer);//清除定时器
    }, function () {
        Lunbo();
    });   
});

function ShowPicTab() {
    $(".ig").eq(i).stop(true, true).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function Lunbo() {
    timer = setInterval(function () {//图片间隔4s轮播一次
        i++;
        if (i == 3) {
            i = 0;
        }
        ShowPicTab();//当前图片加上bg样式，其余的移除bg样式
    }, 2500);
}

var i = 0;
$(function () {//页面加载完毕之后
    $(".gouwuche a").click(function () {//点击加入购入车之后
        $(this).css("background-color", "#ccc").unbind("click");
        i++;
        var thisImg = $(this).parent().parent().find("img");//找到当前点击的按钮对应的图片
        var cloneImg = thisImg.clone();//把图片复制一份
        cloneImg.css({//设置图片初始的样式
            "width": thisImg.width(),
            "height": thisImg.height(),
            //"border-radius": "100%",
            "position": "absolute",
            "left": thisImg.offset().left,
            "top": thisImg.offset().top,
            "z-index": 2,
            "opacity": ".8"
        });
        cloneImg.appendTo($("body")).animate({//吧复制的图片加到网页中却，并执行一个动画
            "left": $("#dcar").offset().left,
            "top": $("#dcar").offset().top,
            "height": "30px",
            "width": "30px"
        }, 1000, function () {
            cloneImg.remove();//吧图片从网页中移除掉
            $(".dnum").text(i);
        });

    });
});
$(function () {
    $(".pic").mouseover(function () {
        $(this).stop(true).animate({ "width": "789px" }, 500).siblings().stop(true).animate({ "width": "100px" }, 500);
    });
});
