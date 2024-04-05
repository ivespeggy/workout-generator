import { create } from "zustand";

type PixelSquareStore = {
    OnSelectStatus: boolean
    toggleSelect: () => void 
}
type CreatePlanPopUpStore = {
    OnSelectStatus: boolean
    toggleOn: () => void 
    toggleOff: () => void 

}


export const usePopUpStore = create<CreatePlanPopUpStore>() ((set)=>({
    OnSelectStatus: false,
    toggleOn: () => set({OnSelectStatus:true}),
    toggleOff: () => set({OnSelectStatus:false})

}))



export const usePixelSquareStore = create<PixelSquareStore>() ((set)=>({
    OnSelectStatus: true,
    toggleSelect: () => set(state=>({OnSelectStatus:!state.OnSelectStatus}))

}))