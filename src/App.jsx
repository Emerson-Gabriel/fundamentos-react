import './app.css'
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

export default _ =>
    <div className="app">
        <h1 className="center">Fundamentos React</h1>
        <div className="cards">
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={19} ></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Emerson'}}></UsuarioInfo>
                <UsuarioInfo usuario={{sobrenome: ''}}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio Repetição Produtos" color="#074c85">
                <ListaProdutos></ListaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#ff4c65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componentes com Filhos" color="#00c8f8">
                <Familia sobrenome="Fernandes">
                    <FamiliaMembro nome="Emerson"></FamiliaMembro>
                    <FamiliaMembro nome="Naya"></FamiliaMembro>
                    <FamiliaMembro nome="Zeka"></FamiliaMembro>
                {/*
                    Exemplo de comentário react
                    <FamiliaMembro nome="Naya"></FamiliaMembro>
                    <FamiliaMembro nome="Zeka"></FamiliaMembro>
                */}
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#fa6900">
                <Aleatorio  max={97}  min={13} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#e94c6f">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#e8b71a">
                <ComParametro
                    titulo="Informações do aluno:"
                    aluno="Emerson"
                    nota={9.8}
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588c73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>