import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    fonts: `${buildFolder}/fonts/`,
    svg: `${buildFolder}/svg/`,
  },
  src: {
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/style.scss`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/svg/*.svg`,
  },
  watch: {
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/**/*.scss`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/svg/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}