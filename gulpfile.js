var gulp = require('gulp'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    copy = require('postcss-copy'),
    postcssImport = require('postcss-import');


gulp.task('build', function () {
    gulp.src('src/theme/app/css/app.css', {
        base: 'src/theme/app/css'
    })
        .pipe(postcss([
            postcssImport({
                path: [
                    'src/theme/app/css/'
                ]
            }),
            copy({
                src: [
                    'src/theme',
                    'node_modules'
                ],
                dest: 'public/assets/theme',
                get template() {
                    return '[path]/[name].[ext]';
                },
                keepRelativePath: true
            })
        ]))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('public/assets/theme/app/css'));
});