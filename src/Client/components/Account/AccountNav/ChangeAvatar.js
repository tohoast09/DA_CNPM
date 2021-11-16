import React from "react";
import style from "../Account.module.css";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

export default function ChangeAvatar() {
    return (
        <div className={style.ChangeAvatar}>
            <h1 className={style.avaChangeHeader}>Thay đổi ảnh đại diện</h1>
            <div className={style.avaChange}></div>
            <Button variant="contained">Chọn ảnh khác</Button>
            <div className={style.avaSlider}>
                <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                />
            </div>
            <Link to="/account/" className={style.avaChangeCancel}><Button variant="contained">Hủy</Button></Link>
        </div>
    );
}
