
import { Link } from "react-router-dom"
import { useMobileNav } from "../zustand/mobileNav"

const Nav = () => {
    const turnMobileViewOn = useMobileNav((state:any) => state.turnMobileOn)
    const phoneView = useMobileNav((state:any) => state.mobileNav)

    return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-white/30">
        <div className="flex  md:justify-around justify-between md:mx-0 mx-3 items-center  py-4">

            <div className="flex space-x-2 items-center text-gray-700 text-l md:text-2xl">
              <svg width="32px" height="32px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff7300"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.25C2.48122 4.25 1.25 5.48122 1.25 7V17C1.25 18.5188 2.48122 19.75 4 19.75H20C21.5188 19.75 22.75 18.5188 22.75 17V9.75H6C5.58579 9.75 5.25 9.41421 5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H22.75V7C22.75 5.48122 21.5188 4.25 20 4.25H4Z" fill="#ff7300"></path></svg>
                <Link to="/" className="base-font">shacard</Link>
            </div>

            <div className="flex space-x-8 text-gray-500 md:inline hidden">
                <button className="hover:text-black">connect-wallet</button>
                <Link to="/mint" className="hover:text-black">mint</Link>
                 <Link to="/minted" className="hover:text-black">minted</Link>
            </div>

            <div className="md:hidden inline">
          <button onClick={() => {if(phoneView == false) {turnMobileViewOn(true)} else {
            turnMobileViewOn(false)}
          }} > {!phoneView ?<svg width="28px" height="28px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9a9996"><path d="M3 5H21" stroke="#9a9996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="#9a9996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="#9a9996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="28px" height="28px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#858585"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> }</button> 
            </div>
        </div>
        </div>
    )
}

export default Nav