const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = {
	source: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'build')
};

module.exports = {
	entry: path.join(PATH.source, '/index.js'),
	output: {
		path: PATH.build,
		filename: '[name].js',
		publicPath: '/'
	},
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(PATH.source, '/index.pug')
		})
	]
};
