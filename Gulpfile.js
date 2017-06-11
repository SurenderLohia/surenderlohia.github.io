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
var svgSprite  = require('gulp-svg-sprite');
var svgSprite = require("gulp-svg-sprites");

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

gulp.task('svg-sprite', function() {
  // Basic configuration example
  var config          = {
    mode        : {
      css       : {   // Activate the «css» mode
        render    : {
          css   : true  // Activate CSS output (with default options)
        }
      }
    }
  };

  return gulp.src('*.svg', {cwd: 'assets/images/svg'})
    .pipe(svgSprite())
    .pipe(gulp.dest('assets/images/svg-out'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('assets/js/libs/swipe.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

/*gulp.task('sprites', function () {
    return gulp.src('assets/images/svg/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("assets/images/svg-out"));
});*/


gulp.task('build', gulpSequence('minifyCss'));