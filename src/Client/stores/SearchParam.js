import { createContext, useRef, useState } from "react";

const SearchParam = createContext({
    param:[],
    name:"",
    nameInputRef:null,
    addFilter:()=>{},
    removeFilter:()=>{},
    isRightBook:()=>{},
    clearFilter:()=>{},
    setName:()=>{}
});

export function SearchParamProvider(props){
    const nameInput = useRef();
    const [curParam,setParam] = useState([]);
    const [nameS,setNameS] = useState("");

    function addFilterHandler(type,value){
        setParam((prev)=>{return prev.concat([[type,value]]);}
            );
    }

    function setNameHandler(value){
        if (nameInput.current) nameInput.current.value=value;
        setNameS(value);
    }

    function removeFilterHandler(type,value=null){
        setParam((prev)=>{
            return prev.filter(pair=>(pair[0]!==type || (value!==null && pair[1]!==value)));
        });
    }

    function clearFilterHandler(){
        setParam([]);
    }

    function isRightBookHandler(book){
        if (!book.name.toLowerCase().includes(nameS.toLowerCase()))  return false;
        for (let i=0;i<curParam.length;++i){
            if (!(book[curParam[i][0]].toLowerCase().includes(curParam[i][1].toLowerCase()))) return false;
        }
        return true;
    }

    const context={
        param:curParam,
        name:nameS,
        addFilter:addFilterHandler,
        removeFilter:removeFilterHandler,
        isRightBook:isRightBookHandler,
        clearFilter:clearFilterHandler,
        setName:setNameHandler,
        nameInputRef:nameInput
    }

    return (
    <SearchParam.Provider value={context}>
        {props.children}
    </SearchParam.Provider>
    );
}

export default SearchParam;