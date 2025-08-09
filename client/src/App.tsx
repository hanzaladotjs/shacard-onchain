import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
function App() {


  return (
  <Router>
    <div className='base-font'>
      <Nav/>
    
        <Routes >
          <Route path='/'  element={<Home/>}/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          
        </Routes>
      
      
      
    </div>
    </Router>
  )
}

export default App
