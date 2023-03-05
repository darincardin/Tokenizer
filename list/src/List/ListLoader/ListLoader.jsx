import React from 'react';

import './list.loader.scss';

class ListLoader extends React.Component {
		
//
	render() {
		return (
		<>
			{this.props.show && 
				<div className="table-loader">
				
					<div class="spinner-border spinner-border-sm" role="status">
					  <span class="sr-only"></span>
					</div>
				</div>
			}
		</>		
		)	
	}
}		

export default ListLoader;
