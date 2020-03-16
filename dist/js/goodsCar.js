define(["jquery","jquery-cookie"],function($){
    function addCars(){
        $(".goodsRecall").click(function(){
            $(".goodsCar").css("display","none");
        })
        $(".header_right_bottom a").eq(1).click(function(){
            if($(".goodsCar").css("display") == "none"){
                $(".goodsCar").css("display","block");
            }else{
                $(".goodsCar").css("display","none");
            }
            
            $(".mine").css("display","none");
            return false;
        })
        $(".header_right_bottom a").eq(3).click(function(){
            if($(".mine").css("display") == "none"){
                $(".mine").css("display","block");
            }else{
                $(".mine").css("display","none");
            }
            $(".goodsCar").css("display","none");
            return false;
        })
        goods_sum();
        goods_show();
        $(".indexCenter1").on("click","button",function(){//添加购物车
            var title = $(this).siblings().find("a").html();
            var price = $(this).siblings(".price").find("i").html();
            var img = $(this).parent().siblings(".goodsImg").find("a img")[0].src;

            var first = $.cookie("goods") == null ? true : false;
            if(first){
                var arr = [{name : title,money : price,picture : img,num : 1}];
                $.cookie("goods",JSON.stringify(arr),{
                    expires: 7
                })
            }else{
                var cookieArr = JSON.parse($.cookie("goods"));
                var same = false;
                for(var i = 0;i < cookieArr.length;i++){
                    if(cookieArr[i].name == title){
                        same = true;
                        cookieArr[i].num++;
                        break;
                    }
                }
                if(!same){
                    var obj = {name : title,money : price,picture :img,num : 1};
                    cookieArr.push(obj);
                }
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }
            goods_sum();
            goods_show();
        })
        function goods_show(){
            $(".goodsCarList").empty();
            if($.cookie("goods") == null){
                var node = $(`<span class="goodsCarPrompt">您的购物车中没有商品</span>`);
                node.appendTo($(".goodsCarList"));
            }else{
                var cookieArr = JSON.parse($.cookie("goods"));
                var sumGoods = 0;
                var sumMoney = 0;
                for(var j = 0;j < cookieArr.length;j++){
                    sumGoods += cookieArr[j].num;
                    sumMoney += cookieArr[j].num * cookieArr[j].money;
                }
                var node = $(`<nav class="carListTop">
                <div class="itemTotal">
                        <i id="sumGoods">${sumGoods}</i>
                        <span>商品</span>
                        <div class="moneySum">
                            <span>购物车小计</span>
                            <i>${sumMoney}</i>
                        </div>
                        <button id="seeGoodsCar">查看和编辑购物车</button>
                    </div>
                </nav>
                <nav class="carListBottom">
                </nav>`);
                node.appendTo($(".goodsCarList"));
                var cookieArr = JSON.parse($.cookie("goods"));
                for(var i = 0;i < cookieArr.length;i++){
                    var newGoods = $(`<aside>
                        <img src="${cookieArr[i].picture}" alt="">
                        <div>
                            <a href="">${cookieArr[i].name}</a>
                            <i>${cookieArr[i].money}</i>
                            <nav class="goodsChoose">
                                <button class="changeNum">—</button>
                                <h4>${cookieArr[i].num}</h4>
                                <button class="changeNum">＋</button>
                                <span class="iconfont" id="goodsDelete">&#xe621;</span>
                            </nav>
                        </div>
                    </aside>`)
                    newGoods.appendTo($(".carListBottom"));
                }
            }
            
        }

        $(".goodsCarList").on("click","#goodsDelete",function(){//删除商品
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            var goodsTitle = $(this).parent().siblings("a").html();
            if(confirm("确定删除？")){
                var index = cookieArr.findIndex(item => item.name == goodsTitle);
                cookieArr.splice(index,1);
                cookieArr.length == 0 ? $.cookie("goods",null) : $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                });
                goods_show();
                goods_sum();
            }
        })

        $(".goodsCarList").on("click",".changeNum",function(){//加入购物车
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            var this_name = $(this).parent().siblings("a").html();
            for(var i = 0;i < cookieArr.length;i++){
                if(cookieArr[i].name == this_name){
                    var item = cookieArr[i];
                    break;
                }
            }
            if(item.num == 1 && this.innerHTML == "—"){
                alert("不能再减了！");
                return false;
            }
            if(this.innerHTML == "＋"){
                item.num++;
                $(this).siblings("h4").html(item.num);
                //每个商品的数量随动
            }else if(this.innerHTML == "—"){
                item.num--;
                $(this).siblings("h4").html(item.num);
            }
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            goods_sum();
            goods_money()
        })

        function goods_money(){//令点击+-按钮时总数和金钱也变化
            var cookieArr = JSON.parse($.cookie("goods"));
            var sumGoods = 0;
            var sumMoney = 0;
            for(var j = 0;j < cookieArr.length;j++){
                sumGoods += cookieArr[j].num;
                sumMoney += cookieArr[j].num * cookieArr[j].money;
            }
            $("#sumGoods").html(sumGoods);
            $(".moneySum").find("i").html(sumMoney);
        }

        function goods_sum(){//显示商品个数
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var sum = 0;
                for(var i = 0;i < cookieArr.length;i++){
                    sum += cookieArr[i].num;
                }
                $(".suberScript_div").html(sum);
            }else{
                $(".suberScript_div").html(0);
            }
        }
    }



    function backTop(){//回到顶部
        $(".backTopDiv2").click(function(){
            $("body,html").animate({scrollTop:0},1000);
        })
    }
    return {
        addCars:addCars,
        backTop:backTop
    }
})