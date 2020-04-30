const path = require('path');
var webpack = require('webpack');




module.exports = (env) => {


	return  {
	  resolve: {
		extensions: ['*','.js','.jsx']
	  },
	  entry: {
		index: './src/index.js'
	  },
	  output: {
		path: path.resolve(__dirname, 'dist'), filename: '[name].js'
	  },
	  devServer: {
		contentBase:  require('path').join(__dirname, "src"),
		publicPath: '/',
		historyApiFallback: '/',
		inline: true,
		port: 7777   ,
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },			
			{
			    test: /\.(png|jpe?g|gif)$/i, 
				exclude: /node_modules/, 
				use: [{  loader: 'file-loader',  options: {  name: '[name].[ext]'}} ]
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			},

		  
		]
	  }
	}

}


