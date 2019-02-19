//variables

'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
const minify = require('gulp-babel-minify');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');


//Tasks

gulp.task('hello', gulp.series((done) => {    
    
    console.log('Willkommen in der Dunkelheit');

    done();

}));


gulp.task('browserSync', () => {

    browserSync.init({
      server: {
      baseDir: './'
      },

    })
  });


gulp.task('sass', () => {
  
  return gulp.src('src/scss/custom.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css') )
    .pipe(browserSync.reload({
      stream: true
      }))
});


gulp.task('cleanCss', () => {

  return gulp.src('src/css/custom.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));

});


gulp.task('scripts', () => {
  
  return gulp.src(['./src/js/*.js'])
  .pipe(concat('main.min.js'))
  .pipe(minify({
    mangle: {
      keepClassNames: true
    }
  }))
  .pipe(babel({
    presets: ['@babel/env']
}))
  .pipe(gulp.dest('./dist/js'));
});



gulp.task('watch', () => {

  gulp.watch('src/scss/*.scss', gulp.parallel('sass'));
  gulp.watch('src/css/custom.css', gulp.parallel('cleanCss'));
  gulp.watch('src/js/*js', gulp.parallel('scripts'));
  gulp.watch('src/js/*.js', browserSync.reload);
  gulp.watch('src/index.html', browserSync.reload);

});
 
 
