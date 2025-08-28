import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
function App() {


  return (
    <Router>
      <div className='base-font antialiased'>
        <Nav />

        <div className='flex justify-center '>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route />
            <Route />
            <Route />
            <Route />

          </Routes>
        </div>


      </div>
    </Router>
  )
}

export default App
