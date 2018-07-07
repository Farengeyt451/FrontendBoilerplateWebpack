const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const PATHS = {
	source: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'build'),
	publicPath: '/'
};

const APP = path.resolve(__dirname, 'src');
const BUILD = path.resolve(__dirname, 'build');
// const STYLE = path.join(__dirname, 'app/style.css');
// const PUBLIC = path.join(__dirname, 'app/public');
// const TEMPLATE = path.join(__dirname, 'app/templates/index_default.html');
// const LINT = path.join(__dirname, '.eslintrc.js');
// const STYLELINT = ['./app/styles/**/*.css', './app/styles.css'];
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
	entry: path.join(PATHS.source, '/js/index.js'),
	output: {
		path: PATHS.build,
		filename: '[name].js',
		publicPath: PATHS.publicPath
	},
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: './build',
		overlay: true
	},
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
		new HtmlWebpackPlugin({
			template: path.join(PATHS.source, '/index.pug')
		}),
		new BrowserSyncPlugin({
				host: 'localhost',
				port: 3000,
				proxy: 'http://localhost:8080/',
			},
			{
				reload: false
			}
		),
	]
};
