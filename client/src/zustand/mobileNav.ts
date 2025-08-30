import { create } from 'zustand'

export const useMobileNav: any = create ((set) => ({
    mobileNav: false,
    turnMobileOn: (change:any) => set({mobileNav: change})
}))