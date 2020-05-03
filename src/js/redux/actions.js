import OrderAPI from '/js/orderAPI.js';



export const actions = function(dispatch, getState) {

	return {	
		
		create : (order) => { 
			return OrderAPI.create(order).then(res => { 
				dispatch({type:"SAVE", order: res } )
			})
		},
		update : (order) => { 
			return OrderAPI.update(order);
		},
		remove : (id) => { 
			return OrderAPI.delete(id)
		},
		list : (page, sortBy, sortDir) => { 
			var amount = 3;//Math.floor($('.list').height()  / 43);
		    //var amount = Math.floor((window.innerHeight - 215) / 43);

			return OrderAPI.list(page, sortBy, sortDir, amount).then(res => { 
				dispatch({type:"LIST", data:res.data  } ) 
				return res;
			})
		},
		
		save : (order) => { 
			dispatch({type:"SAVE", order } )
		},		
		clear : () => { 
			dispatch({type:"CLEAR"})
		}	
	}	
}
