var gulp = require('gulp');
var uglify = require('gulp-uglify');

var paths = {
	scripts: ['src/**/**.js']
};

gulp.task('scripts', function () {
	gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['scripts']);