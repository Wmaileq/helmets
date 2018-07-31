const gulp = require('gulp'),
  bs = require('browser-sync'),
  prefixer = require('gulp-autoprefixer'),
  scss = require('gulp-sass'),
  notify = require('gulp-notify'),
  concatcss = require('gulp-concat-css'),
  htmlmin = require('gulp-htmlmin'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  gwatch = require('gulp-watch'),
  rimraf    = require('rimraf');

const path = {
  public: {
    html: 'public/',
    css: 'public/',
    js: 'public/',
    img: 'public/img/',
    fonts: 'public/fonts/'
  },
  src: {
    html: 'src/*.html',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/*.*'
  },
  clean: './public'
};

const config = {
  server: {
    baseDir: './public'
  },
  host: 'localhost',
  port: 3000
};

function buildHTML() {
  return gulp.src(path.src.html)
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeRedundantAttributes: true,
      removeComments: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest(path.public.html))
    .pipe(bs.reload({stream: true}));
}

function buildCSS() {
  return gulp.src(path.src.scss)
    .pipe(scss().on('error', notify.onError({
      message: "<%= error.message %>",
      title:   "CSS compilation error"
    })))
    .pipe(prefixer())
    .pipe(concatcss('bundle.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.public.css))
    .pipe(bs.reload({stream: true}));
}

function buildJS() {
  return gulp.src(path.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.public.js))
    .pipe(bs.reload({stream: true}))
}

function buildImgs() {
  return gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.public.img))
    .pipe(bs.reload({stream: true}))
}

function buildFonts() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.public.fonts))
}

const build = gulp.series(buildHTML, buildCSS, buildJS, buildImgs, buildFonts);

function watch() {
  gwatch(path.src.html, buildHTML);
  gwatch(path.src.scss, buildCSS);
  gwatch(path.src.js, buildJS);
  gwatch(path.src.img, buildImgs);
  gwatch(path.src.img, buildFonts);
}

function clean(cb) {
  return rimraf(path.clean, cb);
}

function webserver() {
  return bs(config)
}

gulp.task('clean', clean);
gulp.task('default', gulp.series(build, gulp.parallel(webserver, watch)));