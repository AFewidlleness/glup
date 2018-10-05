// var gulp = require('gulp');
// gulp.task('default', function() {
//     console.log('running');
// });
var gulp = require('gulp');
// 重命名
var rename = require('gulp-rename');
// 压缩
var uglify = require('gulp-uglify');
// less编译
var less = require('gulp-less');
// 路径模块
var path = require('path');
// 引入css压缩插件
var cleanCss = require('gulp-clean-css');
/**
 * 压缩js
 */
// gulp.task('default', function(){
//     gulp.src("js/*.js")
//     .pipe(uglify())
//     // 重名时传入一个字符串
//     // .pipe(rename("test.min.js"))
//     .pipe(rename({
//         /*dirname: "main/text/ciao",目录名
//         basename: "aloha",文件名
//         prefix: "bonjour-",前缀
//         suffix: "-hola",后缀
//         extname: ".md"扩展名*/
//         suffix: ".min"
//     }))
//     .pipe(gulp.dest('dist/js'))
// })


/**
 * less 编译
 */
gulp.task('less', function() {
    gulp.src("less/*.less")
    .pipe(less())
    .pipe(cleanCss())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(gulp.dest('dist/css'))
});
gulp.task('default', function(){
    gulp.watch("less/*.less",['less']);
})