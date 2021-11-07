// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from "../Sign.module.css";

function Login(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.Login}>
                <div className={sign.LoginForm}>
                    <div className={sign.logContent}>
                        <h1>Đăng Nhập</h1>
                        <div className={sign.field}>
                            <Row>
                                <label>Email</label>
                            </Row>
                            <Input name="Phone" type="email" required />
                        </div>
                        <div className={sign.field}>
                            <div>
                                <div className={sign.col}>
                                    <label>Mật khẩu</label>
                                </div>
                                <div className={sign.col}>
                                    <Button
                                        className={`${sign.linkbutton} ${sign.switchForget}`}
                                        onClick={props.onForget}
                                    >
                                        Quên mật khẩu
                                    </Button>
                                </div>
                            </div>
                            <Input name="pwd" type="password" required />
                        </div>
                        <div className={sign.field}>
                            <Link to="/">
                                <Button onClick={props.onQuit}>
                                    Đăng nhập
                                </Button>
                            </Link>
                        </div>
                        <div className={`${sign.field} ${sign.change}`}>
                            <Row className={sign.ask}>
                                <label>Chưa có tài khoản?</label>
                                <Button className={sign.linkbutton} onClick={props.onSignup}>
                                    Đăng ký
                                </Button>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
