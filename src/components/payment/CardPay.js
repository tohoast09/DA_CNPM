import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Paypal from "./Paypal";


const steps = [
  "Thông tin cá nhân",
  "Địa chỉ nhận hàng",
  "Phương thức thanh toán"
];

const theme = createTheme();
const UseStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(2)
    }
  }
});

export default function CardPay() {
  const initStateInfo={
      name: 'AAAA',
      phonenumber:'',
      addnum:'',
      street:'',
      village:'',
      district:'',
      city:'',
      method:'COD'
  }

  const [Info, setInfo]= useState(initStateInfo);
  const [activeStep, setActiveStep] =useState(0);
  const classes = UseStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const HandleChange = (event)=>{
    const {name, value}=event.target;
    setInfo(prevInfo=>{
      let newInfo={
        ...prevInfo
      }
      newInfo[name]=value;
      return newInfo;
    });
  }

  const HandleSubmit=(event)=>{
    event.preventDefault();
    console.log(Info);
    //if(!Info.number)
    handleNext();

  }



  const getForm = () => {
    if (activeStep === 0) {
      return (
        <form className={classes.root} onSubmit={HandleSubmit}>
          <TextField label="Họ và tên" variant="outlined" onChange={HandleChange} name='name' value={Info.name} InputProps={{
            readOnly: true,
          }} />
          <TextField label="Số điện thoại" variant="outlined" onChange={HandleChange} name='phonenumber' value={Info.phonenumber} type='number'/>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 3 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Quay lại
            </Button>

            
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type='submit'>
              {activeStep === steps.length - 1 ? "Thanh toán" : "Tiếp theo"}
            </Button>
          </Box>
        </form>
      );
    } else if (activeStep === 1) {
      return (
        <form className={classes.root} onSubmit={HandleSubmit}>
          <TextField required label="Số nhà" variant="outlined" onChange={HandleChange} name='addnum' value={Info.addnum} type='number'/>
          <TextField required label="Đường" variant="outlined" onChange={HandleChange} name='street' value={Info.street}/>
          <TextField required label="Phường/Xã" variant="outlined" onChange={HandleChange} name='village' value={Info.village}/>
          <TextField required label="Quận/Huyện" variant="outlined" onChange={HandleChange} name='district' value={Info.district}/>
          <TextField required label="Thành phố/Tỉnh" variant="outlined" onChange={HandleChange} name='city' value={Info.city}/>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 3 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Quay lại
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type='submit'>
              {activeStep === steps.length - 1 ? "Thanh toán" : "Tiếp theo"}
            </Button>
          </Box>
        </form>
      );
    } else {
      return (
        <form className={classes.root} onSubmit={HandleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Phương thức</FormLabel>
            <RadioGroup
              aria-label="gender"
              value={Info.method}
              name="method"
              onChange={HandleChange}
            >
              <FormControlLabel value='COD' control={<Radio />} label="COD" />
              <FormControlLabel value="ViBK" control={<Radio />} label="Ví Bách Khoa" />
              <FormControlLabel value="Paypal" control={<Radio />} label="Thẻ ngân hàng" />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 3 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Quay lại
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />

            <Button type='submit' disabled={Info.method==="Paypal" || Info.method==="ViBK"}>
              {activeStep === steps.length - 1 ? "Xác nhận" : "Tiếp theo"}
            </Button>
          </Box>
          {Info.method==="Paypal"&&<Paypal/>}
        </form>
      );
    }
  };



  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Thanh toán thành công- Hẹn gặp lại bạn sớm nhé!
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ m: 2 }}>{steps[activeStep]}</Typography>
          {getForm()}
          
        </React.Fragment>
      )}
    </Box>
  );
}
