const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const paths= {
	dirSource: path.resolve(__dirname, 'src'),
	dirBuild: path.resolve(__dirname, 'build'),
	dirNode: path.resolve(__dirname, 'node_modules')
}

const commonConfig = {
	entry: path.join(paths.dirSource, '/js/index.js'),
	output: {
		path: paths.dirBuild,
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
			template: path.join(paths.dirSource, '/index.pug')
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

module.exports = {
	paths: paths,
	commonConfig: commonConfig
}
