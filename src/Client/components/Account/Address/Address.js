import AddressCard from "./AddressCard";
// import "./Address.css";
import Button  from '@mui/material/Button';

import address from './Address.module.css'
import { useState } from 'react'
import AddAddress from "./AddAddress";

const DUMMY_DATA = [
    {
        name: 'Hai Dang',
        location_detail: 'số ABC, ấp ABC',
        location_1: 'Xã',
        location_2: 'Huyện',
        location_3: 'Tỉnh',
        number: '0123456789',
        defaultAddr: true
    },
    {
        name: 'Hai Dang',
        location_detail: 'KTX Khu A',
        location_1: 'số ABC, ấp ABC',
        location_2: 'Đông Hòa',
        location_3: 'Dĩ An',
        number: '0987654321',
        defaultAddr: false
    },
    {
        name: 'Hai Dang',
        location_detail: 'KTX Khu A',
        location_1: 'số ABC, ấp ABC',
        location_2: 'Đông Hòa',
        location_3: 'Dĩ An',
        number: '0987654321',
        defaultAddr: false
    },
];

function Address() {
    const [addPopup, setaddPopup] = useState(false);
    function popupHandler()
    {
        setaddPopup(true);
    }

    function onAddHandler(){
        setaddPopup(false);
    }

    function onCancelHandler(){
        setaddPopup(false);
    }

    return (
        <div className={address.UserAddress}>
            <h1>Địa chỉ</h1>
            <div className={address.MainContent}>
                <div className={address.addressInsideContent}>
                    <div className={address.buttonBar}>
                        <Button variant="contained"
                        onClick={popupHandler} 
                        className={address.addButton}>
                            Thêm địa chỉ mới
                        </Button>
                    </div>
                    <div className={address.addressList}>

                        {DUMMY_DATA.map((addressItem) => {
                            return (
                                <AddressCard
                                    // id={order.id}
                                    name={addressItem.name}
                                    number={addressItem.number}
                                    location_detail={addressItem.location_detail}
                                    location_1={addressItem.location_1}
                                    location_2={addressItem.location_2}
                                    location_3={addressItem.location_3}
                                    defaultAddr={addressItem.defaultAddr}
                                    // price={order.price}
                                    // status={order.status}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            {addPopup && <AddAddress onAdd={onAddHandler} onCancel={onCancelHandler}/>}
        </div>
    );
}
export default Address;
