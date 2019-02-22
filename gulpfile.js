const { src, dest, parallel, watch } = require('gulp');

const babel         = require('gulp-babel');
const sourcemaps    = require('gulp-sourcemaps');
const concat        = require('gulp-concat');
const sass          = require('gulp-sass');


function html(cb) {
    return src('src/**/*.html')
        .pipe(dest('dist'));
}

function css(cb) {
    return src('src/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist'));
}

function javascript(cb) {
    return src(['src/**/*.js', '!src/plugins/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist'));
}

function jsPlugin(cb) {
    return src('src/plugins/**/*.js')
    .pipe(dest('dist/plugins'));
}

exports.html = html;
exports.javascript = javascript;
exports.css = css;

exports.default = parallel(html, css, javascript, jsPlugin);

watch('src/**/*.html', html);
watch('src/**/*.sass', css);
watch('src/**/*.js', javascript);