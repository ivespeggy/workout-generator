import { create } from 'zustand'

type OtpTextfieldStore = {
    otpCode: string
    setOtpInput: (code: string) => void
}

type EmailStore = {
    email: string
    setEmail: (email: string) => void
}
type LoadingSpinnerStore = {
    loadOn: boolean
    setLoadOn: (status: boolean) => void
}

export const useSpinnerStore = create<LoadingSpinnerStore>() ((set) =>({
    loadOn: false,
    setLoadOn: (statusBool: boolean) => set({
        loadOn: statusBool
    })
}))

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