import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Instruction from './component/instruction'
import DropdownTable from './component/DropdownTable'
import Option1 from './component/Option1'
import Testing from './component/Testing'
import Testing2 from './component/Testing2'
import Testing3 from './component/Testing3'
import Head from './component/Head'
import Testing4 from './component/Testing4'
import Confirm from './component/Confirm.jsx'
import Fail from './component/Fail.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Instruction />
      <DropdownTable />
      <Testing4 />
      <Confirm />
      <Fail />
      
      
    </>
  )
}

export default App
