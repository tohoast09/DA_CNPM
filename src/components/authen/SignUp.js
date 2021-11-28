import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import sign from "./Sign.module.css";
import { useUserContext } from "../../stores/AppState";
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

export default function SignUp(props) {
  const {
    registerUser,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
  } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");
    if (email && password && name) registerUser(name, email, password);
    console.log({
      email: email,
      password: password,
      name: name,
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
            Đăng ký tài khoản
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Họ và tên"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
                {emailError && <p className={sign.emailErr}>{emailError}</p>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {passwordError && (
                  <p className={sign.passwordErr}>{passwordError}</p>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={props.handleSignup}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link onClick={()=>{props.onLogin(); setEmailError(""); setPasswordError("");}} href="#" variant="body2">
                  {"Đã có tài khoản? Đăng nhập"}
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
