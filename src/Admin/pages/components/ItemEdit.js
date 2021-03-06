import React, {Component} from 'react';

class ItemEdit extends Component {
  renderLevel = () => {
    let {arrayLevel} = this.props;
    console.log("Arraylevel nè: ",arrayLevel)
    return arrayLevel.map((level,index)=>{
      switch (level) {
        case 0: //complete
          return <option key={index} value={level}>Giao thành công</option> 
        case 1: //shipped
          return <option key={index} value={level}>Đang vận chuyểnnn</option>
        case 2: //preparing
          return <option key={index} value={level}>Chưa xử lý</option>
      }
    });
  }
  render() {
    return(
      <tr>
        <td className="text-center">{this.props.indexEdit}</td>
        <td>
        <select 
            className="form-control"
            style={{width: '15%'}}
            value={this.props.levelEdit}
            onChange={(event) => this.props.handleEditSelectChange(event.target.value)} 
          >
            {this.renderLevel()}
          </select>
        </td>
        <td className="text-center">
          
          <input 
            type="text" 
            className="form-control" 
            style={ {"width": "auto"}}
            value={this.props.nameEdit}  
            onChange={(event) => this.props.handleEditInputChange(event.target.value)}
          />
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-default btn-sm "
            style={{backgroundColor: "lightblue"}}
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