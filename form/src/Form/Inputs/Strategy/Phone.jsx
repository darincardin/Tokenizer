import React from 'react';
import Validation from '../../Tools/Validation.js';

var Phone =   {

	getEvent: e =>[e.target.name, e.target.value],

	format: v =>{
		
		if(isNaN(v)) return v;
		
		else if(v.length==11) 
			return v.substr(0,1) +"-"+ v.substr(1,3) +"-"+ v.substr(4,3) +"-"+ v.substr(7,4)
		
		else if(v.length==10) 
			return v.substr(0,3) +"-"+ v.substr(3,3) +"-"+ v.substr(6,4)
		
		return v;
	},





	validate: (required, value) =>{
		if(required && !Validation.exists(value) )  return 'required';	

		if(Validation.containsChars(value)) return 'containsChars';

		return !Validation.isPhone(value) ? 'phone'  : '';
	},

	html: (attribs, tooltip) =>{
		return <input className="form-control" {...attribs}  {...tooltip} type="text" /> 	
	}
}

export default Phone;

/*
	onBlur: e =>{

		var value = e.target.value;

		if(this.props.format){

			var formatted = this.props.strategy.format(value);
			
			if(formatted != value )  {
				e.target.value = formatted;
				this.onChange(e);					
			}
		}	
	},

*/