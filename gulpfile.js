import gulp from "gulp";
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}

import { fonts } from "./gulp/tasks/fonts.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { svg } from "./gulp/tasks/svg.js";

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(fonts, html, scss, svg);
const finalTasks = gulp.parallel(watcher, server);

const dev = gulp.series(reset, mainTasks, finalTasks);

gulp.task('default', dev);