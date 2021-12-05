import React, { Component } from "react";
import ReportData from "./mockdata/MockReport";
import { db } from "../../firebase";
import StatisticsRevenue from "./mockdata/StatisticsRevenue"
import {
    collection,
    deleteDoc,
    getDocs,
    updateDoc,
    getDoc,
    query,
    orderBy,
    doc,
    addDoc,
    setDoc,
} from "firebase/firestore";
class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: ReportData,
        };
    }

    getOrder = async () => {
        // const users = await collection(db, "users");
        // console.log(users);
        // console.log(users.docs)
        // const userList=getDocs(users);
        // await userList.map(user=>console.log(user.data()));
        // await console.log(users);
        const queryUsers = await getDocs(collection(db, "users"));
        await queryUsers.forEach(async (user) => {
            {
                await console.log("User: ", user.id, " => ", user.data());
                const queryOrders = await getDocs(
                    collection(user.ref, "orders")
                );
                await queryOrders.forEach((order) => {
                    //console.log("Order: ", order.id);

                    
                        order
                            .data()
                            .books.map((book) => console.log(book.bookName))                    

                });
            }
        });
    };

    renderReport = () => {
        let { reports } = this.state;
        return reports.map((report, index) => {
            return (
                <tr>
                    <td style={{ width: "10%" }} className="text-center">
                        {index + 1}
                    </td>
                    <td style={{ width: "50%" }} className="text-left">
                        {report.title}
                    </td>
                    <td style={{ width: "20%" }} className="text-center">
                        {report.update}
                    </td>
                    <th style={{ width: "20%" }} className="text-center">
                        <a href="https://drive.google.com/file/d/17_saZOXJPa-9GyriqJ-t69eLvzSSOiqZ/view?usp=sharing">
                            Tải về
                        </a>
                    </th>
                    
                </tr>
            );
        });
    };

    render() {
        //this.getOrder();
        return (
            <div className="container">
                <div className="page-header">
                    <h1>Doanh thu</h1>
                </div>
                <br></br>
                <table className="table table-hover">
                    <thead>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th style={{ width: "50%" }} className="text-center">
                            Nội dung
                        </th>
                        <th style={{ width: "20%" }} className="text-center">
                            Ngày cập nhật
                        </th>
                        <th style={{ width: "20%" }} className="text-center">
                            Tải về
                        </th>
                    </thead>
                    <tbody>{this.renderReport()}</tbody>
                </table>
                <StatisticsRevenue></StatisticsRevenue>
            </div>
        );
    }
}

export default HomeAdmin;
