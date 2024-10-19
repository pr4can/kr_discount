import rename from "gulp-rename";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";

import autoprefixer from "gulp-autoprefixer";
import cssnano from "gulp-cssnano";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp
        .src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SCSS",
                    message: "Error <%= error.message %>",
                })
            )
        )
        .pipe(
            sass({
                outputStyle: "expanded",
            })
        )
        .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
        .pipe(app.plugins.if(app.isBuild, autoprefixer(["last 3 versions"])))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.if(app.isBuild, cssnano()))
        .pipe(
            rename({
                extname: ".min.css",
            })
        )
        .pipe(app.gulp.dest(app.path.build.css));
};
