import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import {v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',          
      cor: '#E8F8FF',
    }, 
    {
      id: uuidv4(),
      nome: 'Data Science',   
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
  },
  {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
  },
  {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
  },
  {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
  }
  ])

 
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'MOISÉS ENICK CARNIEL',
      cargo: 'Professor',
      imagem: 'https://www.github.com/quitandir.png',
      time: 'Programação',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'MOISÉS ENICK CARNIEL',
      cargo: 'Professor',
      imagem: 'https://www.github.com/quitandir.png',
      time: 'Front-End',
      favorito: false
    }
  ])

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map (time => {
      if(time.id === id) {
        time.cor = cor
      }

      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador

    }) )
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time 
          mudarCor={mudarCorDoTime} 
          key={indice} time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          aoDeletar={deletarColaborador} 
          aoFavoritar={resolverFavorito}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
