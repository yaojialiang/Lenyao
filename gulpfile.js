/* 
* @Author: Marte
* @Date:   2018-01-31 19:34:07
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:24:23
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

// 
gulp.task('default',function(){
    gulp.src('./src/sass/carlist.scss')

    .pipe(sass({outputStyle:''}).on('error',sass.logError))

    .pipe(gulp.dest('./src/css/'))
})

gulp.task('jtsass',function(){
    gulp.watch('./src/sass/carlist.scss',['default']);
})

// //引入concat插件
// var concat = require('gulp-concat');
// gulp.task('mergeJs',function(){
//     //由于合并后的all.js也存在同一文件夹下，因此避免重复合并，就不能合并all.js。或者把all.js安装在另一文件夹下
//     gulp.src(['./src/js/*.js','!./src/js/{all,jquery-3.2.1,all-min}.js'])
//     //调用concat()进行合并
//     .pipe(concat('all.js'))
//     //输出到文件夹
//     .pipe(gulp.dest('./src/js/'))
// })

// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// gulp.task('compress',function(){
//     gulp.src('./src/js/all.js')
//     //进行压缩
//     .pipe(uglify())
//     //避免压缩文件把原本的文件给覆盖了，把压缩文件重命名
//     .pipe(rename({suffix:'-min'}))

//     .pipe(gulp.dest('./src/js/'));
// })