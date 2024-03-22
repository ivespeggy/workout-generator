import { create } from 'zustand'

type OtpCodeStore = {
    OtpInputBoxState: boolean
    setOtpInputState: ()=>void
}
const useOtpCodeStore = create<OtpCodeStore>() ((set)=>({
    OtpInputBoxState: false,
    setOtpInputState: () => set((state) =>({
        OtpInputBoxState: !state.OtpInputBoxState
    }))
}))

export default useOtpCodeStore
