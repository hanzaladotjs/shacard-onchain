import MacbookScroll from "../components/ui/macbook-scroll"
import hot from "../../src/assets/hot.png"

const Home = () => {
    return (
        <div>   
            <div className="animate-stamp">
            <div className="flex justify-center">
              <div className="md:w-[800px] w-[300px] md:text-4xl tracking-wide text-gray-700  mt-40 flex flex-col ">
                <div className="text-center md:text-5xl text-2xl mb-3">K2K is Knowledge to Knowledge.</div>
                <div className="text-center">  a platform that connects people with the best resources, knowledge, and expertise.</div>
              </div>
              </div>

              <div className="flex justify-center mt-5 text-gray-400 text-xs md:text-lg">
                barter skills. save money. avoid loneliness.
              </div>

              <div className="flex justify-center space-x-10 mt-10">
                <button className="h-11 w-30 bg-orange-500 text-white rounded-lg">
                  Sign up
                </button>
                <button className="h-11 w-30 bg-orange-500 text-white rounded-lg">
                  Log in
                </button>
              </div>
              </div>

              <MacbookScroll  src={hot}  showGradient={false}/>

        </div>


    )
}

export default Home