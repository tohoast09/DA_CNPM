import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import SweetAlert from "react-bootstrap-sweetalert";
import Search from "./cus-components/cus-search";
import Form from "./cus-components/cus-form";
import CusDatabase from "./mockdata/CusData";
import Customer from "./cus-components/customer";
import CusEdit from "./cus-components/cus-edit";
import CustomerDetail from "./Customer-detail";

let arrayLevel = [];
for (let i = 0; i < CusDatabase.length; i++) {
    if (arrayLevel.indexOf(CusDatabase[i].sex) === -1) {
        arrayLevel.push(CusDatabase[i].sex);
    }
}
arrayLevel.sort(function (a, b) {
    return a - b;
});

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: CusDatabase,

            showAlert: false,
            idAlert: "",
            nameAlert: "",
            sttAlert: "",
            sexAlert: 0,
            bdayAlert: "",
            phoneAlert: "",
            emailAlert: "",

            indexEdit: 0,
            sttEdit: "",
            idEdit: "",
            nameEdit: "",
            sexEdit: 0,
            bdayEdit: "",
            phoneEdit: "",
            emailEdit: "",

            arrayLevel: arrayLevel,
            showForm: false,

            idCus: "",
            nameCus: "",
            phoneCus: "",
            sexCus: -1,
            bdayCus: "",
            emailCus: "",

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
            idAlert: cus.id,
            nameAlert: cus.name,
            sttAlert: cus.stt,
            sexAlert: cus.sex,
            bdayEdit: cus.bdate,
            phoneEdit: cus.phone,
            emailEdit: cus.email,
        });
    };
    handleDeleteItem = () => {
        let { sttAlert, customers } = this.state;
        if (customers.length > 0) {
            for (let i = 0; i < customers.length; i++) {
                if (customers[i].stt === sttAlert) {
                    customers.splice(i, 1);
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
    handleEditItem = (index, cus) => {
        this.setState({
            indexEdit: index,
            sttEdit: cus.stt,
            idEdit: cus.id,
            nameEdit: cus.name,
            sexEdit: cus.sex,
            bdayEdit: cus.bdate,
            phoneEdit: cus.phone,
            emailEdit: cus.email,
        });
    };
    handleEditClickCancel = () => {
        this.setState({
            sttEdit: "",
        });
    };

    handleIDEditInputChange = (value) => {
        this.setState({
            idEdit: value,
        });
    };
    handleNameEditInputChange = (value) => {
        this.setState({
            nameEdit: value,
        });
    };
    handleBDayEditInputChange = (value) => {
        this.setState({
            bdayEdit: value,
        });
    };
    handlePhoneEditInputChange = (value) => {
        this.setState({
            phoneEdit: value,
        });
    };
    handleEmailEditInputChange = (value) => {
        this.setState({
            emailEdit: value,
        });
    };

    handleEditSelectChange = (value) => {
        this.setState({
            sexEdit: value,
        });
    };
    handleEditClickSubmit = () => {
        let {
            customers,
            sttEdit,
            idEdit,
            nameEdit,
            sexEdit,
            bdayEdit,
            emailEdit,
            phoneEdit,
        } = this.state;
        if (customers.length > 0) {
            for (let i = 0; i < customers.length; i++) {
                if (customers[i].stt === sttEdit) {
                    customers[i].id = idEdit;
                    customers[i].name = nameEdit;
                    customers[i].sex = +sexEdit;
                    customers[i].bdate = bdayEdit;
                    customers[i].email = emailEdit;
                    customers[i].phone = phoneEdit;
                    break;
                }
            }
        }
        this.setState({
            sttEdit: "",
        });
    };
    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm,
        });
    };

    handleIDFormInputChange = (value) => {
        this.setState({
            idCus: value,
        });
    };
    handleNameFormInputChange = (value) => {
        this.setState({
            nameCus: value,
        });
    };
    handleBDayFormInputChange = (value) => {
        this.setState({
            bdayCus: value,
        });
    };
    handlePhoneFormInputChange = (value) => {
        this.setState({
            phoneCus: value,
        });
    };
    handleEmailFormInputChange = (value) => {
        this.setState({
            emailCus: value,
        });
    };
    handleFormSelectChange = (value) => {
        this.setState({
            sexCus: value,
        });
    };

    handleFormClickCancel = () => {
        this.setState({
            idCus: "",
            nameCus: "",
            sexCus: 0,
            bdayCus: "",
            phoneCus: "",
            emailCus: "",
            showForm: false,
        });
    };
    handleFormClickSubmit = () => {
        let { idCus, nameCus, sexCus, bdayCus, phoneCus, emailCus, customers } =
            this.state;
        if (nameCus.trim() === 0) return false;
        let newItem = {
            stt: uuidv4(),
            id: idCus,
            name: nameCus,
            sex: +sexCus,
            bdate: bdayCus,
            phone: phoneCus,
            email: emailCus,
            total: 0,
        };
        customers.push(newItem);
        this.setState({
            customers,
            idCus: "",
            nameCus: "",
            sexCus: 0,
            bdayCus: "",
            phoneCus: "",
            emailCus: "",
            showForm: false,
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
            sttEdit,
            indexEdit,
            idEdit,
            nameEdit,
            sexEdit,
            bdayEdit,
            phoneEdit,
            emailEdit,
            arrayLevel,
            isSearch,
            customersSearch,
            showDetail,
            customerDetail,
            indexDetail,
        } = this.state;
        if (isSearch) {
            customers = customersSearch;
        }
        if (customers.length === 0) {
            return <Customer cus={0} />;
        }
        return customers.map((cus, index) => {
            if (cus.stt === sttEdit) {
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
                        handleNameEditInputChange={
                            this.handleNameEditInputChange
                        }
                        handleBDayEditInputChange={
                            this.handleBDayEditInputChange
                        }
                        handlePhoneEditInputChange={
                            this.handlePhoneEditInputChange
                        }
                        handleEmailEditInputChange={
                            this.handleEmailEditInputChange
                        }
                        handleEditSelectChange={this.handleEditSelectChange}
                        handleEditClickSubmit={this.handleEditClickSubmit}
                    />
                );
            }
            return (
                <Customer
                    index={index + 1}
                    cus={cus}
                    key={cus.id}
                    handleShowAlert={this.handleShowAlert}
                    handleEditItem={this.handleEditItem}
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
                            {this.state.showForm ? "Đóng" : "Thêm khách hàng"}
                        </button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <Form
                            showForm={this.state.showForm}
                            arrayLevel={this.state.arrayLevel}
                            nameCus={this.state.nameCus}
                            handleIDFormInputChange={
                                this.handleIDFormInputChange
                            }
                            handleNameFormInputChange={
                                this.handleNameFormInputChange
                            }
                            handleBDayFormInputChange={
                                this.handleBDayFormInputChange
                            }
                            handlePhoneFormInputChange={
                                this.handlePhoneFormInputChange
                            }
                            handleEmailFormInputChange={
                                this.handleEmailFormInputChange
                            }
                            sexCus={this.state.sexCus}
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
                                <th
                                    style={{ width: "10%" }}
                                    className="text-center"
                                >
                                    #
                                </th>
                                <th style={{ width: "10%" }}>ID</th>
                                <th style={{ width: "20%" }}>Họ và tên</th>
                                <th>Số điện thoại</th>
                                <th
                                    style={{ width: "15%" }}
                                    className="text-center"
                                >
                                    Lịch sử mua hàng
                                </th>
                                <th
                                    style={{ width: "20%" }}
                                    className="text-right"
                                >
                                    Tổng số tiền
                                </th>
                                <th></th>
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
