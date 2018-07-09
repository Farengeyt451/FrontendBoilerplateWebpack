const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig.commonConfig, {

	mode: 'production',
	devtool: false,

	module: {
		rules: [
			{
				test: [/\.scss$/i, /\.sass$/i, /\.css$/],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: false,
								minimize: true
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
								sourceMap: false
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: false
							}
						}
					]
				})
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin([webpackConfig.paths.dirBuild])
	]
});
