import './Campo.css'


const Campo = (props) => {

    
                                    // useState pode receber um valor inicial para atribuir ao campo. 
    //const [valor, setValor] = useState('')
    
    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    return (
        <div className={`campo campo-${props.type}`}> 
            <label>
                {props.label}
            </label>
            <input 
                type={props.type}
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
            />
        </div>
    ) 
}

export default Campo