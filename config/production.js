/**
 * @type {import('webpack').Configuration}
 */
const production = {
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
