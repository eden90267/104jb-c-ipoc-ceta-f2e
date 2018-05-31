const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const autoprefixer = require('autoprefixer');
const minimist = require('minimist'); // 用來讀取指令轉成變數
const gulpSequence = require('gulp-sequence').use(gulp);
const jsonServer = require('gulp-json-srv');

// production || development
// # gulp --env production
const envOptions = {
  string: 'env',
  default: {env: 'development'}
};
const options = minimist(process.argv.slice(2), envOptions);
console.log(options);

const server = jsonServer.create({
  port: 3002,
  baseUrl: '/api',
});

const srcPath = '/src',
  destPath = '/public';

gulp.task('clean', () => {
  return gulp.src([`.${destPath}`], {read: false}) // 選項讀取：false阻止gulp讀取文件的內容，使此任務更快。
    .pipe($.clean());
});

gulp.task('ejsPreview', () => {
  return gulp.src([`.${srcPath}/pages/preview/[^_]*.ejs`])
    .pipe($.plumber())
    .pipe($.ejs({}, {}, {ext: '.html'}))
    .pipe(gulp.dest(`.${destPath}/`))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

gulp.task('ejs', ['ejsPreview'], () => {
  return gulp.src([`.${srcPath}/pages/[^_]*.ejs`])
    .pipe($.plumber())
    .pipe($.ejs({}, {}, {ext: '.html'}))
    .pipe(gulp.dest(`.${destPath}/`))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

gulp.task('babelPreview', () =>
  gulp.src([
    `.${srcPath}/js/utilities/**/*.js`,
    `.${srcPath}/js/mixins/**/*.js`,
    `.${srcPath}/pages/layout/**/*.js`,
    `.${srcPath}/pages/components/**/*.js`,
  ])
    .pipe($.plumber())
    .pipe($.concat('preview.js'))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(
      $.if(options.env === 'production', $.uglify({
          compress: {
            drop_console: true
          }
        })
      )
    )
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(`.${destPath}/js`))
    .pipe(browserSync.reload({
      stream: true
    })));

gulp.task('babelHigher', () =>
  gulp.src([
    `.${srcPath}/js/utilities/**/*.js`,
    `.${srcPath}/js/mixins/**/*.js`,
    `.${srcPath}/pages/layout/**/*.js`,
    `.${srcPath}/pages/components/**/*.js`,
    `.${srcPath}/js/pages/higher.js`
  ])
    .pipe($.plumber())
    .pipe($.concat('higher.js'))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(
      $.if(options.env === 'production', $.uglify({
          compress: {
            drop_console: true
          }
        })
      )
    )
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(`.${destPath}/js`))
    .pipe(browserSync.reload({
      stream: true
    })));

gulp.task('babel', ['babelHigher', 'babelPreview'], () =>
  gulp.src([
    `.${srcPath}/js/utilities/**/*.js`,
    `.${srcPath}/js/mixins/**/*.js`,
    `.${srcPath}/pages/layout/**/*.js`,
    `.${srcPath}/pages/components/**/*.js`,
    `.${srcPath}/js/pages/index.js`
  ])
    .pipe($.plumber())
    .pipe($.concat('index.js'))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(
      $.if(options.env === 'production', $.uglify({
          compress: {
            drop_console: true
          }
        })
      )
    )
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(`.${destPath}/js`))
    .pipe(browserSync.reload({
      stream: true
    })));

gulp.task('vendorJs', () =>
  gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
  ])
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(`.${destPath}/js`)));

gulp.task('sass', () => {
  // PostCSS AutoPrefixer
  var processors = [
    autoprefixer({
      browsers: ['last 5 version'],
    })
  ];

  return gulp.src([`.${srcPath}/**/*.sass`, `.${srcPath}/**/*.scss`])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested',
      includePaths: ['./node_modules/bootstrap/scss']
    })
      .on('error', $.sass.logError))
    .pipe($.postcss(processors))
    .pipe($.if(options.env === 'production', $.minifyCss())) // 假設開發環境則壓縮 CSS
    .pipe($.concat('all.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(`.${destPath}/css`))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('imageMin', () => {
  gulp.src(`.${srcPath}/img/*`)
    .pipe($.if(options.env === 'production', $.imagemin()))
    .pipe(gulp.dest(`.${destPath}/img`));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {baseDir: `.${destPath}`},
    reloadDebounce: 2000
  })
});

gulp.task('mockAPI', () =>
  gulp.src("data.json")
    .pipe(server.pipe()));

gulp.task('watch', () => {
  gulp.watch([`.${srcPath}/**/*.sass`, `.${srcPath}/**/*.scss`], ['sass']);
  gulp.watch([`.${srcPath}/**/*.ejs`], ['ejs']);
  gulp.watch([`.${srcPath}/**/*.js`], ['babel']);
  gulp.watch(['data.json'], ['mockAPI']);
});

gulp.task('deploy', () =>
  gulp.src(`.${destPath}/**/*`)
    .pipe($.ghPages()));

gulp.task('sequence', gulpSequence('clean', 'ejs', 'sass', 'babel', 'vendorJs', 'imageMin'));

gulp.task('default', ['ejs', 'sass', 'babel', 'vendorJs', 'mockAPI', 'browserSync', 'imageMin', 'watch']);
gulp.task('build', ['sequence']);