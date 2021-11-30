import React, {Component} from 'react';

class Form extends Component {
    render() {
        if (this.props.showForm === false) return null;
        return (
            <form className="form-inline">
				<br/>
                <div className="form-group marginR5" style={{width: '250%'}}>
                    <input 
	  	                style={{width: '40%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="tên sách" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputTitleChange(event.target.value)}
	                />
					<input 
	  	                style={{width: '20%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="giá" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputPriceChange(event.target.value)}
	                />
                    <input 
	  	                style={{width: '20%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="số lượng" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputQuantityChange(Number(event.target.value))}
	                />
					<input 
	  	                style={{width: '20%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="category slug" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputCategorySlugChange(event.target.value)}
	                />	
				</div>
				<div className="form-group marginR5" style={{width: '250%'}}>
					<input 
	  	                style={{width: '30%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="promotion" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputPromotionChange(event.target.value)}
	                />
					<input 
	  	                style={{width: '30%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="slug" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputSlugChange(event.target.value)}
	                />
					<input 
	  	                style={{width: '40%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="tags" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputTagChange(event.target.value)}
	                />
				</div>
				<div className="form-group marginR5" style={{width: '250%'}}>
					<input 
	  	                style={{width: '50%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="ảnh 1" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputImage01Change(event.target.value)}
	                />
					<input 
	  	                style={{width: '50%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="ảnh 2" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputImage02Change(event.target.value)}
	                />	
				</div>
				<div className="form-group marginR5" style={{width: '250%'}}>
					<input 
	  	                style={{width: '100%'}}
	                    type="text" 
	                    className="form-control" 
	                    placeholder="mô tả" 
	                    value={this.props.valueItem} 
	                    onChange={(event)=>this.props.handleFormInputDescriptionChange(event.target.value)}
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
// onSubmit={()=>this.props.handleFormClickSubmit()}