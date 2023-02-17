import React, {createRef} from 'react';

import ReactDOM from 'react-dom';
import Tokenizer from "./Tokenizer/Tokenizer.jsx";

//import Tokenizer from "../dist/react";

//import 'bootstrap/dist/css/bootstrap.css';



class Main extends React.Component {
	
	state = {tokens: ['aaa'] }
			
	onChange = obj =>{
		this.setState(obj);
	}
	
	onSubmit = ()=>{
		alert(this.state.tokens);
	}
	
	render = ()=>{
		return (	
			<div>
				<Tokenizer name="tokens"  tokens={this.state.tokens} setState={this.onChange}  >
					<button type="text" >
						Add
			        </button>
				</Tokenizer>
				<br />
				<button className="btn btn-info"  onClick={this.onSubmit}>Submit</button>
			</div>
		)
		
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

