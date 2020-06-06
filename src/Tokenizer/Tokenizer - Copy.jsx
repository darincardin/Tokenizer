import React from "react";
import PropTypes from 'prop-types';

import './style.css';

class Tokenizer extends React.Component{

		state = { value:"", className: "" }
	
		onChange = e =>{
			this.setState({value: e.currentTarget.value})
		}
	
		onEnter = e=>{	
			if(e.key=="Enter") this.onAdd()
		}
	
		onAdd = () =>{

			var has = this.props.tokens.includes(this.state.value);
			this.focus()
			
			if(this.state.value && !has) {
				
				this.props.setState({ [this.props.name]: [...this.props.tokens, this.state.value] })

				this.setState({ value:"", className:"" })
				
			}
			else this.setState({className:'invalid'})		
		}
		
		focus = ()=>{
			setTimeout(()=>{
				this.nameInput.focus();
			}, 1);
		}		
	
		onDelete = r =>{	
			var tokens = this.props.tokens;
		
			var i = tokens.findIndex(i=>i==r);
			tokens.splice(i,1);
			
			this.props.setState({[this.props.name]:tokens})
		}

		render = () =>{
			
			return (
				<div className="tokenizer" >
					
					<div>
						<input 
						ref={ input => { this.nameInput = input}}	
						placeholder={this.props.placeholder} 
						className='form-control' 
						type="text" 
						value={this.state.value} 
						onChange={this.onChange} 
						onKeyDown={this.onEnter} />

						<button type="text" className={"btn btn-primary " + this.state.className} onMouseDown={this.onAdd} >
							<span>Add</span>
							<i className="glyphicon glyphicon-ban-circle"></i>
						</button>
					</div>
					{ 
						this.props.tokens.map(i=>
						<span key={i} className="token" >
							{i}  <i className="close-btn" onClick={()=>this.onDelete(i)} >x</i> 
						</span>)
					}	
				</div>
			)
		}   
}

Tokenizer.propTypes = {
    name: PropTypes.string.isRequired,
    tokens: PropTypes.array.isRequired,
	setState: PropTypes.func.isRequired
};



Tokenizer.defaultProps = {
	placeholder: 'Tags...'
}



export default Tokenizer;
	