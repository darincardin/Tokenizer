


var util =  {






	defaults: { allowDupes:false},

	functions: {

		onEnter: function(e) {	
			if(e.key=="Enter")this.onAdd();
		},

	    throwRequiredError: function(){throw new Error("Tokenizer: tokens option required!");},

		isValid: function(v){
			if(v==undefined || v=="") return false;
			if(this.props.allowDupes) return true;
			return !this.props.tokens.includes(v);
		},
		
		
		getAddBtn : ()=> {
			
			return `<button type="text" class="btn btn-primary" >
						<span>Add</span><i className="glyphicon glyphicon-ban-circle"></i>
			        </button>`;
		},

		getToken: v=>{
			
			return `<span  class="token" >
							<span>${v}</span>
							<i class="close-btn glyphicon glyphicon-remove" >X</i> 
					 </span>`;
		}
	}
};

export default util;

