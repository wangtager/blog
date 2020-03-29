const { src, dest, parallel } = require('gulp')
const gulp = require('gulp')
const del = require('del')
function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
gulp.task('copy',function(){
    return gulp.src('./docs/\.vuepress/dist/*').pipe(gulp.dest('./docs/\.vuepress/dist/blog/'));
})
gulp.task('clean', function (cb) {
    return del([
      './docs/\.vuepress/dist/blog/*'
    ], cb);
});
exports.default = defaultTask