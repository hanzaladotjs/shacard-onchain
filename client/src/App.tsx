import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useMobileNav } from './zustand/mobileNav'
import { Link } from 'react-router-dom'
function App() {

  const phoneView :any= useMobileNav((set:any) => set.mobileNav)
  const turnMobileViewOn = useMobileNav((state:any) => state.turnMobileOn)

  return (
    <Router>
      <div className='base-font antialiased'>
        <Nav />

        <div className= {!phoneView ? 'flex justify-center ' : "flex justify-start"}>
          {phoneView ? <div className='mt-30 ml-4 flex flex-col space-y-10 text-2xl text-gray-500'>

            <Link to="/" onClick={() => turnMobileViewOn(!phoneView)}> Home </Link>
            <Link to="/offers" onClick={() => turnMobileViewOn(!phoneView)}> Offers </Link>
            <Link to="/posts" onClick={() => turnMobileViewOn(!phoneView)}> Posts </Link>
            <Link to="/messages" onClick={() => turnMobileViewOn(!phoneView)}> Messages</Link>
            <Link to="/signup" onClick={() => turnMobileViewOn(!phoneView)}> SignUp</Link>
            <Link to="/login" onClick={() => turnMobileViewOn(!phoneView)}> Login</Link>
             
             
             
             
             </div> : 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route />
            <Route />
            <Route />
            <Route />

          </Routes> }
        </div>


      </div>
    </Router>
  )
}

export default App
