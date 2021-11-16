import OrderCard from "./NotiCard";
// import "./Noti.css";
import noti from './Noti.module.css'
import account from '../Account.module.css'

const DUMMY_DATA = [
    {
        id: "123456789",
        date: "01/01/2021",
        description: "Some description.",
        status: 'read'
    },
    {
        id: "123456789",
        date: "01/01/2021",
        description: "Some description.",
        status: 'unread'
    },
    {
        id: "123456789",
        date: "01/01/2021",
        description: "Some description.",
        status: 'read'
    },
];

function Noti() {
    return (
        <div className={noti.UserNoti}>
            <h1>Thông báo</h1>
            <div className={account.MainContent}>
                <div className={noti.notiInsideContent}>
                    <div className={noti.notiList}>

                        {DUMMY_DATA.map((order) => {
                            return (
                                <OrderCard
                                    // id={order.id}
                                    date={order.date}
                                    description={order.description}
                                    status={order.status}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Noti;
