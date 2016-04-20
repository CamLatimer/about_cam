var gulp = require('gulp');
var sass = require("gulp-sass");
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  return gulp.src('styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'))
  .pipe(connect.reload());
});

gulp.task('html', function(){
  return gulp.src('index.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('styles.scss', ['sass']);
  gulp.watch('index.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
});

gulp.task('default', ['html', 'sass', 'connect', 'watch'])
