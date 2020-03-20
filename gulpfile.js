const gulp = require("gulp");
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})
gulp.task("copy-php",function(){
    return gulp.src("php/*.php")
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload());
})
gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
gulp.task("data",function(){
    return gulp.src(["data/*.json","data/*.xml"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
gulp.task("css",function(){
    return gulp.src(["*.css"])
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
gulp.task("scripts2",function(){
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
gulp.task("iconfont",function(){
    return gulp.src("Iconfont/*")
    .pipe(gulp.dest("dist/iconfont"))
    .pipe(connect.reload());
})
const sass = require("gulp-sass");
gulp.task("sass",function(){
    return gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//监听
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("php/*.php",["copy-php"]);
    gulp.watch("img/**/*",["images"]);
    gulp.watch(["data/*.json","data/*.xml"],["data"]);
    gulp.watch("scss/*.scss",["sass"]);
    gulp.watch(["*.js", "!gulpfile.js"],["scripts"]);
    gulp.watch("js/*.js",["scripts2"]);
    gulp.watch("Iconfont/*",["iconfont"]);
})

gulp.task("build",["copy-html","copy-php","images","data","scripts","scripts2","sass","css","iconfont"],function(){
    console.log("执行成功");
})

const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",//设置根目录
        port: 8887,//设置端口号
        livereload: true  //启动实时刷新功能
    })
})

gulp.task("default",["watch","server"]);