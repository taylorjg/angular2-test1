var gulp = require("gulp");
var ts = require('gulp-typescript');
var del = require('del');

var PATHS = {
    libs: [
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/angular2/bundles/angular2.dev.js",
        "node_modules/angular2/bundles/http.dev.js",
        "node_modules/angular2/bundles/router.dev.js",
        "node_modules/rxjs/bundles/Rx.js"
    ],
    client: {
        ts: "client/app/**/*.ts",
        html: "client/**/*.html"
    },
    dist: "dist",
    distClient: "dist/client",
    distClientApp: "dist/client/app",
    distLib: "dist/lib"
};

var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", ["ts", "html", "libs"], function () {
    console.log("Inside build gulp task");
});

gulp.task("clean", function (done) {
    console.log("Inside clean gulp task");
    del([PATHS.dist], done);
});

gulp.task("ts", function () {
    console.log("Inside ts gulp task");
    return gulp
        .src(PATHS.client.ts)
        .pipe(ts(tsProject))
        .pipe(gulp.dest(PATHS.distClientApp));
});

gulp.task("html", function () {
    console.log("Inside html gulp task");
    return gulp
        .src(PATHS.client.html)
        .pipe(gulp.dest(PATHS.distClient));
});

gulp.task("libs", function () {
    console.log("Inside libs gulp task");
    return gulp
        .src(PATHS.libs)
        .pipe(gulp.dest(PATHS.distLib));
});

gulp.task("default", ["build"], function () {
    console.log("Inside default gulp task");
});
