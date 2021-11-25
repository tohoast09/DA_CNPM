import React from "react";
import { Input } from "reactstrap";
import style from "../Account.module.css";
import Button from "@mui/material/Button";

function ChangePass(props) {
    return (
        <div className={style.changePass}>
            <h1>Sửa mật khẩu</h1>
            <form className={style.changePassForm}>
                <div className={style.passField}>
                    <label>Nhập mật khẩu mới</label>
                    <Input name="Name" type="password" required />
                </div>
                <div className={style.passField}>
                    <label>Xác nhận mật khẩu mới</label>
                    <Input name="Phone" type="password" required />
                </div>
                <Button className={style.changePassConfirm} variant="contained" size="large">
                    Sửa mật khẩu
                </Button>
            </form>

            <Button className={style.changePassCancel} onClick={props.onCancel} variant="contained" size="large">
                Hủy
            </Button>
        </div>
    );
}

export default ChangePass;
