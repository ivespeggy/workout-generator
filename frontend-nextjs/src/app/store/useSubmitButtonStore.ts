import { create } from "zustand";

type DisplayErrorMsgStore = {
    OnDisplay:boolean,
    SetOnDisplay:()=>void,
    msg: string,
    setMsg: (s:string)=>void

}

export const useDisplayErrorMsg = create<DisplayErrorMsgStore>() ((set)=> ({
    OnDisplay: false,
    SetOnDisplay: () => set((state)=>({OnDisplay:!state.OnDisplay})),
    msg: '',
    setMsg: (s:string) => set((state)=> ({msg:s}))
}))

type SubmitStatusStore = {
    readyToSend:boolean,
    setRreadyToSend: ()=>void
}
export const useSubmitStatusStore = create<SubmitStatusStore>() ((set)=>({
    readyToSend:false,
    setRreadyToSend: ()=> set({readyToSend:true})
}))