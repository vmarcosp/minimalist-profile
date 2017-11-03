import gulp from 'gulp'
import { create } from 'browser-sync'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'
import concatCss from 'gulp-concat-css'
import uglifyCss from 'gulp-uglifycss'
import gulpCopy from 'gulp-copy'
import gulpReplace from 'gulp-replace'
import htmlReplace from 'gulp-html-replace'
import imageMin from 'gulp-imagemin'

const browserSync = create()

const FONT_AWESOME_PATH = 'node_modules/font-awesome'
const DIST_PATH = 'dist/'
const ASSETS_PATH = `${DIST_PATH}/assets`

gulp.task('build:css', ['build:sourcemap'], () =>
  gulp.src(['css/style.css', `${FONT_AWESOME_PATH}/css/font-awesome.min.css`])
    .pipe(concatCss('css/all.min.css'))
    .pipe(uglifyCss())
    .pipe(gulp.dest(ASSETS_PATH))
)

gulp.task('build:sourcemap', ['sass'], () =>
  gulp.src('css/style.css.map')
    .pipe(gulp.dest(`${ASSETS_PATH}/css`))
)

gulp.task('build:fa', () =>
  gulp.src([`${FONT_AWESOME_PATH}/fonts/fontawesome-webfont.*`, `${FONT_AWESOME_PATH}/fonts/FontAwesome.otf`])
    .pipe(gulp.dest(`${ASSETS_PATH}/fonts`, {}))
)

gulp.task('build:replace-fa', ['build:fa'], () =>
  gulp.src(`${ASSETS_PATH}/css/all.min.css`)
    .pipe(gulpReplace('../../node_modules/font-awesome', '..'))
    .pipe(gulp.dest(`${ASSETS_PATH}/css`))
)

gulp.task('build:html', () =>
  gulp.src('index.html')
    .pipe(htmlReplace({
      'css': './assets/css/all.min.css'
    }))
    .pipe(gulp.dest(DIST_PATH))
)

gulp.task('build:images', () =>
  gulp.src(['images/*.png', 'images/*.jpg', 'images/*.gif', 'images/*.jpeg'])
    .pipe(imageMin())
    .pipe(gulp.dest('dist/assets/images'))
)

gulp.task('build', ['build:html', 'build:css', 'build:replace-fa', 'build:images'])

gulp.task('dev', ['sass'], () => {

  browserSync.init({ server: './', open: false })

  gulp.watch('./scss/**/*.scss', ['sass'])
  gulp.watch('./index.html').on('change', browserSync.reload)
})

gulp.task('sass', () =>
  gulp.src('./scss/all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', console.error))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
)

gulp.task('default', ['sass', 'dev'])