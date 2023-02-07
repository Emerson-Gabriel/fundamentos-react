import React from "react";

export default (props) => {
    /* exemplo de atribuição de valores com js */
    const [a, b] = [1, 2]
    const {c, d, x} = {c: 54, d: 421, x: 'testes'}

    return (
        <React.Fragment>
            <h2>Valor Aleatório</h2>
            <p>
                Valor mínimo: {props.min}
            </p>
            <p>
                Valor máximo: {props.max}
            </p>
            <p>
                Valor aleatório: {Math.ceil(Math.random() * (props.max - props.min) + props.min)}
            </p>
        </React.Fragment>
    )
}