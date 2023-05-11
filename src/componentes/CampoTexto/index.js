import './CampoTexto.css'


const CampoTexto = (props) => {

    
                                    // useState pode receber um valor inicial para atribuir ao campo. 
    //const [valor, setValor] = useState('')
    
    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    return (
        <div className="campo-texto"> 
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto