import React from 'react';
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'

const Modal = (props) => {
    return (
        <Auxx>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    display: props.show ? 'block' : 'none'
                }}

            >
                {props.children}
            </div>
        </Auxx>
    );
};

export default Modal;