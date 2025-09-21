import { useCardInputs } from "../zustand/cardInputs"
import pfp from "../assets/pfp.jpeg"

export default function Edit({ cardRef }: any) {
  const ourCardInputs: any = useCardInputs((state: any) => state.cardInputs)

  return (
    <div
      className="w-[440px] h-[550px] shadow shadow-[0_0_20px_rgba(22,101,52,0.7)] rounded-xl border-[2px] border-[#6b21a8] bg-[#faf5ff] font-sans font-semibold flex flex-col items-center"
      ref={cardRef}
    >
      <div className="text-xl flex flex-row bg-[#cffafe] w-80 h-15 rounded-md pt-3 pl-2 text-[#374151] mt-5 justify-between px-1">
        <div className="namefont text-2xl">
          {ourCardInputs.name} hadi rasool
        </div>
        <div>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#5b1494"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9463 1.59905..."
              fill="#5b1494"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col space-y-1 items-center">
        <div>
          <img
            src={pfp}
            className="border-[4px] mt-5 border-[#9333ea] h-60 w-60"
            alt=""
          />
        </div>
        <div>{ourCardInputs.title} Full stack engineer</div>
      </div>

      <div className="flex ml-15 w-70 mt-5 flex-wrap space-x-10 text-[#57534e] text-center">
        <div>twitter: {ourCardInputs.twitter} hanzaladotxyz</div>
        <div>telegram: {ourCardInputs.telegram} hanzaladotxyz</div>
        <div>wallet: {ourCardInputs.wallet} 0xaudwevdwebdjqwiuyewj</div>
      </div>

      <div className="text-sm ml-15 text-[#6b21a8] flex justify-center w-90 mt-4">
        description: full stack. im into web3, ai, privacy, finance, economics.
      </div>
    </div>
  )
}
