import React, {createRef} from 'react';

import ReactDOM from 'react-dom';
import Tokenizer from "./Tokenizer/Tokenizer.jsx";

import 'bootstrap/dist/css/bootstrap.css';



class Main extends React.Component {
	
	state = {tokens: [] }
	
	change = (name,value)=>{		
		this.setState({tokens:value})
	}
		
	onChange = obj =>{
		this.setState(obj);
	}
	
	onSubmit = ()=>{
		alert(this.state.tokens);
	}
	
	render = ()=>{
		return (	
			<div>
				<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.onChange}  />
				<br />
				<button onClick={this.onSubmit}>Submit</button>
			</div>
		)
		
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

