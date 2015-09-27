var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("css/*.scss", ['sass']);
    gulp.watch("*.html").on('change', function() {
        browserSync.reload();
        console.log('== Restarted! ==');
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
