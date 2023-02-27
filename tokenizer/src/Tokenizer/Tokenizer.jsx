import React from "react";

import '../css/index.scss';

class Tokenizer extends React.Component{

		state = { value:"" }
	
		onChange = e =>{
			this.setState({value: e.currentTarget.value})
		}
	
		onKeyDown = e => this.onEnter(e);
	
		onAdd = () =>{

			if(this.isValid(this.state.value)){			
				this.props.setState({ tokens: [...this.props.tokens, this.state.value] })
			    this.setState({value:""});		
			}
			
			this.input.focus();
			
		}
	
		onRemove = i =>{	
			this.props.tokens.splice(i,1);		
			this.props.setState({tokens: this.props.tokens});
		}

		render = () =>{

			return (
				<div className="tokenizer" >
					<div>
						<input  ref={(elem) => { this.input = elem; }} className='form-control' type="text" value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} />
						<span onClick={this.onAdd}>
							{this.props.children}
						</span>
					</div>
					{ 
						this.props.tokens.map((v,i)=>
							<span key={i} onClick={()=>this.onRemove(v)}  >
							
								<span  className="token" >
									<span>{v}</span>
									<span className="close-btn" ></span> 
						    	</span>						
							
							</span>)
					}
				</div>
			)
		}  
		

		onEnter = (e) => {	
			if(e.key=="Enter")this.onAdd();
		}

	    throwRequiredError = function(){throw new Error("Tokenizer: tokens option required!");}

		isValid = function(v){
			if(v==undefined || v=="") return false;
			if(this.props.allowDupes) return true;
			return !this.props.tokens.includes(v);
		}
		 
}






Tokenizer.defaultProps = { allowDupes:false}



export  {Tokenizer};
	
	