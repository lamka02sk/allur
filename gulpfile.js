// Include gulp
let gulp = require('gulp');

// Include plugins
let concat = require('gulp-concat');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let markup = require('gulp-html-import');

// Concatenate JS files, compile with babel and uglify
gulp.task('scripts', () => {
    return gulp.src(['src/**/*.js'])
        .pipe(concat('allur.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(babel({
            presets: [
                ['env', { modules: false }]
            ]
        }))
        .pipe(gulp.dest('dist/babel/'))
        .pipe(rename('allur.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

// Transpile SASS to CSS and minify CSS
gulp.task('styles', () => {
    return gulp.src('assets/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('allur.min.css'))
        .pipe(gulp.dest('dist/'));
});

// Import markup files
gulp.task('markup', () => {
    return gulp.src('template.html')
        .pipe(markup('templates/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(''));
});

// Automatize tasks
gulp.task('watch-scripts', () => {
    gulp.watch(['src/**/*.js'], ['scripts']);
});

// Automatize tasks
gulp.task('watch-styles', () => {
    gulp.watch(['assets/styles/*.scss'], ['styles']);
});

// Automatize tasks
gulp.task('watch-markup', () => {
    gulp.watch(['templates/*.html', 'template.html'], ['markup']);
});

// Default task
gulp.task('default', ['markup', 'styles', 'scripts', 'watch-scripts', 'watch-styles', 'watch-markup']);
