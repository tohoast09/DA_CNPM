// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from '../Sign.module.css'

function Login(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.LoginForm}>
                <div>
                    <h1>Đăng Nhập</h1>
                    <div className={sign.field}>
                        <Row>
                            <label>Email</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <Col>
                                <label>Mật khẩu</label>
                            </Col>{" "}
                            <Col>
                            {/* <Link to='forgetPass'>Quên mật khẩu</Link> */}
                            <Button onClick={props.onForget}>Quên mật khẩu</Button>
                            </Col>
                        </Row>

                        <Input name="pwd" type="password" required />
                    </div>
                    <div className={sign.field}>
                        <Link to='/'><Button onClick={props.onQuit}>Đăng nhập</Button></Link>
                    </div>
                    <div className={`${sign.field} ${sign.change}`}>
                        <Row>
                            <label>Chưa có tài khoản?</label>
                            {/* <Link to="/signup" onClick={props.onSignup}>Đăng ký</Link> */}
                            <Button onClick={props.onSignup}>Đăng ký</Button>
                            {/* <Button onClick={props.onSignup}>Đăng ký</Button> */}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
// class LoginPane extends Component {
//     render() {
//         // const { phone, pwd } = this.props;

//         return (
//             <div className="Login">
//                 <div className="LoginForm">
//                     <div>
//                         <h1>Đăng Nhập</h1>
//                         <div className="field">
//                             <label>Email</label>
//                             <Input name="Phone" type="email" required />
//                         </div>
//                         <div className="field">
//                             <Row>
//                                 <Col><label>Mật khẩu</label></Col> <Col>Queen MK</Col>
//                             </Row>

//                             <Input name="pwd" type="password" required />
//                         </div>
//                         <div className="field">
//                             <Button>Đăng nhập</Button>
//                         </div>
//                         <div className="field" id='signin'><label>Chưa có tài khoản? Đăng ký</label></div>

//                         <Row align="center">
//                             {/* <Route path="/home" component={Home} /> */}
//                         </Row>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
export default Login;
