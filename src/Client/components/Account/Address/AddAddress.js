import React from "react";
import Button  from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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
                        <Input className={address.fieldInput}
                            name="Name"
                            type="text"
                            defaultValue="Nguyễn Trường Hải Đăng"
                            required
                        />
                    </div>

                    <div className={address.field}>
                        <label>Công ty</label>

                        <Input className={address.fieldInput} name="text" type="text" />
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

                        <Input className={address.fieldInput} name="text" type="text" />
                    </div>
                    <div className={address.field}>
                        <label>Số điện thoại</label>
                        <Input className={address.fieldInput} 
                            name="Phone"
                            type="text"
                            defaultValue="0768803077"
                            required
                        />
                    </div>


                    <div className={address.field}>
                        <label>Loại địa chỉ</label>
                        <div className={address.inputAddressType}>
                        <FormControl className={address.selectAddressType} component="fieldset">
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue='male'>
                                <FormControlLabel className={address.typeSelection} value="male" control={<Radio />} label="Chung cư/Nhà riêng" />
                                <FormControlLabel className={address.typeSelection} value="female" control={<Radio />} label="Công ty" />
                            </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <Button variant="contained"
                        className={`${address.confirmAdd} ${address.update}`}
                    >
                        Cập nhật
                    </Button>
                    <Button variant="contained" onClick={props.onCancel}
                        className={`${address.cancelAdd} ${address.update}`}
                    >
                        Hủy
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddAddress;
