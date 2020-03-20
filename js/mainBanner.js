define(["jquery"], function($){
    function bannerImg(){//轮播图
        var lbBig = $(".lunbo_box");
        var lbBox = $(".lunbo_img");
        var lbImg = $(".lunbo_img").find("img");
        let navBtn = $(".lunbo_btn").find("nav");
        let iNow = 0;
        let timer = null;
    
        timer = setInterval(function(){
            iNow++;
            tab();
        },5000)
        navBtn.click(function(){
            iNow = $(this).index();
            navBtn.removeClass("nav_bottom");
            tab();
            $(this).addClass("nav_bottom");
        })
        function tab(){
            navBtn.removeClass("nav_bottom").eq(iNow).addClass("nav_bottom");
            if(iNow == 11){
                navBtn.eq(0).addClass("nav_bottom");
            }
            lbBox.animate({left: -iNow * lbImg.width()},function(){
                if(iNow == 11){
                    lbBox.css("left", 0);
                    iNow = 0;
                }
            })
        }
        lbBig.mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            },5000)
        })
        window.onresize = function(){
            var windowWidth = document.body.clientWidth || document.documentElement.clientWidth;
            if(windowWidth <= 970){
                $(".lunbo_btn nav").each(function(index,item){
                    $(item).html(index+1);
                })
            }else{
                $(".lunbo_btn nav").eq(0).html("暖春日 惠三月");
                $(".lunbo_btn nav").eq(1).html("ENVY13宅出新本事");
                $(".lunbo_btn nav").eq(2).html("星14轻薄本");
                $(".lunbo_btn nav").eq(3).html("开工新机惠");
                $(".lunbo_btn nav").eq(4).html("ENVY木纹新品上市");
                $(".lunbo_btn nav").eq(5).html("暗影5笔记本");
                $(".lunbo_btn nav").eq(6).html("暗影台式机系列");
                $(".lunbo_btn nav").eq(7).html("商用站台式机系列活动专场");
                $(".lunbo_btn nav").eq(8).html("打印机耗材活动专场");
                $(".lunbo_btn nav").eq(9).html("商用站工作站系列活动专场");
                $(".lunbo_btn nav").eq(10).html("今天你想采购什么？");
            }
        }
        
    }
    function bannerBottom(){
        let timer = null;
        let iNow = 0;
        $(".bannerBoxRight img").click(function(){
            iNow = $(this).index();
            btmTab();
        })
        function btmTab(){
            if(iNow == 3){
                iNow = 0;
            }
            $(".bannerImgBox img").removeClass("bottomImg").eq(iNow).addClass("bottomImg");
            $(".bannerImgBox img").hide().css("opacity",0.4).eq(iNow).show().animate({opacity:1},2000);
            $(".bannerBoxRight img").removeClass("bottomBtnImg").eq(iNow).addClass("bottomBtnImg");
        }
        timer = setInterval(function(){
            iNow++;
            btmTab();
        },3000);
        $(".bannerBox .bannerBoxLeft,.bannerBoxRight").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                btmTab();
            },2000)
        })
    }

    return {
        bannerImg: bannerImg,
        bannerBottom:bannerBottom
    }
})


