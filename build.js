var klaw = require('klaw-sync')
var fs = require('fs')
var { compose, map, replace, head, tail, toUpper, toLower } = require('ramda')
var path = require('path')

/**
 * apply filter ignore chunk files
 */
const filter = file => /chunk/.test(file.path) === false

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
function htmlTemplate ({html, head, css}, component) {
  return `
<!doctype html>
<html>
  <head>
    ${head}
    ${css.code !== '' ? `<style>${css.code}</style>` : ''}
  </head>
  <body>
    <div id="app">
    ${html}
    </div>
    <script type="module">
      import Index from './${toLower(component)}.js'
      const target = document.getElementById('app')
      target.innerHTML = ''
      new ${component}({ target })
    </script>
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
  const content = require(path).render()
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
  // need to get the file name eg. index.js
  // need to create the component name Index 
  const jsComponent = buildJsComponentName(js)
  fs.writeFileSync(file, htmlTemplate(content, jsComponent))
  fs.unlinkSync(js)
}

function buildJsComponentName(file) {
  let jsComponent = replace(path.resolve('./dist') + '/', '', file)
  jsComponent = replace('.js', '', jsComponent)
  jsComponent = toUpper(head(jsComponent)) + tail(jsComponent)
  return jsComponent
 
}
