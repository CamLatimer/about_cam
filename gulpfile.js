var gulp = require('gulp');
var sass = require("gulp-sass");
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  //if other tasks depend on this task, it must return something
  return gulp.src('styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'))
  .pipe(connect.reload());
});

gulp.task('html', function(){
  return gulp.src('index.html')
  .pipe(connect.reload());
});

gulp.task('javascript', function(){
  return gulp.src('script.js')
  .pipe(connect.reload());
})

gulp.task('watch', function () {
  gulp.watch('script.js', ['javascript']);
  gulp.watch('styles.scss', ['sass']);
  gulp.watch('index.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
});

gulp.task('default', ['javascript', 'html', 'sass', 'connect', 'watch'])
