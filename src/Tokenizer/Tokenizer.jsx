import React from "react";
import PropTypes from 'prop-types';


import util from '../js/util.js';

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
		}
	
		onRemove = i =>{	
			this.props.tokens.splice(i,1);		
			this.props.setState({tokens: this.props.tokens});
		}

		render = () =>{

			return (
				<div className="tokenizer" >
					<div>
						<input className='form-control' type="text" value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} />

						<span dangerouslySetInnerHTML={{__html: this.getAddBtn() }}  onClick={this.onAdd} />
					</div>
					{ 
						this.props.tokens.map((v,i)=>
							<span key={i} onClick={()=>this.onRemove(v)}  >
								<span dangerouslySetInnerHTML={{__html: this.getToken(v) }}></span>
							</span>)
					}
				</div>
			)
		}   
}



Object.assign( Tokenizer.prototype, util.functions);

Tokenizer.propTypes = {
    //name: PropTypes.string.isRequired,
    tokens: PropTypes.array.isRequired,
	setState: PropTypes.func.isRequired
};



Tokenizer.defaultProps = {...util.defaults }



export default Tokenizer;
	
	