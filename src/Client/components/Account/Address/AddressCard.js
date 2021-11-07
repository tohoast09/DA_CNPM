import React from "react";
import address from "./Address.module.css";
// import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap'

function AddressCard(props) {
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
            <div className={address.addressButton}>
                <button>
                    Đặt làm mặc định
                </button>
            </div>
        </div>
    );
}

export default AddressCard;
