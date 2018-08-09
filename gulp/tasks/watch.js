var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./app/assets/images/icons/**/*.svg', function() {
    gulp.start('icons');
  });
});

gulp.task('cssInject', ['css'] , function() {
  return gulp.src('./app/temp/styles/main.css')
    .pipe(browserSync.stream());
});
