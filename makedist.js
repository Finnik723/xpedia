const fs = require("fs");
const rimraf = require("rimraf");
// const zipFolder = require('zip-a-folder');

rimraf.sync("dist");
fs.mkdirSync("dist");
fs.mkdirSync("dist/xpedia");
fs.mkdirSync("dist/xpedia/Language");

let files = [
  "xpedia/Language/ru.yml",
  "xpedia/Language/pl.yml",
  "xpedia/Language/en-US.yml",
  "xpedia/bundle.js",
  "xpedia/bundle.css",
  "xpedia/global.css",
  "xpedia/favicon.png",
  "xpedia/Finnik.png",
  "xpedia/Scorch.png",
  "xpedia/bulmaswatch.min.css",
  "xpedia/0.png",
  "xpedia/xpedia.html.header",
  "xpedia/jszip.min.js",
  "xpedia/spinner.svg",
  "xpedia/font1.woff",
  "xpedia.js",
  "xpedia.bat",
  "XPEDIA_README.txt"
];

for (let i = 0; i < files.length; ++i) {
  fs.copyFileSync("public/" + files[i], "dist/" + files[i])
}

// zipFolder.zipFolder('dist', 'xpedia.zip', err=> {if(err) console.log(err)})