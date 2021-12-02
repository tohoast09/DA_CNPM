import React, {Component} from 'react';

class Item extends Component {
  render() {
    let {item, index} = this.props;
    if(!item) {
      return (
        <tr>
					<td colSpan="4" className="text-center">  
            <h4>No Book</h4>
          </td>
        </tr>
      )
    }
		return (
			<tr>
				<td style={{width: '10%'}} className="text-center">{index}</td>
				<td style={{width: '40%'}} className="text-center">{item.title}</td>
				<td style={{width: '15%'}} className="text-center">{item.price}</td>
				<td style={{width: '20%'}} className="text-center">{item.quantity}</td>
        <td>
          <button 
            type="button" 
            className="btn btn-warning btn-sm marginR5"
            onClick={()=>this.props.handleEditBook(item, index)}
          >
            Edit
          </button>
          <button 
            type="button" 
            className="btn btn-danger btn-sm"
            onClick={()=>this.props.handleShowAlert(item)}
          >
            Delete
          </button>
        </td>
			</tr>
			

		);
  }
};

export default Item;