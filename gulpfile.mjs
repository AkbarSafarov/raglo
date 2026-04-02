import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gcmq from 'gulp-group-css-media-queries';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';

const sass = gulpSass(dartSass);
const bs = browserSync.create();

// ─── HTML ────────────────────────────────────────────────────────────────────

function htmlDev() {
  return gulp.src('src/html/pages/*.html')
    .pipe(fileInclude({ prefix: '@@', basepath: 'src/html/blocks/' }))
    .pipe(gulp.dest('build/'))
    .pipe(bs.stream());
}

function htmlBuild() {
  return gulp.src('src/html/pages/*.html')
    .pipe(fileInclude({ prefix: '@@', basepath: 'src/html/blocks/' }))
    .pipe(gulp.dest('dist/'));
}

// ─── Styles ──────────────────────────────────────────────────────────────────

function stylesDev() {
  return gulp.src('src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gcmq())
    .pipe(gulp.dest('build/css/'))
    .pipe(bs.stream());
}

function stylesBuild() {
  return gulp.src('src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
}

// ─── Scripts ─────────────────────────────────────────────────────────────────

function scriptsDev() {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulp.dest('build/js/'))
    .pipe(bs.stream());
}

function scriptsBuild() {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
}

// ─── Fonts ───────────────────────────────────────────────────────────────────

function fontsDev() {
  return gulp.src('src/fonts/**/*', { encoding: false })
    .pipe(gulp.dest('build/fonts/'));
}

function fontsBuild() {
  return gulp.src('src/fonts/**/*', { encoding: false })
    .pipe(gulp.dest('dist/fonts/'));
}

// ─── Images & static files ───────────────────────────────────────────────────

function imagesDev() {
  return gulp.src(
    ['src/img/**/*', 'src/files/**/*', 'src/svg/**/*'],
    { base: 'src', encoding: false }
  ).pipe(gulp.dest('build/'));
}

function imagesBuild() {
  return gulp.src(
    ['src/img/**/*', 'src/files/**/*', 'src/svg/**/*'],
    { base: 'src', encoding: false }
  ).pipe(gulp.dest('dist/'));
}

// ─── Libs ────────────────────────────────────────────────────────────────────

function libsDev() {
  return gulp.src('src/libs/**/*', { encoding: false })
    .pipe(gulp.dest('build/libs/'));
}

function libsBuild() {
  return gulp.src('src/libs/**/*', { encoding: false })
    .pipe(gulp.dest('dist/libs/'));
}

// ─── Utility ─────────────────────────────────────────────────────────────────

const cleanBuild = () => deleteAsync(['build']);
const cleanDist = () => deleteAsync(['dist']);

function server(done) {
  bs.init({
    server: { baseDir: 'build/' },
    notify: false,
    open: true
  });
  done();
}

function watchFiles() {
  gulp.watch('src/html/**/*.html', htmlDev);
  gulp.watch('src/styles/**/*.scss', stylesDev);
  gulp.watch('src/js/**/*.js', scriptsDev);
}

// ─── Tasks ───────────────────────────────────────────────────────────────────

export default gulp.series(
  cleanBuild,
  gulp.parallel(htmlDev, stylesDev, scriptsDev, fontsDev, imagesDev, libsDev),
  server,
  watchFiles
);

export const build = gulp.series(
  cleanDist,
  gulp.parallel(htmlBuild, stylesBuild, scriptsBuild, fontsBuild, imagesBuild, libsBuild)
);
