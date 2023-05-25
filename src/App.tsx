import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ListaItem = (props: any) =>{
  return <li key={props.indice}>{props.titulo}</li>
}

const Lista = () => {

  const tarefas = [
    "Baixar o projeto do github",
    "Instalar bibliotecas do projeto",
    "Executar aplicação web",
    "Programar em js e React",
    "Guardar as modificações no repositório local",
    "Salvar as modificações no GiHub"
  ]

  return(
    <div className="card">

      <ul>
          {tarefas.map( (item,ind) => <ListaItem indice={ind} titulo={item}/>)}
      </ul>

    </div>
    /*
    <div className="card">
        <ul>
          {tarefas.map( (item,ind) => <ListaItem indice={ind} titulo={item}/>)}
        </ul>
        <ul>
          <li key={0}>{tarefas[0]}</li>
          <li key={1}>{tarefas[1]}</li>
          <li key={2}>{tarefas[2]}</li>
          <li key={3}>{tarefas[3]}</li>
          <li key={4}>{tarefas[4]}</li>
          <li key={5}>{tarefas[5]}</li>
        </ul>

      </div>
  )
    */
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Lista/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
