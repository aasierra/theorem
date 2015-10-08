var gulp = require('gulp');

gulp.task('default', function () {
  var jsdoc = require('gulp-jsdoc');
  gulp.src("./src/*.js").pipe(jsdoc("./documentation"));
});
