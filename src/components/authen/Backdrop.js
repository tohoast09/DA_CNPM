import sign from "./Sign.module.css";

export default function Backdrop(props) {
    return(
        <div className={sign.backdrop} onClick={props.onQuit}></div>
    );
}