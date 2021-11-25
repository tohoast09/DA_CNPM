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

import { useUserContext } from "../../../context/userContext";
import { useUserInfo } from "../../../context/getUserAPI";

function UserInfo(props) {
    const { userInfo } = useUserInfo();
    const [nameInput, setNameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [bdateInput, setBdateInput] = useState("");
    const [genderInput, setGenderInput] = useState("");
    console.log("userInfo: ", userInfo);
    // const [userData, setUserData] = useState({});
    // const [init, setInit] = useState(true);

    const [pwdPopup, setpwdPopup] = useState(false);

    function onChangeGender(status) {
        setGenderInput(status);
    }

    function onCancelHandler() {
        setpwdPopup(false);
    }

    function submitHandler(event) {
        event.preventDefault();

        let userData = {
            name: nameInput.value,
            phone: phoneInput.value,
            bdate: bdateInput.value,
            gender: genderInput.value,
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
                            defaultValue={userInfo.name}
                            // onChange={handleChange}
                            innerRef={(input) => setNameInput(input)}
                            // ref={nameInputRef}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="phone">Số điện thoại</label>
                        <Input
                            name="Phone"
                            type="text"
                            id="phone"
                            defaultValue={userInfo.phone}
                            innerRef={(input) => setPhoneInput(input)}
                            // onChange={handleChange}
                            // ref={phoneInputRef}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="email">Email</label>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            defaultValue={userInfo.email}
                            disabled
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="bdate">Ngày sinh</label>
                        <Input
                            name="bdate"
                            type="date"
                            id="bdate"
                            defaultValue={userInfo.bdate}
                            innerRef={(input) => setBdateInput(input)}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="gender">Giới tính</label>
                        <Input
                            name="gender"
                            type="text"
                            id="gender"
                            defaultValue={userInfo.gender}
                            disabled
                            // innerRef={(input) => setBdateInput(input)}
                            // onChange={handleChange}
                        />
                        <div className={account.gender}>
                            {/* <FormControl
                                className={account.selectGender}
                                component="fieldset"
                            >
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="genderInput"
                                    id="gender"
                                    value={userInfo.gender}
                                    // onChange={(event) => {
                                    //     setGenderInput(event.target.value);
                                    //     console.log(genderInput);
                                    // }}
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
                            </FormControl> */}
                            {/* <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="gender"
                                    name="controlled-radio-buttons-group"
                                    value={userInfo.gender}
                                    onChange={(event) => {
                                        setGenderInput(event.target.value);
                                    }}
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                </RadioGroup>
                            </FormControl> */}
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        className={`${account.changeInfo} ${account.update}`}
                    >
                        Cập nhật thông tin
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        // onClick={onChangeHandler}
                        // onCancel={onCancelHandler}
                        className={`${account.changePassword} ${account.update}`}
                    >
                        Sửa mật khẩu
                    </Button>
                </form>

                {pwdPopup && <ChangePass onCancel={onCancelHandler} />}
            </div>
        </div>
    );
    // }
}
export default UserInfo;
