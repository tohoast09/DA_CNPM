import React, {Component} from 'react';

class WHEdit extends Component {
    render() {
        return (
        <>
            <tr>
                <td className="text-center">{this.props.indexEdit}</td>
                <td style={{width: '40%'}}>
                    <b>Title:</b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.titleEdit}  
                        onChange={(event) => this.props.handleEditInputTitleChange(event.target.value)}
                    />
                </td>
                <td style={{width: '15%'}}>
                    <b>Price:</b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.priceEdit}  
                        onChange={(event) => this.props.handleEditInputPriceChange(event.target.value)}
                    />
                </td>
                <td style={{width: '20%'}}>
                    <b>Quantity: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.quantityEdit}  
                        onChange={(event) => this.props.handleEditInputQuantityChange(Number(event.target.value))}
                    />
                </td>
            </tr>
            <tr>
                <td className="text-center"></td>
                <td style={{width: '10%'}}>
                    <b>Category Slug: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.categorySlugEdit}  
                        onChange={(event) => this.props.handleEditInputCategorySlugChange(event.target.value)}
                    />
                </td>
                <td style={{width: '15%'}}>
                    <b>Slug: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.slugEdit}  
                        onChange={(event) => this.props.handleEditInputSlugChange(event.target.value)}
                    />
                </td>
                <td style={{width: '10%'}}>
                    <b>Promotion: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.promotionEdit}  
                        onChange={(event) => this.props.handleEditInputPromotionChange(event.target.value)}
                    />
                </td>
            </tr>
            <tr>
                <td className="text-center"></td>
                <td style={{width: '20%'}}>
                    <b>Tag: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.tagEdit}  
                        onChange={(event) => this.props.handleEditInputTagChange(event.target.value)}
                    />
                </td>
                <td style={{width: '20%'}}>
                    <b>Image 01: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.image01Edit}  
                        onChange={(event) => this.props.handleEditInputImage01Change(event.target.value)}
                    />
                </td>
                <td style={{width: '20%'}}>
                    <b>Image 02: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.image02Edit}  
                        onChange={(event) => this.props.handleEditInputImage02Change(event.target.value)}
                    />
                </td>
            </tr>
            <tr>
                <td className="text-center"></td>
                <td style={{width: '40%'}}>
                    <b>Description: </b>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.props.descriptionEdit}  
                        onChange={(event) => this.props.handleEditInputDescriptionChange(event.target.value)}
                    />
                </td>
                <td/> 
                <td/>
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
        </>
        );
    }
};

export default WHEdit;