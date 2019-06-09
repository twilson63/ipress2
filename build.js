var klaw = require('klaw-sync')
var fs = require('fs')

const filter = file => /chunk/.test(file.path) === false

const results = klaw('./dist', { 
  nodir: true,
  filter
})

var htmlTemplate = ({html, head, css}) => `
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


results.map(v => {
  const obj = require(v.path).render()
  const outfile = v.path.replace('.js', '.html')
  return { js: v.path, file: outfile, content: obj }
})
  .map(doc => {
    fs.writeFileSync(doc.file, htmlTemplate(doc.content))  
    fs.unlinkSync(doc.js)
  })


