const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(webpackConfig, {

	mode: 'development',
	devtool: 'eval-dirSource-map',

	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: './build',
		overlay: true,
		compress: true,
		open: false
	},

	plugins: [
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
});
