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
import { useState, useContext } from "react";
import Paypal from "./Paypal";
import { useUserInfo } from "../../assets/firebase-data/getUserAPI";
import Loading from "../Loading";
import { set } from "../../redux/product-modal/productModalSlice";
import { VpnLock } from "@mui/icons-material";
import CartContext from "../../stores/CartContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router";
import BKWallet from "./BKWallet";
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

toast.configure();

export default function CardPay() {


  const {addressInfo, userInfo, loadingAdd, addOrder}=useUserInfo();
  const CrtCtx=useContext(CartContext);
  let default_add;
  if(addressInfo.length!==0){
    default_add=addressInfo[0].data;
  }
  else{
    default_add={
        name:'',
        phone:'',
        location_detail:'',
        location_3:'',
        location_2:'',
        location_1:'', 
    }
  }
  const initStateInfo={
    name:default_add.name,
    phone:default_add.phone,
    location_detail:default_add.location_detail,
    location_3:default_add.location_3,
    location_2:default_add.location_2,
    location_1:default_add.location_1, 
    method:'COD',
  } 

  const [Info, setInfo]= useState(initStateInfo);
  const [activeStep, setActiveStep] =useState(0);
  const [complete, setComplete]=useState(false);
  const classes = UseStyles();
  const navigate=useNavigate();

  console.log("AAAAAAA");

  // console.log(default_add);
  console.log("BBBB");

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
  
  const HandleSubmit=async (event)=>{
    event.preventDefault();
    console.log(Info);
    if(activeStep==steps.length-1){
      try{
        await addOrder(Info);
        CrtCtx.clearCart();

        toast.info('Đặt hàng thành công');
      }
      catch(err){
        toast.error('Đặt hàng thất bại');
      }
    }
    else{
      handleNext();
    }

  }

  const onSuccessPay = ()=>{
    toast.info('Thanh toán thành công');
    setComplete(true);

  }

  const onErrorPay= ()=>{
    toast.error('Thanh toán thất bại')
  }

  const onErrorNotEnoughPay= ()=>{
    toast.error('Bạn không đủ tiền trong ví')
  }

  const getForm = () => {
    if (activeStep === 0) {
      return (
        <form className={classes.root} onSubmit={HandleSubmit}>
          <TextField label="Họ và tên" required variant="outlined" onChange={HandleChange} name='name'  value={Info.name} />
          <TextField label="Số điện thoại" required variant="outlined" onChange={HandleChange} name='phone'  value={Info.phone} type='number'/>
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
          <TextField required label="Địa chỉ chi tiết" variant="outlined" onChange={HandleChange} name='location_detail'  value={Info.location_detail}/>
          <TextField required label="Phường/Xã" variant="outlined" onChange={HandleChange} name='location_3'  value={Info.location_3}/>
          <TextField required label="Quận/Huyện" variant="outlined" onChange={HandleChange} name='location_2' value={Info.location_2}/>
          <TextField required label="Thành phố/Tỉnh" variant="outlined" onChange={HandleChange} name='location_1'  value={Info.location_1}/>
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

            <Button type='submit' disabled={(Info.method==="Paypal"&&!complete) || (Info.method==="ViBK"&&!complete)}>
              {activeStep === steps.length - 1 ? "Xác nhận" : "Tiếp theo"}
            </Button>
          </Box>
          {(Info.method==="Paypal"&&complete===false)&&<Paypal onSuccess={onSuccessPay} onError={onErrorPay}/>}
          {(Info.method==="ViBK"&&complete===false)&&<BKWallet onSuccess={onSuccessPay} onError={onErrorPay} onErrorNotEnough={onErrorNotEnoughPay}/>}

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

        <React.Fragment>
          <Typography sx={{ m: 2 }}>{steps[activeStep]}</Typography>
          {getForm()}
          
        </React.Fragment>
    </Box>
  );
    
};
