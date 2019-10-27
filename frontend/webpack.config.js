// Import plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

// Import project information from NPM
const project = require("./package.json");

// Detect output directory
const path = require("path"),
	tomcatDir = process.env["CATALINA_HOME"],
	outputDir = tomcatDir ? path.resolve(tomcatDir, "webapps", "ROOT") : path.resolve(__dirname, "dist");

// Return webpack configuration
module.exports = {
	// Input file to bundle with all dependencies
	entry: "./src/main.ts",
	// Output location for js bundle + chunks
	output: {
		path: outputDir,
		filename: "js/[name].[contenthash:8].js",
		chunkFilename: "js/[name].[contenthash:8].js"
	},
	// File extensions to consider by webpack itself
	resolve: {
		extensions: [
			".js",
			".ts",
			".vue"
		]
	},
	// Modules for additional file processing
	module: {
		// Invoke loaders by file extensions
		rules: [
			// Javascript
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
					cacheDirectory: true
				},
				exclude: /node_modules\/(?!vuetify)/  // Transpile Vuetify for edge support
			},
			// Typescript
			{
				test: /\.ts$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							appendTsSuffixTo: [/\.vue$/]
						}
					},
					"tslint-loader"
				],
				exclude: /node_modules/
			},
			// CSS
			{
				test: /\.css$/,
				use: [
					"vue-style-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../" // Fix subfolder in CSS filename
						}
					},
					"css-loader"
				]
			},
			// SASS
			{
				test: /\.s(c|a)ss$/,
				use: [
					"vue-style-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../" // Fix subfolder in CSS filename
						}
					},
					"css-loader",
					"sass-loader"
				]
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: "url-loader",
				options: {
					limit: 8192,
					name: "images/[name].[contenthash:8].[ext]"
				}
			},
			// Fonts
			{
				test: /\.woff2?$/i,
				loader: "file-loader",
				options: {
					name: "fonts/[name].[contenthash:8].[ext]"
				}
			},
			{
				test: /\.(ttf|eot)$/i,
				loader: "file-loader",
				options: {
					// Don't support deprecated formats
					emitFile: false
				}
			},
			// Vue
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	// Webpack plugins for further processing
	plugins: [
		// Clean remainings of last build (changing hashes!)
		new CleanWebpackPlugin(),
		// Generate one-and-only html file to be processed by javascript bundle
		new HtmlWebpackPlugin({
			// HTML template to extend by js+css resources and parameters
			template: "./src/index.ejs",
			// Provide project information as template parameters
			templateParameters: project,
			// Add favicon to template
			favicon: "./src/favicon.png"
		}),
		// Pack resolved CSS into file (instead of multiple style tags by default)
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}),
		// Compile and load vue templates (trigger loaders & split contents)
		new VueLoaderPlugin(),
		// Auto-import required ui components (reducing bundle size)
		new VuetifyLoaderPlugin(),
		// Compress output to save bandwidth
		new CompressionPlugin({
			// Don"t process already tiny files
			threshold: 4096,
			// Faster re-builds
			cache: true
		}),
		// Support offline mode by browser caching
		new OfflinePlugin({
			appShell: "/",
			responseStrategy: "network-first",
			version: new Date().toISOString(),
			ServiceWorker: {
                cacheName: project.name + "-" + project.version,
                events: true
			}
		})
	],
	// Optimize bundling
	optimization: {
		// Improve caching by vendor resources in separate chunk (see <https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks>)
		splitChunks: {
			name: "vendors",
			chunks: "all"
		},
		// Move webpack-generated runtime into separate chunk
		runtimeChunk: "single"
	},
	// Watch mode behaviour
	watchOptions: {
		// Reduce cycles (=less CPU load)
		aggregateTimeout: 500,
		// Ignore dependencies
		ignored: /node_modules/
	},
	// Modify performance hints
	performance: {
		// All entry points <2mb
		maxEntrypointSize: 2000000,
		// All assets <10mb
		maxAssetSize: 10000000
	}
}