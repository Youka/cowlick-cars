// Import plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Return webpack configuration
module.exports = {
  // Input file to bundle with all dependencies
  entry: './src/main.ts',
  // File extensions to consider by webpack itself
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  // Modules for additional file processing
  module: {
    // Invoke loaders by file extensions
    rules: [
      // Typescript
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // Images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: "[name].[hash].[ext]",
          outputPath: "images"
        }
      },
      // Fonts
      {
        test: /\.(ttf|woff2?|eot)$/i,
        loader: 'file-loader',
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "fonts"
        }
      },
      // Vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // Webpack plugins for further processing
  plugins: [
    // Clean possible remainings of last build
    new CleanWebpackPlugin(),
    // Generate one-and-only html file to be processed by javascript bundle
    new HtmlWebpackPlugin({
      // File to extend by js & css resources
      template: "./src/index.html",
      // All resource requests with hash parameter to develop around caches
      hash: true,
      // Furthermore add favicon to template
      favicon: "./src/favicon.png"
    }),
    // Pack resolved CSS into file (instead of default style tags)
    new MiniCssExtractPlugin(),
    // Compile and load vue templates
    new VueLoaderPlugin()
  ]
}