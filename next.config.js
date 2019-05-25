module.exports = () => {
  const withLess = require('@zeit/next-less')
  const withImages = require('next-images')
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  return withImages(withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: {
        'primary-color': '#1DA57A'
      }
    }
  }))
}
