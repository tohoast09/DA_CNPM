import classes from "./SubmitDummy.module.css";
import { useRef } from "react";
import { useHistory } from "react-router";

function SubmitDummy(){
    const dataTxtRef=useRef();
    const history=useHistory();
    function pushBook(obj){
        fetch(
            'https://bkbookstore-1e885-default-rtdb.asia-southeast1.firebasedatabase.app/books.json',
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(()=>history.replace('/'));
    }
    function deleteEverything(){
        fetch(
            'https://bkbookstore-1e885-default-rtdb.asia-southeast1.firebasedatabase.app/books.json',
            {
                method: 'DELETE',
                body: null,
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(()=>history.replace('/'));
    }
    function submitHandler(event){
        event.preventDefault();
        const lines = dataTxtRef.current.value.split('\n');
        let obj = {};
        lines.forEach(line => {
            let w= line.split(': ');
            if (w.length===2) obj[w[0]]=w[1];
        });
        console.log(obj);
        pushBook(obj);
    }
    const init="author: \nname: \nprice: \nimg: \ncategory: \npromotion: \n"
    return (
        <div className={classes.submitform}>
        <form onSubmit={submitHandler}>
            <div>
            <textarea ref={dataTxtRef} defaultValue={init} />
            </div>
            <button>Submit</button>
        </form>
        <button onClick={deleteEverything}>Delete everything in db</button>
        </div>
    );
}
export default SubmitDummy;