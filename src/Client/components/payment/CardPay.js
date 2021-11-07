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

const steps = [
  "Thông tin cá nhân",
  "Địa chỉ nhận hàng",
  "Phương thức thanh toán"
];

const theme = createTheme();
const UseStyle = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(2)
    }
  }
});

export default function CardPay() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const classes = UseStyle();
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const getForm = () => {
    if (activeStep === 0) {
      return (
        <form className={classes.root}>
          <TextField label="Họ và tên" variant="outlined" />
          <TextField label="Số điện thoại" variant="outlined" />
        </form>
      );
    } else if (activeStep === 1) {
      return (
        <form className={classes.root}>
          <TextField label="Số nhà" variant="outlined" />
          <TextField label="Đường" variant="outlined" />
          <TextField label="Phường/Xã" variant="outlined" />
          <TextField label="Quận/Huyện" variant="outlined" />
          <TextField label="Thành phố/Tỉnh" variant="outlined" />
        </form>
      );
    } else {
      return (
        <form className={classes.root}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Phương thức</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="COD"
              />
              <FormControlLabel value="male" control={<Radio />} label="Momo" />
              <FormControlLabel value="other" control={<Radio />} label="Ví" />
            </RadioGroup>
          </FormControl>
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

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
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

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Thanh toán" : "Tiếp theo"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
