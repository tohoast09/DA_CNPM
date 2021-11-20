import React, {Component} from 'react';

class WHEdit extends Component {
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.indexEdit}</td>
                <td style={{width: '50%'}}>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.props.nameEdit}  
                        onChange={(event) => this.props.handleEditInputNameChange(event.target.value)}
                    />
                </td>
                <td style={{width: '20%'}}>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.props.codeEdit}  
                        onChange={(event) => this.props.handleEditInputCodeChange(event.target.value)}
                    />
                </td>
                <td style={{width: '20%'}}>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.props.quantityEdit}  
                        onChange={(event) => this.props.handleEditInputQuantityChange(Number(event.target.value))}
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
        );
    }
};

export default WHEdit;