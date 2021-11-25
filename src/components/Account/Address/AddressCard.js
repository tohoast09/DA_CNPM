import React, { useState } from "react";
import address from "./Address.module.css";
import Button from "@mui/material/Button";
import { useUserContext } from "../../../context/userContext";
import { useUserInfo } from "../../../context/getUserAPI";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function AddressCard(props) {
    const { setDefaultAddress, delAddress } = useUserInfo();
    const [useFunc, setUseFunc] = useState("");
    const setDefault = () => {
        setDefaultAddress(props.data.id);
        setUseFunc(true);
    };

    const delAddr = () => {
        delAddress(props.data.id);
        setUseFunc(true);
    };
    return (
        <div className={address.addressCard}>
            <div className={address.info}>
                <div className={address.addressName}>
                    <span>{`Tên: ${props.data.data.name}`}</span>
                    {props.data.data.defaultAddr && (
                        <div className={address.defaultCheck}>
                            <div>
                                <CheckCircleOutlineIcon className={address.defaultIcon}/>
                                <span>Địa chỉ mặc định</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={address.addressLocation}>
                    <span>{`${props.data.data.location_detail}, ${props.data.data.location_3}, ${props.data.data.location_2}, ${props.data.data.location_1}`}</span>
                </div>
                <div className={address.addressNumber}>
                    <span>{`Số điện thoại: ${props.data.data.phone}`}</span>
                </div>
            </div>
            {!props.data.data.defaultAddr && (
                <div className={`${address.addressButton} `}>
                    <Button
                        onClick={setDefault}
                        variant="text"
                        className={address.chooseDefault}
                    >
                        Đặt làm mặc định
                    </Button>
                    <Button
                        onClick={delAddr}
                        variant="text"
                        className={address.delAddr}
                    >
                        Xóa
                    </Button>
                </div>
            )}
        </div>
    );
}

export default AddressCard;
