import classes from './Modal.module.css'
function Modal(props){
    return(
        <div className={classes.modal}>
            <p>Bạn có chắc chắn xóa?</p>
            <button className={classes.btn} onClick={props.onClickYes}>Đồng ý</button>
            <button className={`${classes.btn} ${classes.btn_alt}`}  onClick={props.onClickNo}>Hủy</button>
        </div>
    );
}

export default Modal;