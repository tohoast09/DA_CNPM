import React from "react";
import { Button } from "reactstrap";
import { Input } from "reactstrap";
import address from "./Address.module.css";
// import account from '../address.module.css'

function AddAddress(props) {
    return (
        <div className={address.AddressPopup}>
            <h1>Thêm địa chỉ</h1>
            <div className={`${address.MainContent} ${address.add}`}>
                <div className={address.infoInsideContent}>
                    <div className={address.field}>
                        <label>Họ tên</label>
                        <Input
                            name="Name"
                            type="text"
                            defaultValue="Nguyễn Trường Hải Đăng"
                            required
                        />
                    </div>

                    <div className={address.field}>
                        <label>Công ty</label>

                        <Input name="text" type="text" />
                    </div>

                    <div className={address.field}>
                        <label>Tỉnh/Thành phố:</label>
                        <select name="cars" id="cars">
                            <option value="volvo">TP Hồ Chí Minh</option>
                        </select>
                    </div>

                    <div className={address.field}>
                        <label>Quận huyện:</label>
                        <select name="cars" id="cars">
                            <option value="volvo">Thủ Đức</option>
                        </select>
                    </div>

                    <div className={address.field}>
                        <label>Phường xã</label>
                        <select name="cars" id="cars">
                            <option value="volvo">Linh Trung</option>
                        </select>
                    </div>
                    <div className={address.field}>
                        <label>Địa chỉ chi tiết</label>

                        <Input name="text" type="text" />
                    </div>
                    <div className={address.field}>
                        <label>Số điện thoại</label>
                        <Input
                            name="Phone"
                            type="text"
                            defaultValue="0768803077"
                            required
                        />
                    </div>


                    <div className={address.field}>
                        <label>Loại địa chỉ</label>
                        <div className={address.inputAddressType}>

                            <div className={address.selectAddressType}>
                                <Input
                                    className={address.AddressType}
                                    name="AddressType"
                                    type="radio"
                                    checked
                                />
                                <span>Chung cư/nhà riêng</span>
                            </div>
                            
                            <div className={address.selectAddressType}>
                                <Input
                                    className={address.AddressType}
                                    name="AddressType"
                                    type="radio"
                                />
                                <span>Công ty</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        className={`${address.changeInfo} ${address.update}`}
                    >
                        Cập nhật
                    </Button>
                    <Button onClick={props.onCancel}
                        className={`${address.changePassword} ${address.update}`}
                    >
                        Hủy
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddAddress;
