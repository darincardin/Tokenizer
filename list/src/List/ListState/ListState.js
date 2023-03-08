

import ListStore from './ListStore.js';
import ListSort from './ListSort.js';

const ROW_SIZE = 30;

class ListState {
	
	ref = null;
	
	page = 0;	
	total = 0;
	search =  "";
	sort = new ListSort();
	
	loading = false;
	error = false;
	
	static get(ref){
		var state =  ListStore.retrieve()
		state.ref = ref;			
		return state;
	}		

	getHeight = function getHeight(){
		
		var height = 1;
		
		if(this.ref && this.ref.current) {
			height = this.ref.current.parentElement.offsetHeight ;
			height = height - (height % ROW_SIZE);	
		}

		return height;
	}
	
	getPageSize = function getPageSize(){	
		
		//remove header, search, and footer
		var height = this.getHeight() - (ROW_SIZE*3);
					
		var value = Math.floor((height/ROW_SIZE));
		return  value || 1;
	}
	
	getTotalPages = function getTotalPages(){
		var value = (Math.ceil(this.total /  this.getPageSize()) - 1);	
		return value > 0 ? value : 0;
	}

	getCurrentPage = function getCurrentPage(){
		var totalPages = this.getTotalPages();			
		return (this.page > totalPages) ? totalPages : this.page;	
	}
		
	getMaxPage = function getMaxPage(){	
		return Math.ceil(this.total / this.getPageSize());
	}
}



export default ListState;