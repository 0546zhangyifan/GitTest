console.log("加载完成");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        //引入banner图效果
        "banner": "mainBanner",
        "mainlist": "mainList",
        "mineInfo":"mineInfo",
        "goodsCar":"goodsCar"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"]
		}
})

require(["banner", "mainlist","mineInfo", "goodsCar"], function(mainBanner, mainList,mineInfo,goodsCar){
    mainBanner.bannerImg();
    mainBanner.bannerBottom();
    mainList.topList();
    mainList.goodsList();
    mineInfo.mineImgBtn();
    goodsCar.addCars();
    goodsCar.backTop();
})