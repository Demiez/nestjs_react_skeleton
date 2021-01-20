const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TS_CONFIG_CLIENT = 'tsconfig.client.json';

module.exports = {
  entry: ['react-hot-loader/patch', './client/index.tsx'],

  output: {
    path: path.join(__dirname, 'dist'),

    filename: 'bundle.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Skeleton',
      chunksSortMode: 'auto',
      template: path.resolve(__dirname, './client/index.ejs'),
    }),
  ],

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: `react-hot-loader/webpack?configFileName=${TS_CONFIG_CLIENT}`,
          },
          {
            loader: `awesome-typescript-loader?configFileName=${TS_CONFIG_CLIENT}`,
          },
        ],
        exclude: /node_modules/,
        include: /client/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devtool: 'source-map',
  performance: {
    hints: false,
  },

  devServer: {
    hot: true,
  },
};
