import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./input/Form.jsx";


class Main extends React.Component {
	
	state = {object: {} }
	

	onSuccess = ()=>{
		debugger;
	}
	
	render = ()=>{
		return (
			<div>
				<Form  onSuccess={this.onSuccess} object={this.state.order}>
					<hr/>
					<button type="submit" className="btn btn-primary">Submit</button> 	
				</Form>
			</div>
		)
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

