// Import plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Return webpack configuration
module.exports = {
  // Input file to bundle with all dependencies
  entry: './src/main.ts',
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
        test: /\.(ttf|woff)$/i,
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
  // File extensions to consider by webpack itself
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.vue'
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
    // Compile and load vue templates
    new VueLoaderPlugin()
  ]
}