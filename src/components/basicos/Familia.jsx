import React, {cloneElement} from 'react'

export default props => {
    return (
        <div>
            {/* cloneElement funciona apenas para 1 filho */}
            {/* Exemplo de uso sem usar a nomeclatura React.cloneElement.... */}
            {/* {cloneElement(props.children, { ...props })} */}
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
        </div>
    )
}