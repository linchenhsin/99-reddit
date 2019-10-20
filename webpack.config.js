// @flow

const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const themePath = path.resolve( __dirname, './src/assets/styles/theme.less' );

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
    port: 3000,
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
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      // css
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      // less
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                hack: `true; @import "${ themePath }";`,
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
      // fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( {
      inject: true,
      template: path.resolve( __dirname, './public/index.html' ),
    } ),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
