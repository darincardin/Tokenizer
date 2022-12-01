

import util from './util.js';




class Tokenizer {

   HTML = `
				<div class="tokenizer" >
					<div>
						<input  class='form-control' type="text" value="" />
						${this.getAddBtn()}
					</div>
					
					<div class="tokens"></div>
				</div>
`;



	elem = null;
	props = null;		

    constructor(elem, opts) {
		if(!opts || !opts.tokens) this.throwRequiredError();
	
		this.elem = elem;
		this.props  = opts; //$.extend(true, opts, util.defaults, opts);	
				
		this.elem.html(this.HTML);
		this.render();
    } 

	onAdd = ()=>{	
		var val = this.elem.find('input').val().trim();
	
		if(this.isValid(val)) {
			this.elem.find('input').val("");
			this.props.tokens.push(val);
			this.update();			
		}		
	}
	
	onRemove = (i)=>{	
		this.props.tokens.splice(i,1);
		this.update();	
	}

	onKeyDown = e => this.onEnter(e);
	
    render = ()=>{	
		this.update();
		this.elem.find('button').click(this.onAdd);
	    this.elem.find('input').keydown(this.onKeyDown);	
	}
	  
	update = () => {
		
		var tokens = [];

		this.props.tokens.forEach((v, i)=>{

			var TOKEN = $(this.getToken(v));		

			TOKEN.click(()=>{this.onRemove(i)});
							
			tokens.push(TOKEN); 					
		});	
		
		this.elem.find('.tokens').html(tokens);				
	} 
}


Object.assign( Tokenizer.prototype, util.functions );

$.fn.tokenizer = function(opts){
	return new Tokenizer(this, opts);
}
