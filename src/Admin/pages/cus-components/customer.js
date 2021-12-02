import React, {Component} from 'react';

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
        <td className="text-center" style={{ width: "10%" }}>{index}</td>
        <td style={{width: '15%'}}>{cus.id}</td>
        <td style={{width: '20%'}}>{cus.name}</td>
        <td>{cus.phone}</td>
        <td className="text-right" style={{width: '15%'}}>{cus.wallet} VNĐ</td>
        <td style={{width: '20%'}} className="text-right">{cus.total} VNĐ</td>
        <td>
          <button 
            type="button" 
            className="btn btn-warning btn-sm marginR5"
            onClick={()=>this.props.handleShowDetail(cus)}
          >
            Xem
          </button>
          <button 
            type="button" 
            className="btn btn-danger btn-sm"
            onClick={()=>this.props.handleShowAlert(cus)}
          >
            Xóa
          </button>
        </td>
      </tr> 
    )
  }
}

export default Customer;