// npx webpack --config webpack.config.js

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'development', // development | production
	entry: {
    main: './assets/ts/index.ts',
  },
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'assets/js'), // Output directory
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
