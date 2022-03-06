const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

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

const environmentConfig = DEV ? { DEV: true } : { DEV: false };

console.log(`环境为:${DEV ? 'dev' : 'pro'}`);

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
        include: [/node_modules\\ant/, path.join(srcPath, 'theme/index.less')],
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
        test: /\.(tsx|ts)$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.ts', '.json'],
    alias: {
      '@': srcPath
    }
  },

  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
          global: 'ReactDOM'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'web',
      template: path.resolve(__dirname, 'index.html')
    }),
    new CleanWebpackPlugin(), // 每次构建时删除build
    new friendlyErrorsWebpackPlugin(), // 有好的错误显示
    new SpeedMeasurePlugin(), // 打包时间分析
    new webpack.EnvironmentPlugin(environmentConfig)
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};

let developmentConfig = {
  devServer,
  devtool: 'inline-source-map',
  plugins: []
};

let productionConfig = {
  // devtool: 'inline-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    },
    name: 'development-cache'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     name: 'vendor',
  //     cacheGroups: {
  //       nodeModule: {
  //         name: 'nodeModule',
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: 10,
  //         chunks: 'initial'
  //       },
  //       'echarts.vendor': {
  //         name: 'echarts.vendor',
  //         priority: 40,
  //         test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
  //         chunks: 'all'
  //       },
  //       lodash: {
  //         name: 'lodash',
  //         chunks: 'async',
  //         test: /[\\/]node_modules[\\/]lodash[\\/]/,
  //         priority: 40
  //       },
  //       async: {
  //         chunks: 'async',
  //         minChunks: 2,
  //         name: 'async',
  //         priority: 30
  //       },
  //       commons: {
  //         name: 'commons',
  //         chunks: 'all',
  //         minChunks: 2,
  //         priority: 20
  //       }
  //     }
  //   }
  // },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionWebpackPlugin({
      test: /\.js(\?.*)?$/i
    })
  ]
};

module.exports = DEV ? merge(config, developmentConfig) : merge(config, productionConfig);
