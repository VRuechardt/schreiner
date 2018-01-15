
const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const babelify = require('babelify')
const browserify = require('browserify')
const babel = require('gulp-babel')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const livereload = require('gulp-livereload')
const fs = require('fs')
const ngHtml2Js = require('browserify-ng-html2js')

const dest = './dest'

gulp.task('default', () => {

    gulp.start('html')
    gulp.start('css')
    gulp.start('js')

})

gulp.task('html', () => {

    return gulp.src(`./frontend/index.html`)
        .pipe(gulp.dest(dest))
        .pipe(livereload())

})

gulp.task('css', () => {

    return gulp.src(`./frontend/index.scss`)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(dest))
        .pipe(livereload())

})

gulp.task('js', () => {

    return browserify(`./frontend/index.js`)
        .transform('babelify', {presets: ['es2015']})
        .transform(ngHtml2Js())
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest(dest))
        .pipe(livereload())

})

gulp.task('watch', () => {

    gulp.watch(`frontend/**/*.html`, [`js`])
    gulp.watch(`frontend/**/*.scss`, [`css`])
    gulp.watch(`frontend/**/*.js`, [`js`])

})
