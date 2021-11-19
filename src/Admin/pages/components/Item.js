import React, {Component} from 'react';

class Item extends Component {
  render() {
    let {item,index} = this.props;
    if(!item) {
      return (
        <tr>
          <td colSpan="4" className="text-center">  
            <h4>No Item</h4>
          </td>
        </tr>
      )
    }
    let classNameLabel = '';
    let nameLabel = '';
    switch (item.level) {
      case 1:
        classNameLabel = 'label label-warning';
        nameLabel = 'Đang vận chuyển';
        break;
      case 2:
        classNameLabel = 'label label-danger';
        nameLabel = 'Chưa xử lý';
        break;
      default:
        classNameLabel = 'label label-info';
        nameLabel = 'Giao thành công';
        break;
    }
    return(
      <tr>
        <td className="text-center">{index}</td>
        <td>{item.name}</td>
        <td className="text-center"><span className={classNameLabel}>{nameLabel}</span></td>
        <td>
          <button 
            type="button" 
            className="btn btn-warning btn-sm marginR5"
            onClick={()=>this.props.handleEditItem(index,item)}
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
    )
  }
}

export default Item;