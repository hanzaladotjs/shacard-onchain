import {create } from "zustand"

export const useCardInputs: any = create((set) => ({
    cardInputs: {
        name: "",
        title: "",
        image: "",
        twitter: "",
        telegram: "",
        wallet: ""
    },
    setCardInputs: (change: any) => set({cardInputs: change})
}))