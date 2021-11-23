/**
 * @type {import('webpack').Configuration}
 */
const production = {
  output: {
    publicPath: '/image-optimize/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'source-map',
  mode: 'production',
}

module.exports = { production }
