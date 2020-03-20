define(["jquery"], function($){
    function topList(){//下拉列表
        var listUl = $(".header_center ul");
        var listLi = $(".header_center ul li");
        var dpMenu = $(".drop_menu");
        
        listUl.mouseover(function(){
            dpMenu.css("display","flex");
            // alert($(this).index())
            
        }).mouseout(function(){
            dpMenu.css("display","none");
        })
        listLi.eq(8).mouseover(function(ev){
            ev.stopPropagation();
            dpMenu.css("display","none");
       })
        $.ajax({
            url:"data/mainList.json",
            success: function(data){
                var listArr = data;
                for(let i = 0;i < listLi.length - 1;i++){
                    listLi.eq(i).mouseover(function(){
                        dpMenu.empty();
                        var node = $(`<div>
                                        <dl>
                                        <h4>${listArr[i].list1.title}</h4>
                                        <dd><a href="">${listArr[i].list1.child1}</a></dd>
                                        <dd><a href="">${listArr[i].list1.child2}</a></dd>
                                        <dd><a href="">${listArr[i].list1.child3}</a></dd>
                                        <dd><a href="">${listArr[i].list1.child4}</a></dd>
                                        <dd><a href="">${listArr[i].list1.child5}</a></dd>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <h4>${listArr[i].list2.title}</h4>
                                        <dt><a href="">${listArr[i].list2.child10}</a></dt>
                                        <dd><a href="">${listArr[i].list2.child11}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child12}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child13}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child14}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child15}</a></dd>
                                    </dl>
                                    <dl>
                                        <h4></h4>
                                        <dt><a href="">${listArr[i].list2.child20}</a></dt>
                                        <dd><a href="">${listArr[i].list2.child21}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child22}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child23}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child24}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child25}</a></dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="">${listArr[i].list2.child30}</a></dt>
                                        <dd><a href="">${listArr[i].list2.child31}</a></dd>
                                        <dd><a href="">${listArr[i].list2.child32}</a></dd>
                                    </dl>
                                </div>
                                <div>
                                    <nav>
                                        <span class="iconfont">${listArr[i].list3.iconfont1}</span>
                                        <a href="" >${listArr[i].list3.title1}</a>
                                    </nav>
                                    <nav>
                                        <span class="iconfont">${listArr[i].list3.iconfont2}</span>
                                        <a href="" >${listArr[i].list3.title2}</a>
                                    </nav>
                                </div>
                                <div>
                                    <img src="${listArr[i].list4.img1}" alt="">
                                    <img src="${listArr[i].list4.img2}" alt="">
                                </div>`);
                    node.appendTo(dpMenu);
                    }).mouseout(function(){
                        // dpMenu.css("display","none");
                    })
               }
               
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    function goodsList(){
        $.ajax({
            url:"data/goodsList.json",
            success: function(data){
                var goodsArr = data;
                for(let i = 0;i < goodsArr.length;i++){
                    var node = $(`<article class="goods1" >
                        <nav class="navLeft">
                            <a href="">
                                <img src="${goodsArr[i].bigImg}" alt="">
                            </a>
                        </nav>
                        <nav class="navRight" id="${goodsArr[i].title}">
                        </nav>
                    </article>`);
                    node.appendTo($(".indexCenter1"));

                    var childArr = goodsArr[i].childs;
                    for(let j = 0;j < childArr.length;j++){
                        var childNode = $(`<aside>
                        <div class="spPromotion">
                            <span>${childArr[j].goodsTag1}</span>
                            <span>${childArr[j].goodsTag2}</span>
                        </div>
                        <div class="goodsImg">
                            <a href="http://localhost:8887/detail.html?goods_id=${childArr[j].goods_id}">
                                <img src="${childArr[j].img}" alt="">
                            </a>
                        </div>
                        <div class="goodsItem">
                            <h3><a href="">${childArr[j].title}</a></h3>
                            <div class="goodsPrompt">${childArr[j].redPrompt}</div>
                            <ul>
                                <li>${childArr[j].configuration1}</li>
                                <li>${childArr[j].configuration2}</li>
                                <li>${childArr[j].configuration3}</li>
                                <li>${childArr[j].configuration4}</li>
                                <li>${childArr[j].configuration5}</li>
                                <li>${childArr[j].configuration6}</li>
                                <li>${childArr[j].configuration7}</li>
                            </ul>
                            <div class="discount">
                            ${childArr[j].prompt}
                            </div>
                            <span class="priceDelete">￥&nbsp;<i>${childArr[j].originalPrice}</i></span>
                            <span class="price">￥&nbsp;<i>${childArr[j].price}</i></span>
                            <div class="save">
                                <span>节省了:</span>
                                <span class="saveMoney">￥&nbsp;${childArr[j].originalPrice - childArr[j].price}&nbsp;(${Math.round(((childArr[j].originalPrice - childArr[j].price) / childArr[j].originalPrice)*100)}%)</span>
                            </div>
                            <button>添加到购物车</button>
                        </div>
                    </aside>`);
                    
                    childNode.appendTo($(`#${goodsArr[i].title}`));
                    }
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }

    return {
        topList: topList,
        goodsList: goodsList
    }
})

