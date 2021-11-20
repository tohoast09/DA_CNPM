import React, {Component} from 'react';

class Search extends Component {
    render() {
        return(
          	<div className="input-group">
            	<input 
              		type="text" 
              		className="form-control" 
              		placeholder="Search" 
              		value={this.props.valueSearch}
              		onChange={(event)=>this.props.handleSearch(event.target.value)}
            	/>
            	<span className="input-group-btn">
              		<button 
                		className="btn btn-info" 
                		type="button"
                		onClick={()=>this.props.handleSearch('')}
              		>
                		Clear
              		</button>
            	</span>
          	</div>
        )
    }
};

export default Search;