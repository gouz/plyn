var onError = function(err) {
		notify.onError({
			title:    "Gulp",
			subtitle: "Failure!",
			message:  "Error: <%= error.message %>"
		})(err);
		this.emit('end');
	},
  gulp    = require('gulp'),
  jade    = require('gulp-jade'),
  coffee  = require('gulp-coffee-react'),
  clean   = require('gulp-rimraf'),
  concat  = require('gulp-concat'),
	stylus  = require('gulp-stylus'),
  notify  = require('gulp-notify'),
	plumber = require('gulp-plumber');

gulp.task('jade', function() {
  gulp.src(['src/jade/*.jade'])
   .pipe(plumber({errorHandler: onError}))
   .pipe(jade())
   .pipe(gulp.dest('app'));
});

gulp.task('coffee', function() {
	gulp.src(['src/coffee/*.coffee'])
		.pipe(plumber({errorHandler: onError}))
		.pipe(concat('app.coffee'))
		.pipe(coffee())
		.pipe(gulp.dest('app'));
});

gulp.task('stylus', function() {
	gulp.src(['src/styl/*.styl'])
		.pipe(plumber({errorHandler: onError}))
		.pipe(concat('app.styl'))
		.pipe(stylus())
		.pipe(gulp.dest('app'));
});

gulp.task('default', ['jade', 'coffee', 'stylus'], function() {
	gulp.watch('src/jade/**/*.jade', function() {
		gulp.start('jade');
	});
	gulp.watch('src/coffee/**/*.coffee', function() {
		gulp.start('coffee');
	});
	gulp.watch('src/styl/**/*.styl', function() {
		gulp.start('stylus');
	});
});
