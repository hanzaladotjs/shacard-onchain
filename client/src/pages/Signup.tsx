import { Link } from "react-router-dom"


export default function Signup() {
    return (
        <div className="flex justify-center items-center h-screen ">
             <div className="flex flex-col space-y-4 font-mono w-80 md:w-110">
            <h1 className="text-3xl text-orange-500 font-bold mb-10">
                {" "}
                Yo! What's up?{" "}
            </h1>

             <input
                // value={user.username}
                // onChange={(e) => setUser(({...prev}) =>({...prev, username: e.target.value}) )}
                type="text"
                placeholder="Username"
                className="p-3 border  border-black rounded placeholder-gray-400 text-black outline-none hover:border-2"
            />
            <input
                // value={user.email}
                // onChange={(e) => setUser(({...prev}) =>({...prev, email: e.target.value}) )}
                type="text"
                placeholder="Email address"
                className="p-3 border rounded  border-black placeholder-gray-400 text-black outline-none hover:border-2"
            />

            <input
            // value={user.password}
                // onChange={(e) => setUser(({...prev}) =>({...prev, password: e.target.value}) )}
                type="text"
                placeholder="Password"
                className="p-3 border  border-black placeholder-gray-400 text-black rounded outline-none hover:border-2"
            />
            <button type="submit" className="p-3 text-white rounded-lg bg-orange-400 hover:bg-orange-500">
                {" "}
                Continue{" "}
            </button>
          
           <div className="text-md flex-wrap text-gray-400 px-10">
                {" "}
                Already an user?{" "}
               <Link to={"/login"}> <span className=" font-semibold hover:underline">Login right now. </span></Link>{" "}
            </div>


        </div>
        </div>
    )
}