import './app.css'
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default _ =>
    <div className="app">
        <h1 className="center">Fundamentos React</h1>
        <div className="cards">
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