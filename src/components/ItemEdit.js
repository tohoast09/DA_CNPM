import React, {Component} from 'react';

class ItemEdit extends Component {
  renderLevel = () => {
    let {arrayLevel} = this.props;
    return arrayLevel.map((level,index)=>{
      switch (level) {
        case 0:
          return <option key={index} value={level}>Giao thành công</option>
        case 1:
          return <option key={index} value={level}>Đang vận chuyển</option>
        default:
          return <option key={index} value={level}>Chưa xử lý</option>
      }
    });
  }
  render() {
    return(
      <tr>
        <td className="text-center">{this.props.indexEdit}</td>
        <td>
          <input 
            type="text" 
            className="form-control" 
            value={this.props.nameEdit}  
            onChange={(event) => this.props.handleEditInputChange(event.target.value)}
          />
        </td>
        <td className="text-center">
          <select 
            className="form-control"
            value={this.props.levelEdit}
            onChange={(event) => this.props.handleEditSelectChange(event.target.value)} 
          >
            {this.renderLevel()}
          </select>
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-default btn-sm marginR5"
            onClick={()=>this.props.handleEditClickCancel()}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn btn-success btn-sm"
            onClick={()=>this.props.handleEditClickSubmit()}
          >
            Save
          </button>
        </td>
      </tr>
    )
  }
}

export default ItemEdit;