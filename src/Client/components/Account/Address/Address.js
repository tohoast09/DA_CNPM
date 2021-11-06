import AddressCard from "./AddressCard";
import "./Address.css";
import { Button } from "reactstrap";

const DUMMY_DATA = [
    {
        name: 'Hai Dang',
        location_detail: 'số ABC, ấp ABC',
        location_1: 'Xã',
        location_2: 'Huyện',
        location_3: 'Tỉnh',
        number: '0123456789',
        state: true
    },
    {
        name: 'Hai Dang',
        location_detail: '',
        location_1: 'số ABC, ấp ABC',
        location_2: 'Xã',
        location_3: 'Huyện',
        number: 'Tỉnh',
        state: true
    },
    {
        name: 'Hai Dang',
        location_detail: '',
        location_1: 'số ABC, ấp ABC',
        location_2: 'Xã',
        location_3: 'Huyện',
        number: 'Tỉnh',
        state: true
    },
];

function Address() {
    return (
        <div className="UserAddress">
            <h1>Địa chỉ</h1>
            <div className="MainContent">
                <div className="addressInsideContent">
                    <div className='buttonBar'>
                        <Button>
                            Thêm địa chỉ mới
                        </Button>
                    </div>
                    <div className="addressList">

                        {DUMMY_DATA.map((address) => {
                            return (
                                <AddressCard
                                    // id={order.id}
                                    name={address.name}
                                    number={address.number}
                                    location_detail={address.location_detail}
                                    location_1={address.location_1}
                                    location_2={address.location_2}
                                    location_3={address.location_3}
                                    // price={order.price}
                                    // status={order.status}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Address;
