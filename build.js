var klaw = require('klaw-sync')
var fs = require('fs')
var { compose, map } = require('ramda')

/**
 * apply filter ignore chunk files
 */
const filter = file => /cc.js$/.test(file.path) === false

/*
 * get files
 *
 * 
 *
 */
// TODO: allow output directory to be specified on command line
const results = klaw('./dist', { 
  nodir: true,
  filter
})

/**
 * combine bulid steps
 */
const build = compose(
  writeHtmlFile,
  createOutputBundle
)

/**
 * run component render functions 
 * and write html files
 */
map(build, results)

/**
 * CodeBundle object
 * @typedef {object} CodeBundle
 * @property {object} css
 * @property {string} head
 * @property {string} html
 */

/**
 * html template wrapper function
 * 
 * @param {CodeBundle} 
 *
 * @returns {string}
 *
 */
function htmlTemplate ({html, head, css}) {
  return `
<!doctype html>
<html>
  <head>
    ${head}
    ${css.code !== '' ? `<style>${css.code}</style>` : ''}
  </head>
  <body>
    ${html}
  </body>
</html>
`
}

/**
 * @typedef {object} FileObject
 * @property {string} path
 */

/**
 * @typedef {object} OutputBundle
 * @property {string} js - path of js file
 * @property {string} file - path of html file
 * @property {string} content - html file contents
 */

/**
 * create html document and return OutputBundle
 *
 * @param {fileObject}
 *
 * @returns {OutputBundle}
 */
function createOutputBundle({ path }) {
  const content = require(path).default.render()
  const file = path.replace('.js', '.html')
  return {js: path, file, content}
}

/**
 * write html document to file
 *
 * @param {OutputBundle}
 *
 * @returns {null}
 */
function writeHtmlFile({js, file, content}) {
  fs.writeFileSync(file, htmlTemplate(content))
  fs.unlinkSync(js)
}

