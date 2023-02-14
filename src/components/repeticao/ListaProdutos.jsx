import './tabelaProdutos.css'
import React from 'react'
import produtos from '../data/produtos'

export default props => {
    const products = produtos.map((produto, i ) => {
        return <tr key={produto.id} className={i % 2 == 0 ? 'par' : 'impar'}>
            <td>
                {produto.id} 
            </td>
            <td>
                {produto.nome}
            </td>
            <td>
                R$ {produto.preco.toFixed(2).replace('.', ',')}
            </td>
        </tr>
    })

    return (
        <div>
            <table>
                <tr>
                    <th>
                        Código
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </tr>
                {products}
            </table>
        </div>
    )
}