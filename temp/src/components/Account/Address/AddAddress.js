import React, { useState } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Input } from "reactstrap";
import address from "./Address.module.css";
import { useUserContext } from "../../../context/userContext";
import { useNavigate } from "react-router";
import { useUserInfo } from "../../../context/getUserAPI";
// import account from '../address.module.css'

function AddAddress(props) {
    const history = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loc1, setLoc1] = useState("");
    const [loc2, setLoc2] = useState("");
    const [loc3, setLoc3] = useState("");
    const [locDetail, setLocDetail] = useState("");
    const [err, setErr] = useState("");
    const { addAddress } = useUserInfo();

    const onSubmit = (event) => {
        event.preventDefault();
        setErr("");
        if (
            name.value &&
            phone.value &&
            loc1.value &&
            loc2.value &&
            loc3.value &&
            locDetail.value &&
            phone.value
        ) {
            const newAddress = {
                name: name.value,
                phone: phone.value,
                location_1: loc1.value,
                location_2: loc2.value,
                location_3: loc3.value,
                location_detail: locDetail.value,
                defaultAddr: false,
            };
            console.log(newAddress);
            addAddress(newAddress);
            props.onAdd();
        } else {
            console.log("error");
            setErr("Bạn cần nhập đầy đủ thông tin trên");
        }

        // history('/account/address');
    };
    return (
        <div className={address.AddressPopup}>
            <h1>Thêm địa chỉ</h1>
            <div className={`${address.MainContent} ${address.add}`}>
                <div className={address.infoInsideContent}>
                    <div className={address.field}>
                        <label>Họ tên</label>
                        <Input
                            className={address.fieldInput}
                            name="name"
                            type="text"
                            innerRef={(input) => {
                                setName(input);
                            }}
                            required
                        />
                    </div>

                    <div className={address.field}>
                        <label>Tỉnh/Thành phố:</label>
                        <Input
                            className={address.fieldInput}
                            name="loc1"
                            type="text"
                            innerRef={(input) => {
                                setLoc1(input);
                            }}
                            required
                        />
                    </div>

                    <div className={address.field}>
                        <label>Quận huyện:</label>
                        <Input
                            className={address.fieldInput}
                            name="loc2"
                            type="text"
                            innerRef={(input) => {
                                setLoc2(input);
                            }}
                            required
                        />
                    </div>

                    <div className={address.field}>
                        <label>Phường xã</label>
                        <Input
                            className={address.fieldInput}
                            name="loc3"
                            type="text"
                            innerRef={(input) => {
                                setLoc3(input);
                            }}
                            required
                        />
                    </div>
                    <div className={address.field}>
                        <label>Địa chỉ chi tiết</label>

                        <Input
                            className={address.fieldInput}
                            name="loc_detail"
                            type="text"
                            innerRef={(input) => {
                                setLocDetail(input);
                            }}
                            required
                        />
                    </div>
                    <div className={address.field}>
                        <label>Số điện thoại</label>
                        <Input
                            className={address.fieldInput}
                            name="phone"
                            type="text"
                            innerRef={(input) => {
                                setPhone(input);
                            }}
                            required
                        />
                    </div>
                    {err && <span className={address.invalidForm}>{err}</span>}

                    <Button
                        variant="contained"
                        onClick={onSubmit}
                        className={`${address.confirmAdd} ${address.update}`}
                    >
                        Thêm địa chỉ
                    </Button>
                    <Button
                        variant="contained"
                        onClick={props.onCancel}
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
