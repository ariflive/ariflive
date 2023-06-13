// npx webpack --config webpack.config.js

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'development', // development | production
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
	entry: {
    main: './assets/ts/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: path.join(__dirname, 'assets/js'),
    compress: true,
    port: 4000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
