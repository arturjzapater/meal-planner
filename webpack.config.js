const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './index.tsx',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve('../server/src/dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: './dist',
    port: 3000
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }]
    },
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'minify',
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'defer',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  optimization: {
    minimizer: [new OptimiseCssAssetsPlugin()]
  }
}
