const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const ImageminGm = require('imagemin-gm')
const imageminGm = new ImageminGm()
const sizeOf = require('image-size');

const { lstatSync, readdirSync, renameSync } = require('fs')
const { join, extname, basename } = require('path')

// Adapted from https://stackoverflow.com/a/24594123
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).filter(name => isDirectory(join(source, name)));

const INPUT_DIR = 'images/';
const OUTPUT_DIR = 'public/assets/images/';

async function minimize(dir) {
  const outputDir = `${OUTPUT_DIR}${dir}/`;
  await imagemin([`${INPUT_DIR}${dir}/*.{jpg,png}`], {
    destination: outputDir,
    plugins: [
      imageminGm.resize({ height: 260 }),
      imageminGm.convert('jpg'),
      imageminJpegtran(),
    ]
  });
  // Rename files to jpg afterwards
  // and print dimensions
  console.log(dir);
  const files = readdirSync(outputDir);
  const logged = {};
  for (const fn of files) {
    const extension = extname(fn);
    const base = basename(fn, extension);
    const newFn = join(outputDir, base + '.jpg');
    if (extension != '.jpg') {
      renameSync(join(outputDir, fn), newFn);
    }
    const dimensions = await sizeOf(newFn);
    if (!logged[base]) {
      console.log(`-- ${base} ${dimensions.width}`);
      logged[base] = true;
    }
  }
  console.log();
}

getDirectories(INPUT_DIR).forEach(minimize);
