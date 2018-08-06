var gulp = require('gulp'),
postcss= require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
cssImport= require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('css', function() {
  return gulp.src('./app/assets/styles/main.css')
  .pipe(postcss([cssImport, mixins, cssvars, nestedcss, autoprefixer]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
