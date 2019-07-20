var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var livereload   = require('gulp-livereload');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
const babel      = require('gulp-babel');
var pump         = require("pump");

/*
 * Vars
 */

// Sass origem
var scssFiles = [
  'css/*.scss',
];

// Sass destino
var cssDest = 'dist/css';

// JS origem
var jsFiles = [
  'js/*.js'
];

// JS destino
var jsDest = 'dist/js';

// Dev
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Prod
var sassProdOptions = {
  outputStyle: 'compressed'
}

// ####################
// ####################
// ####################

/*
 * Tasks
 */

gulp.task('sassdev', function(scssDev) {
  pump([
    gulp.src(scssFiles),
      sass(sassDevOptions).on('error', sass.logError),
      autoprefixer({
        browsers: ['last 30 versions'],
        cascade: false
      }),
      concat('main.css'),
      gulp.dest(cssDest)
    ], scssDev);
});

gulp.task('sassprod', function(scssProd) {
  pump([ 
    gulp.src(scssFiles),
    sass(sassProdOptions).on('error', sass.logError),
    autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }),
    concat('main.min.css'),
    gulp.dest(cssDest)
  ],scssProd);
});

gulp.task('jsprod', function(cb) {
  pump([ 
    gulp.src(jsFiles),
    babel({
      presets: ['@babel/env']
    }),
    uglify(),
    concat('main.js'),
    gulp.dest(jsDest)
  ],cb); 
});

gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev', 'sassprod']);
  gulp.watch(jsFiles, ['jsprod']);
});

/*
 * Default
 */
gulp.task('default', ['sassdev', 'sassprod', 'jsprod', 'watch']);