/* eslint-disable @typescript-eslint/no-var-requires */
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const development = {
  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: 'eval-source-map',
  mode: 'development',
  watchOptions: {
    ignored: '**/.DS_Store',
  },
}

module.exports = { development }
