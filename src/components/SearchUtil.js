import { useState, useEffect, useContext } from "react";
import ProductData from '../assets/firebase-data/products';
import { FilterState } from "../stores/AppState";

export function SearchTitle(){
    const { products }=useContext(ProductData);
    const state = useContext(FilterState).state;
    const [res, setRes] = useState([]);
    useEffect(()=>{
        setRes([]);
        if (state.title.length===0) return;
        products.forEach(item=>{
            if (item.title.toLowerCase().indexOf(state.title.toLowerCase())!== -1) setRes(prev=>prev.concat(item));
        });
        return;
    },[state]);
    return [res,setRes];
}