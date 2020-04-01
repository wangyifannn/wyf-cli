module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.injectImports(utils.getMain(), `import './plugins/element.js'`)

  api.render({
    './src/plugins/element.js': './templates/src/plugins/element.js'
  })
  if (opts.customTheme) {
    api.render({
      './src/element-variables.scss': './templates/src/element-variables.scss'
    })
    api.extendPackage({
      devDependencies: {
        'sass-loader': '^7.0.3',
        'node-sass': '^4.9.2'
      }
    })
  }

   if (opts.dockerIgnore) {
    api.render({
      './.dockerignore': './templates/src/.dockerignore'
    })
  }else if(opts.envAlpha){
    api.render({
      './.env.alpha': './templates/src/.env.alpha'
    })
  }
}
