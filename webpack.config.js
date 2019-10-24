// @flow

const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    filename: '[name].js',
  },
  devServer: {
    host: '0.0.0.0',
    inline: true,
    hot: true,
    historyApiFallback: true,
    contentBase: 'public',
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: path.resolve( __dirname, './src' ),
      },
      // .scss
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      // .module.scss
      {
        test: /\.module\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[emoji][folder]__[local]___[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      // css
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      // fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( {
      inject: true,
      template: path.resolve( __dirname, './public/index.html' ),
    } ),
    new CopyWebpackPlugin( [
      { from: 'public/favicon.ico', to: 'favicon.ico' },
    ] ),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
