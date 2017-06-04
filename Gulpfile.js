var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var pump = require('pump');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var useref = require('gulp-useref');
var gutil = require('gulp-util');
var del = require('del');
var gulpSequence = require('gulp-sequence');
const imagemin = require('gulp-imagemin');

gulp.task('minifyJs', function (cb) {
  pump([
        gulp.src('_site/assets/js/main.js'),
        uglify(),
        gulp.dest('_site/assets/js')
    ],
    cb
  );
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
  del(['_site/assets/js/main.js', '_site/assets/js/main.js']);
});

gulp.task('image-min', () =>
  gulp.src('assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/images'))
);

gulp.task('build', gulpSequence('minifyCss'));