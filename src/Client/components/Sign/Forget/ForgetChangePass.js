// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
// import { Link } from "react-router-dom";
import sign from '../Sign.module.css'

function ForgetChangePass(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.LoginForm}>
                <div>
                <h1>Thay mật khẩu</h1>
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
                            {/* <Link to='/'><Button>Xác nhận</Button></Link> */}
                            <Button onClick={props.onLogin}>Xác nhận</Button>
                        </Row>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ForgetChangePass;
