import fileinclude from "gulp-file-include";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp
        .src(app.path.src.html)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "HTML",
                    message: "Error <%= error.message %>",
                })
            )
        )
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, "img/"))
        .pipe(app.plugins.replace(/@files\//g, "files/"))
        .pipe(app.plugins.replace(/@css\//g, "css/"))
        .pipe(app.plugins.replace(/@js\//g, "js/"))
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: "%DT%",
                    append: {
                        key: "_v",
                        cover: 0,
                        to: ["css", "js"],
                    },
                    output: {
                        file: "gulp/version.json",
                    },
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html));
}