import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Search from "./cus-components/cus-search";
import CusDatabase from "./mockdata/CusData";
import Customer from "./cus-components/customer";
import CustomerDetail from "./Customer-detail";
import {db} from '../connectFB';
import {doc, deleteDoc} from 'firebase/firestore';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: CusDatabase,

            showAlert: false,
            idAlert: "",

            valueSearch: "",
            isSearch: false,
            customersSearch: [],

            showDetail: false,
            customerDetail: null,
        };
    }
    handleShowAlert = (cus) => {
        this.setState({
            showAlert: true,
            idAlert: cus.id
        });
    };
    handleDeleteItem = () => {
        let { idAlert, customers } = this.state;
        if (customers.length > 0) {
            for (let i = 0; i < customers.length; i++) {
                if (customers[i].id === idAlert) {
                    deleteDoc(doc(db, "users", customers[i].id));
                    break;
                }
            }
            this.setState({ customers });
        }
        this.setState({
            showAlert: false,
            isSearch: false,
            valueSearch: "",
        });
    };
    
    handleSearch = (search) => {
        let { customers } = this.state;
        let customersSearch = [...customers];
        let newArray = [];
        if (search.length <= 0) {
            this.setState({ isSearch: false });
        } else {
            for (let cus of customersSearch) {
                if (
                    cus.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    cus.id.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    cus.phone.toLowerCase().indexOf(search.toLowerCase()) > -1
                ) {
                    newArray.push(cus);
                }
            }
            this.setState({ isSearch: true });
        }
        this.setState({
            customersSearch: newArray,
            valueSearch: search,
        });
    };
    handleShowDetail = (cus) => {
        this.setState({
            showDetail: true,
            customerDetail: cus,
        });
    };
    handleBackward = () => {
        this.setState({
            showDetail: false,
            customerDetail: null,
        });
    };
    renderCustomer = () => {
        let {
            customers,
            isSearch,
            customersSearch
        } = this.state;
        if (isSearch) {
            customers = customersSearch;
        }
        if (customers.length === 0) {
            return <Customer cus={0} />;
        }
        return customers.map((cus, index) => {
            return (
                <Customer
                    index={index + 1}
                    cus={cus}
                    key={cus.id}
                    handleShowAlert={this.handleShowAlert}
                    handleShowDetail={this.handleShowDetail}
                />
            );
        });
    };
    render() {
        if (this.state.showDetail) {
            return (
                <CustomerDetail
                    cus={this.state.customerDetail}
                    handleBackward={this.handleBackward}
                />
            );
        }
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
                    onOutsideClick={() => this.setState({ showAlert: false })}
                    onEscapeKey={() => this.setState({ showAlert: false })}
                    onCancel={() => this.setState({ showAlert: false })}
                    onConfirm={() => this.handleDeleteItem()}
                    focusCancelBtn
                />
                <div className="page-header">
                    <h1>Khách hàng</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <Search
                            valueSearch={this.state.valueSearch}
                            handleSearch={this.handleSearch}
                        />
                    </div>
                </div>
                
                <div className="panel panel-success">
                    <br></br>
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th style={{ width: "10%" }} className="text-center">#</th>
                                <th className="text-center" style={{ width: "15%" }}>ID</th>
                                <th style={{ width: "20%" }}>Tên tài khoản</th>
                                <th>Số điện thoại</th>
                                <th style={{ width: "15%" }} className="text-right" >Số dư ví</th>
                                <th style={{ width: "15%" }} className="text-right" >Tổng tiền đã mua</th>
                                <th style={{ width: "25%" }}></th>
                            </tr>
                        </thead>
                        <tbody>{this.renderCustomer()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Customers;
