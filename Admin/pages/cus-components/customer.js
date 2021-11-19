import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Customer extends Component {
  render() {
    let {cus,index} = this.props;
    if(!cus) {
      return (
        <tr>
          <td colSpan="4" className="text-center">  
            <h4>No Customer</h4>
          </td>
        </tr>
      )
    }
    return(
      <tr>
        <td className="text-center">{index}</td>
        <td style={{width: '10%'}}>{cus.id}</td>
        <td style={{width: '20%'}}>{cus.name}</td>
        <td>{cus.phone}</td>
        <Link to={{
          pathname: "/admin/customer/detail", 
          state: {cus}
        }}>
          <td style={{width: '15%'}} className="text-center">Xem</td>
        </Link>
        <td style={{width: '20%'}} className="text-right">{cus.total} VND</td>
        <td>
          <button 
            type="button" 
            className="btn btn-warning btn-sm marginR5"
            onClick={()=>this.props.handleEditItem(index,cus)}
          >
            Edit
          </button>
          <button 
            type="button" 
            className="btn btn-danger btn-sm"
            onClick={()=>this.props.handleShowAlert(cus)}
          >
            Delete
          </button>
        </td>
      </tr> 
    )
  }
}

export default Customer;