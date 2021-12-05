import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import sign from "../Sign.module.css";
import { useUserContext } from "../../../context/userContext";

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

const theme = createTheme();

export default function ForgetPass(props) {
    const {forgetPassword} = useUserContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const email = data.get("email");
        if (email) {
            forgetPassword(email);
            props.onChange(email);
        }
        
        console.log({
            email: data.get("email")
        });
        
    };

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
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Quên mật khẩu
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
                        <Button
                            type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Gửi mã xác nhận
                        </Button>
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Nhập mã xác nhận"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button onClick={props.onChange}
                            type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Sửa mật khẩu
                        </Button> */}
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link
                                    onClick={props.onLogin}
                                    href="#"
                                    variant="body2"
                                >
                                    {"Đăng nhập"}
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
