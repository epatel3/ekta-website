import Index from './Index.svelte';
const minify = require('html-minifier').minify;
const posthtml = require('posthtml');
const removeAttributes = require('posthtml-remove-attributes');
const fs = require('fs')

async function main() {
  const { head, html, css } = Index.render();

  const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  ${head}

  <style>
    ${css.code}
  </style>
</head>
<body>
  ${html}
</body>
</html>
`;

  const cleanedHtml = (await posthtml([
    removeAttributes([  // The only non-array argument is also possible
      'data-svelte',
    ])
  ]).process(fullHtml)).html;

  const minifiedHtml = cleanedHtml;
  // const minifiedHtml = minify(cleanedHtml, {
  //   caseSensitive: true,
  //   collapseBooleanAttributes: true,
  //   collapseInlineTagWhitespace: true,
  //   collapseWhitespace: false,
  //   decodeEntities: true,
  //   minifyCSS: true,
  //   minifyJS: true,
  //   removeAttributeQuotes: true,
  //   removeComments: true,
  //   removeEmptyAttributes: true,
  //   removeEmptyElements: true,
  //   removeOptionalTags: true,
  //   removeRedundantAttributes: true,
  //   removeScriptTypeAttributes: true,
  //   removeStyleLinkTypeAttributes: true,
  //   useShortDoctype: true,
  //   keepClosingSlash: true,
  // });
  fs.writeFileSync("public/index.html", minifiedHtml);
}

main();
