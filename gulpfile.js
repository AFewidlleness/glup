// var gulp = require('gulp');
// gulp.task('default', function() {
//     console.log('running');
// });

// 引入gulp
var gulp = require('gulp');

// 重命名
var rename = require('gulp-rename');

// 压缩
// var uglify = require('gulp-uglify');

// less编译
var less = require('gulp-less');

// 路径模块
// var path = require('path');

// 引入css压缩插件
var cleanCss = require('gulp-clean-css');

//引入串行任务模块
// var sequence = require('run-sequence');

// 引入热刷新
var livereload = require('gulp-livereload');


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
// gulp.task('less', function() {
//     gulp.src("less/*.less")
//     .pipe(less())
//     .pipe(cleanCss())
//     .pipe(rename({
//         suffix:'.min'
//     }))
//     .pipe(gulp.dest('dist/css'))
// });
// gulp.task('default', function(){
//     gulp.watch("less/*.less",['less']);
// })

/**
 * 定义串行任务
 */
// 任务1
// gulp.task('t1', function (cb) {
//     setTimeout(function () {
//         console.log('111111!');
//         cb();
//     }, 3000);
// });
// // 任务2
// gulp.task('t2', function (cb) {
//     setTimeout(function () {
//         console.log('222222!');
//         cb();
//     }, 2000);
// });
// // 任务3
// gulp.task('t3', function (cb) {
//     setTimeout(function () {
//         console.log('333333!');
//         cb();
//     }, 3000);
// });
// // 任务4
// gulp.task('t4', function (cb) {
//     setTimeout(function () {
//         console.log('4444444!');
//         cb();
//     }, 3000);
// });

// gulp.task('default', function() {
//     // sequence('t4','t3','t2','t1');
//     sequence('t4',['t3','t2'],'t1');
// })
/**
 * 定义热刷新任务 less->css
 */
gulp.task('less', function() {
    gulp.src("less/*.less")
    .pipe(less())
    .pipe(cleanCss())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
});
gulp.task('default', function(){
    livereload.listen();
    gulp.watch("less/*.less",['less']);
})