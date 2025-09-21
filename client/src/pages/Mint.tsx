import Edit from "../components/Edit"
import Editing from "../components/Editing"
import html2canvas from "html2canvas"
import { useRef } from "react"

export default function Mint() {
    const cardRef = useRef(null)

    const handleDownload = async () => {
    if (!cardRef.current) return;

    await document.fonts.ready; // wait for Tailwind/webfonts

    const canvas = await html2canvas(cardRef.current, {
      scale: 2,            // higher DPI
      backgroundColor: null,
      useCORS: true,
    });

    // create PNG download
    canvas.toBlob((blob:any) => {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    });
  };
    return (
        <div className="flex space-x-60 px-15 py-20  mt-30 bg-gray-50 rounded-md ">

            <Edit  cardRef={cardRef} />

            <Editing/>

            <button onClick={handleDownload} className="text-black"> convert </button>
            <button> connect</button>
            
            
        </div>
    )
}