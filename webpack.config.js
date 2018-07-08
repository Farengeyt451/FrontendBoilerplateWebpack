const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const dirSource = path.resolve(__dirname, 'src');
const dirBuild = path.resolve(__dirname, 'build');
const dirNode = path.resolve(__dirname, 'node_modules');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
	entry: path.join(dirSource, '/js/index.js'),
	output: {
		path: dirBuild,
		filename: '[name].js',
		publicPath: '/',
		pathinfo: true
	},
	// mode: 'development',
	// devtool: 'eval-dirSource-map',
	// devServer: {
	// 	host: '0.0.0.0',
	// 	port: 8080,
	// 	contentBase: './build',
	// 	overlay: true,
	// 	compress: true,
	// 	open: false
	// },
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
		// new CleanWebpackPlugin(dirBuild),
		new HtmlWebpackPlugin({
			template: path.join(dirSource, '/index.pug')
		})
		// new BrowserSyncPlugin({
		// 		host: 'localhost',
		// 		port: 3000,
		// 		proxy: 'http://localhost:8080/',
		// 		open: false
		// 	},
		// 	{
		// 		reload: false
		// 	}
		// ),
	],
};
