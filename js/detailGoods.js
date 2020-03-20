define(["jquery","jquery-cookie"], function($){
    function download(){
        var goods_id = findByName(location.search, "goods_id");;

        var goodsIdNum = goods_id < 2000;
        if(goodsIdNum){
            $.ajax({
                url:"data/goodsList.json",
                success: function(data){
                    for(var i = 0; i < data.length; i++){
                        for(var j = 0; j < data[i].childs.length;j++){
                            if(data[i].childs[j].goods_id == goods_id){
                                var node = $(`<ul class="clearfn mainTop">
                                    <li><a href="">主页</a></li>
                                    <li><a href="">${data[i].childs[j].title}</a></li>
                                </ul>
                                <div class="goodsInfo">
                                    <nav class="leftImg">
                                        <h4>${data[i].childs[j].title}</h4>
                                        <span>${data[i].childs[j].goodsTag1}</span>
                                        <div class="showImg">
                                            <img src="${data[i].childs[j].img}" alt="">
                                            <div id="mark"></div>
                                        </div>
                                        <div class="bigImg">
                                            <img src="${data[i].childs[j].img}" alt="">
                                        </div>
                                    </nav>
                                    <nav class="rightItem">
                                        <div class="itemBox">
                                            <span class="itemBoxTop">${data[i].childs[j].configuration2}/${data[i].childs[j].configuration3}</span>
                                            <ul>
                                                <li><img src="https://media.hpstore.cn/attribute/swatch/p/r/processor.png" alt=""><i>Intel Core i5</i></li>
                                                <li><img src="https://media.hpstore.cn/attribute/swatch/o/s/os.png" alt=""><i>Windows 10 Home 64</i></li>
                                                <li><img src="https://media.hpstore.cn/attribute/swatch/h/a/hard-disk.png" alt=""><i>1 TB PCIe® NVMe™ M.2 SSD</i></li>
                                                <li><img src="https://media.hpstore.cn/attribute/swatch/s/c/screen-size.png" alt=""><i>14</i></li>
                                                <li><img src="https://media.hpstore.cn/attribute/swatch/g/r/graphics.png" alt=""><i>Intel UHD</i></li>
                                            </ul>
                                        </div>
                                        <div class="money">
                                            <span>厂商指导价</span>
                                            <span class="priceDelete">￥&nbsp;<i>${data[i].childs[j].originalPrice}</i></span>
                                            <span class="price">￥<i>${data[i].childs[j].price}</i></span>
                                        </div>
                                        <div class="save">
                                            <span>节省了:</span>
                                            <span class="saveMoney">￥&nbsp;${data[i].childs[j].originalPrice - data[i].childs[j].price}(${Math.round(((data[i].childs[j].originalPrice - data[i].childs[j].price) / data[i].childs[j].originalPrice)*100)}%)</span>
                                        </div>
                                        <button>添加到购物车</button>
                                    </nav>
                                </div>`);
                                break;
                            }
                        }
                    }
                    node.appendTo($(".window_banner_container"));
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        }else{
            $.ajax({
                url:"data/listGoods.json",
                success: function(data){
                    for(var i = 0; i < data.length; i++){
                        if(data[i].goods_id == goods_id){
                            var node = $(`<ul class="clearfn mainTop">
                                <li><a href="">主页</a></li>
                                <li><a href="">${data[i].title}</a></li>
                            </ul>
                            <div class="goodsInfo">
                                <nav class="leftImg">
                                    <h4>${data[i].title}</h4>
                                    <span>${data[i].goodsTag}</span>
                                    <div class="showImg">
                                        <img src="${data[i].img}" alt="">
                                        <div id="mark"></div>
                                    </div>
                                    <div class="bigImg">
                                        <img src="${data[i].img}" alt="">
                                    </div>
                                </nav>
                                <nav class="rightItem">
                                    <div class="itemBox">
                                        <span class="itemBoxTop">${data[i].configuration2}/${data[i].configuration3}</span>
                                        <ul>
                                            <li><img src="https://media.hpstore.cn/attribute/swatch/p/r/processor.png" alt=""><i>Intel Core i5</i></li>
                                            <li><img src="https://media.hpstore.cn/attribute/swatch/o/s/os.png" alt=""><i>Windows 10 Home 64</i></li>
                                            <li><img src="https://media.hpstore.cn/attribute/swatch/h/a/hard-disk.png" alt=""><i>1 TB PCIe® NVMe™ M.2 SSD</i></li>
                                            <li><img src="https://media.hpstore.cn/attribute/swatch/s/c/screen-size.png" alt=""><i>14</i></li>
                                            <li><img src="https://media.hpstore.cn/attribute/swatch/g/r/graphics.png" alt=""><i>Intel UHD</i></li>
                                        </ul>
                                    </div>
                                    <div class="money">
                                        <span>厂商指导价</span>
                                        <span class="priceDelete">￥&nbsp;<i>${data[i].originalPrice}</i></span>
                                        <span class="price">￥<i>${data[i].price}</i></span>
                                    </div>
                                    <div class="save">
                                        <span>节省了:</span>
                                        <span class="saveMoney">￥&nbsp;${data[i].originalPrice - data[i].price}(${Math.round(((data[i].originalPrice - data[i].price) / data[i].originalPrice)*100)}%)</span>
                                    </div>
                                    <button>添加到购物车</button>
                                </nav>
                            </div>`);
                            break;
                        }
                    }
                    node.appendTo($(".window_banner_container"));
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        }

        $(".window_banner_container").on("mouseenter",".showImg",function(){
            $("#mark,.bigImg").css("display","block");
        }).on("mouseleave",".showImg",function(){
            $("#mark,.bigImg").css("display","none");
        }).on("mousemove",".showImg",function(ev){
            var l = ev.pageX - $(this).offset().left - 50;
            var t = ev.pageY - $(this).offset().top - 50;
            if(l <= 0){
                l = 0;
            }
            if(l >= $(".showImg img").width()-100){
                l = $(".showImg img").width()-100;
            }
            if(t <= 0){
                t = 0;
            }
            if(t >= $(".showImg img").height()-100){
                t = $(".showImg img").height()-100;
            }
            $("#mark").css({
                left:l,
                top:t
            })

            $(".bigImg img").css({
                left:-2 * l,
                top:-2 * t
            })
        })
        
        
    }


    function findByName(search,name){//获取连接中的值
        var start = search.indexOf(name + "=");
        if(start == -1){
            return null;
        }else{
            var end = search.indexOf("&", start);
            if(end == -1){
                end = search.length;
            }
            var str = search.substring(start,end);
            var arr = str.split("=");
            return arr[1];
        }
    }
    return {
        download:download,
    }
})