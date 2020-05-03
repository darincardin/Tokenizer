const path = require('path');
var webpack = require('webpack');

//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyPlugin = require('copy-webpack-plugin');




module.exports = (env) => {

	var plugins = [ 
		new webpack.ProvidePlugin({   $: "jquery", jQuery: "jquery", _: 'underscore' }) ,
		//new CopyPlugin([  { from: './src/assets/images', to: './' },]),
	];
	
	return  {
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: {	index: './src/index-dev.js'  },

	  output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: '[name].js',
	  },
      plugins: plugins,
	  devServer: {
		contentBase:  require('path').join(__dirname, "src"),
		publicPath: '/',
		historyApiFallback: true,
		inline: true,
		port: 8888,
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
	    	{ test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },	

		    {
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
				  {
					loader: 'file-loader',
					options: { name: '[name].[ext]',  outputPath: 'fonts/'}
				  }
				]
		    },			
			
			
			
		]
	  }
	}

}


