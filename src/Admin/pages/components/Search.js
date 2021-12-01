import React, {Component} from 'react';

class Search extends Component {
  render() {
    return(
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search item name" 
          value={this.props.valueSearch}
          onChange={(event)=>this.props.handleSearch(event.target.value)}
        />
        <span className="input-group-btn">
          <button 
            className="btn " 
            type="button"
            onClick={()=>this.props.handleSearch('')}
            style={{border: "1px solid black"}}
          >
            <b>CLEAR</b>
          </button>
        </span>
      </div>
    )
  }
}

export default Search;