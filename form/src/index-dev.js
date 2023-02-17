import React from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form/Form.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const newOrder = { id:"1", name:"", name:"", address:'', phone:"", mayo:false, quantity:"", info:'', deliver: false, time:'1'}


const fields =  [ 
		{label:"Customer Info", name:"customerInfo", tag:"header" },
		{label:"Name", name:"name",     tag:"text", required:true },
		{label:"Phone",      name:"phone", tag:"phone", format:true},			

		{label:"Order Info",  tag:"header", name: "orderInfo"  },
		{label:"Quantity",   name:"quantity",  tag:"number", required:true},
		{label:"Time",       name:"time",    tag:"select"  , options: [  
			{id:"1", label:"10:30 AM"},
			{id:"2", label:"11:00 AM"},
			{id:"3", label:"11:30 AM"}
		]}	
]	
	
class Main extends React.Component {
	
    state = {
		object: {...newOrder}, fields:[...fields] 		
	}	

	onSuccess = (data, callback)=>{
		
		var a = "";
		Object.keys(data).forEach((v,i) =>{
			if(data[v] != undefined) a += `${v}: ${data[v]}\n`;
		});
		
		alert(a)
	}
	

	
	render = ()=>{
		return (
			<div className="container">
				<div className="row">

					<div className="col-xs-12">				
						<div style={{"fontFamily": "sans-serif", background: 'white', 'maxWidth':'600px',borderRadius:'5px', padding: '10px', margin:'auto'}}>
				
							<Form object={this.state.object} onSuccess={this.onSuccess}   fields={this.state.fields}>
								<button className="btn btn-primary" type="submit" >Submit</button> 
							</Form>
						</div>				
					</div>		
				</div>
			</div>
		)
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

