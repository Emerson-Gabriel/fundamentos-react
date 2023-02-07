export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
    const notaInt = Math.ceil(props.nota);
    return (
        <div id='app'>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem a nota:
                <strong> {notaInt}</strong>.
                <br />
                E está: {status}
            </p>
        </div>
    )
}