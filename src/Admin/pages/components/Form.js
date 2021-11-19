import React, {Component} from 'react';

class Form extends Component {
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
    if (this.props.showForm === false) return null;
    return(
      <form className="form-inline" onSubmit={()=>this.props.handleFormClickSubmit()}>
        <div className="form-group marginR5">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Item Name" 
            value={this.props.valueItem} 
            onChange={(event)=>this.props.handleFormInputChange(event.target.value)}
          />
        </div>
        <div className="form-group marginR5">
          <select 
            className="form-control"
            value={this.props.levelItem}
            onChange={(event)=>this.props.handleFormSelectChange(event.target.value)} 
          >
            {this.renderLevel()}
          </select>
        </div>
        <button 
          type="button" 
          className="btn btn-default marginR5"
          onClick={()=>this.props.handleFormClickCancel()}
        >
          Cancel
        </button>
        <button 
          type="button" 
          className="btn btn-primary marginR5"
          onClick={()=>this.props.handleFormClickSubmit()}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default Form;