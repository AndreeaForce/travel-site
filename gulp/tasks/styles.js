var gulp = require('gulp'),
postcss = require('gulp-postcss'), 
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
   return gulp.src('./app/assets/styles/styles.css')
       .pipe(postcss([cssimport, cssvars, nested, hexrgba, autoprefixer]))
    
     // .on('error', function() {
       //console.log('errorInfo');
       //    this.emit('end');
       // })   
    
       .pipe(gulp.dest('./app/temp/styles'));
});
