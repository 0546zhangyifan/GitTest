console.log("加载完成");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "mainlist": "mainList",
        "goodsCar":"goodsCar",
        "mineInfo":"mineInfo",
        "cartGoods":"cartGoods"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"]
		}
})
require(["mainlist", "goodsCar","mineInfo","cartGoods"], function( mainList,goodsCar,mineInfo,cartGoods){
    mainList.topList();
    goodsCar.addCars();
    goodsCar.backTop();
    goodsCar.cartAddLessDelete();
    mineInfo.mineImgBtn();
    cartGoods.cartGoods();
})