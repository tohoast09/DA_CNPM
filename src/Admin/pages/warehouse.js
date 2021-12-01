import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import WHData from './mockdata/MockWarehouse';
import Item from './warehouse-components/items';
import Form from './warehouse-components/form';
import WHEdit from './warehouse-components/edit';
import Search from './warehouse-components/search';
import {db} from '../connectFB';
import {doc, 
				updateDoc,
				collection,
				addDoc,
				deleteDoc 
} from 'firebase/firestore';


class Warehouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: WHData,

			showForm: false,

			title: '',
			price: '',
			quantity: 0,
			categorySlug: '',
			description: '',
			image01: '',
			image02: '',
			promotion: '',
			slug: '',
			tag: [],

			indexEdit: 0,
			idEdit: '',
			titleEdit: '',
			priceEdit: '',
			quantityEdit: 0,
			categorySlugEdit: '',
			descriptionEdit: '',
			image01Edit: '',
			image02Edit: '',
			promotionEdit: '',
			slugEdit: '',
			tagEdit: '',

			showAlert: false,
			idAlert: '',

			isSearch: false,
			valueSearch: '',
			itemsSearch: []
		}
	}
	handleShowForm = () => {
		this.setState({
			showForm: !this.state.showForm
		});
	}
	handleFormInputTitleChange = (value) => {
		this.setState({
			title: value
		});
	}
	handleFormInputPriceChange = (value) => {
		this.setState({
			price: value
		});
	}
	handleFormInputQuantityChange = (value) => {
		this.setState({
			quantity: value
		});
	}
	handleFormInputCategorySlugChange = (value) => {
		this.setState({
			categorySlug: value
		});
	}
	handleFormInputDescriptionChange = (value) => {
		this.setState({
			description: value
		});
	}
	handleFormInputImage01Change = (value) => {
		this.setState({
			image01: value
		});
	}
	handleFormInputImage02Change = (value) => {
		this.setState({
			image02: value
		});
	}
	handleFormInputPromotionChange = (value) => {
		this.setState({
			promotion: value
		});
	}
	handleFormInputSlugChange = (value) => {
		this.setState({
			slug: value
		});
	}
	handleFormInputTagChange = (value) => {
		this.setState({
			tag: this.convertTagToArray(value)
		});
	}
	handleFormClickCancel = () => {
    this.setState({
      title: '',
			price: '',
			quantity: 0,
			categorySlug: '',
			description: '',
			image01: '',
			image02: '',
			promotion: '',
			slug: '',
			tag: [],
      showForm: false
    });
  	}
  handleFormClickSubmit = () => {
    let {	items, title, price, quantity, categorySlug, description,
					image01, image02, promotion, slug, tag} = this.state;
    if(title.trim() === 0) return false;
    let newItem = {
      title: 				title,
      price: 				price,
			quantity: 		quantity,
			categorySlug:	categorySlug,
			description:	description,
			image01:			image01,
			image02:			image02,
			promotion:		promotion,
			slug:					slug,
			tag:					tag,
			totalPoint:		0,
			totalReview:	0
    }; 
    addDoc(collection(db, "books"), newItem);
    this.setState({
      items,
      title: '',
			price: '',
			quantity: 0,
			categorySlug: '',
			description: '',
			image01: '',
			image02: '',
			promotion: '',
			slug: '',
			tag: [],
      showForm: false,
      isSearch: false,
      valueSearch: ''
    });
  	}

	handleShowAlert = (item) => {
		this.setState({
			showAlert: true,
			idAlert: item.id
		})
	}
	handleDeleteBook = () => {
		let {idAlert, items} = this.state;
		if(items.length > 0) {
      for(let i = 0; i < items.length; i++) {
        if(items[i].id === idAlert) {
          deleteDoc(doc(db, "books", items[i].id));
          break;
        }
      }
      this.setState({items});
    }
    this.setState({
      showAlert: false,
      isSearch: false,
      valueSearch: ''
    });
	}

	convertTagToString = (tag) => {
		var strTag = tag[0];
		tag.map((value, index) => {
			if (index != 0) 	strTag = strTag + ", " + value;
		});
		return strTag;
	}
	convertTagToArray = (tag) => {
		return tag.split(", ");
	}

	handleEditBook = (item, index) => {
		this.setState({
			indexEdit: 				index,
			idEdit:						item.id,
			titleEdit: 				item.title,
			priceEdit: 				item.price,
			quantityEdit:			item.quantity,
			categorySlugEdit: item.categorySlug,
			descriptionEdit: 	item.description,
			image01Edit: 			item.image01,
			image02Edit: 			item.image02,
			promotionEdit: 		item.promotion,
			slugEdit:					item.slug,
			tagEdit: 					this.convertTagToString(item.tag)
		});
	}
	handleEditInputTitleChange = (value) => {
		this.setState({
			titleEdit: value
		});
	}
	handleEditInputPriceChange = (value) => {
		this.setState({
			priceEdit: value
		});
	}
	handleEditInputQuantityChange = (value) => {
		this.setState({
			quantityEdit: value
		});
	}
	handleEditInputCategorySlugChange = (value) => {
		this.setState({
			categorySlugEdit: value
		});
	}
	handleEditInputDescriptionChange = (value) => {
		this.setState({
			descriptionEdit: value
		});
	}
	handleEditInputImage01Change = (value) => {
		this.setState({
			image01Edit: value
		});
	}
	handleEditInputImage02Change = (value) => {
		this.setState({
			image02Edit: value
		});
	}
	handleEditInputPromotionChange = (value) => {
		this.setState({
			promotionEdit: value
		});
	}
	handleEditInputSlugChange = (value) => {
		this.setState({
			slugEdit: value
		});
	}
	handleEditInputTagChange = (value) => {
		this.setState({
			tagEdit: value
		});
	}
	handleEditClickCancel = () => {
		this.setState({
			idEdit: ''
		});
	}
	handleEditClickSubmit = () => {
		let {	items, idEdit, titleEdit, priceEdit, quantityEdit, categorySlugEdit, 
					descriptionEdit, image01Edit, image02Edit, promotionEdit, slugEdit, tagEdit} = this.state; 
    if(items.length > 0) { 
      for(let i = 0; i < items.length; i++) {
        if(items[i].id === idEdit) {
          const bookRef = doc(db, "books", idEdit);
					updateDoc(bookRef, {
						categorySlug:	categorySlugEdit,
						description: 	descriptionEdit,
						image01:			image01Edit,
						image02:			image02Edit,
						price:				priceEdit,
						promotion:		promotionEdit,
						slug:					slugEdit,
						quantity:			quantityEdit,
						tag:					this.convertTagToArray(tagEdit),
						title:				titleEdit
					});
					break;
        }
      }
    }
    this.setState({
      idEdit: ''
    });
	}

	handleSearch = (search) => {
		let {items} = this.state;
    let itemsSearch = [...items];
    let newArray = [];
    if(search.length <= 0) {
      this.setState({isSearch: false})
    } else {
      for(let item of itemsSearch) {
        if( item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 || 
            item.price.toLowerCase().indexOf(search.toLowerCase()) > -1  ||
						item.quantity.toString().indexOf(search.toLowerCase()) > -1 ) 
        {
          newArray.push(item);
        }
      }
      this.setState({isSearch: true})
    }
    this.setState({
      itemsSearch: newArray,
      valueSearch: search
    });
	}
	renderItems = () => {
		let {items, 
			indexEdit, 
			idEdit, 
			titleEdit, 
			priceEdit, 
			quantityEdit, 
			categorySlugEdit, 
			descriptionEdit, 
			image01Edit, 
			image02Edit, 
			promotionEdit, 
			tagEdit, 
			slugEdit, 
			isSearch, 
			itemsSearch} = this.state;
		
		if (isSearch) {
      items = itemsSearch
    }
		if (items.length === 0) {
			return <Item item={0} />
		}
		return items.map((item, index) => { 
			if (item.id === idEdit) {
				return( 
					<WHEdit 
						key=															{index}
						indexEdit=												{indexEdit}
						titleEdit=												{titleEdit}
						priceEdit=												{priceEdit}
						quantityEdit=											{quantityEdit}
						categorySlugEdit=									{categorySlugEdit}
						descriptionEdit=									{descriptionEdit}
						image01Edit=											{image01Edit}
						image02Edit=											{image02Edit}
						promotionEdit=										{promotionEdit}
						slugEdit=													{slugEdit}
						tagEdit=													{tagEdit}
						handleEditClickCancel=						{this.handleEditClickCancel}
						handleEditClickSubmit=						{this.handleEditClickSubmit}
						handleEditInputNameChange=				{this.handleEditInputTitleChange}
						handleEditInputPriceChange=				{this.handleEditInputPriceChange}
						handleEditInputQuantityChange=		{this.handleEditInputQuantityChange}
						handleEditInputCategorySlugChange={this.handleEditInputCategorySlugChange}
						handleEditInputDescriptionChange=	{this.handleEditInputDescriptionChange}
						handleEditInputImage01Change=			{this.handleEditInputImage01Change}
						handleEditInputImage02Change=			{this.handleEditInputImage02Change}
						handleEditInputPromotionChange=		{this.handleEditInputPromotionChange}
						handleEditInputSlugChange=				{this.handleEditInputSlugChange}
						handleEditInputTagChange=					{this.handleEditInputTagChange}
					/> 
				)
			}
			return(
				<Item	
					index = 				{index+1}
					item = 					{item}
					key = 					{item.id}
					handleEditBook=	{this.handleEditBook}
					handleShowAlert={this.handleShowAlert}
				/>
			)
		});
	}
	render() {
  	return (
			<div className="container">
				<SweetAlert
          show={this.state.showAlert}
          warning
          showCancel
          confirmBtnText			="Xác nhận"
          confirmBtnBsStyle		="danger"
          cancelBtnText				="Hủy"
          cancelBtnBsStyle		="light"
          title								="Xác nhận xóa sách?"
          onOutsideClick={()  => this.setState({ showAlert: false })}
          onEscapeKey={()     => this.setState({ showAlert: false })}
          onCancel={()        => this.setState({ showAlert: false })}
          onConfirm={()       => this.handleDeleteBook()}
          focusCancelBtn
        />
				<div className="page-header">
					<h1>Quản lí kho</h1>
				</div>
				<br></br>

				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<Search 
              valueSearch=	{this.state.valueSearch}
              handleSearch=	{this.handleSearch}
            />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4">
            <button 
              type="button" 
              className="btn btn-info btn-block marginB10"
              onClick={this.handleShowForm}
            >
              {this.state.showForm ? 'Đóng' : 'Thêm sách'}
            </button>
          </div>
        </div>
				<div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form 
              showForm={this.state.showForm}
              handleFormInputTitleChange				={this.handleFormInputTitleChange}
              handleFormInputPriceChange				={this.handleFormInputPriceChange}
              handleFormInputQuantityChange			={this.handleFormInputQuantityChange}
							handleFormInputCategorySlugChange	={this.handleFormInputCategorySlugChange}
							handleFormInputDescriptionChange	={this.handleFormInputDescriptionChange}
							handleFormInputImage01Change			={this.handleFormInputImage01Change}
							handleFormInputImage02Change			={this.handleFormInputImage02Change}
							handleFormInputPromotionChange		={this.handleFormInputPromotionChange}
							handleFormInputSlugChange					={this.handleFormInputSlugChange}
							handleFormInputTagChange					={this.handleFormInputTagChange}
              handleFormClickCancel							={this.handleFormClickCancel}
              handleFormClickSubmit							={this.handleFormClickSubmit}
            />
          </div>
        </div>

				<div className="panel panel-success">
					<br></br>
					<table className="table table-hover">
						<thead>
							<th style={{width: '10%'}} className="text-center">STT</th>
							<th style={{width: '40%'}} className="text-center">Tựa sách</th>
							<th style={{width: '15%'}} className="text-center">Giá</th>
							<th style={{width: '20%'}} className="text-center">Còn lại trong kho (quyển)</th>
							<th></th>
						</thead>
						<tbody>
							{this.renderItems()}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Warehouse;