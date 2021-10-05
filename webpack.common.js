const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsLintWebpackPlugin = require("eslint-webpack-plugin");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = {
	entry: "./src/index.js",

  output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
    // assetModuleFilename: "assets/[hash][ext][query]",
	},

  module: {
		rules: [
			{
				test: /\.js$/,
        exclude: /nodeModules/,
				loader: "babel-loader",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset",
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: "asset",
			},
      {
        test: /\.pug$/,
        use: "pug-loader"
      },
		],
	},

  plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
		}),
    new EsLintWebpackPlugin(),
		new StyleLintWebpackPlugin(),
	],
};
