var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var useref = require('gulp-useref');
var gutil = require('gulp-util');


gulp.task('js', function() {
  gulp.src('app/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
});

gulp.task('useref', function(){
  gutil.log('useref start');
  gulp.src('_site/**/*.html, !_site/assets/')
    .pipe(useref())
    .pipe(gulp.dest(function(file) {
      file.base;
    }))
});



gulp.task('css', function() {
  var preprocessors = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnano(),
  ]
  gulp.src('_site/assets/css/*.css')
    .pipe(concat('main.css'))
    .pipe(postcss(preprocessors))
    .pipe(gulp.dest('_site/assets/css/'))
});

//gulp.watch('app/css/*.css', ['css']);

gulp.task('build', ['css'], function() {

});