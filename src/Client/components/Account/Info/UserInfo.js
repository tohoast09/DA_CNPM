import { Button, Input } from "reactstrap";
import { React } from "react";
import account from "../Account.module.css";

function UserInfo() {
    // render();
    // {
    // const { phone, pwd } = this.props;

    return (
        <div className={account.UserInfo}>
            <h1>Thông tin tài khoản</h1>
            <div className={`${account.MainContent} ${account.info}`}>
                <div className={account.infoInsideContent}>
                    <div className={account.field}>
                        <label>Họ tên</label>
                        <Input
                            name="Name"
                            type="text"
                            defaultValue="Nguyễn Trường Hải Đăng"
                            required
                        />
                    </div>
                    <div className={account.field}>
                        <label>Số điện thoại</label>
                        <Input
                            name="Phone"
                            type="text"
                            defaultValue="0768803077"
                            required
                        />
                    </div>
                    <div className={account.field}>
                        <label>Email</label>

                        <Input
                            name="email"
                            type="email"
                            defaultValue="dang@gmail.com"
                        />
                    </div>
                    <div className={account.field}>
                        <label>Ngày sinh</label>

                        <Input
                            name="bdate"
                            type="date"
                            defaultValue="2001-04-16"
                        />
                    </div>
                    <div className={account.field}>
                        <label>Giới tính</label>
                        <div className={account.inputGender}>
                            <div className={account.selectGender}>
                                <Input
                                    className={account.gender}
                                    name="gender"
                                    type="radio"
                                    checked
                                />
                                <span>Nam</span>
                            </div>
                            <div className={account.selectGender}>
                                <Input
                                    className={account.gender}
                                    name="gender"
                                    type="radio"
                                />
                                <span>Nữ</span>
                            </div>
                            <div className={account.selectGender}>
                                <Input
                                    className={account.gender}
                                    name="gender"
                                    type="radio"
                                />
                                <span>Khác</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        className={`${account.changeInfo} ${account.update}`}
                    >
                        Cập nhật thông tin
                    </Button>
                    <Button
                        className={`${account.changePassword} ${account.update}`}
                    >
                        Sửa mật khẩu
                    </Button>
                </div>
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
