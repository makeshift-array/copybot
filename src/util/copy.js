const fs = require('fs-extra')
const path = require('path')
const chokidar = require('chokidar')

module.exports = paths => {
  paths.forEach(p => {
    let { src, dest, options } = p

    options = Object.assign({}, options, {
      persistent: true,
      ignorePermissionErrors: true
    })

    // Initial copy on load
    fs.copy(src, dest, err => {
      if (err) throw err
    })

    // Create the watcher
    // TODO: breakout
    chokidar.watch(src, options).on('change', fileSrc => {
      const file = fileSrc.substr(fileSrc.lastIndexOf('\\') + 1)
      const normalizedDest = path.join(dest, file)

      fs.copy(fileSrc, normalizedDest, err => {
        if (err) throw err
      })
    })
  })
}
