import React from "react";


import './style.scss';

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
					
			if(this.state.value && !has) {
				
				this.props.onChange(this.props.name, [...this.props.tokens, this.state.value])
				this.setState({ value:"", className:"" })
			}
			else this.setState({className:'invalid'})
		}
	
		onDelete = r =>{	

			var tokens = this.props.tokens;
		
			var i = tokens.findIndex(i=>i==r);
			tokens.splice(i,1);
			
			this.props.onChange(this.props.name, tokens);
		}

		render = () =>{
			
			return (
				<div className="tokenizer" >
					
					<div>
						<input placeholder="Tags..." className='form-control' type="text" value={this.state.value} onChange={this.onChange} onKeyDown={this.onEnter} />
						<button type="text" className={"btn btn-primary " + this.state.className} onMouseDown={this.onAdd} >
							<span>Add</span>
							<i className="glyphicon glyphicon-ban-circle"></i>
						</button>
					</div>
					{ 
						this.props.tokens.map(i=>
						<span key={i} className="token" >
							{i}  <i onClick={()=>this.onDelete(i)} >x</i> 
						</span>)
					}	
				</div>
			)
		}   
}


export default Tokenizer;
	