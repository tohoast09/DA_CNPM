import React from "react";
import address from "./Address.module.css";
import Button  from '@mui/material/Button';

function AddressCard(props) {
    var defaultAddress = (props.defaultAddr) ? address.defaultAddress : address.notDeafault;
    return (
        <div className={address.addressCard}>
            <div className={address.info}>
                <div className={address.addressName}>
                    <span>{`Tên: ${props.name}`}</span>
                </div>
                <div className={address.addressLocation}>
                    <span>{`${props.location_detail}, ${props.location_1}, ${props.location_2}, ${props.location_3}`}</span>
                </div>
                <div className={address.addressNumber}>
                    <span>{`Số điện thoại: ${props.number}`}</span>
                </div>
            </div>
            <div className={`${address.addressButton} ${defaultAddress}`}>
                <Button variant="text">
                    Đặt làm mặc định
                </Button>
            </div>
        </div>
    );
}

export default AddressCard;
