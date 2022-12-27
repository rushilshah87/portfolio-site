const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "main.js"
	},
	target: "web",
	devServer: {
		port: "8000",
		static: ["./public"],
		open: true,
		hot: true,
		liveReload: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
				exclude: /node_modules/, //folder to be excluded
				use: 'babel-loader' //loader which we are going to use
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/, //folder to be excluded
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|ico)$/i,
				// type:"asset/resource",
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "assets/favicon.ico",
			title: "Rushil Shah",
		})
	],
}