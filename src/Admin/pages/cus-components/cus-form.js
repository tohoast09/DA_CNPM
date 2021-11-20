import React, {Component} from 'react';

class Form extends Component {
  renderSex = () => {
    let {arrayLevel} = this.props;
    return arrayLevel.map((sex,index)=>{
      switch (sex) {
	case 0:
	  return <option key={index} value={sex}>Nam</option>
	case 1:
	  return <option key={index} value={sex}>Nữ</option>
      }
    });
  }
  render() {
    if (this.props.showForm === false) return null;
    return(
      <form className="form-inline" onSubmit={()=>this.props.handleFormClickSubmit()}>
	<div className="form-group marginR5">
	  <input 
	  	style={{width: '15%'}}
	    type="text" 
	    className="form-control" 
	    placeholder="ID" 
	    value={this.props.valueItem} 
	    onChange={(event)=>this.props.handleIDFormInputChange(event.target.value)}
	  />
	  <input 
	  	style={{width: '25%'}}
	    type="text" 
	    className="form-control" 
	    placeholder="Họ và tên" 
	    value={this.props.valueItem} 
	    onChange={(event)=>this.props.handleNameFormInputChange(event.target.value)}
	  />
	  <select 
	  	style={{width: '15%'}}
	    className="form-control"
	    value={this.props.levelItem}
	    onChange={(event)=>this.props.handleFormSelectChange(event.target.value)} 
	  >
	    {this.renderSex()}
	  </select>
	  <input 
	  	style={{width: '15%'}}
	    type="text" 
	    className="form-control" 
	    placeholder="Ngày sinh: dd/mm/yyyy" 
	    value={this.props.valueItem} 
	    onChange={(event)=>this.props.handleBDayFormInputChange(event.target.value)}
	  />
	  <input 
	  	style={{width: '15%'}}
	    type="text" 
	    className="form-control" 
	    placeholder="Số điện thoại" 
	    value={this.props.valueItem} 
	    onChange={(event)=>this.props.handlePhoneFormInputChange(event.target.value)}
	  />
	  <input 
	  	style={{width: '15%'}}
	    type="text" 
	    className="form-control" 
	    placeholder="Email" 
	    value={this.props.valueItem} 
	    onChange={(event)=>this.props.handleEmailFormInputChange(event.target.value)}
	  />
	</div>
	<button 
	  type="button" 
	  className="btn btn-default marginR5"
	  onClick={()=>this.props.handleFormClickCancel()}
	>
	  Hủy
	</button>
	<button 
	  type="button" 
	  className="btn btn-primary marginR5"
	  onClick={()=>this.props.handleFormClickSubmit()}
	>
	  Thêm
	</button>
      </form>
    )
  }
}

export default Form;