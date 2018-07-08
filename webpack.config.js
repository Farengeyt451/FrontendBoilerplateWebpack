const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const paths= {
	dirSource: path.resolve(__dirname, 'src'),
	dirBuild: path.resolve(__dirname, 'build'),
	dirNode: path.resolve(__dirname, 'node_modules'),
	entyPug: 'index.pug',
	entyHTML: 'index.html'
}

const commonConfig = {
	entry: path.join(paths.dirSource, '/js/index.js'),
	output: {
		path: paths.dirBuild,
		filename: '[name].js',
		publicPath: '/',
		pathinfo: true
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}],
			},
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
		new HtmlWebpackPlugin({
			template: path.join(paths.dirSource, paths.entyPug)
		})
	],
};

module.exports = {
	paths: paths,
	commonConfig: commonConfig
}
