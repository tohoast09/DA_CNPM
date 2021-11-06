import { useEffect, useRef, useState } from "react";

function ReviewSection(props){
    const reviewcontent=[];
    const [isLoading, setIsLoading]=useState(true);
    const [] = [props.];
    
    useEffect(() =>{
        fetch(
            'https://bkbookstore-1e885-default-rtdb.asia-southeast1.firebasedatabase.app/review/'+props.data.id+'.json'
        )
        .then((response)=> {
            return response.json();
        })
        .then((data)=>{
            setIsLoading(false);
            setLoadedBookList(data);
        });
    },[]);

    if (isLoading){
        return <div>
            Loading...
        </div>;
    }
    
    return (<div>
        
    </div>);
}

export default ReviewSection;