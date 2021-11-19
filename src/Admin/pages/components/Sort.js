import React, {Component} from 'react';

class Sort extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      active: false
    }
  }
  handleClick = (sortType,sortOrder) => {
    this.props.handleSort(sortType,sortOrder);
    this.setState({active: false})
  }
  handleActivateSort = () => {
    this.setState({ active: !this.state.active})
  }
  renderSort = () => {
    let {sortType, sortOrder} = this.props;
    if(sortType !== '' && sortOrder !== '') {
      return (
        <span className="label label-success label-medium text-uppercase">
          {sortType} - {sortOrder}
        </span>
      )
    }
  }
  render() {
    return(
      <div className={this.state.active ? "dropdown open" : "dropdown"}>
        <button 
          className="btn btn-default dropdown-toggle marginR5" 
          type="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="true"
          onClick={this.handleActivateSort}
        >
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => this.handleClick('name','asc')}>
            <span role="button" className="text-uppercase">Name ASC</span>
          </li>
          <li onClick={() => this.handleClick('name','desc')}>
            <span role="button" className="text-uppercase">Name DESC</span>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => this.handleClick('level','asc')}>
            <span role="button" className="text-uppercase">Level ASC</span>
          </li>
          <li onClick={() => this.handleClick('level','desc')}>
            <span role="button" className="text-uppercase">Level DESC</span>
          </li>
        </ul>
        {this.renderSort()}
      </div>
    )
  }
}

export default Sort;