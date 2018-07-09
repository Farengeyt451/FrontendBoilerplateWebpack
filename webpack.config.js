const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const paths= {
	dirSource: path.resolve(__dirname, 'src'),
	dirBuild: path.resolve(__dirname, 'build'),
	dirNode: path.resolve(__dirname, 'node_modules'),
	entyPug: 'index.pug',
	entyHTML: 'index.html'
};

const commonConfig = {
	stats: 'verbose',
	entry: path.join(paths.dirSource, '/js/index.js'),
	output: {
		path: paths.dirBuild,
		filename: '[name].js',
		// publicPath: '/',
		pathinfo: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
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
			},
			{
				test: [/\.scss$/i, /\.sass$/i, /\.css$/],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
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
				})
			}

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.dirSource, paths.entyPug)
		}),
		new ExtractTextPlugin('style.css')
	],
};

module.exports = {
	paths: paths,
	commonConfig: commonConfig
};
