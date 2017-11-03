import gulp from 'gulp'
import { create } from 'browser-sync'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'

const browserSync = create()

gulp.task('dev', ['sass'], () => {

  browserSync.init({ server: './', open: false })

  gulp.watch('./scss/**/*.scss', ['sass'])
  gulp.watch('./index.html').on('change', browserSync.reload)
})

gulp.task('sass', () =>
  gulp.src('./scss/all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', console.error))
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
)

gulp.task('default', ['sass', 'dev'])