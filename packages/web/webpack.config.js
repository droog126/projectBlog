const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpack = require('webpack');
// const autoCssModulePlugin = require('./plugins/cssAuto');

const DEV = process.env.DEV == 'true' ? true : false;

const srcPath = path.resolve(__dirname, 'src');
const outPath = path.resolve(__dirname, 'out');

const devServer = {
  port: 3030,
  host: 'localhost',
  hot: true,
  open: true,
  historyApiFallback: true,
  static: path.resolve(__dirname, './out')
};


const environmentConfig = DEV ? { DEV: JSON.stringify(true) } : { DEV: JSON.stringify(false)};

const optimization = {
  splitChunks: {
    chunks: 'all',
    name: 'vendor',
    cacheGroups: {
      'echarts.vendor': {
        name: 'echarts.vendor',
        priority: 40,
        test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
        chunks: 'all'
      },
      lodash: {
        name: 'lodash',
        chunks: 'async',
        test: /[\\/]node_modules[\\/]lodash[\\/]/,
        priority: 40
      },
      'async-common': {
        chunks: 'async',
        minChunks: 2,
        name: 'async-commons',
        priority: 30
      },
      commons: {
        name: 'commons',
        chunks: 'all',
        minChunks: 2,
        priority: 20
      }
    }
  }
};

const config = {
  mode: DEV ? 'development' : 'production',
  entry: {
    app: path.join(srcPath, 'index.tsx')
  },
  output: {
    path: outPath,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      },
      {
        test: /\.less$/i,
        exclude: [/node_modules/, path.join(srcPath, 'theme/index.less')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:5]'
              }
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.less$/i,
        include: path.join(srcPath, 'theme/index.less'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: [autoCssModulePlugin],
            }
          },
          'ts-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.ts', '.json'],
    alias: {
      '@': srcPath
    }
  },

  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename] // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
    },
    name: 'development-cache'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'web',
      template: path.resolve(__dirname, 'index.html')
    }),
    new CleanWebpackPlugin(), // 每次构建时删除build
    new friendlyErrorsWebpackPlugin(), // 有好的错误显示
    new SpeedMeasurePlugin(), // 打包时间分析
    new webpack.EnvironmentPlugin(environmentConfig)
  ],
  devtool: 'inline-source-map',
  devServer,
  optimization,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};

module.exports = config;
