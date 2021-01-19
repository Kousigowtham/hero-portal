import React from 'react';
import ReactDOM,{createPortal }from 'react-dom';
const modalBackground={
     position:'fixed',
     top:0,
     bottom:0,
     left:0,
     right:0,
     display:'flex',
     alignItems:'center',
    justifyContent:'center',
    backgroundColor :'rgba(0,0,0,0.5)',
    zIndex:10000,

}
const modal={
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '15vh',
    backgroundColor: 'whitesmoke',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
}
const xclose={
    position: 'absolute',
    cursor:'pointer',
    top: -1,
    right: 14,
    fontWeight:'bold'
}
const DeleteModal = (props)=>{

       return  ReactDOM.createPortal(
            <div   style={modalBackground}>
                <div style={modal}>
                <span style={xclose} onClick={()=>props.modalCloseHandler()}>x</span>
                    {props.children}
                </div>
            </div>

        , document.getElementById("portal"))
}

export default DeleteModal;