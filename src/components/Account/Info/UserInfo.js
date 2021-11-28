import { Input } from "reactstrap";
// import { useRef } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { React } from "react";
import account from "../Account.module.css";
import { useState } from "react";
import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
import { useUserContext } from "../../../stores/AppState";
import TextField from "@mui/material/TextField";
// import ChangePass from "./ChangePass";
// import storage from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UserInfo(props) {
    const { userInfo, updateUserInfo } = useUserInfo();
    const [submitNoti, setSubmitNoti] = useState("");
    const [img, setImg] = useState("");
    const [file, setFile] = useState();
    const initState = {
        name: userInfo.name,
        phone: "phone" in userInfo ? userInfo.phone : "",
        bdate: "bdate" in userInfo ? userInfo.bdate : "",
        gender: "gender" in userInfo ? userInfo.gender : "",
        email: userInfo.email,
        img: userInfo.img,
    };
    const [Info, setInfo] = useState(initState);

    // const [loading, setLoading] = useState(true);
    console.log("render userInfo: ", Info);
    const { logoutUser } = useUserContext();

    const [pwdPopup, setpwdPopup] = useState(false);

    function onHandleChange(event) {
        const { name, value } = event.target;
        setInfo((prevInfo) => {
            let newInfo = {
                ...prevInfo,
            };
            newInfo[name] = value;
            return newInfo;
        });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        setSubmitNoti("");
        let userInfo = {
            name: Info.name,
            phone: Info.phone,
            bdate: Info.bdate,
            gender: Info.gender,
            email: Info.email,
            img: Info.img,
        };
        console.log("assign: ", userInfo);
        if (file) {
            console.log(file);
            console.log(file.name);
            const strg = getStorage();
            const imgRef = await ref(strg, `images/${userInfo.email}`);
            await uploadBytes(imgRef, file)
                .then(console.log("Uploaded!"))
                .then(
                    getDownloadURL(imgRef).then((url) => {
                        setImg(url);
                        userInfo.img = img;
                        console.log("url: ", img, userInfo);
                    })
                );
        }

        if (Info.name && Info.phone) {
            console.log(userInfo);
            updateUserInfo(userInfo);
            setSubmitNoti("Bạn đã chỉnh sửa thông tin thành công");
        } else {
            setSubmitNoti("Tên và số điện thoại không được để trống");
        }
    };
    return (
        <div className={account.UserInfo}>
            <h1>Thông tin tài khoản</h1>
            <div className={`${account.MainContent} ${account.info}`}>
                {/* <img src={userInfo.img} alt="Ảnh người dùng" /> */}
                <form
                    className={account.infoInsideContent}
                    onSubmit={submitHandler}
                >
                    <div className={account.field}>
                        <label htmlFor="name">Họ tên</label>
                        <TextField
                            className={account.input}
                            name="name"
                            type="text"
                            id="name"
                            value={Info.name}
                            onChange={onHandleChange}
                            // ref={nameInputRef}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="phone">Số điện thoại</label>
                        <TextField
                            className={account.input}
                            name="phone"
                            type="number"
                            id="phone"
                            value={Info.phone}
                            onChange={onHandleChange}
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="email">Email</label>
                        <TextField
                            className={account.input}
                            name="email"
                            type="email"
                            id="email"
                            defaultValue={userInfo.email}
                            disabled
                        />
                    </div>
                    <div className={account.field}>
                        <label htmlFor="bdate">Ngày sinh</label>
                        <TextField
                            className={account.input}
                            name="bdate"
                            type="date"
                            id="bdate"
                            value={Info.bdate}
                            onChange={onHandleChange}
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
                                    name="gender"
                                    value={Info.gender}
                                    onChange={onHandleChange}
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
                    {submitNoti && (
                        <div
                            className={`${account.field} ${account.submitNoti}`}
                        >
                            <span>{submitNoti}</span>
                        </div>
                    )}

                    {/* <label for="file-upload" class="custom-file-upload">
                        Custom Upload
                    </label> */}
                    <div className={account.field}>
                        <label htmlFor="bdate">Chọn ảnh đại diện</label>
                        {/* <label for="files" class="btn">
                            Select Image
                        </label> */}
                        <input
                            className={account.input}
                            id="files"
                            name="files"
                            type="file"
                            onChange={(event) => {
                                setFile(event.target.files[0]);
                            }}
                        ></input>
                    </div>

                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        className={`${account.changeInfo} ${account.update}`}
                    >
                        Cập nhật thông tin
                    </Button>
                    {/* <Button
                            variant="contained"
                            size="large"
                            className={`${account.changePassword} ${account.update}`}
                        >
                            Sửa mật khẩu
                        </Button> */}
                    <Button
                        variant="contained"
                        size="large"
                        className={`${account.changePassword} ${account.update}`}
                        onClick={logoutUser}
                    >
                        Đăng xuất tài khoản
                    </Button>
                </form>

                {/* {pwdPopup && <ChangePass onCancel={onCancelHandler} />} */}
            </div>
        </div>
    );
    // }
}
export default UserInfo;
