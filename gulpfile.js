const gulp = require('gulp');

gulp.task('copyHtml', done => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    done();
});