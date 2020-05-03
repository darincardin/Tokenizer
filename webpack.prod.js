const path = require('path');
var webpack = require('webpack');

module.exports = (env) => {
	
	return  {
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: {	index: './src/index-prod.js'  },
	  output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: 'index.js',
		library: ['tokenizer'],
		libraryTarget: 'umd',
		publicPath:'/dist'
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
	    	{ test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },	
		]
	  }
	}

}


