var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('default', function () {
  var jsdoc = require('gulp-jsdoc');
  gulp.src("./src/*.js").pipe(jsdoc("./documentation"));
  gulp.src("./src/*.js")
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat("all.js"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("dist"));
});
