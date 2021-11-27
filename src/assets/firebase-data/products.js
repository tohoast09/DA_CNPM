import firebase from "../../firebase";
import { createContext, useRef, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const ProductData = createContext({
    products:[],
    fetchData:()=>{},
    getAllProducts:()=>{},
    getProducts:()=>{},
    getProductBySlug:()=>{},
    getCartItemsInfo:()=>{},
    getProductsByTag:()=>{},
    sortProducts:()=>{}
})
export function ProductDataProvider(props){
    const [products,setProducts] = useState([]);

    const fetchDataHandler = async () => {
        const db = getFirestore(firebase);

        const citiesCol = collection(db, 'books');
        const data = await getDocs(citiesCol);

        setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    const getAllProductsHandler = () => products
    
    const getProductsHandler = (count) => {
        const max = products.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return products.slice(start, start + count)
    }
    const sortProductsHandler= (func)=>{
        setProducts((prev)=>{
            const x=[...prev];
            console.log(x.map(item=>item.title));
            x.sort(func);
            console.log(x.map(item=>item.title));
            return x;
        })
    }
    const getProductBySlugHandler = (slug) => products.find(e => e.slug === slug)
    const getProductsByTagHandler = (tag) => products.filter(e => e.tag.includes(tag))
    
    const getCartItemsInfoHandler = (cartItems) => {
        let res = []
        if (cartItems.length > 0) {
            cartItems.forEach(e => {
                let product = getProductBySlugHandler(e.slug)
                res.push({
                    ...e,
                    product: product
                })
            })
        }
        // console.log(res)
        // console.log('sorted')
        // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
        return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
    }

    const context={
        products:products,
        fetchData:fetchDataHandler,
        getAllProducts:getAllProductsHandler,
        getProducts:getProductsHandler,
        getProductBySlug:getProductBySlugHandler,
        getCartItemsInfo:getCartItemsInfoHandler,
        getProductsByTag:getProductsByTagHandler,
        sortProducts: sortProductsHandler
    }

    return (
    <ProductData.Provider value={context}>
        {props.children}
    </ProductData.Provider>
    );
}

export default ProductData;