const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(webpackConfig.commonConfig, {

	mode: 'development',
	devtool: 'eval-source-map',

	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: webpackConfig.paths.dirBuild,
		overlay: true,
		compress: true,
		open: false
	},

	module: {
		rules: [
			{
				test: [/\.scss$/i, /\.sass$/i, /\.css$/],
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								autoprefixer({
									browsers:['ie >= 8', 'last 4 version']
									})
							],
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
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
