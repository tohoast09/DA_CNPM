import {createContext, useState, useContext, useEffect, useRef} from 'react'
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
import { db, auth } from '../firebase';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router';
import { set } from '../redux/product-modal/productModalSlice';
const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const navigate=useNavigate();
    const [user, setUser] = useState(null);
    const [authloading, setLoading] = useState(false);
    const [loading, setAuthStateLoading] = useState(true);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        setAuthStateLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            setUser(res);

            setAuthStateLoading(false);

            setEmailError("");
            setPasswordError("");
        });
        return unsubscribe;
    }, []);

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
        navigate('/');
    };

    const signInUser = async (email, password) => {
        //
        setLoading(true);
        try{
            await signInWithEmailAndPassword(auth, email, password);
            // setUser(auth.currentUser);// thay lam gi the em cũng ép biết nữa, meet ko, em nói cho
            navigate(-1);
        }
        catch (err){
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
        try{
            await signOut(auth);
            // setUser(auth.currentUser);
            navigate('/');

        }
        catch (err){
            console.log(err);
        }
        setLoading(false);

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
        authloading,
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
            {loading?
            <Loading loading={loading}/>
            :
            children}
        </UserContext.Provider>
    );
};



export const FilterState=createContext({
    state: {},
    searchRef: null,
    changeFilterState: ()=>{},
    setState: ()=>{},
    clearState: ()=>{}
});


export function FilterStateProvider(props){
    const initState= {
        title:"",
        category: [],
        color: [],
        size: []
    }
    const [filterState, setFilterState]=useState(initState)

    const context={
        state:filterState,
        searchRef: useRef(),
        changeFilterState:changeFilterStateHandler,
        setState: setFilterState,
        clearState: clearStateHandler
    };

    function changeFilterStateHandler(type,value){
        const newState= {...initState};
        if (type==='title') newState[type]=value;
        else {
            newState[type]=[value];
            if (context.searchRef.current!==null) context.searchRef.current.value="";
        }
        setFilterState(newState);
    }
    
    function clearStateHandler(){
        setFilterState(initState);
        if (context.searchRef.current!==null) context.searchRef.current.value="";
    }
    //sao rồi,  uuủa3  la5 v 
    //export cái search hay gì chưa
    return(
        <FilterState.Provider value={context}>
            {props.children}
        </FilterState.Provider>
    )
}
