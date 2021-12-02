import React, { useEffect, useState } from "react";
// import { useMemo } from "react";
import { Bar } from 'react-chartjs-2';
//import {CategoryScale} from 'react-chartjs-2';
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../firebase";
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
function getlevel(status) {
    if (status === "complete") {
        return 0;
    } else if (status === "preparing") {
        return 2;
    } else {
        return 1;
    }
}
var Mockdata = [];
var arr1 = [];
var arr2 = [];

const getOrder = async () => {
    const queryUsers = await getDocs(collection(db, "users"));
    await queryUsers.forEach(async (user) => {
        {
            await console.log("User: ", user.id, " => ", user.data());
            const queryOrders = await getDocs(collection(user.ref, "orders"));
            await queryOrders.forEach((order) => {
                //console.log("Order: ", order.id);
                const status = order.data().status;
                const orderID = order.id;
                const totalPay = order.data().totalPay;
                arr1.push(orderID);
                arr2.push(totalPay);


                order.data().books.map((book, index) => {
                    const newBook = {
                        id: orderID,
                        idx: index,
                        level: parseInt(getlevel(status)),
                        name: book.bookName,
                    };
                    Mockdata.push(newBook);
                    console.log("newPush: ", newBook);
                });
            });
        }
    });
};
const a1 = [1, 2, 3, 4];
const a2 = [10, 10, 30, 10];
const StatisticsRevenue = () => {

    const k = getOrder();


    return (
        <div>
            <h1>Bảng thống kê doanh thu</h1>
            {/* <Bar
                data={{
                    labels: a1,
                    datasets: [
                        {
                            label: 'Doanh Thu',
                            data: a2,
                            backgroundColor: [
                                'rgba(255, 205, 71, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 182, 71, 1)',
                            ],
                            borderWidth: 1,
                        },

                    ]
                }}
            ></Bar> */}

<Bar
            data = {{
                labels: arr1,
                datasets: [
                    {
                        label: 'Số tiền',
                        data: arr2,
                        backgroundColor:[
                            'rgba(255, 205, 71, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 182, 71, 1)',
                        ],
                        borderWidth: 1,
                        
                    },

                    
                ]
            }}
            width={300}
            height={100}
            options = {{
                maintainAspectRatio: true,
                
            }}
        ></Bar>
        </div>
    )
}

export default StatisticsRevenue