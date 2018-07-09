const path = require('path');
const webpack = require('webpack');

const WebpackMessages = require('webpack-messages');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const paths= {
	dirSource: path.resolve(__dirname, 'src'),
	dirBuild: path.resolve(__dirname, 'build'),
	dirNode: path.resolve(__dirname, 'node_modules'),
	entyPug: 'index.pug',
	entyHTML: 'index.html'
};

const commonConfig = {
	entry: path.join(paths.dirSource, '/js/index.js'),
	output: {
		path: paths.dirBuild,
		filename: 'js/[name].js',
		// publicPath: '/',
		pathinfo: true
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: false
					}
				}],
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]",
						publicPath: paths.dirSource
					},
				},
			},
		]
	},

	plugins: [
		new WebpackMessages({
			name: 'client',
			logger: str => console.log(`>> ${str}`)
		}),
		new HtmlWebpackPlugin({
			template: path.join(paths.dirSource, paths.entyPug)
		}),
		new ExtractTextPlugin('css/[name].css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
};

module.exports = {
	paths: paths,
	commonConfig: commonConfig
};
