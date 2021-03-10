const gulp = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const prettyhtml = require("gulp-format-html");
const using = require('gulp-using');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const webp = require('gulp-webp');

const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const named = require('vinyl-named');
const path = require("path");
const browserSync = require("browser-sync").create();
const autoprefixer = require("autoprefixer");
const Fiber = require('fibers');

const postcssPresetEnv = require("postcss-preset-env");
const sortMediaQueries = require("postcss-sort-media-queries");
const perfectCss = require('perfectionist');
const suit = require("postcss-bem-fix");

sass.compiler = require('sass');

let public = './',
    src = './source/'

gulp.task("browserSync", function () {
    browserSync.init({
      server: {
        baseDir: public,
      },
    });
    gulp.watch("**/*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
    // gulp
    //   .watch("./images/**/*.{png,gif,jpg,svg}")
    //   .on("change", browserSync.reload);
  });

  gulp.task("buildHtml", function (e,d) {
    return gulp
      .src(src + "site/**/*.html")
      .pipe(plumber())
      .pipe(using({prefix:'Using file', path:'cwd', color:'blue', filesize:true}))
      .pipe(
        prettyhtml({
          indent_size: 4,
          "brace-style": ["collapse-preserve-inline"],
        })
      )
      .pipe(
        rename(function (file) {
          if (file.dirname == "top") {
            file.dirname = path.dirname(file.dirname);
          } else {
            file.dirname = file.dirname;
          }
        })
      )
      .pipe(plumber.stop())
      .pipe(gulp.dest(public))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      );
  });

  gulp.task("minImg", function () {
    return gulp
      .src(src + "images/**/*")
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
          }),
        ])
      )
      .pipe(gulp.dest(public + "images/"));
  });
  
  gulp.task('webpImg', function(){
    return gulp.src(src + 'images/**/*.{jpg,png}')
      .pipe(webp())
      .pipe(gulp.dest(public + "images/"));
  });

  gulp.task("sass", function () {
    return gulp
      .src(src + "sass/pages/*.sass")
      .pipe(sourcemaps.init())
      .pipe(sass({fiber: Fiber}).on('error', sass.logError))
      .pipe(sourcemaps.write("./sourcemap"))
      .pipe(gulp.dest(public + "css/"))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      );
  });

  gulp.task('js', function(){
      return gulp
        .src(src + 'js/*.js')
        .pipe(named())
        .pipe(gulpWebpack({config : require('./webpack.config.js')}, webpack))
        .pipe(gulp.dest(public + "js/"))
  })

  gulp.task('css', function(){
    let processors = [
      suit({
        defaultNamespace: undefined,
        style: "suit",
        separators: {
          descendent: "__",
        },
        shortcuts: {
          utility: "util",
        },
      }),
      postcssPresetEnv({ browsers: "last 2 versions" }),
      sortMediaQueries({
        sort: "desktop-first",
      }),
      perfectCss({
        cascade: true,
        colorCase: 'lower',
        colorShorthand: true,
        trimLeadingZero: true
      }),
      autoprefixer("last 2 versions", { cascade: false })
    ];
    return gulp
      .src(src + "sass/Page/*.sass")
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(prefix('last 2 versions'))
      .pipe(gulp.dest(public + "css/"));
  });
  
  
  gulp.task("watch", function () {
    gulp.watch(src + 'sass/**/*.sass', gulp.series('sass'));
    gulp.watch(src + "site/**/*.html", gulp.series("buildHtml"));
    // gulp.watch('./source/js/*.js', gulp.series('js'));
    gulp.watch([src + "site/**/*.html", "./css/*.css"], gulp.series("browserSync"));
  });
  
  gulp.task('img', gulp.series(['minImg', 'webpImg']));
