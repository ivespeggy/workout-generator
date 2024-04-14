
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

type LoginEmailStore = {
    email: string
    setEmail: (email:string) => void 
}
type RegisterMsgStore = {
    msg: string
    setMsg: (msg: string) => void
}
type RegisterMsgDisplayStatus = {
    status: boolean
    setStatus: (bool: boolean) =>void
}



type SharedLoginEmailInfoStore = {
    email: string
    purpose: 'signup' | 'login' | 'initialization'
    setEmail: (inputEmail: string) => void
    setPurpose: (inputPurpose: 'signup' | 'login' | 'initialization') => void
}


export const useSharedLoginEmailInfoStore = create<SharedLoginEmailInfoStore>() (
    persist(
        (set) =>({
            email: '',
            purpose:'initialization',
            setEmail: (inputEmail: string) => set({email:inputEmail}),
            setPurpose: (inputPurpose: 'signup' | 'login' | 'initialization') => set({purpose:inputPurpose})}),

            {
                name: 'purpose-state',
                storage: createJSONStorage(() => sessionStorage),
              },
    ))



export const useRegisterMsgDisplayStatusStore = create<RegisterMsgDisplayStatus>() ((set) =>({
    status: false,
    setStatus: (InputBool: boolean) => set({status:InputBool})
}))

export const useRegisterMsgStore = create<RegisterMsgStore>() ((set)=>({
    msg: '',
    setMsg: (InputMsg: string) => set({msg: InputMsg})
}))

export const useLoginEmailStore = create<LoginEmailStore>() ((set)=>({
    email: '',
    setEmail: (InputEmail: string) => set({email:InputEmail})

}))

