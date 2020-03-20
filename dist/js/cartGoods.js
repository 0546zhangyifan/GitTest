define(["jquery","jquery-cookie"],function(){
    function cartGoods(){//cart购物车页面
        $("main").empty();
        if($.cookie("goods") == null){
            var node1 = $(`<p class="backTitle">
                <a href="http://localhost:8887/">< 返回商店</a>
            </p>
            <div class="cart_empty_title">您的购物车</div>
            <div class="cart_num">0</div>
            <p class="cart_text1">购物车是空的</p>
            <p class="cart_text2">看看其他商品</p>
            <button class="goIndex">立即购物</button>`);
            node1.appendTo($("main"));
            $("main").on("click",".goIndex",function(){
                location.assign("http://localhost:8887/");
            })
        }else{
            var cookieArr = JSON.parse($.cookie("goods"));
            var sumGoods = 0;
            var sumMoney = 0;
            for(var i = 0;i < cookieArr.length;i++){
                sumGoods += cookieArr[i].num;
                sumMoney += cookieArr[i].num * cookieArr[i].money;
            }
            var node2 = $(`<p class="mainHtml_cart">
                <a href="">主页</a>
                <i>购物车</i>
            </p>
            <h3>购物车</h3>
            <div class="cart_container">
                <div class="cart_container_left">
                    <div class="cartPrompt iconfont">&#xe939; 立即结账并获得该订单的<i>2149</i>积分。 这仅适用于注册用户，并且在用户登录时可能会有所不同。</div>
                    <div class="cart_item">
                        
                    </div>
                </div>
                <div class="cart_container_right">
                    <p class="cart_container_right_top">总金额</p>
                    <p class="xiaoji">小计</p>
                    <i class="iXiaoji">${sumMoney}</i>
                    <div class="notice">
                        实际运费请以结算页为准
                    </div>
                    <span class="sumMoney">总金额</span>
                    <i class="iSumMoney">${sumMoney}</i>
                    <button>进行结算</button>
                </div>
            </div>`);
            node2.appendTo($("main"));
            for(var j = 0;j < cookieArr.length;j++){
            var node3 = $(`<div class="itemInfo">
                <img src="${cookieArr[j].picture}" alt="">
                <div class="product-item-details">
                    <p>${cookieArr[j].name}</p>
                    <div class="redTitle">
                        3月16日15点-3月19日17点，限时抢购，数量有限，售完即止，不与其他优惠同享！
                    </div>
                </div>
                <div class="goods_sum">
                    <div class="goods_num">${cookieArr[j].num}</div>
                    <div class="goods_add_less">
                        <div class="goods_change">+</div>
                        <div class="goods_change">-</div>
                    </div>
                </div>
                <div class="subtotal">
                    <p>小计</p>
                    <i>${cookieArr[j].money * cookieArr[j].num}</i>
                </div>
                <div class="deleteGoods">×</div>
            </div>`);
            node3.appendTo($(".cart_item"));
            }
        }
    }


    return{
        cartGoods:cartGoods
    }
})