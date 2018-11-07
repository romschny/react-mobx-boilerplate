/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  const config = {
    mode: env === 'production' ? 'production' : 'development',
    entry: {
      app: './src/index.jsx',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
    },
    devtool: env === 'production' ? 'source-map' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg|webp)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: env === 'prod'
                ? {
                  mozjpeg: {
                    progressive: true,
                    quality: 75,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: '75-90',
                    speed: 4,
                  },
                }
                : {
                  disable: true,
                },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '$components': path.resolve(__dirname, 'src/components/'),
        '$utils': path.resolve(__dirname, 'src/utils/'),
        '$store': path.resolve(__dirname, 'src/store.js'),
      },
    },
    plugins: [
      new CleanPlugin(['./dist'], { verbose: false }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env),
        },
      }),
      new HtmlWebpackPlugin({
        title: 'react-mobx-boilerplate',
        template: path.resolve(__dirname, './index.html'),
        chunks: ['vendors', 'app'],
      }),
    ],
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      port: 8080,
      host: 'localhost',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };

  return config;
};
