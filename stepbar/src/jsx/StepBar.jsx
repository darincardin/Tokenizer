import React from "react";
import '../css/stepbar.scss';

class StepBar extends React.Component{
	
	
		segLength = function(){
			return 100/this.props.array.length;
		}
	
		highlightWidth = function (){			
			return  ( this.props.index * this.segLength() ) - (this.segLength()/2) + '%';		
		}
	  
		activeStatus = function (i) {
			return   (i+1 <= this.props.index) ? 'active' : '';
		}
		
    	render() {
	
		return (
			<div ref={this.ref} className="step-bar" > 
				<div className="step-highlight"   style={{'width':this.highlightWidth()}}></div>
				<ul>
				{ this.props.array.map((v,i)=>(
					<li  key={i} style={{'width':this.segLength()+'%'}}  className={this.activeStatus(i)} >{v.label || v}</li>
				))}
			    </ul>
			</div> 
		)
	}
}


StepBar.defaultProps = { array:[], index:1 };

export default StepBar;

