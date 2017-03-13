var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var babel  = require('gulp-babel');


gulp.task('css', function() {
   gulp.src([
       './public/assets/css/bootstrap.min.css',
       './public/assets/css/style.css',
       './public/assets/switcher/css/blue.css',
       './public/assets/css/font-awesome.min.css'
   ])
       .pipe(concat('app.css'))
       .pipe(cssMin())
       .pipe(gulp.dest('./public/assets/css/'))
});

gulp.task('scripts', function() {
    gulp.src([
        './public/assets/js/jquery.min.js',
        './public/assets/js/bootstrap.min.js',
        './public/assets/js/interface.js',
        './public/assets/js/jquery.countdown.min.js',
        './public/assets/js/speakers.js',
        // './public/assets/js/gmaps.min.js'
    ])
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('default', ['css', 'scripts']);