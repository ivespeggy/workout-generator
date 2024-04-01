
import { create } from "zustand";

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


export const useRegisterMsgDisplayStatusStore = create<RegisterMsgDisplayStatus>()((set) =>({
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

