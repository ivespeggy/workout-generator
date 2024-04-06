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
type DaysInWeekStore = {
    daysOfWeek: {[key:string]:boolean},
    toggleDay:(initial:string) => void
    everyday: (initial:string) => boolean
}

export const useDaysInWeekStore = create<DaysInWeekStore>() ((set,get)=>({
    daysOfWeek:{'M':true,'T':true,'W':true,'R':true,'F':true,'S':true,'U':true},

    toggleDay: (initial:string)=> set((state)=>{
        const currState = state.daysOfWeek[initial]
        const newDaysOfWeek = {
            ...state.daysOfWeek,
            [initial]:!currState,
        }
        console.log(newDaysOfWeek)
        return {daysOfWeek:newDaysOfWeek}
    }),
    everyday: (initial: string)=>{
        const state = get()
        return state.daysOfWeek[initial]
    }
}))


export const usePopUpStore = create<CreatePlanPopUpStore>() ((set)=>({
    OnSelectStatus: false,
    toggleOn: () => set({OnSelectStatus:true}),
    toggleOff: () => set({OnSelectStatus:false})

}))



export const usePixelSquareStore = create<PixelSquareStore>() ((set)=>({
    OnSelectStatus: true,
    toggleSelect: () => set(state=>({OnSelectStatus:!state.OnSelectStatus}))

}))