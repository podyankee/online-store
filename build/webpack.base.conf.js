const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const SpritePlugin = require('extract-svg-sprite-webpack-plugin')


const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
};


module.exports = {

	externals: {
		paths: PATHS
	},

	entry: {
		app: PATHS.src
	},
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		},
			{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loader: {
					sass: 'vue-style-loader!css-loader!sass-loader'
				}
			}
		},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader',
				options: {
					pretty: true
				}
			},
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				exclude: [/\.svg$/]

			}
		},
			{
				test: /\.svg$/,
				loader: SpritePlugin.loader
			},
		{
			test: /\.sass$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: { sourceMap: true }
				},
				{
					loader: "postcss-loader",
					options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
				},
				{
					loader: "sass-loader",
					options: {
						sourceMap: true,
						indentedSyntax: true
					}
				}
			]
		},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					SpritePlugin.cssLoader,
					{
						loader: "postcss-loader",
						options: {  config: { path: `${PATHS.src}/js/postcss.config.js` }, },
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: `${ PATHS.assets }/fonts/[name].[hash:7].[ext]`
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`
		}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html'
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
			{ from: `${PATHS.src}/static`, to: ''}
		]),
		new SpritePlugin({ })
	]
}

