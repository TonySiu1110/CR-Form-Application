import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Instruction from './component/instruction'
import DropdownTable from './component/DropdownTable'
import Option1 from './component/Option1'
import Testing from './component/Testing.jsx'
import Testing2 from './component/Testing2'
import Testing3 from './component/Testing3'
import Head from './component/Head'
import Testing4 from './component/Testing4'
import Confirm from './component/Confirm.jsx'
import Fail from './component/Fail.jsx'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login.jsx'
import Menu from './component/Menu.jsx'
import Testing5 from './component/Testing5.jsx'



function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <Routes>
        {/* Define Routes for each component */}
        <Route path="/" element={<Testing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/cr-form" element={<DropdownTable />} />
        <Route path="/option1" element={<Option1 />} />
        <Route path="/testing2" element={<Testing2 />} />
        <Route path="/testing3" element={<Testing3 />} />
        <Route path="/head" element={<Head />} />
        <Route path="/testing4" element={<Testing4 />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testing" element={<Testing5 />} />
      </Routes>
    </Router>
    
    
    
  )
}

export default App
