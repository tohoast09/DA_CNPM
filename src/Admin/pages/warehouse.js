import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import SweetAlert from 'react-bootstrap-sweetalert';
import WHData from './mockdata/MockWarehouse';
import Item from './warehouse-components/items';
import Form from './warehouse-components/form';
import WHEdit from './warehouse-components/edit';
import Search from './warehouse-components/search'

class Warehouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: WHData,

			showForm: false,

			nameBook: '',
			codeBook: '',
			quantityBook: 0,

			indexEdit: 0,
			sttEdit: '',
			nameEdit: '',
			codeEdit: '',
			quantityEdit: 0,

			showAlert: false,
			sttAlert: '',
			nameAlert: '',
			codeAlert: '',
			quantityAlert: 0,

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
	handleFormInputNameChange = (value) => {
		this.setState({
			nameBook: value
		});
	}
	handleFormInputCodeChange = (value) => {
		this.setState({
			codeBook: value
		});
	}
	handleFormInputQuantityChange = (value) => {
		this.setState({
			quantityBook: value
		});
	}
	handleFormClickCancel = () => {
    this.setState({
      nameBook: '',
			codeBook: '',
			quantityBook: '',
      showForm: false
    });
  	}
  	handleFormClickSubmit = () => {
    let {nameBook, codeBook, quantityBook, items} = this.state;
    if(nameBook.trim() === 0) return false;
    let newItem = {
      stt: uuidv4(),
      name: nameBook,
      code: codeBook,
			quantity: quantityBook
    }; 
    items.push(newItem);
    this.setState({
      items,
      nameBook: '',
			codeBook: '',
			quantityBook: '',
      showForm: false,
      isSearch: false,
      valueSearch: ''
    });
  	}

	handleShowAlert = (item) => {
		this.setState({
			showAlert: true,
			sttAlert: item.stt,
			nameAlert: item.name,
			codeAlert: item.code,
			quantityAlert: item.quantity
		})
	}
	handleDeleteBook = () => {
		let {sttAlert, items} = this.state;
		if(items.length > 0) {
      for(let i = 0; i < items.length; i++) {
        if(items[i].stt === sttAlert) {
          items.splice(i, 1);
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

	handleEditBook = (index,item) => {
		this.setState({
			indexEdit: index,
			sttEdit: item.stt,
			nameEdit: item.name,
			codeEdit: item.code,
			quantityEdit: item.quantity
		});
	}
	handleEditInputNameChange = (value) => {
		this.setState({
			nameEdit: value
		});
	}
	handleEditInputCodeChange = (value) => {
		this.setState({
			codeEdit: value
		});
	}
	handleEditInputQuantityChange = (value) => {
		this.setState({
			quantityEdit: value
		});
	}
	handleEditClickCancel = () => {
		this.setState({
			sttEdit: ''
		});
	}
	handleEditClickSubmit = () => {
		let {items, sttEdit, nameEdit, codeEdit, quantityEdit} = this.state; 
    if(items.length > 0) { 
      for(let i = 0; i < items.length; i++) {
        if(items[i].stt === sttEdit) {
          items[i].name = nameEdit;
          items[i].code = codeEdit;
		  items[i].quantity = quantityEdit;
          break;
        }
      }
    }
    this.setState({
      sttEdit: ''
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
        if( item.name.toLowerCase().indexOf(search.toLowerCase()) > -1 || 
            item.code.toLowerCase().indexOf(search.toLowerCase()) > -1  ||
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
		let {items, indexEdit, sttEdit, nameEdit, codeEdit, quantityEdit, isSearch, itemsSearch} = this.state;
		if (isSearch) {
      items = itemsSearch
    }
		if (items.length === 0) {
			return <Item item={0} />
		}
		return items.map((item, index) => { 
			if (item.stt === sttEdit) {
				return(
					<WHEdit 
						key={index}
						indexEdit={indexEdit}
						nameEdit={nameEdit}
						codeEdit={codeEdit}
						quantityEdit={quantityEdit}
						handleEditClickCancel={this.handleEditClickCancel}
						handleEditClickSubmit={this.handleEditClickSubmit}
						handleEditInputNameChange={this.handleEditInputNameChange}
						handleEditInputCodeChange={this.handleFormInputCodeChange}
						handleEditInputQuantityChange={this.handleFormInputQuantityChange}
					/>
				)
			}
			return(
				<Item	
					index = {index+1}
					item = {item}
					key = {item.stt}
					handleEditBook={this.handleEditBook}
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
          confirmBtnText="Xác nhận"
          confirmBtnBsStyle="danger"
          cancelBtnText="Hủy"
          cancelBtnBsStyle="light"
          title="Xác nhận xóa sách?"
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
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search 
              valueSearch={this.state.valueSearch}
              handleSearch={this.handleSearch}
            />
          </div>
					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
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
              nameBook={this.state.nameBook}
              handleFormInputNameChange={this.handleFormInputNameChange}
              handleFormInputCodeChange={this.handleFormInputCodeChange}
              handleFormInputQuantityChange={this.handleFormInputQuantityChange}
              handleFormClickCancel={this.handleFormClickCancel}
              handleFormClickSubmit={this.handleFormClickSubmit}
            />
          </div>
        </div>

				<div className="panel panel-success">
					<br></br>
					<table className="table table-hover">
						<thead>
							<th style={{width: '10%'}} className="text-center">STT</th>
							<th style={{width: '40%'}} className="text-center">Tựa sách</th>
							<th style={{width: '15%'}} className="text-center">Mã sách</th>
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