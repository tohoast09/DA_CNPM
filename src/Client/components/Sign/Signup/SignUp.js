// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from '../Sign.module.css'

function SignUp(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.LoginForm}>
                <div>
                    <h1>Đăng ký</h1>
                    <div className={sign.field}>
                        <Row>
                            <label>Họ</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Tên</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Email</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Nhập mật khẩu</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Xác nhận mật khẩu</label>
                        </Row>

                        <Input name="pwd" type="password" required />
                    </div>
                    <div className={sign.field}>
                        <Button>Đăng ký</Button>
                    </div>
                    <div className={`${sign.field} ${sign.change}`}>
                        <Row>
                            <label>Đã có tài khoản?</label>
                            {/* <Link to="/login">Đăng nhập</Link> */}
                            <Button onClick={props.onLogin}>Đăng nhập</Button>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
