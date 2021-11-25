import { onSnapshot } from "@firebase/firestore";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { useUserContext } from "./userContext";
import {
    orderBy,
    setDoc,
    query,
    collection,
    addDoc,
    getDocs,
    getDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "@firebase/firestore";
import { db } from "../firebase/fire";

const GetUserContext = React.createContext();

export function useUserInfo() {
    return useContext(GetUserContext);
}

export default function GetUserProvider(props) {
    const [addressInfo, setAdd] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [notiInfo, setNoti] = useState([]);
    const [orderInfo, SetOrder] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const { user } = useUserContext();
    const [orders, setOrders] = useState([])

    const getUserInfo = () => {
        return onSnapshot(doc(db, "users/" + user.uid), (doc) => {
            setUserInfo(doc.data());
            // console.log("userInfo: ", userInfo);
            // console.log("userInfo: ", userInfo.name);
            // console.log("userInfo: ", userInfo.email);
            // console.log("userInfo: ", userInfo.phone);
            // console.log("userInfo: ", userInfo.gender);
            // console.log("userInfo: ", userInfo.bdate);
        });
    };

    const updateUserInfo = async (data) => {
        await setDoc(doc(db, "users/" + user.uid), {
            name: data.name,
            phone: data.phone,
            gender: data.phone,
            bdate: data.bdate
        });
    };

    const getOrder = () => {
        return onSnapshot(collection(db, "users/" + user.uid + "/orders"),
        (snapshot) =>{
            const ords = [];
                snapshot.docs.map((doc) => {
                    ords.push({ id: doc.id, data: doc.data() });
                });
                setOrders(ords);
                console.log("Orders: ",ords);
        })
    }

    const getAddress = () => {
        return onSnapshot(
            query(
                collection(db, "users/" + user.uid + "/address"),
                orderBy("defaultAddr", "desc")
            ),
            (snapshot) => {
                const addr = [];
                snapshot.docs.map((doc) => {
                    addr.push({ id: doc.id, data: doc.data() });
                });
                setAdd(addr);
            }
        );
    };

    const getCart = () => {
        return onSnapshot(
            collection(db, "users/" + user.uid + "/cart"),
            (snapshot) => {
                const order = [];
                snapshot.docs.map((doc) => {
                    //doc.id is order ID
                    console.log(doc.data());
                    const order_item = {
                        ...doc.data(),
                        id: doc.id,
                    };
                    order.push(order_item);
                });
                console.log(order[0]);
                SetOrder(order);
            }
        );
    };

    const getNoti = () => {
        return onSnapshot(
            collection(db, "users/" + user.uid + "/noti"),
            (snapshot) => {
                const noti = [];
                snapshot.docs.map((doc) => {
                    //do with each noti
                    noti.push({ id: doc.id, data: doc.data() });
                });
                setNoti(noti);
            }
        );
    };

    const addAddress = async (value) => {
        await addDoc(collection(db, "users/" + user.uid + "/address"), {
            name: value.name,
            phone: value.phone,
            location_1: value.location_1,
            location_2: value.location_2,
            location_3: value.location_3,
            location_detail: value.location_detail,
            defaultAddr: value.defaultAddr,
        });
    };

    const setDefaultAddress = async (addressID) => {
        const col = await getDocs(
            collection(db, "users/" + user.uid + "/address")
        );
        col.forEach((doc) => {
            updateDoc(doc.ref, {
                defaultAddr: false,
            });
        });
        await updateDoc(doc(db, "users/" + user.uid + "/address", addressID), {
            defaultAddr: true,
        });
    };

    const delAddress = (addressID) => {
        deleteDoc(doc(db, "users/" + user.uid + "/address", addressID));
    };

    useEffect(async () => {
        setLoading(true);
        const result = await Promise.all([
            getAddress(),
            getCart(),
            getUserInfo(),
            getOrder(),
        ]);
        setLoading(false);

        console.log("Get Add effect");
        console.log(addressInfo);
        return () => {};
    }, []);

    const UserData = {
        addressInfo,
        addAddress,
        setDefaultAddress,
        delAddress,
        userInfo,
        orders,
    };

    return (
        <GetUserContext.Provider value={UserData}>
            {props.children}
        </GetUserContext.Provider>
    );
}
