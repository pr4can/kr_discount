import { glob } from "glob";
import webpack from "webpack-stream";

export const js = () => {
    const entryObj = {};
    const entryFiles = glob
        .sync(`${app.path.src.js}`)
        .map((file) => "./" + file);   

    return app.gulp
        .src(entryFiles, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error <%= error.message %>",
                })
            )
        )
        .pipe(
            webpack({
                mode: "production",
                entry: entryFiles.reduce((entries, file) => {
                    const entryName = file.match(/[^\\/]+(?=\.js$)/)[0];
                    entryObj[entryName] = file;
                    return entryObj;
                }, {}),
                output: {
                    filename: "[name].min.js",
                },
            })
        )
        .pipe(app.gulp.dest(app.path.build.js));
};
