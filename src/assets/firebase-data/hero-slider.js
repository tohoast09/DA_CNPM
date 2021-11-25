import firebase from "../../firebase"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { createContext, useRef, useState } from "react";

const HeroSliderData = createContext({
    data:[],
    fetchData:()=>{},
});

export function HeroSliderDataProvider(props){
    const [data,setData] = useState([]);

    const fetchDataHandler = async () => {
        const db = getFirestore(firebase);

        const citiesCol = collection(db, 'heroSlider');
        const data = await getDocs(citiesCol);

        setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    const context={ 
        data:data,
        fetchData:fetchDataHandler
    }

    return (
    <HeroSliderData.Provider value={context}>
        {props.children}
    </HeroSliderData.Provider>
    );
}

export default HeroSliderData;