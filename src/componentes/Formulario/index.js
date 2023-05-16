
import {useState} from 'react' 
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setimagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoCadastrar({
            nome, cargo, imagem, time
        })
        setNome('')
        setCargo('')
        setimagem('')
        setTime('')
    }
 
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className=''>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio={true} 
                    type='text'
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    type='text'
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />
                <Campo 
                    label='Imagem' 
                    type='text'
                    placeholder='Digite o endereço da sua imagem'
                    valor = {imagem}
                    aoAlterado = {valor => setimagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label = 'Time' 
                    itens={props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={e => {
                e.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2 className=''>Preencha os dados para criar um novo time</h2>
                <Campo 
                    obrigatorio={true} 
                    type='text'
                    label='Nome' 
                    placeholder='Digite o nome do time '
                    valor = {nomeTime}
                    aoAlterado = {valor => setNomeTime(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    type='color'
                    label='Cor' 
                    placeholder='Escolha sua cor'
                    valor = {corTime}
                    aoAlterado = {valor => setCorTime(valor)}
                />               
                
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}   

export default Formulario