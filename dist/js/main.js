console.log("加载完成");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        //引入banner图效果
        "banner": "mainBanner",
        "list": "mainList"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"]
		}
})

require(["banner", "list"], function(mainBanner, mainList){
    mainBanner.bannerImg();
    mainList.topList();
    mainList.goodsList();
})