var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var useref = require('gulp-useref');
var gutil = require('gulp-util');
var del = require('del');
var gulpSequence = require('gulp-sequence');
const imagemin = require('gulp-imagemin');

gulp.task('minifyJs', function() {
  gulp.src('_site/**/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('_site'))
  });

gulp.task('minifyCss', function() {
  var preprocessors = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnano(),
  ]
  gulp.src('_site/assets/css/main.css')
    .pipe(postcss(preprocessors))
    .pipe(gulp.dest('_site/assets/css/'))
});

gulp.task('clean', function() {
  del(['_site/assets/js/app/*.js', '_site/assets/js/libs/*.js']);
});

gulp.task('image-min', () =>
  gulp.src('assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/images'))
);

gulp.task('build', gulpSequence('minifyJs', 'minifyCss', 'clean'));