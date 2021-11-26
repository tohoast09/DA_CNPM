import { Input } from "reactstrap";
// import { useRef } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { React } from "react";
import account from "../Account.module.css";
import ChangePass from "./ChangePass";
import { useState } from "react";
import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
import { useUserContext } from "../../../stores/AppState";

function UserInfo(props) {
    const { userInfo, updateUserInfo } = useUserInfo();
    const [nameInput, setNameInput] = useState(userInfo.name);
    const [phoneInput, setPhoneInput] = useState(userInfo.phone);
    const [bdateInput, setBdateInput] = useState(userInfo.bdate);
    const [genderInput, setGenderInput] = useState(userInfo.gender);
    // const [loading, setLoading] = useState(true);
    // console.log("render userInfo: ", userInfo);
    const {logoutUser}=useUserContext();
    console.log(phoneInput);

    const [pwdPopup, setpwdPopup] = useState(false);

    function onChangeGender(status) {
        setGenderInput(status);
    }

    function onCancelHandler() {
        setpwdPopup(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let userInfo = {
            name: nameInput.value,
            phone: phoneInput.value,
            bdate: bdateInput.value,
            gender: genderInput,
        };

        console.log(userInfo);
        updateUserInfo(userInfo);
    };

    // if (userInfo)
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
                                defaultValue={nameInput}
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
                                defaultValue={phoneInput}
                                innerRef={(input) => setPhoneInput(input)}
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
                                defaultValue={bdateInput}
                                innerRef={(input) => setBdateInput(input)}
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
                                        value={genderInput}
                                        // defaultValue="male"
                                        onChange={(event) =>
                                            onChangeGender(event.target.value)
                                        }
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
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            className={`${account.changePassword} ${account.update}`}
                        >
                            Sửa mật khẩu
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            className={`${account.changePassword} ${account.update}`}
                            onClick={logoutUser}
                        >
                            Đăng xuất tài khoản
                        </Button>
                    </form>

                    {pwdPopup && <ChangePass onCancel={onCancelHandler} />}
                </div>
            </div>
        );
    // }
}
export default UserInfo;
