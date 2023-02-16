
var util =  {

	defaults: { array:[], index:1 },

	functions: {

		segLength: function(){
			return 100/this.props.array.length;
		},
	
		highlightWidth: function (){			
			return  ( this.props.index * this.segLength() ) - (this.segLength()/2) + '%';		
		},
	  
		activeStatus: function (i) {
			return   (i+1 <= this.props.index) ? 'active' : '';
		}
	}
};

export default util;
