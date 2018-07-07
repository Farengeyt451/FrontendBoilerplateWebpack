const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appPaths = {
	source: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'build'),
};

module.exports = {
	entry: path.join(appPaths.source, '/js/index.js'),
	output: {
		path: appPaths.build,
		filename: '[name].js',
		publicPath: '/'
	},
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: './build',
		overlay: true,
		compress: true,
		open: false
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			template: path.join(appPaths.source, '/index.pug')
		}),
		new BrowserSyncPlugin({
				host: 'localhost',
				port: 3000,
				proxy: 'http://localhost:8080/',
				open: false
			},
			{
				reload: false
			}
		),
	]
};
