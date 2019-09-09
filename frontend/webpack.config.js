// Import plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// Return webpack configuration
module.exports = {
  // Input file to bundle with all dependencies
  entry: './src/main.ts',
  // File extensions to consider by webpack itself
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.vue'
    ]
  },
  // Modules for additional file processing
  module: {
    // Invoke loaders by file extensions
    rules: [
      // Javascript
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"],
          modules: false,
          cacheDirectory: true
        },
        exclude: /node_modules/
      },
      // Typescript
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // SASS
      {
        test: /\.s(c|a)ss$/,
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
    // Clean remainings of last build (changing hashes!)
    new CleanWebpackPlugin(),
    // Lint typescript files
    new TSLintPlugin({
      // Process same as compiler (=tsconfig.json)
      files: ['./src/**/*.ts']
    }),
    // Generate one-and-only html file to be processed by javascript bundle
    new HtmlWebpackPlugin({
      // File to extend by js & css resources
      template: "./src/index.html",
      // Add favicon to template
      favicon: "./src/favicon.png",
      // All resource requests with hash parameter to develop around caches
      hash: true
    }),
    // Pack resolved CSS into file (instead of multiple style tags by default)
    new MiniCssExtractPlugin(),
    // Compile and load vue templates (trigger loaders & split contents)
    new VueLoaderPlugin(),
    // Compress output to save bandwidth
    new CompressionPlugin({
      // Don't process already tiny files
      threshold: 4096,
      // Faster re-builds
      cache: true
    })
  ]
}