const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		port: 3000,
		static: {
			directory: path.join(__dirname, './'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
