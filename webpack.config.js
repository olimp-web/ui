const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				include: path.resolve(__dirname, 'src/style/'),
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader",
						options: {
							sourceMap: true,
						}
					},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: './css/style.bundle.css',
			allChunks: true,
		}),
	]
};