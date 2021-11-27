import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SweetAlert from 'react-bootstrap-sweetalert';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import Mockdata from './mockdata/Mockdata';
import GetOrder from './mockdata/Mockdata';
import Item from './components/Item';
import ItemEdit from './components/ItemEdit';
import connectFB from "../connectFB";
import { db } from "../connectFB";
import {
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
  getDoc,
  query,
  orderBy,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
//import 'bootstrap@3.3.7'
//import '../css/bootstrap.min.css';

let arrayLevel = [];
for (let i = 0; i < Mockdata.length; i++) {
  if (arrayLevel.indexOf(Mockdata[i].level) === -1) {
    arrayLevel.push(Mockdata[i].level);
  }
}
arrayLevel.sort(function (a, b) { return a - b });

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Mockdata,
      showAlert: false,
      titleAlert: '',
      idAlert: '',
      indexEdit: 0,
      idEdit: '',
      nameEdit: '',
      levelEdit: 0,
      arrayLevel: arrayLevel,
      showForm: false,
      valueItem: '',
      levelItem: 0,
      sortType: '',
      sortOrder: '',
      valueSearch: '',
      isSearch: false,
      itemsSearch: []
    }
  }
  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item.id
    });
  }
  handleDeleteItem = () => {
    let { idAlert, items } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
      this.setState({ items });
    }
    this.setState({
      showAlert: false,
      isSearch: false,
      valueSearch: ''
    });
  }
  handleEditItem = (index, item) => {
    this.setState({
      indexEdit: index,
      idEdit: item.id,
      nameEdit: item.name,
      levelEdit: item.level
    });
  }
  handleEditClickCancel = () => {
    this.setState({
      idEdit: ''
    });
  }
  handleEditInputChange = (value) => {
    this.setState({
      nameEdit: value
    });
  }
  handleEditSelectChange = (value) => {
    this.setState({
      levelEdit: value
    });
  }
  handleEditClickSubmit = () => {
    let { items, idEdit, nameEdit, levelEdit } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idEdit) {
          items[i].name = nameEdit;
          items[i].level = +levelEdit;
          break;
        }
      }
    }
    this.setState({
      idEdit: ''
    });
  }
  handleShowForm = () => {
    console.log(Mockdata);
    this.setState({
      showForm: !this.state.showForm
    });
  }
  handleFormInputChange = (value) => {
    this.setState({
      valueItem: value
    });
  }
  handleFormSelectChange = (value) => {
    this.setState({
      levelItem: value
    });
  }
  handleFormClickCancel = () => {
    this.setState({
      valueItem: '',
      levelItem: 0
    });
  }
  handleFormClickSubmit = () => {
    let { valueItem, levelItem, items } = this.state;
    if (valueItem.trim() === 0) return false;
    let newItem = {
      id: uuidv4(),
      name: valueItem,
      level: +levelItem
    };
    items.push(newItem);
    this.setState({
      items,
      valueItem: '',
      levelItem: 0,
      showForm: false,
      isSearch: false,
      valueSearch: ''
    });
  }
  handleSort = (sortType, sortOrder) => {
    let { items } = this.state;
    if (sortOrder !== '' && sortType !== '') {
      let value = `${sortType}-${sortOrder}`;
      switch (value) {
        default:
          break;
        case "name-asc":
          items.sort(this.compareValues('name', 'asc'));
          break;
        case "name-desc":
          items.sort(this.compareValues('name', 'desc'));
          break;
        case "level-desc":
          items.sort(this.compareValues('level', 'asc'));
          break;
        case "level-asc":
          items.sort(this.compareValues('level', 'desc'));
          break;
      }
      this.setState({
        items: items,
        sortType: sortType,
        sortOrder: sortOrder
      });
    }
  }
  // hàm cho sắp xếp động
  compareValues = (key, order = 'asc') => {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
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
    let { items } = this.state;
    let itemsSearch = [...items];
    let newArray = [];
    if (search.length <= 0) {
      this.setState({ isSearch: false })
    } else {
      for (let item of itemsSearch) {
        if (item.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          newArray.push(item);
        }
      }
      this.setState({ isSearch: true })
    }
    this.setState({
      itemsSearch: newArray,
      valueSearch: search
    });
  }

  renderItem = () => {
    const k= GetOrder;
    let { items, idEdit, indexEdit, nameEdit, levelEdit, arrayLevel, isSearch, itemsSearch } = this.state;
    if (isSearch) {
      items = itemsSearch
    }
    if (items.length === 0) {
      return <Item item={0} />
    }
    return items.map((item, index) => {
      if (item.id === idEdit) {
        return (
          <ItemEdit
            key={index}
            indexEdit={indexEdit}
            nameEdit={nameEdit}
            levelEdit={levelEdit}
            arrayLevel={arrayLevel}
            handleEditClickCancel={this.handleEditClickCancel}
            handleEditInputChange={this.handleEditInputChange}
            handleEditSelectChange={this.handleEditSelectChange}
            handleEditClickSubmit={this.handleEditClickSubmit}
          />
        )
      }
      return (
        <Item
          index={index + 1}
          item={item}
          key={item.id}
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
          title="Delete Item?"
          text={this.state.titleAlert}
          showCancelButton
          onOutsideClick={() => this.setState({ showAlert: false })}
          onEscapeKey={() => this.setState({ showAlert: false })}
          onCancel={() => this.setState({ showAlert: false })}
          onConfirm={() => this.handleDeleteItem()}
        />
        <div className="page-header">
          <h1>Đơn hàng</h1>
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
              {this.state.showForm ? 'Close Item' : 'Add Item'}
            </button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form
              showForm={this.state.showForm}
              arrayLevel={this.state.arrayLevel}
              valueItem={this.state.valueItem}
              handleFormInputChange={this.handleFormInputChange}
              levelItem={this.state.levelItem}
              handleFormSelectChange={this.handleFormSelectChange}
              handleFormClickCancel={this.handleFormClickCancel}
              handleFormClickSubmit={this.handleFormClickSubmit}
            />
          </div>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">List Item</div>
          <table className="table  ">
            <thead>
              <tr>
                <th style={{ width: '10%' }} className="text-center">#</th>
                <th className="text-center">Tình trạng</th>
                <th style={{ width: '50%' }} className="text-center">Tên Sách</th>
                <th style={{ width: '15%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItem()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Order;