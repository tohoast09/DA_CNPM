import * as React from "react";
// import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import sign from "./Sign.module.css";
import { useUserContext } from "../../stores/AppState";
import { useNavigate } from "react-router";
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="/">
                BK Bookstore
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function Login(props) {
    const navigate=useNavigate();

    const {
        user,
        signInUser,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        // getAddress,
    } = useUserContext();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console

        const email = data.get("email");
        const password = data.get("password");
        if (email && password) await signInUser(email, password);
        //get Addres---- need async
        // const addressData = getAddress();
        // console.log(addressData);
        // console.log(user.uid)
        // console.log(addressData.data);
        // console.log({
        //     email: { email },
        //     password: { password },
        // });

    };

    // const signUpHandler =()=>{
    //     setEmailError("");
    //     setPasswordError("");
    //     props.onSignup();
    // }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                maxWidth="420px"
                className={sign.muiLoginForm}
            >
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        width: 1,
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
                        sx={{ mt: 1, width: 1 }}
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
                            // onChange={()=>{setEmailError("")}}
                        />
                        {emailError && (
                            <p className={sign.emailErr}>{emailError}</p>
                        )}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            // onChange={()=>setPasswordError("")}
                        />
                        {passwordError && (
                            <p className={sign.passwordErr}>{passwordError}</p>
                        )}
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Nhớ tài khoản"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                            // href="/"
                            sx={{ mt: 2, mb: 2 }}
                            onClick={props.handleLogin}
                        >
                            Đăng nhập
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link
                                    onClick={props.onForget}
                                    // onClick={forgetPasswordHandler}
                                    href="#"
                                    variant="body2"
                                >
                                    Quên mật khẩu
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    onClick={()=>{props.onSignup(); setEmailError(""); setPasswordError("");}}
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
            </Grid>
        </ThemeProvider>
    );
}
