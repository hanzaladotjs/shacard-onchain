const Nav = () => {
    return (
        <div className=" flex  text-xl mt-3 justify-between items-center bg-white items-center mb-25 h-15 md:justify-around">
            <div className="flex space-x-16 items-center">
                <div className="flex items-center gap-3 font-semibold text-3xl ">
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#1a4408" stroke-width="1.5"><rect width="7" height="5" rx="0.6" transform="matrix(0 -1 -1 0 22 21)" fill="#1a4408" stroke="#1a4408" strokeWidth="1.5"></rect><rect width="7" height="5" rx="0.6" transform="matrix(0 -1 -1 0 7 15.5)" fill="#1a4408" stroke="#1a4408" stroke-width="1.5" strokeWidth="1.5"></rect><rect width="7" height="5" rx="0.6" transform="matrix(0 -1 -1 0 22 10)" fill="#1a4408" stroke="#1a4408" strokeWidth="1.5"></rect><path d="M17 17.5H13.5C12.3954 17.5 11.5 16.6046 11.5 15.5V8.5C11.5 7.39543 12.3954 6.5 13.5 6.5H17" stroke="#1a4408" stroke-width="1.5"></path><path d="M11.5 12H7" stroke="#1a4408" stroke-width="1.5"></path></svg>
                    <p className="text-[#004838]">K2K</p></div>
                <div className="flex space-x-8 ">
                    <div>Thoughts</div>
                    <div>Barter</div>
                    <div>Messages</div>
                </div>
            </div>
            <div className="flex space-x-4">
                <button className=" border text-[#004838] border-gray-200 rounded-xl bg-stone-100 px-6 py-2 "> Login </button>
                <button className="bg-[#004838] text-[#E2FB6C] rounded-xl px-4 py-2"> Start Now </button>
            </div>
        </div>
    )
}

export default Nav