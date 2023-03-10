import './tabelaProdutos.css'
import React from 'react'
import produtos from '../data/produtos'

export default props => {

    function getLinhas() {
        return produtos.map((produto, i ) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                    <td  className='text-center'>
                        {produto.id} 
                    </td> 
                    <td>
                        {produto.nome}
                    </td>
                    <td>
                        R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
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
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}