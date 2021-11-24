import {createContext, useState} from 'react'

export const AuthState=createContext({
    state: "",
    changeAuthState: ()=>{}
});


export function AuthStateProvider(props){
    const [authState, setAuthState]=useState("")

    const context={
        state:authState,
        changeAuthState:changeAuthStateHandler
    };

    function changeAuthStateHandler(newState){
        setAuthState(newState);
    }
    
    return(
        <AuthState.Provider value={context}>
            {props.children}
        </AuthState.Provider>
    )
}


export const FilterState=createContext({
    state: {},
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
        changeFilterState:changeFilterStateHandler,
        setState: setFilterState,
        clearState: clearStateHandler
    };

    function changeFilterStateHandler(type,value){
        const newState= {...initState};
        if (type==='title') newState[type]=value;
        else newState[type]=[value]
        setFilterState(newState);
    }
    
    function clearStateHandler(){
        setFilterState(initState);
    }
    
    return(
        <FilterState.Provider value={context}>
            {props.children}
        </FilterState.Provider>
    )
}
