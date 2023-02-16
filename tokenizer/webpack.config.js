const path = require('path');

module.exports = (env) => {
	var config = require('../webpack.config.js')(env);		

	config.devServer.port = 3003;	
	config.devServer.static.directory = path.join(__dirname, 'src/')		

    if(env.prod=='true'){
    	config.output.publicPath = '/dist';
    	config.output.path = path.resolve(__dirname, 'dist');
    }

  	return config;
}
