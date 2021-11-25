import AddressCard from "./AddressCard";
import Button from "@mui/material/Button";
import address from "./Address.module.css";
import { useState } from "react";
import AddAddress from "./AddAddress";
import { useUserContext } from "../../../context/userContext";
import { useUserInfo } from "../../../context/getUserAPI";

function Address() {
    // const {getAddress} = useUserContext;
    const [addPopup, setaddPopup] = useState(false);
    // const [addr, setAddr] = useState([]);
    // const { getAddress, addressOfUser, user } = useUserContext();
    // const ctx = useUserContext();
    const { addressInfo } = useUserInfo();

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
