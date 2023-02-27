import React from 'react';
import ReactDOM from 'react-dom';


import {StepBar} from "./StepBar/StepBar.jsx";

class Main extends React.Component {
	
	state = { step: 1 };
	
	array = ["A", "B", "C", "D", "E","F"];

	onChange = () =>{
		var i = this.state.step < (this.array.length) ? this.state.step+1 : 1; 	
		this.setState({step: i});
	}	
	
	render = ()=>{
		return (			
			<div className="container">
				<div className="row" >

					<div className="col-xs-12">				
						<div style={{'width':'100%',  'margin':'auto'}}>
							<StepBar index={this.state.step} array={this.array} />
							<button className="btn btn-primary" onClick={this.onChange}>Next</button>
						</div>	
					</div>		
									
				</div>
			</div>			
		)	
	}
}

ReactDOM.render( <Main />, document.getElementById('app'));
