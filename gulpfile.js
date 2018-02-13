const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


/*

--Top level functions --

gulp.task - Define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders changes

*/


//logs message
gulp.task('message', function(){
	return console.log('gulp is running')
});

// Copy all HTML FILES
gulp.task('copyhtml', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'))
});


// // optimize images

gulp.task('imageMin', function(){
	gulp.src('src/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
});



//Compile Sass
gulp.task('compilesass',function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'))
});


// Scripts
gulp.task('scripts',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('main.js')) //concatenate scripts
	.pipe(uglify()) //minify scripts
	.pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['message','copyhtml','imageMin','compilesass','scripts']);

gulp.task('watch',function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/images/*',['imageMin']);
	gulp.watch('src/*.html',['copyhtml']);
	gulp.watch('src/sass/*.scss',['compileSass']);
})