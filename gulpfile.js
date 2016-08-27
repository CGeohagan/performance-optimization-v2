

var gulp = require('gulp'),
   cache = require('gulp-cache'),
 cssnano = require('gulp-cssnano'),
 	 del = require('del'),
  gulpIf = require('gulp-if'),
   image = require('gulp-image'),
runSequence = require('run-sequence'),
  uglify = require('gulp-uglify'),
  useref = require('gulp-useref');
	

gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// Minifies only if it's a Javascript file
		.pipe(gulpIf('*.js', uglify()))
		// Minifies only if it's a CSS file
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('image', function() {
	return gulp.src(['app/img/**/*', 'app/img/photos/thumbnails/*'])
		.pipe(cache(image({
	      pngquant: true,
	      optipng: false,
	      zopflipng: true,
	      jpegRecompress: true,
	      jpegoptim: false,
	      mozjpeg: false,
	      gifsicle: true,
	      svgo: false,
	      concurrent: 10
	    })))
		.pipe(gulp.dest('dist/img'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('default', function (callback) {
  runSequence('clean:dist', ['useref', 'image'], callback);
});



