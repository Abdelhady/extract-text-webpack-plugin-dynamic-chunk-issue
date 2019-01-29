const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractCss = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: false // To let dynamically loaded chuncks, carry their own CSS (not to have that CSS in header)
});

module.exports = {
	devtool: 'eval',
	entry:{
		'entry1': path.resolve(__dirname, 'src') + '/entry1',
		'entry2': path.resolve(__dirname, 'src') + '/entry2'
	},
	output:{
		path: path.resolve(__dirname, 'build'),
		publicPath: 'http://localhost:8080/build/',
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js"
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'babel-loader'
			},
			{
				test: /\.css/i,
				use: extractCss.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins:[
		extractCss,
		new HtmlWebpackPlugin({
			chunks: ['entry1'],
			filename: 'entry1.html'
		}),
		new HtmlWebpackPlugin({
                        chunks: ['entry2'],
                        filename: 'entry2.html'
                })
	]
}
