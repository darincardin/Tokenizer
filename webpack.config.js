const path = require('path');
var webpack = require('webpack');



module.exports = (env) => {

	var entry     = {index: './src/index-dev.js'  };
	var externals = {};
	var output    =  {};

	if(env.prod=='true'){
	
		entry     = { index: './src/index-prod.js'  };
   	    externals = { '$': 'jquery', 'react': 'react', 'react-dom' : 'reactDOM','prop-types':'prop-types' }			
		output    =  { libraryTarget: 'umd', publicPath: '/dist/react', path: path.resolve(__dirname, 'dist/react'), filename: '[name].js' };
	}

	return  {
	  mode: 'development',
	
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: entry,
	  externals: externals,
	  output: output,
      plugins:  [ new webpack.ProvidePlugin({ $: "jquery", 	jQuery: "jquery"})  ],
  	 
	  devServer: {
		//static:  require('path').join(__dirname, "src/"),
		
		static: {  directory: path.join(__dirname, 'src/') },

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


