

//

//require('file-loader?name=[name].[ext]!./index.html');

//import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import Tokenizer from "./Tokenizer/Tokenizer.jsx";




//import '../node_modules/bootstrap/dist/css/bootstrap.css';
  



class Main extends React.Component {
	
	
	state = {tokens: [] }
	
	change = (name,value)=>{
		this.setState({tokens:value})
	}
	
	render = ()=>{
		return <Tokenizer name="tokens" tokens={this.state.tokens} onChange={this.change}  />
	}
}

	



ReactDOM.render( <Main />, document.getElementById('app'));



