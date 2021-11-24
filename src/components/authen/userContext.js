import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { auth, db } from "../../firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";
import { collection, getDocs, doc, addDoc, setDoc } from "firebase/firestore";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
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
            const resp = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            ).then((res) => {
                console.log(res.user.uid);
                // db.collection('test').doc("Xin_chao").set(res);
                const docRef = setDoc(doc(db, "users", res.user.uid), {
                    first: name,
                    last: lname,
                    email: email,
                    password: password,
                });
                // console.log(docRef.user.uid)
            });
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
            .then((res) => {
                alert("Login thanh cong");
                
            })
            .catch((err) => {
                alert("Login that cmn bai");
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

    const contextValue = {
        user,
        loading,
        emailError,
        passwordError,
        registerUser,
        signInUser,
        logoutUser,
        forgetPassword,
    };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
