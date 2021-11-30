import React, {Component} from 'react';

class CusEdit extends Component {
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
    return(
      <tr>        
        <td style={{width: '15%'}}>
          <input 
            type="text"             
            className="form-control" 
            value={this.props.idEdit}  
            onChange={(event) => this.props.handleIDEditInputChange(event.target.value)}
          />
        </td>
        <td style={{width: '20%'}}>
          <input 
            type="text"             
            className="form-control" 
            value={this.props.nameEdit}  
            onChange={(event) => this.props.handleNameEditInputChange(event.target.value)}
          />
        </td>
        <td>
          <select             
            className="form-control"
            style={{width: '10%'}}
            value={this.props.sexEdit}
            onChange={(event) => this.props.handleEditSelectChange(event.target.value)} 
          >
            {this.renderSex()}
          </select>
        </td>
        <td style={{width: '15%'}}>
          <input             
            type="text" 
            className="form-control" 
            value={this.props.bdayEdit}  
            onChange={(event) => this.props.handleBDayEditInputChange(event.target.value)}
          />
        </td>
        <td style={{width: '15%'}}>
          <input             
            type="text"             
            className="form-control" 
            value={this.props.phoneEdit}  
            onChange={(event) => this.props.handlePhoneEditInputChange(event.target.value)}
          />
        </td>
        <td style={{width: '20%'}}>
          <input             
            type="text"  
            className="form-control" 
            value={this.props.emailEdit}  
            onChange={(event) => this.props.handleEmailEditInputChange(event.target.value)}
          />
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-default btn-sm marginR5"
            style={{backgroundColor: "lightblue"}}
            onClick={()=>this.props.handleEditClickCancel()}
          >
            Hủy
          </button>
          <button 
            type="button" 
            className="btn btn-success btn-sm"
            onClick={()=>this.props.handleEditClickSubmit()}
          >
            Lưu
          </button>
        </td>
      </tr>
    )
  }
}

export default CusEdit;