import React from 'react';

import './list.loader.scss';

class ListLoader extends React.Component {
		
//
	render() {
		return (
		<>
			{this.props.show && 
				<div className="table-loader">
				
					<div className="spinner-border spinner-border-sm" role="status">
					  <span className="sr-only"></span>
					</div>
				</div>
			}
		</>		
		)	
	}
}		

export default ListLoader;
