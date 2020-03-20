define(["jquery"], function($){
    function listShowGoods(){
        $.ajax({
            url:"data/listShow.json",
            success: function(data){
                var showArr = data;
                for(let i = 0;i < showArr.length;i++){
                    $(".chickType a").eq(i).click(function(ev){
                        ev.preventDefault();
                        $(".main article").empty();
                        $(".chickType a").find("div").removeClass();
                        $(this).find("div").addClass("chickBtn");
                        var node = $(`<nav class="chickList">
                            <img src="${showArr[i].one.img}" alt="">
                            <h3>${showArr[i].one.title}</h3>
                            <p>${showArr[i].one.introduction}</p>
                            <a href="">立即购买</a>
                        </nav>
                        <nav class="chickList">
                            <img src="${showArr[i].two.img}" alt="">
                            <h3>${showArr[i].two.title}</h3>
                            <p>${showArr[i].two.introduction}</p>
                            <a href="">立即购买</a>
                        </nav>
                        <nav class="chickList">
                            <img src="${showArr[i].three.img}" alt="">
                            <h3>${showArr[i].three.title}</h3>
                            <p>${showArr[i].one.introduction}</p>
                            <a href="">立即购买</a>
                        </nav>`);
                        node.appendTo($(".main article"));
                    })
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
        $.ajax({
            url:"data/listGoods.json",
            success: function(data){
                var showArr = data;
                $(".chickType a").eq(3).click(function(ev){
                    ev.preventDefault();
                    $(".main article").empty();
                    $(".chickType a").find("div").removeClass();
                    $(this).find("div").addClass("chickBtn");
                
                    for(let i = 0;i < showArr.length;i++){
                        var node = $(`<aside>
                        <div class="spPromotion">
                            <span>${showArr[i].goodsTag}</span>
                        </div>
                        <div class="goodsImg">
                            <a href="http://localhost:8887/detail.html?goods_id=${showArr[i].goods_id}">
                                <img src="${showArr[i].img}" alt="">
                            </a>
                        </div>
                        <div class="goodsItem">
                            <h3><a href="">${showArr[i].title}</a></h3>
                            <div class="goodsPrompt">${showArr[i].redPrompt}</div>
                            <ul>
                                <li>${showArr[i].configuration1}</li>
                                <li>${showArr[i].configuration2}</li>
                                <li>${showArr[i].configuration3}</li>
                                <li>${showArr[i].configuration4}</li>
                                <li>${showArr[i].configuration5}</li>
                                <li>${showArr[i].configuration6}</li>
                            </ul>
                            
                            <span class="priceDelete">￥&nbsp;<i>${showArr[i].originalPrice}</i></span>
                            <span class="price">￥&nbsp;<i>${showArr[i].price}</i></span>
                            <div class="save">
                                <span>节省了:</span>
                                <span class="saveMoney">￥&nbsp;${showArr[i].originalPrice - showArr[i].price}&nbsp;(${Math.round(((showArr[i].originalPrice - showArr[i].price) / showArr[i].originalPrice)*100)}%)</span>
                            </div>
                            <div class="discount">
                                优惠券码：<i>${showArr[i].coupon}</i>
                            </div>
                            <button>添加到购物车</button>
                        </div>
                        </aside>`);
                        node.appendTo($(".main article"));
                    }
                })
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    
    return {
        listShowGoods:listShowGoods
    }
})