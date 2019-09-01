// Imports
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Return webpack configuration
module.exports = {
  // Input file to bundle with all dependencies
  entry: './src/index.ts',
  // Output file as bundling result
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  // Modules for additional file processing
  module: {
    // Invoke loaders by file extensions
    rules: [
      // Typescript
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [
            /\.vue$/
          ]
        }
      },
      // SASS
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // Bitmaps & fonts
      {
        test: /\.(png|jpe?g|gif|ttf|woff)$/i,
        loader: 'file-loader'
      },
      // Vector images
      {
        test: /\.svg$/i,
        loader: 'url-loader'
      },
      // Vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // File extensions to consider by webpack itself
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  // Webpack plugins for major extension
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true
    }),
    new VueLoaderPlugin()
  ]
}