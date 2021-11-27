import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FilterState } from '../stores/AppState';

function valuetext(value) {
  return `${value}đ`;
}
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 25,
    label: '250K',
  },
  {
    value: 50,
    label: '500K',
  },
  {
    value: 75,
    label: '750K',
  },
  {
    value: 100,
    label: '1M',
  }
];

export default function MinimumDistanceSlider() {
  const filterState=React.useContext(FilterState);
  const value1 = filterState.state.price;
  const setValue1 = filterState.setState;
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1((prev)=>{return {...prev,price:[Math.min(newValue[0], value1[1] ), value1[1]]};});
    } else {
      setValue1((prev)=>{return {...prev,price:[value1[0], Math.max(newValue[1], value1[0])]};});
    }
  };

  return (
    <>
    <div>từ <span style={{fontWeight:'bold'}}>{(value1[0]*10000).toLocaleString()}đ</span> đến <span style={{fontWeight:'bold'}}>{(value1[1]*10000).toLocaleString()}đ</span></div>
    <Box sx={{ width: 250, mt: 2 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        valueLabelDisplay="off"
        valueLabelFormat={val=><div>{(val*10000).toLocaleString()}đ</div>}
        orientation="horizontal"
        marks={marks}
        disableSwap
      />
    </Box>
    </>
  );
}
