var gulp = require('gulp'),
    sass = require('gulp-sass'),
    importer = require('node-sass-globbing'),
    plumber = require('gulp-plumber'),
    util = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    log = util.log;

var sass_config = {
  style: 'expanded',
  importer: importer,
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/'
  ]
};

gulp.task('default', function() {
  // do nothing
});

gulp.task('sass', function() {
  log('Generate CSS files ' + (new Date()).toString());
  gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass(sass_config))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'safari 5', 'ie 9']}))
    .pipe(gulp.dest('src/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleancss())
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch:sass', function() {
  log('Watching scss files for modifications');
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
