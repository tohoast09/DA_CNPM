import { onSnapshot } from '@firebase/firestore';
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useUserContext } from './userContext';
import {orderBy, query, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from '@firebase/firestore';
import { db } from '../firebase/fire';

const GetUserContext=React.createContext();




export function useUserInfo(){
    return useContext(GetUserContext);
}

export default function GetUserProvider(props) {


    const [addressInfo, setAdd]=useState([]);
    const [notiInfo, setNoti]=useState([]);
    const [orderInfo, SetOrder]=useState([]);
    const [isLoading, setLoading]=useState(false);
    const {user} = useUserContext();

    const getAddress= ()=>{
        return onSnapshot(query(
            collection(db, "users/"+ user.uid + "/address"),
            orderBy("defaultAddr", "desc")), (snapshot)=>{
            const addr=[];
            snapshot.docs.map(doc=>{ 
                addr.push({id: doc.id, data: doc.data()});
            });
            setAdd(addr);
        });
    }

    const getCart=()=>{
        return onSnapshot(
            collection(db, "users/"+ user.uid + "/cart"), (snapshot)=>{
                //get order
                const order=[];
                snapshot.docs.map(doc=>{
                    //doc.id is order ID
                    console.log(doc.data());
                    const order_item={
                        ...doc.data(),
                        id: doc.id,

                    }
                    order.push(order_item);
                });
                console.log(order[0]);
                SetOrder(order);
                });
    }

    const getNoti=()=>{
        return onSnapshot(
            collection(db, "users/"+ user.uid + "/noti"), (snapshot)=>{
            const noti=[];
            snapshot.docs.map(doc=>{
                //do with each noti
                noti.push({id: doc.id, data: doc.data()});
            });
            setNoti(noti);
        });
    }

    const AddAddress=()=>{

    }


    const updateAddress = async (option, value) => {
        if (option === "delete") {
        }
        if (option === "add") {
            if (option === "add") {
                await addDoc(collection(db, "users/" + user.uid + "/address"), {
                    name: value.name,
                    phone: value.phone,
                    location_1: value.location_1,
                    location_2: value.location_2,
                    location_3: value.location_3,
                    location_detail: value.location_detail,
                    defaultAddr: value.defaultAddr,
                });
            }
        }
        if (option === "setDefault") {
        }
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
        const result=await Promise.all([getAddress(), getCart()]);
        setLoading(false);

        console.log("Get Add effect");
        console.log(addressInfo);
        return ()=>{
        }
    }, [])

    const UserInfo={
        addressInfo,
        updateAddress,
        setDefaultAddress,
        delAddress,

    }

    return (
        <GetUserContext.Provider value={UserInfo}>
            {props.children}
        </GetUserContext.Provider>
    )
}
