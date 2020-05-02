const path = require('path');
var webpack = require('webpack');




module.exports = (env) => {
	


	return  {
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: {	index: './src/index.js'  },
	  output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: 'tokenizer.js',
		library: ['tokenizer'],
		libraryTarget: 'umd',
		publicPath:'/dist/'
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
	    	{ test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },	
		]
	  }
	}

}


