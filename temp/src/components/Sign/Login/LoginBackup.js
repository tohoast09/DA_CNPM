// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Col } from "reactstrap";
import sign from "../Sign.module.css";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                BK Bookstore
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function Login(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    return (
        <div className={sign.Login}>
            {/* <div className={sign.LoginForm}>
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
                            <Button onClick={props.onQuit}>Đăng nhập</Button>
                        </Link>
                    </div>
                    <div className={`${sign.field} ${sign.change}`}>
                        <Row className={sign.ask}>
                            <label>Chưa có tài khoản?</label>
                            <Button
                                className={sign.linkbutton}
                                onClick={props.onSignup}
                            >
                                Đăng ký
                            </Button>
                        </Row>
                    </div>
                </div>
            </div> */}

            <div className={sign.LoginForm}>
                {/* <Grid item xs={12} sm={8} md={100} backgroundColor='#00000000' elevation={6} square> */}
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Ghi nhớ tài khoản"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Đăng nhập
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link
                                    onClick={props.onForget}
                                    href="#"
                                    variant="body2"
                                >
                                    Quên mật khẩu
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    onClick={props.onSignup}
                                    href="#"
                                    variant="body2"
                                >
                                    {"Chưa có tài khoản? Đăng ký"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
                {/* </Grid> */}
            </div>
        </div>
    );
}
export default Login;
