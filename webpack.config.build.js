const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(webpackConfig, {

	mode: 'production',
	devtool: false,

	plugins: [
		new CleanWebpackPlugin(['build'])
	]
});
