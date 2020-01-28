// Установка зависимостей для сборки [всё в save-dev]
// npm i -D gulp gulp-less gulp-concat gulp-concat-css gulp-clean-css gulp-autoprefixer @babel/core gulp-babel @babel/preset-env gulp-uglify del

const 	gulp 		= require('gulp'),
		less 		= require('gulp-less'),
		concatJs 	= require('gulp-concat'),
		concatCss 	= require('gulp-concat-css'),
		cleanCss 	= require('gulp-clean-css'),
		prefixer 	= require('gulp-autoprefixer'),
		babel 		= require('gulp-babel'),
		uglify 		= require('gulp-uglify'),
		del 		= require('del');

function appStyles() {
	return gulp.src(['src/styles/less/**/*.less'])
		.pipe(less())
		.pipe(concatCss('app.css'))
		.pipe(prefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCss())
		.pipe(gulp.dest('dist/css/'))
};

function vendorStyles() {
	return gulp.src(['src/styles/libs/**/*.css' ])
		.pipe(concatCss('vendors.css'))
		.pipe(gulp.dest('dist/css/'))
};

function appScripts() {
	return gulp.src('src/scripts/app/**/*.js')
		.pipe(concatJs('app.js'))
		.pipe(babel({
            presets: ['@babel/env']
        }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
};

function vendorScripts() {
	return gulp.src('src/scripts/libs/**/*.js')
		.pipe(concatJs('vendors.js'))
		.pipe(gulp.dest('dist/js/'))
};

let copyPages 	= () => gulp.src(['src/*.html', 'src/*.htm']).pipe(gulp.dest('dist/')),
	copyFonts 	= () => gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts')),
	copyImages 	= () => gulp.src('src/images/**/*').pipe(gulp.dest('dist/images')),
	clean 		= () => del(['dist/*']);

gulp.task('vendors', gulp.series(
	vendorStyles,
	vendorScripts
));

gulp.task('app', gulp.series(
	appStyles,
	appScripts
));

gulp.task('default', gulp.series(
	clean, 
	appStyles,
	appScripts,
	vendorStyles,
	vendorScripts,
	copyPages,
	copyFonts, 
	copyImages
));