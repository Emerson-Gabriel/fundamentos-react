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
            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio  max={97}  min={13} />
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Informações do aluno:"
                    aluno="Emerson"
                    nota={9.8}
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>