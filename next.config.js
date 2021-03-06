module.exports = () => {
  const withLess = require('@zeit/next-less')
  const withImages = require('next-images')
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  return withImages(withLess({
    assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Portfolio/' : '',
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: {
        'layout-body-background': '#fff',
        'layout-header-background': '#fff',
        'layout-footer-background': '#262626'
      }
    }
  }))
}
