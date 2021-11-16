import { Input } from "reactstrap";
import { useRef } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { React } from "react";
import account from "../Account.module.css";
import ChangePass from "./ChangePass";
import { useState } from "react";

function UserInfo(props) {
    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const bdateInputRef = useRef();
    const genderInputRef = useRef();

    const [pwdPopup, setpwdPopup] = useState(false);

    function onChangeHandler() {
        setpwdPopup(true);
    }

    function onCancelHandler() {
        setpwdPopup(false);
    }

    function handleChange() {}

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredBdate = bdateInputRef.current.value;
        const enteredGender = genderInputRef.current.value;

        let userData = {
            name: enteredName,
            phone: enteredPhone,
            bdate: enteredBdate,
            gender: enteredGender,
        };

        console.log(userData);
    }

    return (
        <div className={account.UserInfo}>
            <h1>Thông tin tài khoản</h1>
            <div className={`${account.MainContent} ${account.info}`}>
                <form
                    className={account.infoInsideContent}
                    onSubmit={submitHandler}
                >
                    <div className={account.field}>
                        <label htmlFor="name">Họ tên</label>
                        <Input
                            name="Name"
                            type="text"
                            id="name"
                            // defaultValue="Hải Đăng"
                            onChange={handleChange}
                            ref={nameInputRef}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="phone">Số điện thoại</label>
                        <Input
                            name="Phone"
                            type="text"
                            id="phone"
                            // defaultValue="0987654321"
                            onChange={handleChange}
                            ref={phoneInputRef}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="email">Email</label>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            // defaultValue="d@gmail.com"
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="bdate">Ngày sinh</label>
                        <Input
                            name="bdate"
                            type="date"
                            id="bdate"
                            // defaultValue="2001-01-01"
                            onChange={handleChange}
                            ref={bdateInputRef}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="gender">Giới tính</label>
                        <div className={account.gender}>
                            <FormControl
                                className={account.selectGender}
                                component="fieldset"
                            >
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="row-radio-buttons-group"
                                    id="gender"
                                    defaultValue="male"
                                    onChange={handleChange}
                                    ref={genderInputRef}
                                >
                                    <FormControlLabel
                                        className={account.genderSelection}
                                        value="male"
                                        control={<Radio />}
                                        label="Nam"
                                    />
                                    <FormControlLabel
                                        className={account.genderSelection}
                                        value="female"
                                        control={<Radio />}
                                        label="Nữ"
                                    />
                                    <FormControlLabel
                                        className={account.genderSelection}
                                        value="other"
                                        control={<Radio />}
                                        label="Khác"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        className={`${account.changeInfo} ${account.update}`}
                    >
                        Cập nhật thông tin
                    </Button><Button
                    variant="contained"
                    size="large"
                    onClick={onChangeHandler}
                    onCancel={onCancelHandler}
                    className={`${account.changePassword} ${account.update}`}
                >
                    Sửa mật khẩu
                </Button>
                </form>
                
                {pwdPopup && <ChangePass onCancel={onCancelHandler} />}
            </div>
        </div>
        // <div classname="center">
        //     <Row>
        //         <Col xs={0.5}>
        //             <Row>
        //                 <img src="assets/images/pana.svg" alt='Xinchaohinhanh' xs={0.8}></img>
        //             </Row>
        //         </Col>
        //         <Col>
        // <div>
        //     <h1>Đăng Nhập</h1>
        //     Số điện thoại
        //     <Input
        //         name="Phone"
        //         // text={phone}
        //         type="number"
        //         required
        //     />
        //     Mật khẩu
        //     <Input
        //         name="pwd"
        //         // text={pwd}
        //         type="password"
        //         required
        //     />
        //     <Button className="exception">
        //         Quên mật khẩu?
        //     </Button>
        //     <Row align="center">
        //         <Button onClick={this.try} color="primary">
        //             Đăng nhập
        //         </Button>
        //         {/* <Route path="/home" component={Home} /> */}
        //     </Row>
        //     <Button className="exception">
        //         Chưa có tài khoản? Đăng ký
        //     </Button>
        // </div>
        //         </Col>
        //         <Col />
        //     </Row>
        // </div>
    );
    // }
}
export default UserInfo;
