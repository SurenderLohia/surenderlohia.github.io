var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var gulpSequence = require('gulp-sequence');
const imagemin = require('gulp-imagemin');
var saveLicense = require('uglify-save-license');

gulp.task('min-css', function(cb) {
  var preprocessors = [
    autoprefixer({browserslist: true, browsers: ['last 3 version']}),
    cssnano(),
  ]
  gulp.src('_site/assets/css/main.css')
    .pipe(postcss(preprocessors))
    .pipe(gulp.dest('_site/assets/css/'))

  cb();
});

gulp.task('image-min', (cb) => {
  gulp.src('assets/images/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
      ]))
    .pipe(gulp.dest('_site/assets/images'))
  cb();
  }
);

gulp.task('min-js', function (cb) {
  pump([
        gulp.src('assets/js/main.js'),
        uglify({output: {
          comments: saveLicense
        }}),
        gulp.dest('_site/assets/js/')
    ],
  );
  cb();
});

//gulp.task('build', gulp.parallel['min-css', 'min-js']));

gulp.task('default', gulp.parallel('min-css', 'min-js'));