import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useMobileNav } from './zustand/mobileNav'
import { Link } from 'react-router-dom'
import Mint from './pages/Mint'

function App() {

  const phoneView :any= useMobileNav((set:any) => set.mobileNav)
  const turnMobileViewOn = useMobileNav((state:any) => state.turnMobileOn)

  return (
    <Router >
      <div className='base-font antialiased'>
        <Nav />

        <div className= {!phoneView ? 'flex justify-center ' : "flex justify-start"}>
          {phoneView ? <div className='mt-30 ml-4 flex flex-col space-y-10 text-2xl text-gray-500'>

            <Link to="/" onClick={() => turnMobileViewOn(!phoneView)}> home </Link>
            <Link to="/mint" onClick={() => turnMobileViewOn(!phoneView)}> mint </Link>
            <Link to="/minted" onClick={() => turnMobileViewOn(!phoneView)}> minted</Link>
           
             
             
             
             </div> : 
          <Routes>
            <Route path='/' element={<Home />} />
          
            <Route path='/mint' element={<Mint/>} />
            <Route />

          </Routes> }
        </div>


      </div>
    </Router>
  )
}

export default App
