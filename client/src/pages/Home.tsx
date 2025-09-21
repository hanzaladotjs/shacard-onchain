import MacbookScroll from "../components/ui/macbook-scroll"
import hot from "../../src/assets/hot.jpeg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="animate-stamp">
        <div className="flex justify-center">
          <div className="md:w-[800px] w-[300px] md:text-5xl tracking-wide text-gray-700  mt-40 flex flex-col ">
            <div className="text-center md:text-6xl text-4xl mb-3">shacard — nft business cards</div>
            <div className="text-center text-xl">  a platform that connects people digitally and permanently</div>
          </div>
        </div>

      

        <div className="flex justify-center text-center ml-2 mt-5 text-gray-400 text-md md:text-lg">
          digital cards. proof of meet. forever with them.
        </div>

        <div className="flex justify-center space-x-10 mt-10 ">
       <button className="h-16 w-40 md:w-50 bg-orange-500 text-white border-2 border-black hover:border-3  rounded-lg">
            connect wallet
          </button> 
        
        </div>
      </div>

      <div className="flex justify-center">
      <MacbookScroll src={hot} showGradient={false} />
      </div>
      <div className="flex justify-center items-center mt-60 md:mt-150">
        <div className="flex flex-col items-center">
          <div className="flex flex-col text-center md:flex-row items-center md:justify-center text-3xl md:text-5xl space-x-4">
            <div>revolutionizing </div>
            <div className="text-orange-500">sharing business cards </div>
          </div>

          <div className="text-center w-75 md:w-200 mt-5 md:text-3xl  text-2xl text-gray-500 md:mb-30 mb-50">
            don't worry about carrying paper cards. make meaningful connections & grow.

          </div>

        </div>
      </div>

      <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 mt-9 justify-center items-center mb-15">
        <div className="flex flex-col items-center p-6 hover:border-gray-300 space-y-5 border-2 rounded-md border-gray-200">
          <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff8f33" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.78415 1.35644C6.28844 1.0927 4.86213 2.09142 4.5984 3.58713L2.16732 17.3744C1.90359 18.8701 2.9023 20.2965 4.39801 20.5602L16.2157 22.644C17.7114 22.9077 19.1377 21.909 19.4015 20.4133L21.8325 6.62597C22.0963 5.13026 21.0976 3.70395 19.6018 3.44022L7.78415 1.35644ZM9.05919 5.64323C8.65127 5.5713 8.26228 5.84368 8.19035 6.2516C8.11842 6.65952 8.3908 7.04851 8.79872 7.12044L16.6772 8.50963C17.0851 8.58155 17.4741 8.30918 17.546 7.90126C17.618 7.49334 17.3456 7.10434 16.9377 7.03242L9.05919 5.64323ZM7.49577 10.1911C7.5677 9.78313 7.95669 9.51076 8.36461 9.58268L16.2431 10.9719C16.651 11.0438 16.9234 11.4328 16.8514 11.8407C16.7795 12.2486 16.3905 12.521 15.9826 12.4491L8.10414 11.0599C7.69622 10.988 7.42384 10.599 7.49577 10.1911ZM7.67003 13.5212C7.26211 13.4492 6.87312 13.7216 6.80119 14.1295C6.72926 14.5374 7.00164 14.9264 7.40956 14.9984L12.3336 15.8666C12.7415 15.9385 13.1305 15.6662 13.2024 15.2582C13.2744 14.8503 13.002 14.4613 12.5941 14.3894L7.67003 13.5212Z" fill="#ff8f33"></path></svg>
          <div className="text-xl"> carry nothing </div>
          <div className="text-center text-xl w-70 text-gray-500 "> you don't need to carry physical cards which eventually get washed away.</div>
        </div>

        <div className="flex flex-col items-center p-6 hover:border-gray-300 space-y-5 border-2 rounded-md border-gray-200">
          <svg width="32px" height="32px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff8f33"><path d="M2 11L4.80662 7.84255C5.5657 6.98859 6.65372 6.5 7.79627 6.5L8 6.5" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 19.5003L7.5 19.5L11.5 16.5003C11.5 16.5003 12.3091 15.9528 13.5 15.0001C16 13.0002 13.5 9.83352 11 11.4997C8.96409 12.8565 7 14.0003 7 14.0003" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 13.5V7C8 5.89543 8.89543 5 10 5H20C21.1046 5 22 5.89543 22 7V13C22 14.1046 21.1046 15 20 15H13.5" stroke="#ff8f33" stroke-width="1.5"></path><path d="M18.25 12C18.75 10.5 18.75 9.5 18.25 8" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 9C16.2266 9.5 16.2266 10.5 16 11" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <div className="text-xl"> proof </div>
          <div className="text-center text-xl w-70 text-gray-500 ">introduces the concept proof of meet. this solves "oh I have seen him somewhere"</div>
        </div>

        <div className="flex flex-col items-center p-6 hover:border-gray-300 space-y-5 border-2 rounded-md border-gray-200">
          <svg width="32px" height="32px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff8f33"><path d="M14.1488 9.47163V3.61153C14.1488 2.72151 13.4273 2 12.5373 2V2C11.6473 2 10.9258 2.72151 10.9258 3.61153V8.44611" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round"></path><path d="M16.346 12.841L18.5217 5.58862C18.7755 4.74265 18.2886 3.85248 17.4394 3.60984V3.60984C16.5943 3.3684 15.7142 3.8609 15.4779 4.70743L14.1484 9.47149" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.61935 9.24985L8.67489 11.5913C9.03961 12.4003 8.68159 13.352 7.87404 13.72C7.06183 14.0901 6.10347 13.7296 5.73663 12.9159L4.68109 10.5745C4.31637 9.76542 4.67439 8.81376 5.48193 8.44574C6.29415 8.07559 7.25251 8.43614 7.61935 9.24985Z" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.7192 12.2615V12.2615C11.9239 11.694 11.8998 11.0692 11.6518 10.5192L10.5787 8.13874C10.2181 7.33892 9.27613 6.98454 8.4778 7.34836V7.34836C7.66469 7.71892 7.31885 8.68832 7.71382 9.48986L7.84946 9.76511" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round"></path><path d="M13.8566 17.6767L14.3487 16.6927C14.3976 16.5947 14.3461 16.4763 14.241 16.4454L10.6903 15.4011C9.97853 15.1918 9.51797 14.5038 9.59563 13.766V13.766C9.68372 12.9292 10.4284 12.3188 11.2662 12.3968L16.0542 12.8422C16.0542 12.8422 19.8632 13.4282 18.5447 17.2372C17.2262 21.0463 16.7867 22.3648 13.8566 22.3648C11.9521 22.3648 9.16855 22.3648 9.16855 22.3648H8.87555C6.52912 22.3648 4.62697 20.4627 4.62697 18.1163V18.1163L4.48047 9.91211" stroke="#ff8f33" stroke-width="1.5" stroke-linecap="round"></path></svg>
          <div className="text-xl"> attractive </div>
          <div className="text-center text-xl w-70 text-gray-500 "> we provide you attarctive card templates, and enough customization.- </div>
        </div>

        

      </div>

      <div className="flex flex-col md:flex-row text-center justify-center space-x-6 items-center md:text-4xl tracking-widest text-2xl md:mt-30 mt-50">
        <div>
          contribute to
        </div>
        <div className="text-orange-500">
          shacard
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex justify-center items-center text-center md:text-3xl text-gray-400 md:w-150 w-85 text-xl">
          join this crazy project of ours by contributing on github
        </div>



      </div>
      <div className="flex justify-center mt-10 pb-30 border-b border-gray-200  mb-5 max-w-[100vw]">
        <button className=" px-10 py-4 border-3 rounded-md hover:bg-gray-100 border-orange-500 ">
          github/shacard
        </button>
      </div>

      
        <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 justify-around items-center p-10 pb-12" >
          <div className="flex space-x-2 text-2xl items-center">
           <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff7300"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.25C2.48122 4.25 1.25 5.48122 1.25 7V17C1.25 18.5188 2.48122 19.75 4 19.75H20C21.5188 19.75 22.75 18.5188 22.75 17V9.75H6C5.58579 9.75 5.25 9.41421 5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H22.75V7C22.75 5.48122 21.5188 4.25 20 4.25H4Z" fill="#ff7300"></path></svg>
           <Link to="/">shacard</Link>
          </div>

          <div className="text-gray-400 flex space-x-5">
            <div>
              Privacy Policy
            </div>
            <div>
              Terms of Service
            </div>
            <div>
              © 2025 shacard. All rights reserved.
            </div>
          </div>

        </div>
      
    </div>


  )
}

export default Home