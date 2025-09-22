import Edit from "../components/Edit"
import Editing from "../components/Editing"
import html2canvas from "html2canvas"
import { useRef } from "react"

export default function Mint() {
    const cardRef = useRef<HTMLDivElement>(null)

    const getCardBlob = async (): Promise<Blob | null> => {
        if (!cardRef.current) return null

        await document.fonts.ready

        const canvas = await html2canvas(cardRef.current, {
            scale: 2,
            backgroundColor: null,
            useCORS: true,
        })

        return new Promise((resolve) => canvas.toBlob(resolve))
    }

    const pinataURI = import.meta.env.VITE_SERVER_URL

    const handleUpload = async () => {
        const blob = await getCardBlob()
        if (!blob) return

        const formData = new FormData()
        formData.append("file", blob, "card.png")


        const res = await fetch(pinataURI, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`, // secure with env var
            },
        })

        const { url } = await res.json()

        await fetch(url, {
            method: "POST",
            body: formData
        })

    }

    return (
        <div className="flex relative space-x-10 px-15 py-20  mt-30 bg-gray-50 rounded-md ">

            <Edit cardRef={cardRef} />

            <Editing />

            <br></br>
   
            <button onClick={handleUpload} className="text-gray-100 px-2 py-1 absolute bottom-10 border-3 border-stone-200 bg-black right-50"> upload </button>
            

        </div>
    )
}