import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'

const tag = <strong>Olá react.......</strong>
/* const primeiro = Primeiro(); */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

/* abaixo a versão antiga! */
/* import ReactDOM from 'react-dom'
const el = document.getElementById('root');
ReactDOM.render('Olá React!!!', el) */