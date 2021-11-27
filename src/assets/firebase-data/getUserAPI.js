import { onSnapshot } from '@firebase/firestore';
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useUserContext } from '../../stores/AppState';
import {orderBy, query, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from '@firebase/firestore';
import { db } from '../../firebase';
import CartContext from '../../stores/CartContext';
import Loading from '../../components/Loading';


// à đúng r sorry 
const GetUserContext=React.createContext();




export function useUserInfo(){
    return useContext(GetUserContext);
}

export default function GetUserProvider(props) {
    const [addressInfo, setAdd]=useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [orderId, setOrderId] = useState("");
    const [orderDetail, setOrderDetail] = useState({});

    // const [notiInfo, setNoti] = useState([]);
    const [isLoading, setLoading]=useState(true);
    const [loadingAdd, setLoadingAdd]=useState(true);
    const [loadingInfo, setLoadingInfo]=useState(true);
    const [loadingOrder, setLoadingOrder]=useState(true);
    
    const [orders, setOrders] = useState([]);

    // const [tempcart, setTempcart]=useState([]);
    const {user} = useUserContext();
    const CrtCtx=useContext(CartContext);


    const getUserInfo = () => {
        return onSnapshot(doc(db, "users/" + user.uid), (doc) => {
            setUserInfo(doc.data());
            // console.log("userInfo: ", userInfo);
            // console.log("userInfo: ", userInfo.name);
            // console.log("userInfo: ", userInfo.email);
            // console.log("userInfo: ", userInfo.phone);
            // console.log("userInfo: ", userInfo.gender);
            // console.log("userInfo: ", userInfo.bdate);
            setLoadingInfo(false);
        });
    };


    const updateUserInfo = async (data) => {
        await updateDoc(doc(db, "users/" + user.uid), {
            name: data.name,
            phone: data.phone,
            gender: data.gender,
            bdate: data.bdate,
        });
        // await console.log("userInfo updated: ", data);
    };


    const getAddress= ()=>{
        return onSnapshot(query(
            collection(db, "users/"+ user.uid + "/address"),
            orderBy("defaultAddr", "desc")), (snapshot)=>{
                const addr=[];
                snapshot.docs.map(doc=>{ 
                    addr.push({id: doc.id, data: doc.data()});
                });
                setAdd(addr);

                setLoadingAdd(false);
                console.log("IIIIIIIII");
        });
    }


    const getOrders = () => {
        return onSnapshot(
            collection(db, "users/" + user.uid + "/orders"),
            (snapshot) => {
                console.log('DAMN WHYY');
                const ords = [];
                snapshot.docs.map((doc) => { 
                    ords.push({ id: doc.id, data: doc.data() });
                });
                setOrders(ords);
                console.log(ords);
                setLoadingOrder(false);
                console.log("NOOOOOOOO");
            }
        );
    };

    const getOrderDetail = (orderId) => {
        var i = 0;
        for (i = 0; i < orders.length; i++) {
            if (orders[i].id === orderId) setOrderDetail(orders[i]);
            console.log(orderDetail);
        }
    };

    // const getNoti=()=>{
    //     return onSnapshot(
    //         collection(db, "users/"+ user.uid + "/noti"), (snapshot)=>{
    //         const noti=[];
    //         snapshot.docs.map(doc=>{
    //             //do with each noti
    //             noti.push({id: doc.id, data: doc.data()});
    //         });
    //         setNoti(noti);
    //     });
    // }



    // const getTempCart=()=>{
    //     return onSnapshot(
    //         collection(db, "users/"+ user.uid + "/tempcart"), (snapshot)=>{
    //         const tempcart=[];
    //         snapshot.docs.map(doc=>{
    //             //do with each noti
    //             tempcart.push(
    //                 {
    //                     ...doc.data(),
    //                 }
    //             );
    //         });
    //         setTempcart(tempcart);
    //     });
    // }

    // const UpdateTempCart= async ()=>{
    //     const CrtCtx=useContext(CartContext);
    //     const cart=CrtCtx.cart;
    //     const promises=[];
    //     cart.map(item=>{
    //         const payload={
    //             id:item.id,
    //             price:item.price,
    //             promotion:item.promotion,
    //             name: item.title,
    //             price: item.price,
    //             quantity: item.quantity,
    //             img:item.img
    //         }
    //         promises.push(addDoc(collection(db, "users/" + user.uid + "/tempcart"), payload))
    //     })
    //     try{
    //         await Promise.all(promises);
    //     }
    //     catch (err){
    //         console.log(err);
    //     }
    // }


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

    const delAddress = async (addressID) => {
        await deleteDoc(doc(db, "users/" + user.uid + "/address", addressID));
    };

    const addDays= (date, days)=>{
        let result=new Date(date);
        result.setDate(date.getDate()+days);
        return result;
    }
    const addOrder = async (info)=>{
        const booklist=CrtCtx.cart.map(item=>{
            const book={
                id: item.id,
                price: item.price*(1-item.promotion/100),
                img: item.img,
                quantity: item.quantity,
                bookName: item.name,
            }
            return book;
        })
        const payload={
            ...info,
            totalPay: CrtCtx.totalPay,
            createAt: new Date(),
            books: booklist,
            status: 'unconfirmed'
        }
        payload['deliveryAt']= addDays(payload.createAt,4);

        console.log("Hello");
        console.log(payload);
        await addDoc(collection(db, "users/" + user.uid + "/orders"), payload);
    }

    const payByWallet= async (value)=>{
        const user_wallet=Number(userInfo.wallet);
        if(value>userInfo.wallet){
            throw ('Not enough money');
        }
        else{
            await updateDoc(doc(db, "users/", user.uid),{
                wallet: user_wallet-value,
            });
        }
    }

    const addWallet= async (value)=>{
        const user_wallet=Number(userInfo.wallet);
        await updateDoc(doc(db, "users/", user.uid),{
                wallet: user_wallet+value,
            });
    }
    useEffect(async () => {
        setLoading(true);
        const result = await Promise.all([
            getAddress(),
            getOrders(),
            getUserInfo(),
        ]);
        setLoading(false);

        console.log("Helo World");
        return ()=>{
        }
    }, [])

    const UserData={
        addressInfo,
        loadingAdd,
        loadingInfo,
        loadingOrder,
        orders,
        orderId,
        orderDetail,
        userInfo,
        getOrderDetail,
        addAddress,
        setDefaultAddress,
        delAddress,
        updateUserInfo,
        addOrder,
        setOrderId,
        payByWallet,
        addWallet,
    }

    return (
        <GetUserContext.Provider value={UserData}>
            {/* {loadingOrder?  <Loading loading={(loadingOrder)}/>: props.children}  */}
            {(isLoading||loadingOrder||loadingInfo||loadingAdd)? <Loading loading={(isLoading||loadingOrder||loadingInfo||loadingAdd)}/>: props.children}
        </GetUserContext.Provider>
    )
}
