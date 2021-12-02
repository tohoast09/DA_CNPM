import { db } from '../../../firebase';
import {
    collection,
    getDocs
} from 'firebase/firestore';

function getlevel(status) {
    if (status === "complete") {
        return 0;
    } else if (status === "preparing") {
        return 2;
    } else {
        return 1;
    }
}

var CusDatabase = [];

const getCustomer = async () => {
    const queryCustomers = await getDocs(collection(db, "users"));
    await queryCustomers.forEach(async (cus) => {
        var total = 0;
        var OrderList = [];
        const queryOrders = await getDocs(collection(cus.ref, "orders"));
        await queryOrders.forEach((order) => {
            total += order.data().totalPay;
            var timestamp = order.data().createAt;
            var date = new Date(timestamp.seconds*1000);
            const newOrder = {
                code:       order.id,
                date:       date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
                            +" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
                price:      order.data().totalPay,
                address:    order.data().location_detail + ", " + order.data().location_3 
                            + ", " + order.data().location_2 + ", " + order.data().location_1,
                level:      parseInt(getlevel(order.data().status))
            }
            OrderList.push(newOrder);
        });
        const newCustomer = {
            id:     cus.id,
            name:   cus.data().name,
            phone:  cus.data().phone,
            total:  total,
            gender: cus.data().gender,
            bdate:  cus.data().bdate,
            email:  cus.data().email,
            wallet: cus.data().wallet,
            orders: OrderList     
        }
        CusDatabase.push(newCustomer);
        console.log("newCustomerPush: ", newCustomer);
    });
}

export const GetCustomer = getCustomer();
export default CusDatabase;


/*import { v4 as uuidv4 } from "uuid";

const CusDatabase = [
    {
        stt: uuidv4(),
        id: "000001",
        name: "Nguyễn Văn Anh",
        phone: "0911111111",
        total: 310000,
        sex: 0,             // Nam
        bdate: "01/01/2001",
        email: "nguyena@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000002",
        name: "Lê Văn Bình",
        phone: "0900000000",
        total: 90000,
        sex: 0,             // Nam
        bdate: "01/01/2001",
        email: "leb@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000003",
        name: "Trần Hoàng Công",
        phone: "0356789012",
        total: 660000,
        sex: 0,             // Nam
        bdate: "01/01/2001",
        email: "tranc@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000004",
        name: "Đỗ Thị Duyên",
        phone: "0864213579",
        total: 50000,
        sex: 1,             // Nữ
        bdate: "01/01/2001",
        email: "dod@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000005",
        name: "Hoàng Mỹ Dung",
        phone: "0511223344",
        total: 300000,
        sex: 1,             // Nữ
        bdate: "01/01/2001",
        email: "hoangmye@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000006",
        name: "Mai Văn Giang",
        phone: "0712458307",
        total: 410000,
        sex: 0,             // Nam
        bdate: "01/01/2001",
        email: "maig@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000007",
        name: "Đoàn Thanh Tâm",
        phone: "0907512568",
        total: 230000,
        sex: 1,             // Nữ
        bdate: "01/01/2001",
        email: "doantam@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000008",
        name: "Lâm Cao Đức",
        phone: "0915678423",
        total: 120000,
        sex: 0,             // Nam
        bdate: "01/01/2001",
        email: "lamduc@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000009",
        name: "Đào Minh Trí",
        phone: "0758946178",
        total: 150000,
        sex: 0,             // Nam
        bdate: "01/01/2001",
        email: "daotri@gmail.com"
    },
    {
        stt: uuidv4(),
        id: "000010",
        name: "Huỳnh Ngọc",
        phone: "0547823548",
        total: 100000,
        sex: 1,             // Nữ
        bdate: "01/01/2001",
        email: "huynhngoc@gmail.com"
    }
];

export default CusDatabase;*/