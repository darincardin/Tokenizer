

import util from './util.js';

//import style from '../css/stepbar.css';


var HTML = `
	<div class="step-bar" > 
		<div class="step-highlight" ></div>
		<ul></ul>
	</div> 	`;

class StepBar {

	 elem = null;
	 props = null;		
	
     constructor(elem, opts) {
		this.elem = elem;
		this.props = $.extend(true, {}, util.defaults, opts);	
				
		this.elem.html(HTML);
		this.render();
     } 
   
     render = ()=>{
		this.updateBar();
		
		this.props.array.forEach((v, i)=>{
	
		    var li = $(`<li>`).html(v.label || v);
		    		   
			li.css('width', this.segLength() +'%');
			li.attr('class', this.activeStatus(i));	
				
			this.elem.find('ul').append(li);
		});	
	 }
	  
	 update = () => {
		
		this.updateBar();
		
		this.props.array.forEach((v, i)=>{      
		    var li = $(`li:nth-child(${i+1})`);			    
			li.attr('class', this.activeStatus(i));		            		  
		})				
	 }

	 updateBar = ()=>{
		this.elem.find('.step-highlight').css('width', this.highlightWidth() );		
	 }   

	 next = ()=>{ 
		var i = this.props.index < this.props.array.length ? ++this.props.index : 1;
		this.set(i);
     }
    
     set = v =>  {
		this.props.index = v;		
		this.update();
	 }
}


Object.assign( StepBar.prototype, util.functions );


$.fn.stepbar = function(opts){
	return new StepBar(this, opts);
}
