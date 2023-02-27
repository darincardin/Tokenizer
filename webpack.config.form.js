const path = require('path');
var webpack = require('webpack');



module.exports = (env) => {

	return  {
	  mode: 'development',	
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: {index: './form/src/index-dev.js'  },
	  externals: {},
	  output: {},
      plugins:  [ new webpack.ProvidePlugin({ $: "jquery", 	jQuery: "jquery"})  ],
  	 
	  devServer: {
		static: {  directory: path.join(__dirname, 'form/src/') },
		historyApiFallback: true,
		port: 3100,
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
	    	{ test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },	
		    {
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: { loader: 'file-loader', options: { name: '[name].[ext]',  outputPath: 'fonts/'} }
		    }		
		]
	  }
	}

}


