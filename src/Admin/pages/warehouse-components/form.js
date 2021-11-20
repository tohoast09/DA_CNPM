import React, {Component} from 'react';

class Form extends Component {
    render() {
        if (this.props.showForm === false) return null;
        return (
            <form className="form-inline" onSubmit={()=>this.props.handleFormClickSubmit()}>
                <div className="form-group marginR5">
                    <input 
	  	                style={{width: '50%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="Tên sách" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputNameChange(event.target.value)}
	                />
                    <input 
	  	                style={{width: '20%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="Mã sách" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputCodeChange(event.target.value)}
	                />
                    <input 
	  	                style={{width: '20%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="Số lượng" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputQuantityChange(event.target.value)}
	                />
                </div>
                <button 
	                type="button" 
	                className="btn btn-default marginR5"
					style={{backgroundColor: "orange"}}
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
        );
    };
};

export default Form;