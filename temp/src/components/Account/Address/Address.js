import AddressCard from "./AddressCard";
// import "./Address.css";
import Button from "@mui/material/Button";
import { onSnapshot, collection } from "@firebase/firestore";
import address from "./Address.module.css";
import { useState, useEffect } from "react";
import AddAddress from "./AddAddress";
import { useUserContext } from "../../../context/userContext";
import { db } from "../../../firebase/fire";
import { query,orderBy } from "@firebase/firestore";
import { useUserInfo } from "../../../context/getUserAPI";
// import db from ../
// const DUMMY_DATA = [
//     {
//         name: 'Hai Dang',
//         location_detail: 'số ABC, ấp ABC',
//         location_1: 'Xã',
//         location_2: 'Huyện',
//         location_3: 'Tỉnh',
//         number: '0123456789',
//         defaultAddr: true
//     },
//     {
//         name: 'Hai Dang',
//         location_detail: 'KTX Khu A',
//         location_1: 'số ABC, ấp ABC',
//         location_2: 'Đông Hòa',
//         location_3: 'Dĩ An',
//         number: '0987654321',
//         defaultAddr: false
//     },
//     {
//         name: 'Hai Dang',
//         location_detail: 'KTX Khu A',
//         location_1: 'số ABC, ấp ABC',
//         location_2: 'Đông Hòa',
//         location_3: 'Dĩ An',
//         number: '0987654321',
//         defaultAddr: false
//     },
// ];

function Address() {
    // const {getAddress} = useUserContext;
    const [addPopup, setaddPopup] = useState(false);
    const [addr, setAddr] = useState([]);
    const { getAddress, addressOfUser, user } = useUserContext();
    const ctx = useUserContext();
    const {addressInfo}=useUserInfo();
    // console.log(ctx.getAddress());
    const [isLoading, setIsLoading] = useState(false);


    // console.log(getAddress(user));
    // console.log(addressOfUser);
    // const [init, setInit] = useState(true);
    // console.log(user===null);
    // console.log(init);
    // (()=>{
    //     if (init) {
    //     setInit(false);
    //     const address= getAddress();
    //     console.log(addressOfUser);
    //     console.log(address);
    //     console.log("SAJDHAKJ");
    // }
    // })()

    // const addressData = getAddress();
    // console.log(addressData);
    // addressData.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });
    // console.log(addressData);
    // console.log(addressData);
    // {
    //     addressData.map((doc) => {
    //         console.log(doc.data());
    //     });
    // }

    // function onAddHandler() {
    //     setaddPopup(false);
    // }

    return (
        <div className={address.UserAddress}>
            <h1>Địa chỉ</h1>
            <div className={address.MainContent}>
                <div className={address.addressInsideContent}>
                    <div className={address.buttonBar}>
                        <Button
                            variant="contained"
                            onClick={() => {
                                setaddPopup(true);
                            }}
                            className={address.addButton}
                        >
                            Thêm địa chỉ mới
                        </Button>
                    </div>
                    <div className={address.addressList}>
                        {addressInfo.map((doc) => {
                            return <AddressCard key={doc.id} data={doc} />;
                        })}
                    </div>
                </div>
            </div>
            {addPopup && (
                <AddAddress
                    onAdd={() => setaddPopup(false)}
                    onCancel={() => setaddPopup(false)}
                />
            )}
        </div>
    );
}
export default Address;
