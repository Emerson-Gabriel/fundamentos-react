import './Card.css';
import React from "react";

export default props => {
    const style1 = {
        backgroundColor: props.color || 'red'
    }
    const style2 = {
        borderColor: props.color || 'red'
    }
    return (
        <div className='card' style={style2}>
            <div className='title' style={style1}>
                {props.titulo}
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}