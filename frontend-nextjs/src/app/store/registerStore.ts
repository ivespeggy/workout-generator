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

type OtpCodeCoolDownStore = {
    disabled: boolean,
    countdownSeconds: string,
    setCountDown: ()=>void,
    setDisabled: (status: boolean) => void
}

type SuccessMessage = {
    msg: string,
    setMsg: (msg:string)=>void

}
type RegisterBtnStore = {
    disabled: boolean,
    setDisabled: (status: boolean) => void 
}


export const useRegisterBtnStore = create<RegisterBtnStore> () ((set) =>({
    disabled: true,
    setDisabled: (statusBool: boolean) => set({disabled: statusBool})
}))


export const useSuccessMeesageStore = create<SuccessMessage>() ((set)=>({
    msg : '',
    setMsg: (msg:string) =>set({msg:msg})
}))
export const useOtpCodeCountDownStore = create<OtpCodeCoolDownStore>() ((set)=>({
    disabled: false,
    countdownSeconds:'120S',
    setDisabled:(statusBool:boolean)=> set({
        disabled:statusBool

    }),
    setCountDown:()=>{
        let seconds = 120
        const interval1 = setInterval(()=>{
            seconds -= 1
            set({countdownSeconds:`${seconds}s`})
            if (seconds <= 0){
                set({disabled:false})
                clearInterval(interval1)
            }
        },1000)
        set({disabled:true})

    }
}))

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