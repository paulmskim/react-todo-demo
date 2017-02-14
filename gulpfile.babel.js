import gulp from 'gulp';
import sass from 'gulp-sass';
import importer from 'node-sass-globbing';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import rename from 'gulp-rename';
import del from 'del';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import runSequence from 'run-sequence';

const SRC_JS_FILES = 'src/js/**/*.js',
      SRC_SCSS_FILES = 'src/sass/**/*.scss',
      TEST_FILES = 'test/unit/test.js',
      sass_config = {
        style: 'expanded',
        importer: importer,
        includePaths: [
          'node_modules/breakpoint-sass/stylesheets/'
        ]
      };


let log = util.log;

gulp.task('default', () => {
  // do nothing
});

gulp.task('sass', () => {
  log('Generate CSS files ' + (new Date()).toString());
  gulp.src(SRC_SCSS_FILES)
    .pipe(plumber())
    .pipe(sass(sass_config))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'safari 5', 'ie 9']}))
    .pipe(gulp.dest('src/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleancss())
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch:sass', () => {
  log('Watching scss files for modifications');
  gulp.watch(SRC_SCSS_FILES, ['sass']);
});

gulp.task('coverage:clean', () => {
  del(['coverage']);
});

gulp.task('coverage:instrument', () => {
  return gulp.src(SRC_JS_FILES)
    .pipe(istanbul({
      instrumenter: Instrumenter
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('coverage:report', (done) => {
  return gulp.src(SRC_JS_FILES, {read: false})
    .pipe(istanbul.writeReports());
});

gulp.task('test', () => {
  return gulp.src(TEST_FILES, {read: false})
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('test:coverage', (done) => {
  runSequence(
    'coverage:clean',
    'coverage:instrument',
    'test',
    'coverage:report',
    done
  );
});
