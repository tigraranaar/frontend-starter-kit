const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",

  target: "web",

  devtool: "inline-source-map",

  devServer: {
		open: true,
		hot: true,
		static: "./dist",
    contentBase: "./dist",
	},

	output: {
		pathinfo: false,
	},

  module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

  plugins: [],
});
