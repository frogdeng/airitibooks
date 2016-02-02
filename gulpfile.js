
var gulp = require('gulp'),
	// uglify = require('gulp-uglify'),
	// sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
	plumber = require('gulp-plumber'),

	browserSync = require('browser-sync').create();
 


//Script Task
//Uglifies
// gulp.task('scripts', function() {
// 	return gulp.src('js/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('build/'));
// });
 




// sass task
// gulp.task('styles', function () {
//     return sass('sass/') 
//     .on('error', function (err) {
//       console.error('Error!', err.message);
//    })
//     // .pipe(plumber())
//     .pipe(gulp.dest('css/'));
// });


gulp.task('compass', function() {
  gulp.src('sass/*.sass') //來源路徑
    .pipe(plumber())
    .pipe(compass({ //這段內輸入config.rb的內容
        css: 'css', //compass輸出位置
        sass: 'sass', //sass來源路徑
        sourcemap: false, //compass 1.0 sourcemap
        style: 'nested', //CSS壓縮格式，預設(nested)
        comments: false, //是否要註解，預設(true)
        require: ['susy'] //額外套件 susy
        }))
 // .pipe(gulp.dest('app/assets/temp')); //輸出位置(非必要)
});





// browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css","js/*.js","*.html", "images/"],{
        server: {
            baseDir: "./"
        }
    });
});




//watch Task
//watch 
gulp.task('watch',function(){
	gulp.watch('sass/*.sass', ['compass']);
})

gulp.task('default', ['compass', 'watch', 'browser-sync']);



