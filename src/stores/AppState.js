import { createContext, useState, useContext, useEffect, useRef } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import Loading from "../components/Loading";
import { useNavigate } from "react-router";
import { onSnapshot } from "@firebase/firestore";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authloading, setLoading] = useState(false);
    const [adminLoading, setLoadingAdmin] = useState(true);
    const [loading, setAuthStateLoading] = useState(true);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isAdmin, setAdmin] = useState(false);
    useEffect(() => {
        setAuthStateLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            setUser(res);
            if (res) {
                setLoadingAdmin(true);

                onSnapshot(doc(db, "users/" + res.uid), (doc) => {
                    console.log(doc.data().isAdmin);
                    setAdmin(doc.data().isAdmin);
                    setLoadingAdmin(false);
                });
            } else {
                setLoadingAdmin(false);
            }
            setAuthStateLoading(false);

            setEmailError("");
            setPasswordError("");
        });
        return unsubscribe;
    }, []);

    const registerUser = async (name, email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password).then(
                (res) => {
                    console.log(res.user.uid);
                    const docRef = setDoc(doc(db, "users", res.user.uid), {
                        name: name,
                        email: email,
                        phone: "",
                        password: password,
                        wallet: 0,
                    });
                }
            );
            navigate("/");
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

    const signInUser = async (email, password) => {
        //
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);

            navigate(-1);
        } catch (err) {
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
        }
        setLoading(false);
    };
    const logoutUser = async () => {
        ///
        setLoading(true);
        try {
            await signOut(auth);
            // setUser(auth.currentUser);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    const forgetPassword = (email) => {
        //
        return sendPasswordResetEmail(auth, email);
    };

    // const changeInfo = (value) => {
    // };

    // const changePassword = (password) => {
    //     return user.updatePassword(password);
    // };

    const contextValue = {
        user,
        isAdmin,
        loading,
        emailError,
        passwordError,
        authloading,
        adminLoading,
        setEmailError,
        setPasswordError,
        registerUser,
        signInUser,
        logoutUser,
        forgetPassword,
    };
    return (
        <UserContext.Provider value={contextValue}>
            {loading || adminLoading ? <Loading loading={loading} /> : children}
        </UserContext.Provider>
    );
};

export const FilterState = createContext({
    state: {},
    searchRef: null,
    changeFilterState: () => {},
    setState: () => {},
    clearState: () => {},
});

export function FilterStateProvider(props) {
    const initState = {
        title: "",
        category: [],
        tag: [],
        price: [0, 100],
    };
    const [filterState, setFilterState] = useState(initState);
    const context = {
        state: filterState,
        searchRef: useRef(),
        changeFilterState: changeFilterStateHandler,
        setState: setFilterState,
        clearState: clearStateHandler,
    };

    function changeFilterStateHandler(type, value) {
        const newState = { ...initState };
        if (type === "title") newState[type] = value;
        else {
            newState[type] = [value];
            if (context.searchRef.current !== null)
                context.searchRef.current.value = "";
        }
        setFilterState(newState);
    }

    function clearStateHandler() {
        setFilterState(initState);
        if (context.searchRef.current !== null)
            context.searchRef.current.value = "";
    }

    return (
        <FilterState.Provider value={context}>
            {props.children}
        </FilterState.Provider>
    );
}
