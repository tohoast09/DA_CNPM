import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { auth, db } from "../firebase/fire";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updatePassword
} from "firebase/auth";
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

import { onSnapshot } from "@firebase/firestore";
const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // const addressOfUser = {};
    const [addressOfUser, setAddressOfUser] = useState([]);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
            console.log(res);
            setEmailError("");
            setPasswordError("");
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // const registerUser = (email, name, lname, password) => {

    //     setLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(() => {
    //             return updateProfile(auth.currentUser, {
    //                 displayName: name,
    //             });
    //         })
    //         .then((res) => console.log(res))
    //         .catch((err) => {
    //             switch (err.code) {
    //                 case "auth/email-already-in-use":
    //                     setEmailError("Email đã được sử dụng");
    //                     break;
    //                 case "auth/invalid-email":
    //                     setEmailError("Email không hợp lệ");
    //                     break;
    //                 case "auth/weak-password":
    //                     setPasswordError("Mật khẩu quá yếu");
    //                     break;
    //                 default:
    //                     setEmailError(err.message);
    //             }
    //         })
    //         .finally(() => setLoading(false));
    // };
    const registerUser = async (email, name, lname, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password).then(
                (res) => {
                    console.log(res.user.uid);
                    // db.collection('test').doc("Xin_chao").set(res);
                    const docRef = setDoc(doc(db, "users", res.user.uid), {
                        name: name,
                        lname: lname,
                        email: email,
                        password: password,
                    });
                }
            );
        } catch (err) {
            switch (err.code) {
                case "auth/email-already-in-use":
                    setEmailError("Email đã được sử dụng");
                    break;
                case "auth/invalid-email":
                    setEmailError("Email không hợp lệ");
                    break;
                case "auth/weak-password":
                    setPasswordError("Mật khẩu quá yếu");
                    break;
                default:
                    setEmailError(err.message);
            }
        }
    };

    const signInUser = (email, password) => {
        //
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                        setEmailError("Email không hợp lệ");
                        break;

                    case "auth/user-disable":
                        setEmailError("Người dùng bị vô hiệu hóa");
                        break;

                    case "auth/user-not-found":
                        setEmailError("Không tìm thấy người dùng");
                        break;
                    case "auth/wrong-password":
                        setPasswordError("Sai mật khẩu");
                        break;
                    default:
                        setEmailError(err.message);
                }
            })
            .finally(() => setLoading(false));
    };
    const logoutUser = () => {
        ///
        signOut(auth);
    };

    const forgetPassword = (email) => {
        //
        return sendPasswordResetEmail(auth, email);
    };

    const changeInfo = (value) => {
        //get user id
        //set data cho cái id đó
    };

    const changePassword = (password) => {
        //get user id,
        //idk change password manaul or use firebase
        return user.updatePassword(password);
    };


    const contextValue = {
        user,
        loading,
        emailError,
        passwordError,
        setEmailError,
        setPasswordError,
        registerUser,
        signInUser,
        logoutUser,
        forgetPassword,
        changeInfo,
        changePassword,
    };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
