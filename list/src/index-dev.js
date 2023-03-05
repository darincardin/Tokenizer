import React from 'react';
import ReactDOM from 'react-dom';


import {List} from "./List/list.jsx";



var DATA = [{fName:"Alan", lName:"BBBRed"},
		{fName:"Zora", lName:"AAAGreen"}, 
		{fName:"Kellie", lName:"Jean"}, 
		{fName:"Don", lName:"Jack"}, 
		{fName:"David", lName:"Jones"}, 
		{fName:"Joe",lName:"CCCsRickson"}] 

class Main extends React.Component {
	
	state = {data :[]}	
	

	columns = [
			{name:'First Name', id:'fName'},
			{name:'Last Name', id:'lName'}
	]
	
	hello =   ()=>alert('hello');
	goodbye = ()=>alert('goodbye')
			
	
			
	getData = (page, sort, amount, search)=>{
								
		var data = [...DATA];

		data = data.filter(i=>{		
			return (i.fName.indexOf(search) >-1 || i.lName.indexOf(search)>-1);
		})

		data.sort(function(i,j){		
			var x = i[sort.by] > j[sort.by] ?1:-1;
			return (sort.dir=="ASC"?x: -1*x) 
		})
	
		var total = data.length;
	
		data = data.splice(page*amount, amount);
		
		
		
		this.setState({data:data})
		return Promise.resolve({total:total})
	}			
			
	render = ()=>{
		

		return (					
				<List labels={this.columns} data={this.state.data} getData={this.getData}  >	
					<a    onClick={this.hello}>Hello</a>
					&nbsp;|&nbsp;
					<a  onClick={this.goodbye}>Goodbye</a> 
				</List>				
		)	
	}
}

ReactDOM.render( <Main />, document.getElementById('app'));
