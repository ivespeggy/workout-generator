import { create } from 'zustand'

type OtpTextfieldStore = {
    otpCode: string
    setOtpInput: (code: string) => void
}

type EmailStore = {
    email: string
    setEmail: (email: string) => void
}


export const useEmailTextfieldStore = create<EmailStore>() ((set) =>({
    email: '',
    setEmail: (InputEmail: string) => set({
        email: InputEmail
    })
}))

export const useOtpTextfieldStore = create<OtpTextfieldStore>() ((set) => ({
    otpCode: '',
    setOtpInput: (InputCode: string) => set({ otpCode: InputCode }),
}))