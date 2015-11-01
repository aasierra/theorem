var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var buildCode = function () {
  var jsdoc = require('gulp-jsdoc');
  gulp.src("./src/*.js").pipe(jsdoc("./documentation"));
  return gulp.src("./src/*.js")
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat("all.js"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("dist"));
};
var buildTests = function () {
  return gulp.src("./tests/*.js")
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(gulp.dest("built-tests"));
}
gulp.task('default', function () {
  return buildCode();
});

gulp.task('buildTests', ['default'], function () {
  return buildTests();
});

gulp.task('test', ['buildTests'], function () {
  var mocha = require('gulp-mocha');
  gulp.src("./built-tests/GCD-test.js", {read:false})
  .pipe(mocha({reporter:'nyan'}));
});
