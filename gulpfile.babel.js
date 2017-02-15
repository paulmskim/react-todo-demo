import gulp from 'gulp';
import sass from 'gulp-sass';
import importer from 'node-sass-globbing';
import plumber from 'gulp-plumber';
import { log, PluginError } from 'gulp-util';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import rename from 'gulp-rename';
import del from 'del';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webdriver from 'gulp-webdriver';

const SRC_JS_FILES = 'src/js/**/*.js',
      SRC_SCSS_FILES = 'src/sass/**/*.scss',
      TEST_FILES = 'test/unit/test.js',
      sass_config = {
        style: 'expanded',
        importer: importer,
        includePaths: [
          'node_modules/breakpoint-sass/stylesheets/'
        ]
      },
      server = new webpackDevServer(
        webpack(require('./webpack.config')), {
          contentBase: 'src'
        }
      );

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

gulp.task('unit-test', () => {
  return gulp.src(TEST_FILES, {read: false})
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('unit-test:coverage', (done) => {
  runSequence(
    'coverage:clean',
    'coverage:instrument',
    'unit-test',
    'coverage:report',
    done
  );
});

gulp.task('webpack-dev-server:open', () => {
  return server.listen(8080, 'localhost', (err) => {
    if(err) throw new PluginError('webpack-dev-server', err);
    log('[webpack-dev-server]', 'http://localhost:8080');
  });
});

gulp.task('webpack-dev-server:close', () => {
  return server.close();
})

gulp.task('webdriverio-test', () => {
  return gulp.src('wdio.conf.js')
    .pipe(webdriver());
});

gulp.task('integration-test', (done) => {
  runSequence(
    'webpack-dev-server:open',
    'webdriverio-test',
    'webpack-dev-server:close',
    done
  );
});
