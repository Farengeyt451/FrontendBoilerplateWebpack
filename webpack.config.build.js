const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(webpackConfig);

module.exports = merge(webpackConfig.commonConfig, {

	mode: 'production',
	devtool: false,

	plugins: [
		new CleanWebpackPlugin([webpackConfig.paths.dirBuild])
	]
});
