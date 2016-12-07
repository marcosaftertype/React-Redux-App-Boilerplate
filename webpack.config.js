const debug 	= process.env.NODE_ENV !== "production"
const webpack 	= require('webpack')
const path 		= require('path')

const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/client.js",
	module: {
		loaders: [
		{ 
			test: /\.json$/, 
			loader: 'json' 
		},
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread'],
			}
		},
		{
			test: /\.scss$/, 
			loaders: [
				'style',
				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
				'sass'
			]
		}
		]
	},
	output: {
		path: path.join(__dirname, 'src'),
		filename: "bundle.min.js"
	},
	plugins: debug ? [] : [
		new FlowStatusWebpackPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false })
	]
};