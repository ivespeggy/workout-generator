import { create } from 'zustand'

type OtpCodeStore = {
    OtpInputBoxState: boolean
    setOtpInputState: ()=>void
}
export const useOtpCodeStore = create<OtpCodeStore>() ((set)=>({
    OtpInputBoxState: false,
    setOtpInputState: () => set((state) =>({
        OtpInputBoxState: !state.OtpInputBoxState
    }))
}))

