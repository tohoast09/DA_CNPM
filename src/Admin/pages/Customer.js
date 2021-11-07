import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SweetAlert from 'react-bootstrap-sweetalert';
import Search from './cus-components/cus-search';
import Sort from './components/Sort';
import Form from './cus-components/cus-form';
import CusDatabase from './mockdata/CusData';
import Customer from './cus-components/customer';
import CusEdit from './cus-components/cus-edit';



let arrayLevel = [];
for(let i = 0; i < CusDatabase.length; i++) {
  if(arrayLevel.indexOf(CusDatabase[i].sex) === -1) {
    arrayLevel.push(CusDatabase[i].sex);
  }
}
arrayLevel.sort(function(a, b){return a - b});

class Customers extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      customers: CusDatabase,
      showAlert: false,
      idAlert: '',
      nameAlert: '',
      sttAlert: '',
      sexAlert: 0,
      bdayAlert: '',
      phoneAlert: '',
      emailAlert: '',
      
      indexEdit: 0,
      sttEdit: '',
      idEdit: '',
      nameEdit: '',
      sexEdit: 0,
      bdayEdit: '',
      phoneEdit: '',
      emailEdit: '',
      
      arrayLevel: arrayLevel,
      showForm: false,
      valueCus: '',
      levelCus: 0,
      sortType: '',
      sortOrder: '',
      valueSearch: '',
      isSearch: false,
      customersSearch: []
    }
  }
  handleShowAlert = (cus) => {
    this.setState({
      showAlert: true,
      idAlert: cus.id,
      nameAlert: cus.name,
      sttAlert: cus.stt,
      sexAlert: cus.sex,
      bdayEdit: cus.bdate,
      phoneEdit: cus.phone,
      emailEdit: cus.email
    });
  }
  handleDeleteItem = () => {
    let {sttAlert, customers} = this.state;
    if(customers.length > 0) {
      for(let i = 0; i < customers.length; i++) {
        if(customers[i].stt === sttAlert) {
          customers.splice(i, 1);
          break;
        }
      }
      this.setState({customers});
    }
    this.setState({
      showAlert: false,
      isSearch: false,
      valueSearch: ''
    });
  }
  handleEditItem = (index,cus) => {
    this.setState({
      indexEdit: index,
      sttEdit: cus.stt,
      idEdit: cus.id,
      nameEdit: cus.name,
      sexEdit: cus.sex,
      bdayEdit: cus.bdate,
      phoneEdit: cus.phone,
      emailEdit: cus.email
    });
  }
  handleEditClickCancel = () => {
    this.setState({
      sttEdit: ''
    });
  }

  handleIDEditInputChange = (value) => {
    this.setState({
      idEdit: value
    });
  }
  handleNameEditInputChange = (value) => {
    this.setState({
      nameEdit: value
    });
  }
  handleBDayEditInputChange = (value) => {
    this.setState({
      bdayEdit: value
    });
  }
  handlePhoneEditInputChange = (value) => {
    this.setState({
      phoneEdit: value
    });
  }
  handleEmailEditInputChange = (value) => {
    this.setState({
      emailEdit: value
    });
  }

  handleEditSelectChange = (value) => {
    this.setState({
        sexEdit: value
    });
  }
  handleEditClickSubmit = () => {
    let {customers, sttEdit, nameEdit, sexEdit} = this.state; 
    if(customers.length > 0) { 
      for(let i = 0; i < customers.length; i++) {
        if(customers[i].stt === sttEdit) {
          customers[i].name = nameEdit;
          customers[i].sex = +sexEdit;
          break;
        }
      }
    }
    this.setState({
      sttEdit: ''
    });
  }
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  handleFormInputChange = (value) => {
    this.setState({
      valueCus: value
    });
  }
  handleFormSelectChange = (value) => {
    this.setState({
      levelCus: value
    });
  }
  handleFormClickCancel = () => {
    this.setState({
      valueCus: '',
      levelCus: 0
    });
  }
  handleFormClickSubmit = () => {
    let {valueCus, levelCus, customers} = this.state;
    if(valueCus.trim() === 0) return false;
    let newItem = {
      stt: uuidv4(),
      name: valueCus,
      sex: +levelCus
    }; 
    customers.push(newItem);
    this.setState({
      customers,
      valueCus: '',
      levelCus: 0,
      showForm: false,
      isSearch: false,
      valueSearch: ''
    });
  }
  handleSort = (sortType,sortOrder) => {
    let {customers} = this.state;
    if(sortOrder !== '' && sortType !== '') {
      let value = `${sortType}-${sortOrder}`;
      switch(value) {
        default:
          break;
        case "name-asc":
          customers.sort(this.compareValues('name','asc'));
          break;
        case "name-desc":
          customers.sort(this.compareValues('name','desc'));
          break;
        case "level-desc":
          customers.sort(this.compareValues('level','asc'));
          break;
        case "level-asc":
          customers.sort(this.compareValues('level','desc'));
          break;
      }
      this.setState({
        customers    : customers,
        sortType : sortType,
        sortOrder: sortOrder
      });
    }
  }
  // hàm cho sắp xếp động
  compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;   
      }
      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  handleSearch = (search) => {
    let {customers} = this.state;
    let customersSearch = [...customers];
    let newArray = [];
    if(search.length <= 0) {
      this.setState({isSearch: false})
    } else {
      for(let cus of customersSearch) {
        if(cus.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          newArray.push(cus);
        }
      }
      this.setState({isSearch: true})
    }
    this.setState({
      customersSearch: newArray,
      valueSearch: search
    });
  } 
  renderCustomer = () => {
    let {customers, sttEdit, indexEdit, idEdit, nameEdit, sexEdit, bdayEdit, phoneEdit, emailEdit, arrayLevel, isSearch, customersSearch} = this.state;
    if (isSearch) {
      customers = customersSearch
    }
    if(customers.length === 0) {
      return <Customer cus={0} />
    }
    return customers.map((cus, index) => {
      if(cus.stt === sttEdit) {
        return (
          <CusEdit 
            key={index}
            indexEdit={indexEdit}
            idEdit={idEdit}
            nameEdit={nameEdit}
            sexEdit={sexEdit}
            bdayEdit={bdayEdit}
            phoneEdit={phoneEdit}
            emailEdit={emailEdit}
            arrayLevel={arrayLevel}
            handleEditClickCancel={this.handleEditClickCancel}
            handleIDEditInputChange={this.handleIDEditInputChange}
            handleNameEditInputChange={this.handleNameEditInputChange}
            handleBDayEditInputChange={this.handleBDayEditInputChange}
            handlePhoneEditInputChange={this.handlePhoneEditInputChange}
            handleEmailEditInputChange={this.handleEmailEditInputChange}
            handleEditSelectChange={this.handleEditSelectChange}
            handleEditClickSubmit={this.handleEditClickSubmit}
          />
        )
      }
      return (
        <Customer 
          index={index+1} 
          cus={cus} 
          key={cus.id} 
          handleShowAlert={this.handleShowAlert} 
          handleEditItem={this.handleEditItem}
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
          title="Xác nhận xóa khách hàng?"
          onOutsideClick={()  => this.setState({ showAlert: false })}
          onEscapeKey={()     => this.setState({ showAlert: false })}
          onCancel={()        => this.setState({ showAlert: false })}
          onConfirm={()       => this.handleDeleteItem()}
          focusCancelBtn
        />
        <div className="page-header">
          <h1>Khách hàng</h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search 
              valueSearch={this.state.valueSearch}
              handleSearch={this.handleSearch}
            />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort 
              sortType={this.state.sortType}
              sortOrder={this.state.sortOrder}
              handleSort={this.handleSort}
            />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button 
              type="button" 
              className="btn btn-info btn-block marginB10"
              onClick={this.handleShowForm}
            >
              {this.state.showForm ? 'Đóng' : 'Thêm khách hàng'}
            </button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form 
              showForm={this.state.showForm}
              arrayLevel={this.state.arrayLevel}
              valueCus={this.state.valueCus}
              handleFormInputChange={this.handleFormInputChange}
              levelCus={this.state.levelCus}
              handleFormSelectChange={this.handleFormSelectChange}
              handleFormClickCancel={this.handleFormClickCancel}
              handleFormClickSubmit={this.handleFormClickSubmit}
            />
          </div>
        </div>
        <div className="panel panel-success">
          <br></br>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th style={{width: '10%'}}>ID</th>
                <th style={{width: '20%'}}>Họ và tên</th>
                <th>Số điện thoại</th>
                <th style={{width: '15%'}} className="text-center">Lịch sử mua hàng</th>
                <th style={{width: '20%'}} className="text-right">Tổng số tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderCustomer()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Customers;